import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
const env = readFileSync('.env.local','utf-8');
const m = env.match(/^DATABASE_URL=(.*)$/m);
const url = m ? m[1].trim() : process.env.DATABASE_URL;
const sql = neon(url);
const rows = await sql`SELECT id, title, slug, timestamp, integrity, resonance, atmosphere, prompt, left(content, 80) AS content_start FROM pulses ORDER BY timestamp DESC LIMIT 6`;
console.log(JSON.stringify(rows, null, 2));
