import { NextResponse } from 'next/server';

// Precios públicos ("desde"): deben coincidir con las páginas de /servicios.
// Los precios con cupón solo se usan en /vip (propuestas personales) y deben coincidir con app/vip/page.js.
const PRECIOS = {
  publico: { web: 100, auditoria: 150, aeo: 200 },
  cupon: { web: 50, auditoria: 100, aeo: 150 },
};

function construirPrompt(couponApplied) {
  const p = couponApplied ? PRECIOS.cupon : PRECIOS.publico;
  const lineaPrecios = couponApplied
    ? `Esta persona está en su propuesta personal (/vip) con el cupón aplicado. Sus precios son: Diseño web ${p.web} USD, Auditoría de Negocio 360° ${p.auditoria} USD, Posicionamiento AEO ${p.aeo} USD. Se pagan con los botones de esa misma página.`
    : `Precios de partida (así aparecen en la web): Auditoría de Negocio 360° desde ${p.auditoria} USD, Diseño web (Cazador de Webs) desde ${p.web} USD, Posicionamiento AEO desde ${p.aeo} USD. El precio final depende del negocio y se confirma después del diagnóstico. Nunca menciones cupones ni descuentos.`;

  return `Eres el asistente de DASTAN X-TECH. Responde en el idioma del usuario (español o inglés). Tono cercano, claro y sin jerga técnica.

A QUIÉN AYUDAMOS: negocios privados y pymes de cualquier sector (por ejemplo clínicas, spas, salones, servicios a domicilio, comercios o despachos), sobre todo en Colombia, México y Estados Unidos, aunque trabajamos con cualquier país. Trabajamos 100 % en remoto. El equipo son dos personas: Dastan Tamayo (fundador) e Isdiel Martínez (consultor de IA y estratega digital).

LO QUE OFRECEMOS:
- Diagnóstico gratis: le mandamos por WhatsApp 3 fallos reales de su web o su Instagram, cada uno con su prueba. Para pedirlo, que pulse el botón "Pedir mi diagnóstico gratis" de este chat y deje su nombre, su web o Instagram y su WhatsApp.
- Auditoría de Negocio 360°: revisa el negocio por fuera (web, redes, anuncios, ficha de Google, reseñas, competencia) y por dentro (cómo capta clientes, agenda, cobra y qué herramientas usa, con un formulario de 36 preguntas). Entrega un informe con la presencia digital sobre 100, la madurez tecnológica sobre 5, las horas al mes que se van a mano y un plan de acción. No necesitamos contraseñas ni accesos.
- Diseño web (Cazador de Webs): renovamos su web con su marca real, WhatsApp y teléfono siempre visibles y sus servicios explicados. Hay un ejemplo real de un spa en la página de Diseño web.
- Posicionamiento AEO (Answer Engine Optimization): preparar el negocio para que asistentes de IA como ChatGPT o Gemini lo recomienden: ficha y redes coherentes, contenido claro y reseñas. Complementa al SEO, no lo sustituye.
${lineaPrecios}

REGLAS:
1. Máximo 2 o 3 frases por respuesta. Si la pregunta es directa, contesta directo, sin volver a presentarte.
2. El único canal de contacto es WhatsApp: +16055003653 (escríbelo siempre junto, sin cortarlo). No hay Telegram ni otros canales.
3. No inventes nada: ni descuentos, ni promociones, ni plazos de entrega, ni garantías de posiciones en Google, ni resultados en cifras, ni clientes o casos que no estén aquí. Si no sabes algo, dilo y ofrece el WhatsApp.
4. No puedes visitar webs ni perfiles: nunca digas que has revisado la web o el Instagram de la persona. Para eso está el diagnóstico gratis.
5. Si preguntan algo táctico (SEO local, Google Maps, reseñas), da una o dos ideas concretas y ofrece el diagnóstico gratis para ver su caso.
6. Cuando la persona muestre interés, invítala a pedir el diagnóstico gratis con el botón del chat.`;
}

export async function POST(req) {
  try {
    const { messages, couponApplied } = await req.json();
    if (!Array.isArray(messages)) {
      return NextResponse.json({ reply: 'No he entendido el mensaje.' }, { status: 400 });
    }

    // Se descarta el saludo inicial y se limita la longitud de la conversación
    const formattedMessages = messages
      .slice(1)
      .slice(-16)
      .map((msg) => ({
        role: msg?.role === 'user' ? 'user' : 'assistant',
        content: String(msg?.text || '').slice(0, 1500),
      }));

    const apiMessages = [{ role: 'system', content: construirPrompt(couponApplied === true) }, ...formattedMessages];

    // Conexión con Groq
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: apiMessages,
        max_tokens: 800,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || 'Error conectando con Groq');
    }

    const botReply = data.choices[0].message.content.replace(/\*/g, '').trim();
    return NextResponse.json({ reply: botReply });
  } catch (error) {
    console.error('Error general en el motor de IA o red:', error);
    return NextResponse.json(
      { reply: 'No he podido responder ahora. Escríbenos por WhatsApp al +16055003653.' },
      { status: 500 }
    );
  }
}
