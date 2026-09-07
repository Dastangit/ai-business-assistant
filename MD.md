# Documentación Técnica: Asistente IA DASTAN X-TECH
# ai-business-assistant
AI-powered business assistant using LLMs, RAG and automation workflows.

## Arquitectura y Progreso Actual (Completado)
* **Frontend Estabilizado:** Componente React en Next.js con diseño UI de alto contraste (tipografía en #F5F4EF y acentos oscuros en #1C2624) y estética neón. 
* **UX Conversacional:** Implementación de un flujo de embudo. Se muestra un saludo inicial corto para romper el hielo, seguido del pitch de ventas completo una vez que el usuario interactúa.
* **Motor IA (Groq):** Conexión segura en el backend utilizando el modelo `openai/gpt-oss-20b` con prompt estructurado para ventas.
* **Base de Datos (Supabase):** Tabla `leads_chat` aprovisionada con políticas de seguridad RLS para permitir inserciones anónimas desde el servidor.
* **Enlaces Inteligentes:** Lógica de renderizado para convertir nombres de usuario de Telegram y números de WhatsApp en hipervínculos interactivos dentro del chat.

## Bloqueo Activo (Resolución en curso)
* **Fallo Silencioso de Inserción:** El sistema consulta correctamente a la IA, pero Supabase rechaza silenciosamente el guardado del historial.
* **Depuración Activa:** Se inyectó un rastreador de errores (`console.error`) en Vercel para identificar el motivo exacto del bloqueo en la base de datos.

## Hoja de Ruta (Próximos Pasos)
* **Fase 1 - Estabilización Backend:** Confirmar la captura de logs en Vercel, aplicar la corrección a la tabla `leads_chat` y validar el guardado exitoso de conversaciones.
* **Fase 2 - Expansión UI y Marketing (Landing Page):** Transformar la interfaz de pantalla única en una experiencia de scroll vertical. Se implementará una cuadrícula de tarjetas (Cards) de servicios (Suscripciones, Desarrollo, Auditoría SEO). Estas tarjetas utilizarán animaciones de aparición progresiva al hacer scroll y mantendrán las variables de paleta actuales (#F5F4EF, #1C2624).
* **Fase 3 - Captura de Leads Estratégica:** Añadir llamados a la acción (CTAs) interactivos dentro de las nuevas tarjetas de marketing. Al hacer clic, estos botones abrirán automáticamente el widget de chat con un mensaje predefinido o solicitarán el nombre del usuario.
* **Fase 4 - Orquestación de Alertas:** Integrar la captura de datos con plataformas de automatización (n8n o Make.com) para disparar notificaciones en tiempo real hacia canales de Telegram cuando un prospecto de alto valor navegue las tarjetas o interactúe con la IA.