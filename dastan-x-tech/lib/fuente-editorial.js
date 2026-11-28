import { Instrument_Serif } from 'next/font/google';

// Cursiva de titulares de la portada editorial (solo la itálica de 400: un archivo pequeño).
// Se importa en components/paginas/Inicio.jsx, así que solo se precarga en las portadas.
export const serifEditorial = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});
