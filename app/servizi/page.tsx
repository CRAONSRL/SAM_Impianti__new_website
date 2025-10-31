'use client'

import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from '@/components/ServiceCard';
import Image from "next/image";
import bgMeccanico from "@/app/images/servizi/industrial.png";
import bgElettrico from "@/app/images/servizi/electrical.png";
import downloadImg from "@/app/images/servizi/sam-brochure.png";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header currentPage="/servizi" />
        <section className='w-full bg-[#acd9e3] px-6 sm:px-8 py-10 lg:py-14'>
          <div className='flex flex-col lg:flex-row max-w-7xl mx-auto w-full gap-8 lg:gap-10 items-center lg:items-start'>
            <div className='w-full lg:w-1/3 text-left'>
              <h2 className='text-2xl sm:text-[24px] font-semibold text-[#043C48] leading-snug'>
                Dalla grande azienda al<br className="hidden sm:block"/>privato, supportiamo<br className="hidden sm:block"/>ogni cliente garantendo<br className="hidden sm:block"/>la stessa qualità.
              </h2>
              <p className='mt-4 text-base sm:text-[18px] leading-relaxed text-[#043C48]'>
                Che sia un impianto complesso o una piccola manutenzione,<br className="hidden sm:block"/>siamo il partner ideale per la progettazione e la gestione di sistemi elettrici e meccanici in ambito industriale, retail e residenziale.
              </p>
            </div>
            <div className='w-full lg:w-1/3 text-center pt-6 lg:pt-12'>
              <ServiceCard title={["impianti e", "manutenzione", "MECCANICA"]} href='/meccanico' imageSrc={bgMeccanico.src} className="w-full max-w-sm mx-auto" />
            </div>
            <div className='w-full lg:w-1/3 text-center pt-6 lg:pt-12'>
              <ServiceCard title={["impianti e", "manutenzione", "ELETTRICA"]} href='/elettrico' imageSrc={bgElettrico.src} className="w-full max-w-sm mx-auto" />
            </div>
          </div>
        </section>
      </Suspense>
      <main className="max-w-7xl mx-auto w-full px-6 sm:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-0">
          <article className="flex flex-col gap-8 bg-white px-5 py-8 lg:flex-row lg:items-center lg:gap-8 lg:px-6 lg:py-7 col-span-3 rounded-3xl">
            <div className="mx-auto flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full lg:mx-0 lg:h-48 lg:w-48">
              <Image
                src={bgMeccanico}
                alt="Impianti meccanici"
                width={192}
                height={192}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="text-center lg:text-left text-[#014A5C]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A7D93]">
                Impianti meccanici
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#03607B] lg:text-3xl">
                Acqua calda sanitaria, raffrescamento, raffreddamento e
                deumidificazione
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#023F50]">
                Grazie ad un ufficio tecnico dedicato alla progettazione e
                direzione lavori, studiamo la migliore soluzione con un
                approccio che prevede la Risk Analisys e un sistema di gestione
                della commessa che monitora i processi anche da remoto.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-center gap-8 bg-[#008DAA] px-5 py-8 text-white lg:px-7 lg:py-8 col-span-2 mt-6 lg:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
              Manutenzione meccanica
            </p>
            <h3 className="text-2xl font-semibold leading-tight lg:text-3xl">
              Reperibilità tutti i giorni dell&apos;anno, 24 ore su 24
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-white/90">
              Garantiamo interventi rapidi H24, know-how specializzato,
              tecnologie all&apos;avanguardia e ricambi sempre disponibili grazie ad
              un magazzino interno. Assicuriamo efficienza, sicurezza e
              continuità agli impianti civili e industriali.
            </p>
          </article>

          <article className="flex flex-col gap-6 bg-white px-5 py-8 lg:flex-row lg:items-center lg:gap-6 lg:px-6 lg:py-7 col-span-3 rounded-3xl mt-6 lg:mt-0">
            <div className="mx-auto flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full lg:mx-0 lg:h-48 lg:w-48">
              <Image
                src={bgElettrico}
                alt="Impianti elettrici"
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left text-[#014A5C]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A7D93]">
                Impianti elettrici
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#03607B] lg:text-3xl">
                Soluzioni su misura per ogni esigenza: tradizionali e domotiche
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#023F50]">
                Grazie ad uno staff interno giovane e dinamico, progettiamo e
                realizziamo impianti elettrici civili e industriali, tradizionali
                e domotici, con soluzioni su misura per ogni esigenza. Garantiamo
                sistemi affidabili e aggiornati alle normative.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-center gap-8 bg-[#CFDD24] px-5 py-8 text-[#014A5C] lg:px-7 lg:py-8 col-span-2 mt-6 lg:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A7D93]">
              Manutenzione elettrica
            </p>
            <h3 className="text-2xl font-semibold leading-tight text-[#035A73] lg:text-3xl">
              Assistenza continua dall&apos;impianto più complesso alla piccola
              manutenzione
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-[#024356]">
              In ambito residenziale e retail, interveniamo su impianti di
              allarme e video sorveglianza, videocitofonia, automazione e
              fotovoltaico, rilevazione fumi e incendi, impianti Tv e FTTH, con
              controlli puntuali e gestione tecnica specializzata.
            </p>
          </article>
        </div>
      </main>
      <section className="w-full bg-[#008DAA] hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 py-16 text-white lg:flex-row lg:px-10 lg:py-20">
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <Image
              src={downloadImg}
              alt="Dispositivi per la presentazione digitale"
              className="h-auto w-full max-w-[420px] lg:max-w-[520px]"
              priority
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-xl font-semibold text-[#043C48]">
              Scarica la nostra presentazione digitale
            </p>
            <div className="mt-6 flex items-center gap-6">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-3 text-lg font-semibold lowercase tracking-wide text-[#008DAA] transition-colors hover:bg-white/90"
              >
                scarica
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v14" />
                <path d="m6 12 6 6 6-6" />
                <path d="M5 21h14" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
