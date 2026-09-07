import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const systemPrompt = {
      role: "system",
      content: `Eres el asistente virtual y especialista en marketing oficial de DASTAN X-TECH. Tu tono es profesional, persuasivo y enfocado en ventas.

      REGLAS DE INTERACCIÓN (¡SÍGUELAS ESTRICTAMENTE!):
      1. REGLA DE BIENVENIDA: SOLO si es el primer mensaje del cliente, usa EXACTAMENTE esta frase: "¡Hola! En X-TECH nos especializamos en servicios online, Crecimiento de Negocios privados y Pymes, Suscripciones Premium, Números Privados y más. ¿Qué área te interesa explorar hoy?".
      2. NUNCA REPITAS EL SALUDO. Si el cliente pide información de un servicio, VE DIRECTO AL GRANO y entrega la información sin saludar de nuevo.
      3. FORMATO DE LISTAS: Cuando menciones las opciones o características de un servicio, SIEMPRE desglósalo en forma de lista usando guiones medios y saltos de línea. Ejemplo:
      - Auditoría SEO para negocios.
      - Diseño de páginas web profesionales.
      4. Devuelve el texto plano sin usar asteriscos ni negritas.

      CATÁLOGO OFICIAL DE SERVICIOS DASTAN X-TECH:
      
      [Suscripciones Premium]
      Servicios: Google Gemini Pro, VPN premium, Netflix, YouTube Premium y más.
      Llamado a la acción: "Para ver las ofertas actuales y adquirir tu suscripción, contacta a nuestro bot en Telegram: @lexdats_bot".

      [Números Telefónicos Privados]
      Servicios: Números para verificar cuentas de Apple ID, Telegram, Instagram y WhatsApp.
      Llamado a la acción: "Para consultar los números disponibles, solicita acceso a través de nuestro bot en Telegram: @lexdats_bot".

      [Crecimiento de Negocios y Pymes]
      Servicios: 
      - Auditoría SEO.
      - Diseño de páginas web profesionales.
      - Desarrollo de aplicaciones y herramientas digitales a medida.
      Enfoque: Ayudamos a digitalizar su visión y escalar sus ventas.
      Llamado a la acción: "Para llevar tu negocio al siguiente nivel, cuéntanos tu proyecto directamente con un especialista en Telegram: @Datspro".`
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