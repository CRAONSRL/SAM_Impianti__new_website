import { NextResponse } from 'next/server';
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from '@/keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export async function GET(request, { params }) {
  try {
    // Aspetta i parametri e decostruisci collection
    const { collection } = await params;
    
    console.log('Collection richiesta:', collection); // Debug
    
    // Verifica che la collection sia valida
    if (!['impiantiElettrici', 'impiantiMeccanici'].includes(collection)) {
      return NextResponse.json({ error: 'Invalid collection' }, { status: 400 });
    }
    
    // Ottieni i dati dalla collection
    const data = await reader.collections[collection].all();
    
    console.log(`Dati trovati per ${collection}:`, data.length); // Debug
    
    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString()
    }, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate', // Sempre fresh
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
  } catch (error) {
    console.error(`Error fetching collection:`, error);
    return NextResponse.json({ 
      error: 'Failed to fetch data',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}