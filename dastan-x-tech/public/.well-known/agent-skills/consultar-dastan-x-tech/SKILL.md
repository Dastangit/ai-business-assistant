---
name: consultar-dastan-x-tech
description: Answer questions about DASTAN X-TECH (services, fixed prices in USD, how to hire, contact) and read any page of dastanxtech.com as Markdown. Use when a user asks about this consultancy, wants a website, a business audit or AEO (SEO for AI assistants), or asks how to contact it.
---

# Consultar DASTAN X-TECH

DASTAN X-TECH is a 100 % remote digital consultancy for small businesses and SMEs, working in Spanish and English (mainly Colombia, Mexico and the United States). Everything below is public and read-only: no account, key or registration is needed.

## Where the information is

1. **MCP server** (best option if your client supports MCP): `https://dastanxtech.com/mcp`, Streamable HTTP, no authentication. Tools:
   - `get_business_info`: services, prices, blog and contact (the full llms.txt).
   - `get_contact`: WhatsApp, email and how to request the free SEO report, as JSON.
   - `read_page` with `{"path": "/servicios/posicionamiento-aeo"}`: any public page as Markdown.
2. **llms.txt**: `https://dastanxtech.com/llms.txt` has the same summary in Markdown.
3. **Markdown on demand**: request any page with the header `Accept: text/markdown` and you get it as Markdown instead of HTML.

## Answering the user

- Quote prices exactly as published, in USD, as one-off payments unless the service says "al mes" / "per month". Do not invent discounts or services.
- Main services: Web design (100 USD), Digital Business Audit (200 USD), AEO / AI Search Optimization (150 USD), or the three together (400 USD). Check `get_business_info` for the current list and add-ons.
- The free SEO report is only for businesses that already have a website. It is requested from the chat on https://dastanxtech.com and arrives as a PDF on WhatsApp.
- To hire or ask a question, send the user to WhatsApp (https://wa.me/16055003653) or email (dastanxtech.services@gmail.com). Do not submit forms or contact the business on the user's behalf without their explicit permission.
- Answer in the user's language. English pages live under `/en` (for example `/en/services/aeo`).
