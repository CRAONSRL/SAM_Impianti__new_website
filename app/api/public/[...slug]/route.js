import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const filePath = slug.join('/');
    
    // Percorso sicuro del file nel public folder
    const publicDir = path.join(process.cwd(), 'public');
    const fullPath = path.join(publicDir, filePath);
    
    // Verifica di sicurezza: il file deve essere dentro public/
    if (!fullPath.startsWith(publicDir)) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }
    
    // Verifica se il file esiste
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
    
    // Ottieni informazioni sul file
    const stats = fs.statSync(fullPath);
    if (!stats.isFile()) {
      return NextResponse.json({ error: 'Not a file' }, { status: 400 });
    }
    
    // Determina il content-type basato sull'estensione
    const ext = path.extname(fullPath).toLowerCase();
    const mimeTypes = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.pdf': 'application/pdf',
      '.txt': 'text/plain',
    };
    
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    // Crea stream del file
    const fileStream = fs.createReadStream(fullPath);
    
    // Converti stream in Response
    const chunks = [];
    for await (const chunk of fileStream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Length': stats.size.toString(),
        'Cache-Control': 'public, max-age=3600', // Cache per 1 ora
        'ETag': `"${stats.mtime.getTime()}-${stats.size}"`,
      },
    });
    
  } catch (error) {
    console.error('Error serving file:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}