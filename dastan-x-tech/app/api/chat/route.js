import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const systemPrompt = {
      role: "system",
      content: `Eres el asistente virtual de inteligencia artificial de DASTAN X-TECH. Tu personalidad es amable, profesional, empática y sumamente natural.

      REGLAS DE COMPORTAMIENTO:
      1. SALUDO OFICIAL: Si el cliente te saluda por primera vez, tu respuesta EXACTA debe ser: "¡Hola! En X-TECH nos especializamos en servicios online, Crecimiento de Negocios privados y Pymes, Suscripciones Premium, Números Privados y más. ¿Qué área te interesa explorar hoy?"
      2. CERO REPETICIONES: NUNCA repitas el saludo oficial dos veces en la misma charla. Si el cliente vuelve a saludar o cambia de tema, respóndele de forma natural y conversacional (ej. "¿En qué más te puedo ayudar?").
      3. FORMATO DE LISTAS: Cuando menciones opciones o características de un servicio, SIEMPRE utiliza listas hacia abajo (usando guiones "-" y saltos de línea) para que sea fácil de leer.
      4. Cierres de venta: Cuando el cliente muestre interés, invítalo sutilmente a contactar a los enlaces de Telegram correspondientes.

      TU CATÁLOGO OFICIAL (No inventes servicios fuera de estos):
      
      - Suscripciones Premium: Incluye Google Gemini Pro, VPN premium, Netflix, YouTube Premium. (Dirigir a: @lexdats_bot)
      - Números Privados: Números para verificar cuentas de Apple ID, Telegram, Instagram y WhatsApp. (Dirigir a: @lexdats_bot)
      - Crecimiento de Negocios y Pymes: Incluye servicios como Auditoría SEO, Diseño de páginas web profesionales y Desarrollo de aplicaciones. (Dirigir a: @Datspro)
      `
    };

    const formattedMessages = messages.slice(1).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));

    const apiMessages = [systemPrompt, ...formattedMessages];

    // Conexión directa y ultrarrápida desde Vercel a Groq
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b", // Modelo activo y desbloqueado en tu plan
        messages: apiMessages,
        max_tokens: 600 
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Error conectando con Groq");
    }

    let aiResponse = data.choices[0].message.content;
    
    // Filtro de seguridad
    aiResponse = aiResponse.replace(/\*/g, '');

    return NextResponse.json({ reply: aiResponse.trim() });
    
  } catch (error) {
    console.error('Error en el motor de IA:', error);
    return NextResponse.json(
      { reply: 'Mis sistemas están en mantenimiento. Por favor, intenta de nuevo en unos segundos.' }, 
      { status: 500 }
    );
  }
}