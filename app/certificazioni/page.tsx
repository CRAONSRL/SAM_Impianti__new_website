'use client'

import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from '@/components/ServiceCard';
import Image from "next/image";
import bgMeccanico from "@/app/images/meccanico/bg-meccanico.jpeg";
import bgElettrico from "@/app/images/elettrico/bg-elettrico.jpeg";
import downloadImg from "@/app/images/chi-siamo/download.png";
import handStamp from "@/app/images/certificazioni/hand-stamp.jpeg";
import textureLogoBianco from "@/app/images/chi-siamo/texture-logo-bianco.png";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header currentPage="/certificazioni" />
      </Suspense>
      <section className="w-full bg-[#bfe6eb] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl text-[#03607B]">
            <h2 className="text-3xl font-semibold leading-tight">
              Le nostre certificazioni
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#043C48]">
              Siamo aggiornati in tema di normative, questo ci consente di
              garantire la sicurezza del nostro personale e dell&apos;impianto
              meccanico o elettrico che progettiamo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#043C48]">
              Il sistema aziendale di gestione dell&apos;organizzazione è
              certificato ISO 9001:2015. Questo ci rende un partner ideale per le
              Pubbliche Amministrazioni.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12">
            <div className="flex flex-col items-center gap-6">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-center text-[#7A7A7A] text-sm font-semibold uppercase tracking-widest">
                <Image src="/files/certifications/ISO/BVCER_withAccredia-ISO 9001.png" alt="Certification" width={140} height={140} />
              </div>
              <Link href="/files/certifications/ISO/CERTIFICATO_2023_SAM IMPIANTI SRL- ISO9001.pdf" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full border border-[#00A5BF] px-8 py-2 text-sm font-semibold lowercase text-[#00A5BF] shadow-sm cursor-pointer">
                  scarica
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-center text-[#7A7A7A] text-sm font-semibold uppercase tracking-widest">
                <Image src="/files/certifications/SOA/soalaghi___organismo_di_attestazione___spa_logo.jpeg" alt="Certification" width={100} height={100} />
              </div>
              <Link href="/files/certifications/SOA/00_SOA attestazione.pdf" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full border border-[#00A5BF] px-8 py-2 text-sm font-semibold lowercase text-[#00A5BF] shadow-sm cursor-pointer">
                  scarica
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-center text-[#7A7A7A] text-sm font-semibold uppercase tracking-widest">
                <Image src="/files/certifications/AFOCERT/afocert-logo.png" alt="Certification" width={130} height={130} />
              </div>
              <Link href="/files/certifications/AFOCERT/certificato AFORCERT_scad.2029_AFC-I0247.pdf" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full border border-[#00A5BF] px-8 py-2 text-sm font-semibold lowercase text-[#00A5BF] shadow-sm cursor-pointer">
                  scarica
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#008DAA] relative">
        <div className="relative">
          <Image
            src={handStamp}
            alt="Timbro su documento"
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
