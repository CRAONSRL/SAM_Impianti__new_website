'use client';

import Image from 'next/image';
import { useImage } from '@/contexts/ImageContext';

interface ImageItem {
  immagine: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const { currentImage, setCurrentImage } = useImage();

  const handleImageClick = (imagePath: string) => {
    setCurrentImage(`/${imagePath}`);
  };

  return (
    <div className='w-3/6 text-left overflow-scroll whitespace-nowrap'>
      {images.map((photo, index) => (
        <Image 
          key={index} 
          src={`/${photo.immagine}`} 
          width={100} 
          height={100} 
          alt=''  
          className={`inline-block w-36 h-36 object-cover m-1 cursor-pointer transition-all duration-200 ${
            currentImage === `/${photo.immagine}` 
              ? 'ring-4 ring-[#DBDC37] opacity-100' 
              : 'opacity-70 hover:opacity-100'
          }`}
          onClick={() => handleImageClick(photo.immagine)}
        />
      ))}
    </div>
  );
}