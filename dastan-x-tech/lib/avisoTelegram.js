// Aviso a Telegram de cada lead nuevo de la web (bot propio de Dastan).
// Necesita TELEGRAM_BOT_TOKEN y TELEGRAM_CHAT_ID; si faltan o Telegram falla, no pasa nada:
// el lead ya está guardado en leads_web y se ve en /admin.
export async function avisarLeadTelegram({ nombre, web, whatsapp, origen }) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const soloDigitos = whatsapp.replace(/[^0-9]/g, '');
  // Texto plano (sin parse_mode) para no tener que escapar lo que escribe el cliente
  const texto = [
    '🔔 Nuevo lead en dastanxtech.com',
    '',
    `Nombre: ${nombre}`,
    `WhatsApp: ${whatsapp} → https://wa.me/${soloDigitos}`,
    `Web: ${web || '(no indicó)'}`,
    `Origen: ${origen || '(sin origen)'}`,
    '',
    'Panel: https://dastanxtech.com/admin',
  ].join('\n');

  try {
    const respuesta = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: texto, link_preview_options: { is_disabled: true } }),
      signal: AbortSignal.timeout(5000),
    });
    if (!respuesta.ok) console.error('Telegram rechazó el aviso del lead:', respuesta.status, await respuesta.text());
  } catch (error) {
    console.error('No se pudo avisar del lead por Telegram:', error);
  }
}
