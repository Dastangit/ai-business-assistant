# Documentación Técnica: Motor de Prospección Automatizada B2B - Dastan X-Tech

## Resumen del Proyecto
Construcción de un ecosistema híbrido para la detección, captura y calificación automática de prospectos de alto valor (Agencias de Marketing, Desarrollo y Publicidad[cite: 1]). El sistema rastreará negocios con deficiencias web (sitios lentos, sin web, o tecnología obsoleta) y los almacenará para gestionar su contacto.

---

## 1. Arquitectura y Progreso Actual (Completado)

*   **Definición Estratégica:** Enfoque comercial hacia agencias (B2B) para actuar como socio tecnológico de marca blanca (solucionando lógica de bases de datos, integración de APIs de IA y automatizaciones complejas)[cite: 1].
*   **Base de Datos (Bóveda de Datos):** 
    *   Tabla `agencias_prospectos` creada exitosamente en Supabase, aislada de la tabla de clientes regulares (`leads_chat`)[cite: 1].
    *   Columnas configuradas: `id`, `fecha`, `nombre_agencia`, `sitio_web`, `telefono`, `estado_calificacion`, `falla_detectada`.
*   **Seguridad:** Políticas RLS (Row Level Security) activadas mediante SQL para permitir la inserción ininterrumpida de leads provenientes de flujos externos.

---

## 2. Hoja de Ruta (Lo que falta por construir)

### Fase 1: El Motor de Extracción y Orquestación (Backend)
Esta fase evitará que los servidores de Vercel colapsen por tiempos de ejecución excedidos[cite: 1].
*   **Paso 1.1 - Configuración de Scraping:** Conectar una herramienta de extracción (ej. Apify o PhantomBuster) especializada en Google Maps para buscar iterativamente "Agencias" en EE. UU. y LATAM.
*   **Paso 1.2 - Flujo en Make.com:** 
    *   Crear un escenario en Make.com que reciba los datos crudos del scraper mediante un Webhook[cite: 1].
    *   Crear un filtro de enrutamiento: Separar a las agencias "Sin sitio web" de las que "Tienen sitio web"[cite: 1].
*   **Paso 1.3 - Inserción en Supabase:** Configurar el módulo de base de datos en Make para que escriba cada prospecto capturado directamente en la tabla `agencias_prospectos` de Supabase[cite: 1].

### Fase 2: Calificación Automatizada con IA
En lugar de auditar los sitios manualmente, la IA lo hará por nosotros.
*   **Paso 2.1 - Evaluación de URLs:** Dentro de Make.com, para las agencias que sí tienen web, enviar su URL a través de una petición a la API de un modelo de lenguaje (como Groq, Gemini o DeepSeek)[cite: 1].
*   **Paso 2.2 - Extracción Estructurada:** Instruir al modelo (Prompt Engineering) para que evalúe la arquitectura/velocidad del sitio y devuelva el diagnóstico obligatoriamente en formato JSON.
*   **Paso 2.3 - Alertas Internas:** Configurar el bot de Telegram de administración para que te notifique inmediatamente cuando se guarde una agencia con un diagnóstico crítico[cite: 1].

### Fase 3: El Panel de Administración (Frontend en Next.js)
Construcción de la sala de mando visual directamente en tu plataforma actual.
*   **Paso 3.1 - Nueva Ruta Privada:** Crear el archivo de interfaz `app/admin-leads/page.js` en tu repositorio.
*   **Paso 3.2 - Diseño UI Consistente:** Maquetar una tabla o tarjetas de prospectos aplicando las variables del sistema de diseño actual (fondo `#1C2624` y tipografía `#F5F4EF` para evitar fatiga visual)[cite: 1].
*   **Paso 3.3 - Lectura en Tiempo Real:** Importar el cliente de Supabase para que el panel haga un *fetch* y muestre la lista de prospectos actualizada en vivo[cite: 1].
*   **Paso 3.4 - Botones de Acción:** Añadir interactividad para marcar los leads como "Contactado", "Descartado" o "Pendiente".

### Fase 4: Outreach y Ejecución
*   **Paso 4.1 - Plantillas de Contacto:** Estructurar los correos en frío utilizando el JSON diagnóstico. 
*   **Paso 4.2 - Pitch B2B:** Redactar el guion comercial enfocado en ofrecer los widgets inteligentes, el ahorro de tiempo en automatizaciones y la estructuración de APIs avanzadas que las agencias no pueden hacer internamente[cite: 1].