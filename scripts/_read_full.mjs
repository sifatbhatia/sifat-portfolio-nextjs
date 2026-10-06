import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
const env = readFileSync('.env.local','utf-8');
const m = env.match(/^DATABASE_URL=(.*)$/m);
const url = m ? m[1].trim() : process.env.DATABASE_URL;
const sql = neon(url);
const rows = await sql`SELECT title, content FROM pulses WHERE slug IN ('the-exam-was-the-attack','the-cursor-that-blinks') ORDER BY timestamp DESC`;
for (const r of rows) { console.log("===== "+r.title+" =====\n"+r.content+"\n"); }
