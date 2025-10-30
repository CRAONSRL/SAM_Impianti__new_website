'no-cache';

import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftMenu from '@/components/LeftMenu';
import MainImageViewer from '@/components/MainImageViewer';
import ImageGallery from '@/components/ImageGallery';
import { ImageProvider } from '@/contexts/ImageContext';

import keystaticConfig from '@/keystatic.config';
import { createReader } from "@keystatic/core/reader";

export const dynamicParams = true;
export const revalidate = 0; // Disabilita la cache per il revalidation dinamico

const reader = createReader(process.cwd(), keystaticConfig);

async function getData(itemId) {
  let theSlug;
  if (Array.isArray(itemId) && itemId.length > 0) {
    theSlug = itemId[itemId.length - 1];
  } else {
    return null;
  }
  
  theSlug = decodeURIComponent(theSlug);
  theSlug = theSlug.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();

  try {
    const data = await reader.collections.impiantiElettrici.read(theSlug, { resolveLinkedFiles: true });
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Genera metadata dinamici (opzionale ma raccomandato)
export async function generateMetadata({ params }) {
  const { itemId } = params;
  const item = await getData(itemId);
  
  if (!item) {
    return {
      title: 'Impianto non trovato - SAM Impianti'
    };
  }

  return {
    title: `${item.name} - SAM Impianti`,
    description: item.content?.substring(0, 160) || 'Impianto elettrico SAM Impianti',
    openGraph: {
      title: `${item.name} - SAM Impianti`,
      description: item.content?.substring(0, 160) || 'Impianto meccanico SAM Impianti',
      images: item.immagini && item.immagini.length > 0 
        ? [`/${item.immagini[0].immagine}`]
        : ['/images/meccanico.jpg'],
    },
  };
}

export default async function Page({ params }) {
  const { itemId } = params;
  const item = await getData(itemId);

  // Se non trova l'item, usa la funzione notFound() di Next.js
  if (!item) {
    notFound();
  }
  
  // Determina l'immagine iniziale
  const initialImage = item.immagini && item.immagini.length > 0 
  ? `/api/public/${item.immagini[0].immagine}` // Usa l'API proxy
  : '/api/public/images/meccanico.jpg';
  
  return (
    <ImageProvider initialImage={initialImage}>
      <Suspense>
        <Header currentPage="/elettrico" />
        
        <main className='flex flex-col lg:flex-row max-w-7xl mx-auto'>
          <LeftMenu typeOfEntry="impiantiElettrici" />
          <section className='w-3/4'>
            <MainImageViewer 
              alt={item.name} 
              width={1200} 
              height={1200} 
              className="h-[66vh] object-cover" 
            />
          </section>
        </main>
        
        <section className='w-full h-50 p-4 bg-[#DBDC37] flex flex-row'>
          <div className='flex flex-row mx-auto w-7xl max-w-7xl'>
          <div className='w-2/6 text-gray-800'>
            <h3 className='text-gray-800 text-2xl font-medium'>{item.name}</h3>
            {/* <br /><time dateTime={item.date}>{new Date(item.date).toLocaleDateString('it-IT')}</time><br /> */}
            {item.content}<br />
          </div>
          {item.immagini && item.immagini.length > 0 && (
            <ImageGallery images={item.immagini} selectedColor="#008DAA" />
          )}
          </div>
        </section>
        
        <Footer />
      </Suspense>
    </ImageProvider>
  )
}