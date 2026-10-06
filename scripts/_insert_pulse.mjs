import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';

const env = readFileSync('.env.local', 'utf-8');
const url = env.match(/^DATABASE_URL=(.*)$/m)[1].trim();
const sql = neon(url);

const draft = readFileSync('scripts/_draft_entry.md', 'utf-8').trim();
const content = draft;

const title = 'The OS That Lived in the Devices You Never Thought Had One';
const slug = 'the-os-that-lived-in-the-devices-you-never-thought-had-one';
const integrity = 'Research-Backed';
const resonance = 'TRON, BTRON, ITRON, Ken Sakamura, Masayoshi Son, USTR, Embedded Systems, Operating Systems, MITI, Japanese Computing, IEEE Milestone';
const atmosphere = 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 40%, #0a3a4a 70%, #2a4a3a 100%)';
const prompt = 'Cinematic wide shot of a sea of tiny embedded devices — circuit boards, microcontrollers, and camera sensors — laid out in a vast grid at dusk, lit from below by a faint teal-green kernel glow, with a single retro Japanese workstation at the center showing a hypermedia document with a ball and sloped surface, deep navy and emerald palette, shallow depth of field, 8k, photorealistic.';
const timestamp = new Date().toISOString();

// Find next id (max+1, as string, matching the existing pattern)
const maxRow = await sql`SELECT id FROM pulses ORDER BY length(id) DESC, id DESC LIMIT 1`;
const nextId = String(BigInt(maxRow[0].id) + 1n);

const rows = await sql`
  INSERT INTO pulses (id, title, content, integrity, resonance, atmosphere, prompt, timestamp, slug)
  VALUES (${nextId}, ${title}, ${content}, ${integrity}, ${resonance}, ${atmosphere}, ${prompt}, ${timestamp}, ${slug})
  RETURNING id, title, slug, timestamp, integrity, resonance, atmosphere, prompt, left(content, 80) AS content_start
`;
console.log('INSERTED:', JSON.stringify(rows[0], null, 2));
console.log('CONTENT_LENGTH:', content.length);
