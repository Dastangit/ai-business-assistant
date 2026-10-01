import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { REVISIONES } from '@/lib/revisiones';

// Aviso legal y de privacidad. Describe el tratamiento real de esta web: si cambia lo que recoge
// el chat, los proveedores o la analítica, hay que actualizar este texto y su fecha en lib/revisiones.js.
const h2 = { fontSize: '1.4rem', fontWeight: '600', color: 'var(--ink)', letterSpacing: '-0.01em', marginTop: '2.5rem', marginBottom: '1rem' };
const p = { lineHeight: '1.8', marginBottom: '1rem' };
const lista = { lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '1.25rem' };
const fecha = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(REVISIONES['/privacidad']));

export default function Privacidad() {
  return (
    <div className="theme-light">
      <SiteHeader tone="light" />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>
          Última actualización: <time dateTime={REVISIONES['/privacidad']}>{fecha}</time>
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Aviso legal y de privacidad
        </h1>
        <p style={{ ...p, fontSize: '1.1rem' }}>
          Aquí explicamos quién está detrás de esta web, qué datos tuyos recoge, para qué los usamos y cómo puedes pedir que los corrijamos o los borremos.
        </p>

        <h2 style={h2}>¿Quién es el responsable?</h2>
        <p style={p}>
          DASTAN X-TECH es el nombre comercial de <strong>Dastan Tamayo</strong>, persona física con domicilio en Puebla, Puebla, México, responsable de esta web y del tratamiento de tus datos.
        </p>
        <ul style={lista}>
          <li>Correo: <a href="mailto:xtech.ai.development@gmail.com" className="text-link">xtech.ai.development@gmail.com</a></li>
          <li>WhatsApp: <a href="https://wa.me/16055003653" className="text-link">+1 605 500 3653</a></li>
        </ul>

        <h2 style={h2}>¿Qué datos recogemos?</h2>
        <p style={p}>Solo los que tú nos das al usar el chat de esta web:</p>
        <ul style={lista}>
          <li>Tu nombre, tu página web o tu usuario de Instagram y tu número de WhatsApp, cuando rellenas el formulario del chat.</li>
          <li>Los mensajes que escribes en el chat, para poder responderte y entender qué necesitas.</li>
        </ul>
        <p style={p}>
          No pedimos datos sensibles. Para saber cuántas personas visitan la web usamos la analítica de Vercel, que no usa cookies ni nos dice quién eres: solo da cifras agregadas de visitas.
        </p>

        <h2 style={h2}>¿Para qué los usamos?</h2>
        <ul style={lista}>
          <li>Responder a tus preguntas en el chat.</li>
          <li>Preparar y enviarte por WhatsApp lo que nos pidas, como el diagnóstico de tu web.</li>
          <li>Contactarte sobre el servicio por el que preguntaste.</li>
        </ul>
        <p style={p}>No vendemos tus datos ni los usamos para publicidad de terceros.</p>

        <h2 style={h2}>¿Con quién se tratan?</h2>
        <p style={p}>Para que la web funcione usamos estos proveedores, que tratan los datos por encargo nuestro y solo para ese fin:</p>
        <ul style={lista}>
          <li><strong>Supabase</strong>: guarda los datos del formulario del chat.</li>
          <li><strong>Groq</strong>: procesa los mensajes del chat para generar las respuestas del asistente de IA.</li>
          <li><strong>Vercel</strong>: aloja la web y mide las visitas sin cookies.</li>
        </ul>
        <p style={p}>Sus servidores pueden estar fuera de México, por ejemplo en Estados Unidos.</p>

        <h2 style={h2}>¿Cuánto tiempo los guardamos?</h2>
        <p style={p}>
          Mientras los necesitemos para atenderte o mientras dure la relación de trabajo contigo, y hasta que nos pidas que los borremos.
        </p>

        <h2 style={h2}>¿Cómo ejerces tus derechos?</h2>
        <p style={p}>
          Puedes pedir en cualquier momento acceder a tus datos, corregirlos, borrarlos u oponerte a que los usemos, y retirar tu consentimiento. Escríbenos al correo de arriba con tu nombre, el número de WhatsApp que nos diste y qué quieres hacer. Te responderemos por el mismo medio. Estos derechos valen también si nos escribes desde Colombia, Estados Unidos o cualquier otro país.
        </p>

        <h2 style={h2}>Cambios en este aviso</h2>
        <p style={p}>
          Si cambiamos la forma de tratar tus datos, actualizaremos esta página y su fecha de última actualización.
        </p>
      </article>

      <SiteFooter tone="light" />
    </div>
  );
}
