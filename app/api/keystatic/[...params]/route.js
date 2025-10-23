// // src/app/api/keystatic/[...params]/route.ts
import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';
import { NextResponse } from 'next/server';

// Funzione per chiamare il revalidate
async function triggerRevalidation(fullRevalidation = false) {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.REVALIDATE_SECRET,
        revalidateAll: fullRevalidation, // Revalida anche le pagine dinamiche se richiesto
      }),
    });

    if (!response.ok) {
      console.error('Revalidation failed:', await response.text());
    } else {
      const data = await response.json();
      console.log('Revalidation successful:', data);
    }
  } catch (error) {
    console.error('Error triggering revalidation:', error);
  }
}

// Ottieni i handler originali da Keystatic
const handlers = makeRouteHandler({ config });

// Wrapper per il POST handler che include la revalidation
export async function POST(req, context) {
  try {
    // Chiama il handler originale di Keystatic
    const response = await handlers.POST(req, context);
    
    // Se la richiesta è andata a buon fine, triggera la revalidation
    if (response.ok) {
      console.log('Keystatic operation successful, triggering revalidation...');
      
      // Triggera la revalidation completa (incluse pagine dinamiche)
      // in background (non-blocking)
      triggerRevalidation(true).catch(console.error);
    }
    
    return response;
  } catch (error) {
    console.error('Keystatic POST error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Mantieni il GET handler così com'è
export const GET = handlers.GET;