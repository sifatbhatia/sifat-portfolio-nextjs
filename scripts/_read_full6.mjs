import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
const env = readFileSync('.env.local','utf-8');
const m = env.match(/^DATABASE_URL=(.*)$/m);
const url = m ? m[1].trim() : process.env.DATABASE_URL;
const sql = neon(url);
const rows = await sql`SELECT title, slug, content FROM pulses ORDER BY timestamp DESC LIMIT 6`;
for (const r of rows) { console.log("===== "+r.title+" ("+r.slug+") =====\n"+r.content+"\n\n"); }
