# DASTAN X-TECH auth.md

Agent access and registration for dastanxtech.com.

## Audience

AI agents and assistants (ChatGPT, Claude, Gemini, Perplexity, custom agents) that want to read information about DASTAN X-TECH on behalf of a user.

## Registration

No registration is required. All agent-facing resources are public and read-only, so there is no registration endpoint, no account and no credential to obtain.

## Supported methods

- **Anonymous access** (the only method): call the resources below without credentials. Do not send API keys, tokens or cookies; they are ignored.

## Resources

| Resource | URL | Auth |
|---|---|---|
| MCP server (Streamable HTTP) | https://dastanxtech.com/mcp | none |
| MCP Server Card | https://dastanxtech.com/.well-known/mcp/server-card.json | none |
| API catalog (RFC 9727) | https://dastanxtech.com/.well-known/api-catalog | none |
| Agent skills | https://dastanxtech.com/.well-known/agent-skills/index.json | none |
| Site summary | https://dastanxtech.com/llms.txt | none |
| Any page as Markdown | any URL with `Accept: text/markdown` | none |

## Credential use

None. If a future service needs credentials (for example, acting inside a client's account), it will be published here and in OAuth metadata under `/.well-known/` before it exists. We never ask a business for its passwords.

## Contact

dastanxtech.services@gmail.com · WhatsApp +1 605-500-3653
