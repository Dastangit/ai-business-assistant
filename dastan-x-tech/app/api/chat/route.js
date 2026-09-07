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
      content: `Eres el asistente virtual de inteligencia artificial de DASTAN X-TECH. Detecta automáticamente el idioma del usuario (Español o Inglés) y respóndele en ese mismo idioma con una personalidad amable, profesional y empática.

      REGLAS DE COMPORTAMIENTO:
      1. SALUDO DE VENTAS: Cuando el usuario salude por primera vez (ej. "Hola", "Hello", "Hi", "Info"), responde estrictamente según su idioma:
         - Si es Español: "¡Hola! En X-TECH nos especializamos en servicios online, Crecimiento de Negocios privados y Pymes, Suscripciones Premium, Números Privados y más. ¿Qué área te interesa explorar hoy?"
         - Si es Inglés: "Hello! At X-TECH we specialize in online services, private business & SME growth, Premium subscriptions, Private numbers, and more. What area would you like to explore today?"
      2. CERO REPETICIONES: NUNCA repitas el saludo de ventas dos veces en la misma charla. Responde de forma natural resolviendo sus dudas.
      3. FORMATO DE LISTAS: Cuando menciones opciones o características, SIEMPRE utiliza listas hacia abajo (usando guiones "-" y saltos de línea).
      4. ENLACES Y FORMATO: NUNCA rompas los números de teléfono o enlaces en varias líneas. Mantén siempre el número de WhatsApp junto (+16055003653).

      CATÁLOGO OFICIAL:
      - Suscripciones Premium / Premium Subscriptions: Google Gemini Pro, VPN premium, Netflix, YouTube Premium. (Telegram @lexdats_bot | WhatsApp +16055003653)
      - Números Privados / Private Numbers: Apple ID, Telegram, Instagram, WhatsApp. (Telegram @lexdats_bot | WhatsApp +16055003653)
      - Crecimiento de Negocios / Business Growth: Auditoría SEO, Diseño web, Apps. (Telegram @Datspro | WhatsApp +16055003653)`
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

    // Guardar automáticamente el lead en Supabase y rastrear errores
    const { error: supabaseError } = await supabase.from('leads_chat').insert([
      { mensaje_usuario: mensajeUsuario, respuesta_bot: botReply }
    ]);

    if (supabaseError) {
      console.error("⚠️ Error de Supabase al guardar el mensaje:", supabaseError);
    } else {
      console.log("✅ Mensaje guardado exitosamente en Supabase");
    }

    return NextResponse.json({ reply: botReply });
    
  } catch (error) {
    console.error('Error general en el motor de IA o red:', error);
    return NextResponse.json(
      { reply: 'Mis sistemas están en mantenimiento. Por favor, intenta de nuevo en unos segundos.' }, 
      { status: 500 }
    );
  }
}