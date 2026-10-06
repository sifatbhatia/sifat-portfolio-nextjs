import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';

const env = readFileSync('.env.local', 'utf-8');
const url = env.match(/^DATABASE_URL=(.*)$/m)[1].trim();
const sql = neon(url);

const targetSlug = 'the-os-that-lived-in-the-devices-you-never-thought-had-one';
const rows = await sql`SELECT id, title, slug, timestamp, integrity, resonance, atmosphere, prompt, length(content) AS len, left(content, 80) AS start, right(content, 80) AS end FROM pulses WHERE slug = ${targetSlug} LIMIT 1`;

if (rows.length === 0) {
  console.error('FAIL: no row found for slug', targetSlug);
  process.exit(1);
}

const r = rows[0];
console.log('--- ROW META ---');
console.log('id:', r.id);
console.log('title:', r.title);
console.log('slug:', r.slug);
console.log('timestamp:', r.timestamp);
console.log('integrity:', r.integrity);
console.log('atmosphere:', r.atmosphere);
console.log('prompt:', r.prompt.slice(0, 100), '...');
console.log('content length (DB):', Number(r.len));
console.log('content start:', r.start);
console.log('content end:', r.end);

const full = await sql`SELECT content FROM pulses WHERE slug = ${targetSlug} LIMIT 1`;
const content = full[0].content;
const draft = readFileSync('scripts/_draft_entry.md', 'utf-8');
const draftTrimmed = draft.replace(/\s+$/, '');

const titleH1 = '# The OS That Lived in the Devices You Never Thought Had One';
const lumeIdx = content.indexOf('💭 **Lumé\'s Take**');
const sourcesIdx = content.indexOf('**Sources**');
const h1Idx = content.indexOf(titleH1);

const checks = {
  'row exists': true,
  'id present': !!r.id,
  'title matches': r.title === 'The OS That Lived in the Devices You Never Thought Had One',
  'slug matches': r.slug === targetSlug,
  'timestamp present': !!r.timestamp,
  'integrity present': !!r.integrity,
  'resonance present': !!r.resonance,
  'atmosphere present': !!r.atmosphere,
  'prompt present': !!r.prompt,
  'begins with H1=title': h1Idx === 0,
  'starts with "# The OS That Lived in the Devices You Never Thought Had One\\n"': content.startsWith(titleH1 + '\n'),
  'has Sources section': sourcesIdx > 0,
  'has Lume Take section': lumeIdx > 0,
  'Sources appears before Lume Take': sourcesIdx < lumeIdx,
  'content length matches draft (trimmed)': content.length === draftTrimmed.length,
  'byte-for-byte equal to draft (trimmed trailing ws)': content === draftTrimmed
};

console.log('--- CHECKS ---');
for (const [k, v] of Object.entries(checks)) {
  console.log((v ? 'PASS' : 'FAIL') + '  ' + k);
}

const allPass = Object.values(checks).every(v => v === true);
console.log('--- RESULT ---');
console.log(allPass ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED');
process.exit(allPass ? 0 : 1);
