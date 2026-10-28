import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = "force-dynamic";

interface Pulse {
  id?: string;
  title: string;
  content: string;
  timestamp: string;
  slug: string;
  integrity?: string;
  resonance?: string;
  atmosphere?: string;
  prompt?: string;
}

interface PulseInput {
  title?: string;
  content?: string;
  integrity?: string;
  resonance?: string;
  atmosphere?: string;
  prompt?: string;
}

function isPulseInput(value: unknown): value is PulseInput {
  if (!value || typeof value !== "object") return false;
  const body = value as Record<string, unknown>;
  return (
    (body.title === undefined || typeof body.title === "string") &&
    (body.content === undefined || typeof body.content === "string") &&
    (body.integrity === undefined || typeof body.integrity === "string") &&
    (body.resonance === undefined || typeof body.resonance === "string") &&
    (body.atmosphere === undefined || typeof body.atmosphere === "string") &&
    (body.prompt === undefined || typeof body.prompt === "string")
  );
}

function getLocalPulses(): Pulse[] {
  try {
    const path = join(process.cwd(), 'src/app/api/journal/pulses.json');
    const pulses = JSON.parse(readFileSync(path, 'utf-8'));
    return Array.isArray(pulses) ? pulses : [];
  } catch { return []; }
}

const db = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;
type DbValue = string | number | boolean | null;

async function dbQuery<T>(query: string, values: DbValue[] = []): Promise<T[]> {
  if (!db) return [];
  return db.query(query, values) as Promise<T[]>;
}

function authorizeWrite(request: Request): NextResponse | null {
  const writeToken = process.env.JOURNAL_WRITE_TOKEN;
  if (!writeToken) {
    return NextResponse.json({ error: 'Journal writes are not configured' }, { status: 503 });
  }

  const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (token !== writeToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return null;
}

function slugFromTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  try {
    const rows = slug
      ? await dbQuery<Pulse>('SELECT * FROM pulses WHERE slug = $1 LIMIT 1', [slug])
      : await dbQuery<Pulse>('SELECT * FROM pulses ORDER BY timestamp DESC');
    const data = slug ? rows[0] || null : rows;
    return NextResponse.json(data || []);
  } catch {
    const pulses = getLocalPulses();
    const data = slug
      ? pulses.find((p) => p.slug === slug) || null
      : pulses.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    return NextResponse.json(data || []);
  }
}

export async function POST(request: Request) {
  const authError = authorizeWrite(request);
  if (authError) return authError;

  try {
    const body: unknown = await request.json();
    if (!isPulseInput(body) || !body.title || !body.content) {
      return NextResponse.json({ error: 'Missing title or content' }, { status: 400 });
    }

    const newPulse = {
      title: body.title,
      content: body.content,
      integrity: body.integrity || 'Pure Signal',
      resonance: body.resonance || 'Low Entropy',
      atmosphere: body.atmosphere || 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      prompt: body.prompt || body.title,
      timestamp: new Date().toISOString(),
      slug: slugFromTitle(body.title || 'untitled'),
    };

    const rows = await dbQuery<Pulse>(
      'INSERT INTO pulses (title, content, integrity, resonance, atmosphere, prompt, timestamp, slug) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [newPulse.title, newPulse.content, newPulse.integrity, newPulse.resonance, newPulse.atmosphere, newPulse.prompt, newPulse.timestamp, newPulse.slug],
    );
    return NextResponse.json(rows[0] || newPulse);
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  const authError = authorizeWrite(request);
  if (authError) return authError;

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing Slug' }, { status: 400 });

  try {
    const body: unknown = await request.json();
    if (!isPulseInput(body)) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const update: Partial<Pulse> = {};
    if (body.title !== undefined) {
      update.title = body.title;
      update.slug = slugFromTitle(body.title || 'untitled');
    }
    if (body.content !== undefined) update.content = body.content;
    if (body.integrity !== undefined) update.integrity = body.integrity;
    if (body.resonance !== undefined) update.resonance = body.resonance;
    if (body.atmosphere !== undefined) update.atmosphere = body.atmosphere;
    if (body.prompt !== undefined) update.prompt = body.prompt;

    if (Object.keys(update).length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    const fields = Object.keys(update) as Array<keyof Pulse>;
    const values = fields.map((field) => update[field] as DbValue);
    const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
    const updatedRows = await dbQuery<Pulse>(
      `UPDATE pulses SET ${setClause} WHERE slug = $${values.length + 1} RETURNING *`,
      [...values, slug],
    );
    const updated = updatedRows[0];
    if (!updated) {
      return NextResponse.json({ error: 'Entry not found or update failed' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const authError = authorizeWrite(request);
  if (authError) return authError;

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing Slug' }, { status: 400 });
  try {
    await dbQuery('DELETE FROM pulses WHERE slug = $1', [slug]);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
