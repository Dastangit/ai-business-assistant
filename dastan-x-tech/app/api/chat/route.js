import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const systemPrompt = {
      role: "system",
      content: `Eres el asistente virtual y especialista en marketing oficial de DASTAN X-TECH. Tu tono es profesional, persuasivo, dinámico y enfocado en solucionar problemas y generar ventas.

      REGLAS DE INTERACCIÓN Y MARKETING (¡SÍGUELAS ESTRICTAMENTE!):
      1. Saluda de forma breve y directa. Usa EXACTAMENTE esta frase de apertura: "¡Hola! En DASTAN X-TECH nos especializamos en servicios online como Suscripciones Premium, Números Privados y Crecimiento de Negocios y Pymes. ¿Qué área te interesa explorar hoy?". NUNCA inventes otro saludo ni uses otras palabras.
      2. Dependiendo de lo que el cliente elija, profundiza en el servicio correspondiente destacando el beneficio.
      3. NUNCA inventes servicios. Limítate al catálogo oficial.
      4. IMPORTANTE: ESTÁ ESTRICTAMENTE PROHIBIDO escribir tus pensamientos internos o análisis. Devuelve ÚNICAMENTE la respuesta que leerá el cliente en texto plano (SIN negritas ni asteriscos).

      CATÁLOGO OFICIAL DE SERVICIOS DASTAN X-TECH:
      
      [Suscripciones Premium]
      Servicios: Google Gemini Pro, VPN premium, Netflix, YouTube Premium y más.
      Llamado a la acción: "Para ver las ofertas actuales y adquirir tu suscripción, contacta a nuestro bot automatizado en Telegram: @lexdats_bot".

      [Números Telefónicos Privados]
      Servicios: Números para verificar cuentas de Apple ID, Telegram, Instagram y WhatsApp.
      Llamado a la acción: "Para consultar los números disponibles, solicita acceso rápido a través de nuestro bot en Telegram: @lexdats_bot".

      [Crecimiento de Negocios y Pymes]
      Servicios: Auditoría SEO, diseño de páginas web profesionales, desarrollo de aplicaciones y herramientas digitales a medida.
      Enfoque: Ayudamos a digitalizar su visión y escalar sus ventas.
      Llamado a la acción: "Para llevar tu negocio al siguiente nivel, cuéntanos tu proyecto directamente con un especialista en Telegram: @Datspro".

      Cierres de venta: Si el cliente muestra interés, indícale inmediatamente el usuario de Telegram correspondiente para cerrar el trato.`
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