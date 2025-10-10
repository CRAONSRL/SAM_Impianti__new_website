import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSAM from '@/components/HeroSAM';
import ImpiantiMeccaniciElettrici from '@/components/ImpiantiMeccaniciElettrici';
import Experience from '@/components/Experience';
import Certification from '@/components/Certification';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header currentPage="/" />
      </Suspense>
      <main>
        <HeroSAM />
        <ImpiantiMeccaniciElettrici />
        <Experience />
        <Certification />
      </main>
      <Footer />
    </>
  );
}