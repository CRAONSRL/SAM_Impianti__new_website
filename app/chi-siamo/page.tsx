'use client'

import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroChiSiamo from '@/components/HeroChiSiamo';
import TeamSlides from '@/components/TeamSlides';
import WhyUs from '@/components/WhyUs';
import HowWeWork from '@/components/HowWeWork';
import QualityPolicy from '@/components/QualityPolicy';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header currentPage="/chi-siamo" />
      </Suspense>
      <main>
        <HeroChiSiamo />
        <TeamSlides />
        <WhyUs />
        <HowWeWork />
        <QualityPolicy />
      </main>
      <Footer />
    </>
  );
}