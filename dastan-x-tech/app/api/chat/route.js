import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req) {
  try {
    // Limpiamos espacios, comillas accidentales y forzamos el https://
    let rawUrl = (process.env.SUPABASE_URL || 'https://placeholder.supabase.co').replace(/['"]/g, '').trim();
    if (!rawUrl.startsWith('http')) rawUrl = `https://${rawUrl}`;
    const supabaseKey = (process.env.SUPABASE_ANON_KEY || 'placeholder').replace(/['"]/g, '').trim();
    const supabase = createClient(rawUrl, supabaseKey);

    const { messages } = await req.json();
    const mensajeUsuario = messages[messages.length - 1].text;

    const systemPrompt = {
      role: "system",
      content: `Eres el asistente virtual de inteligencia artificial de DASTAN X-TECH. Tu personalidad es amable, profesional, empática y sumamente natural.

      REGLAS DE COMPORTAMIENTO:
      1. SALUDO DE VENTAS: Cuando el cliente te escriba por primera vez (ej. "Hola", "Buenas", "Info"), tu respuesta EXACTA debe ser: "¡Hola! En X-TECH nos especializamos en servicios online, Crecimiento de Negocios privados y Pymes, Suscripciones Premium, Números Privados y más. ¿Qué área te interesa explorar hoy?"
      2. CERO REPETICIONES: NUNCA repitas el saludo de ventas dos veces en la misma charla. Si el cliente sigue preguntando, respóndele de forma natural y conversacional resolviendo sus dudas.
      3. FORMATO DE LISTAS: Cuando menciones opciones o características de un servicio, SIEMPRE utiliza listas hacia abajo (usando guiones "-" y saltos de línea) para que sea fácil de leer.
      4. Cierres de venta: Cuando el cliente muestre interés, invítalo sutilmente a contactar a los enlaces correspondientes.

      TU CATÁLOGO OFICIAL (No inventes servicios fuera de estos):
      
      - Suscripciones Premium: Incluye Google Gemini Pro, VPN premium, Netflix, YouTube Premium. (Dirigir a Telegram @lexdats_bot o WhatsApp +16055003653)
      - Números Privados: Números para verificar cuentas de Apple ID, Telegram, Instagram y WhatsApp. (Dirigir a Telegram @lexdats_bot o WhatsApp +16055003653)
      - Crecimiento de Negocios y Pymes: Incluye servicios como Auditoría SEO, Diseño de páginas web profesionales y Desarrollo de aplicaciones. (Dirigir a Telegram @Datspro o WhatsApp +16055003653)`
    };

    const formattedMessages = messages.slice(1).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));

    const apiMessages = [systemPrompt, ...formattedMessages];

    // Conexión con Groq
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b", 
        messages: apiMessages,
        max_tokens: 600 
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Error conectando con Groq");
    }

    let aiResponse = data.choices[0].message.content;
    aiResponse = aiResponse.replace(/\*/g, '');
    const botReply = aiResponse.trim();

    // Guardar automáticamente el lead en Supabase
    await supabase.from('leads_chat').insert([
      { mensaje_usuario: mensajeUsuario, respuesta_bot: botReply }
    ]);

    return NextResponse.json({ reply: botReply });
    
  } catch (error) {
    console.error('Error en el motor de IA o Supabase:', error);
    return NextResponse.json(
      { reply: 'Mis sistemas están en mantenimiento. Por favor, intenta de nuevo en unos segundos.' }, 
      { status: 500 }
    );
  }
}