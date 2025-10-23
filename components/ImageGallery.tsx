'use client';

import Image from 'next/image';
import { useImage } from '@/contexts/ImageContext';
import { useState } from 'react';

interface ImageItem {
  immagine: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  selectedColor: string;
}

export default function ImageGallery({ images, selectedColor }: ImageGalleryProps) {
  const { currentImage, setCurrentImage } = useImage();
  const [highlightedImageColor] = useState(selectedColor);

  const handleImageClick = (imagePath: string) => {
    setCurrentImage(`/api/public/${imagePath}`);
  };

  return (
    <div className='w-3/6 text-left overflow-scroll whitespace-nowrap'>
      {images.map((photo, index) => (
        <Image 
          unoptimized
          key={index} 
          src={`/api/public/${photo.immagine}`} 
          width={100} 
          height={100} 
          alt=''  
          className={`inline-block w-36 h-36 object-cover m-1 cursor-pointer transition-all duration-200 ${
            currentImage === `/api/public/${photo.immagine}` 
              ? `ring-4 ring-[${highlightedImageColor}] opacity-100` 
              : 'opacity-70 hover:opacity-100'
          }`}
          onClick={() => handleImageClick(photo.immagine)}
        />
      ))}
    </div>
  );
}