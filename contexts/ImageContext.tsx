'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ImageContextType {
  currentImage: string;
  setCurrentImage: (image: string) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children, initialImage }: { children: ReactNode; initialImage: string }) {
  const [currentImage, setCurrentImage] = useState(initialImage);

  return (
    <ImageContext.Provider value={{ currentImage, setCurrentImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImage must be used within an ImageProvider');
  }
  return context;
}