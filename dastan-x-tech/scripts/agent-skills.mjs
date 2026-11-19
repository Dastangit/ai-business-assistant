// Regenera public/.well-known/agent-skills/index.json con la huella sha256 de cada SKILL.md.
// Ejecutar tras editar una skill: node scripts/agent-skills.mjs
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const DIR = new URL('../public/.well-known/agent-skills/', import.meta.url);

export function construirIndice() {
  const skills = readdirSync(DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map(({ name }) => {
      const md = readFileSync(new URL(`${name}/SKILL.md`, DIR));
      const description = md.toString('utf8').match(/^description:\s*(.+)$/m)?.[1].trim();
      return {
        name,
        type: 'skill-md',
        description,
        url: `https://dastanxtech.com/.well-known/agent-skills/${name}/SKILL.md`,
        digest: `sha256:${createHash('sha256').update(md).digest('hex')}`,
      };
    });
  return { $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', skills };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  writeFileSync(new URL('index.json', DIR), JSON.stringify(construirIndice(), null, 2) + '\n');
  console.log('index.json actualizado');
}
