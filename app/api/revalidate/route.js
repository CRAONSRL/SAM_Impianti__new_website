import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

// Funzione per ottenere tutti gli slug esistenti da Keystatic
async function getAllImpiantiSlugs() {
  try {
    const { createReader } = await import('@keystatic/core/reader');
    const keystaticConfig = await import('@/keystatic.config');
    const reader = createReader(process.cwd(), keystaticConfig.default);

    // Ottieni tutti gli impianti elettrici e meccanici
    const impiantiElettrici = await reader.collections.impiantiElettrici.all();
    const impiantiMeccanici = await reader.collections.impiantiMeccanici.all();

    const paths = [];

    // Genera i percorsi per impianti elettrici
    impiantiElettrici.forEach(item => {
      const baseLink = '/elettrico';
      const sottotipo = item.entry.sotto_tipo === 'residenziale' ? 'residenziali' : 'industriali';
      const tipo = item.entry.tipo === 'nuovo-impianto' ? 'impianti' : 'manutenzione';
      
      paths.push(`${baseLink}/${tipo}-${sottotipo}/${item.slug}`);
    });

    // Genera i percorsi per impianti meccanici
    impiantiMeccanici.forEach(item => {
      const baseLink = '/meccanico';
      const sottotipo = item.entry.sotto_tipo === 'residenziale' ? 'residenziali' : 'industriali';
      const tipo = item.entry.tipo === 'nuovo-impianto' ? 'impianti' : 'manutenzione';
      
      paths.push(`${baseLink}/${tipo}-${sottotipo}/${item.slug}`);
    });

    return paths;
  } catch (error) {
    console.error('Error getting Keystatic slugs:', error);
    return [];
  }
}

export async function POST(req) { //: NextRequest
  try {
    const body = await req.json();
    const { path, tag, secret, revalidateAll } = body;
    
    // Verifica secret
    if (secret && secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    const revalidatedPaths = [];

    if (tag) {
      // Revalidate by tag
      revalidateTag(tag);
      console.log(`Revalidated tag: ${tag}`);
      revalidatedPaths.push(`tag:${tag}`);
    } else if (path) {
      // Revalidate specific path
      revalidatePath(path);
      console.log(`Revalidated path: ${path}`);
      revalidatedPaths.push(path);
    } else {
      // Revalidate main static paths
      const staticPaths = ['/', '/elettrico', '/meccanico', '/servizi', '/certificazioni', '/chi-siamo', '/contatti'];
      
      staticPaths.forEach(staticPath => {
        revalidatePath(staticPath);
        revalidatedPaths.push(staticPath);
      });

      // Se richiesto, revalida anche tutte le pagine dinamiche
      if (revalidateAll) {
        const dynamicPaths = await getAllImpiantiSlugs();
        dynamicPaths.forEach(dynamicPath => {
          revalidatePath(dynamicPath);
          revalidatedPaths.push(dynamicPath);
        });
      }

      console.log('Revalidated paths:', revalidatedPaths);
    }

    return NextResponse.json({ 
      revalidated: true, 
      message: 'Content revalidated successfully',
      paths: revalidatedPaths,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json({ 
      revalidated: false, 
      error: 'Error revalidating',
      message: err.message 
    }, { status: 500 });
  }
}

export async function GET(req) { //: NextRequest
  // Test endpoint per browser
  try {
    const staticPaths = ['/', '/elettrico', '/meccanico', '/servizi'];
    const revalidatedPaths = [];
    
    staticPaths.forEach(path => {
      revalidatePath(path);
      revalidatedPaths.push(path);
    });
    
    return NextResponse.json({ 
      revalidated: true, 
      message: 'GET revalidation completed',
      paths: revalidatedPaths,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json({ 
      error: 'GET revalidation failed',
      message: err.message 
    }, { status: 500 });
  }
}