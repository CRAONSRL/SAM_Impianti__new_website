'use client';

import Image from 'next/image';
import { useImage } from '@/contexts/ImageContext';

interface MainImageViewerProps {
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function MainImageViewer({ alt, width, height, className }: MainImageViewerProps) {
  const { currentImage } = useImage();

  return (
    <Image 
      src={currentImage} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
    />
  );
}