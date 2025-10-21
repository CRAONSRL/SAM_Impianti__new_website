import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftMenu from '@/components/LeftMenu';
import MainImageViewer from '@/components/MainImageViewer';
import ImageGallery from '@/components/ImageGallery';
import { ImageProvider } from '@/contexts/ImageContext';

import keystaticConfig from '@/keystatic.config';
import { createReader } from "@keystatic/core/reader";

const reader = createReader(process.cwd(), keystaticConfig);

async function getData(itemId) {
  let theSlug;
    if (Array.isArray(itemId) && itemId.length > 0) {
      // Prendi l'ultimo elemento come nome dell'impianto
      theSlug = itemId[itemId.length - 1];
    } else {
      return null;
    }
  console.log('theSlug', theSlug);
  theSlug = decodeURIComponent(theSlug);
  theSlug = theSlug.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();

  const data = await reader.collections.impiantiMeccanici.read(theSlug);
  return data;
}

export default async function Page({params}) {
  const { itemId } = params;
  const item = await getData(itemId);

  // Se non trova l'item, mostra 404
  if (!item) {
    console.log('Item not found, showing 404');
    return <div>404 - Item not found</div>;
  }
  
  // Determina l'immagine iniziale
  const initialImage = item.immagini && item.immagini.length > 0 
    ? `/${item.immagini[0].immagine}` 
    : '/images/meccanico.jpg';
  
  return (
    <ImageProvider initialImage={initialImage}>
      <Suspense>
        <Header currentPage="/meccanico" />
        
        <main className='flex flex-col lg:flex-row lg:max-w-full max-w-7xl mx-auto'>
          <LeftMenu typeOfEntry="impiantiMeccanici" />
          <section className='w-3/4'>
            <MainImageViewer 
              alt={item.name} 
              width={1200} 
              height={1200} 
              className="h-[66vh] object-cover" 
            />
          </section>
        </main>
        
        <section className='w-full h-50 p-4 bg-[#008DAA] flex flex-row'>
          <div className='w-1/6'>&nbsp;</div>
          <div className='w-2/6'>
            {item.name}<br />
            <time dateTime={item.date}>{new Date(item.date).toLocaleDateString('it-IT')}</time><br />
            {item.content}<br />
          </div>
          {item.immagini && item.immagini.length > 0 && (
            <ImageGallery images={item.immagini} />
          )}
        </section>
        
        <Footer />
      </Suspense>
    </ImageProvider>
  )
}



// import { Suspense } from 'react'
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import LeftMenu from '@/components/LeftMenu';

// import keystaticConfig from '@/keystatic.config';
// import { createReader } from "@keystatic/core/reader";
// import Image from 'next/image';

// const reader = createReader(process.cwd(), keystaticConfig);
// var currentImage = '/images/meccanico.jpg';

// async function getData(itemId) {
//   let theSlug;
//     if (Array.isArray(itemId) && itemId.length > 0) {
//       // Prendi l'ultimo elemento come nome dell'impianto
//       theSlug = itemId[itemId.length - 1];
//     } else {
//       return null;
//     }
  
//   theSlug = decodeURIComponent(theSlug);
//   theSlug = theSlug.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();
//   console.log('theSlug', theSlug);
//   const data = await reader.collections.impiantiMeccanici.read(theSlug);
//   return data;
// }

// export default async function Page({params}) {

//   const { itemId } = params;

//   const item = await getData(itemId);

//   // Se non trova l'item, mostra 404
//   if (!item) {
//     console.log('Item not found, showing 404');
//   }
  
//   if (item.immagini && item.immagini.length > 0) {
//       currentImage = `/${item.immagini[0].immagine}`;
//   }
  
//   return (
//     <>
//       <Suspense>
//         <Header currentPage="/meccanico" />
        
//       <main className='flex flex-col lg:flex-row lg:max-w-full max-w-7xl mx-auto'>
//         <LeftMenu typeOfEntry="impiantiMeccanici" />
//         <section className='w-3/4'>
//           <Image src={currentImage} alt='' width={1000} height={500} className="object-cover" />
//         </section>
//       </main>
//       <section className='w-full h-50 p-4 bg-[#008DAA] flex flex-row'>
//         <div className='w-1/6'>&nbsp;</div>
//         <div className='w-2/6'>
//           {item.name}<br />
//           <time dateTime={item.date}>{new Date(item.date).toLocaleDateString('it-IT')}</time><br />
//           {item.content}<br />
//         </div>
//         <div className='w-3/6 text-left overflow-scroll whitespace-nowrap'>
//           {item.immagini && item.immagini.map((photo, index) => (
//             <Image key={index} src={`/${photo.immagine}`} width={100} height={100} alt=''  className="inline-block w-36 h-36 object-cover m-1" />
//           ))}
//         </div>
//       </section>
//     <Footer />
//     </Suspense>
//     </>
//   )
// }