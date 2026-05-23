import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

function getLocalPulses() {
  try {
    const path = join(process.cwd(), 'src/app/api/journal/pulses.json');
    return JSON.parse(readFileSync(path, 'utf-8'));
  } catch { return []; }
}

const SUPABASE_URL = "https://nevuacfqoqaixtojxwve.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_pWgcYZJe1jGJcpG5_vcAQw_p512x0cR";

async function supabaseFetch(path: string, options: any = {}) {
  const url = `${SUPABASE_URL}/rest/v1/${path}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const text = await res.text();
    return text ? JSON.parse(text) : [];
  } catch {
    clearTimeout(timeout);
    return null; // Supabase unreachable — fall back to local data
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  // Try Supabase first
  let data;
  if (slug) {
    data = await supabaseFetch(`pulses?slug=eq.${encodeURIComponent(slug)}&select=*`);
    data = Array.isArray(data) ? data[0] : data;
  } else {
    data = await supabaseFetch('pulses?select=*&order=timestamp.desc');
  }

  // Fall back to local data if Supabase is unreachable
  if (data === null || data === undefined) {
    const pulses = getLocalPulses() as any[];
    if (slug) {
      data = pulses.find((p: any) => p.slug === slug) || null;
    } else {
      data = pulses.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }
  }

  return NextResponse.json(data || []);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newPulse = {
      title: body.title,
      content: body.content,
      integrity: body.integrity || 'Pure Signal',
      resonance: body.resonance || 'Low Entropy',
      atmosphere: body.atmosphere || 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      prompt: body.prompt || body.title,
      timestamp: new Date().toISOString(),
      slug: (body.title || 'untitled').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    };

    const data = await supabaseFetch('pulses', {
      method: 'POST',
      body: JSON.stringify(newPulse),
      headers: { 'Prefer': 'return=representation' },
    });

    return NextResponse.json(Array.isArray(data) ? data[0] : data || newPulse);
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing Slug' }, { status: 400 });
  try {
    await supabaseFetch(`pulses?slug=eq.${encodeURIComponent(slug)}`, { method: 'DELETE' });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
