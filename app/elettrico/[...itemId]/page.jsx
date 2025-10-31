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
  const { itemId } = await params;
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
  const { itemId } = await params;
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
        
        <main className='flex flex-col lg:flex-row max-w-7xl mx-auto w-full gap-8 px-6 sm:px-8'>
          <LeftMenu typeOfEntry="impiantiElettrici" />
          <section className='w-full lg:w-3/4'>
            <MainImageViewer 
              alt={item.name} 
              width={1200} 
              height={1200} 
              className="w-full h-64 sm:h-80 lg:h-[66vh] object-cover" 
            />
          </section>
        </main>
        
        <section className='w-full bg-[#DBDC37] px-6 sm:px-8 py-12'>
          <div className='flex flex-col lg:flex-row max-w-7xl mx-auto gap-8 lg:gap-12 items-start'>
            <div className='w-full lg:w-2/6 text-gray-800'>
              <h3 className='text-gray-800 text-2xl sm:text-[28px] font-medium leading-snug'>{item.name}</h3>
              {/* <br /><time dateTime={item.date}>{new Date(item.date).toLocaleDateString('it-IT')}</time><br /> */}
              <p className='mt-6 text-base sm:text-lg leading-relaxed whitespace-pre-line'>
                {item.content}
              </p>
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
