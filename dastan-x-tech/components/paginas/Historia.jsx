import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ruta } from '@/lib/i18n';
import fotoDastan from '@/public/equipo/dastan-tamayo.jpg';
import fotoIsdiel from '@/public/equipo/isdiel-martinez.jpg';

// Nuestra historia (/nuestra-historia, /en/our-story): el diseño vive aquí y el texto en contenido/historia.<lang>.js.
// Mismo formato de lectura que las páginas legales; las fotos y los nombres salen de la portada (t.equipo de inicio)
const p = { lineHeight: '1.8', marginBottom: '1rem', fontSize: '1.1rem' };

export default function Historia({ t, equipo, lang }) {
  const fotos = [fotoDastan, fotoIsdiel];
  return (
    <div className="theme-light">
      <SiteHeader tone="light" lang={lang} />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 5% 2rem' }}>
        <p className="label-mono" style={{ marginBottom: '1rem' }}>{t.etiqueta}</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.4rem)', fontWeight: '700', color: 'var(--ink)', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          {t.titulo}
        </h1>
        {t.parrafos.map((parrafo, i) => <p key={i} style={p}>{parrafo}</p>)}

        <div className="equipo equipo--par">
          {equipo.map((persona, i) => (
            <figure key={persona.nombre} className="equipo-ficha">
              <Image src={fotos[i]} alt={persona.alt} placeholder="blur" sizes="(max-width: 640px) 50vw, 340px" className="equipo-foto" />
              <figcaption>
                <strong>{persona.nombre}</strong>
                <span>{persona.rol}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p style={{ marginTop: '2.5rem' }}>
          <Link href={ruta('inicio', lang)} className="text-link">{t.volver}</Link>
        </p>
      </article>

      <SiteFooter tone="light" lang={lang} />
    </div>
  );
}
