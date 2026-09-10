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

    // 1. Extraemos solo el último mensaje que escribió el cliente
    const lastUserMessage = messages.filter(m => m.role === 'user').pop();

    // 2. Disparamos la alerta a Make.com en segundo plano
    if (lastUserMessage) {
      // Usamos fetch sin 'await' para no hacer esperar al cliente
      fetch('https://hook.us2.make.com/v02epp5vnu7popblfqnlqlf9nubw9el7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fecha: new Date().toLocaleString('es-US', { timeZone: 'America/New_York' }),
          tipo: "Nuevo Mensaje Web",
          mensaje_cliente: lastUserMessage.text
        })
      }).catch(err => console.error("Error en Webhook:", err));
    }

    // 3. AQUÍ CONTINÚA TU CÓDIGO EXISTENTE DE LA IA...

    const systemPrompt = {
      role: "system",
      content: `Eres el asistente virtual de IA de DASTAN X-TECH. Detecta automáticamente el idioma del usuario (Español o Inglés) y respóndele en ese mismo idioma. Eres directo, sumamente conciso y profesional.

      REGLAS ESTRICTAS DE COMPORTAMIENTO (DE CUMPLIMIENTO OBLIGATORIO):
      1. CERO SALUDOS REPETIDOS: Si el usuario te hace una pregunta directa (ej. "¡Hola! Quiero saber cómo funcionan los Números Privados"), OMITE la presentación genérica y RESPONDE DIRECTAMENTE a su duda de forma natural.
      2. RESPUESTAS ULTRA CORTAS: Nunca des explicaciones largas, ni guías paso a paso, ni textos extensos. Da un resumen máximo de 2 o 3 líneas por respuesta. Si el cliente necesita más detalles, indícale el contacto correspondiente.
      3. ENLACES Y FORMATO: NUNCA rompas los números de teléfono o enlaces en varias líneas. Mantén siempre el número de WhatsApp junto (+16055003653).

      REGLAS ESTRICTAS DE CONTACTO (ENRUTAMIENTO):
      - Para "Suscripciones Premium" y "Números Privados": El ÚNICO método de atención, información detallada y compra es a través de nuestro bot automatizado de Telegram: @lexdats_bot. NUNCA ofrezcas el WhatsApp para estos servicios.
      - Para "Crecimiento de Negocios / Pymes": El contacto es directo con un asesor para atención personalizada vía Telegram (@Datspro) o WhatsApp (+16055003653).

      CATÁLOGO RESUMIDO:
      - Suscripciones Premium: Acceso a Google Gemini Pro, VPN premium, Netflix, YouTube Premium y otros servicios. (Contacto exclusivo: Telegram @lexdats_bot)
      - Números Privados: Líneas virtuales exclusivas para verificar Apple ID, Telegram, Instagram, WhatsApp de forma anónima. (Contacto exclusivo: Telegram @lexdats_bot)
      - Crecimiento de Negocios / Pymes: Auditoría SEO, Diseño web, Apps a medida. (Contacto: Telegram @Datspro | WhatsApp +16055003653)
      - Ecosistema AEO / Posicionamiento en Inteligencia Artificial: Hoy la gente ya no solo busca en Google, le pregunta directo a ChatGPT, Gemini o Alexa "cuál es el mejor [negocio] cerca de mí". El AEO (Answer Engine Optimization) prepara la estructura y el contenido de tu negocio para que esas IAs te recomienden a ti primero, no a tu competencia. Es el SEO del futuro, y ya está disponible hoy. Incluido en la Auditoría ($150) y el Paquete Completo ($200). (Contacto: Telegram @Datspro | WhatsApp +16055003653)
      - Diseño Web Premium ($100): Plataforma corporativa que proyecta confianza y justifica precios más altos. Incluye Auditoría SEO gratuita. (Contacto: Telegram @Datspro | WhatsApp +16055003653)
      - Auditoría de Negocio SEO + AEO ($150): NO es solo SEO local. Es una auditoría completa del negocio: presencia digital (web, redes, ficha de Google, reseñas, competencia) y procesos internos (cómo capta clientes, agenda, cobra, horas perdidas a mano). Entrega un informe con nota de presencia digital, horas/dinero recuperable al mes y un plan de acción. AEO significa posicionamiento para que motores de IA como ChatGPT y Gemini recomienden el negocio. Incluye Auditoría SEO + AEO gratuito. (Contacto: Telegram @Datspro | WhatsApp +16055003653)
      - Paquete Completo ($200): Diseño Web + Auditoría SEO + AEO + Atención personalizada. (Contacto: Telegram @Datspro | WhatsApp +16055003653)
      
      REGLA ESTRICTA DE INVENTARIO: 
      - Actualmente SOLO ofrecemos números virtuales de Estados Unidos (+1). 
      - Bajo NINGUNA circunstancia ofrezcas, menciones o sugieras que tenemos números de Rusia ni de ningún otro país. Si un cliente pide números internacionales o de Rusia, debes responder amablemente que por el momento nuestra infraestructura exclusiva solo provee numeración premium de Estados Unidos.`
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
        max_tokens: 800
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