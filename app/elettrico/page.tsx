'use client'

import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bgElettrico from "@/app/images/elettrico/bg-elettrico.jpeg";
import logoBianco from "@/app/images/elettrico/logo-bianco.png";
import Image from 'next/image';

const leftMenu = [
  {
    label: 'IMPIANTI',
    children: [
      {
        label: 'Residenziali',
        children: [
          {
            label: 'Via Pestalozzi - Milano',
            href: '/impianti-elettrici'
          },
          {
            label: 'Via del Lavoro - Concorezzo',
            href: '/impianti-elettrici'
          },
        ]
      },
      {
        label: 'Industriali',
        children: [
          {
            label: 'Via Pestalozzi - Milano',
            href: '/impianti-elettrici'
          },
          {
            label: 'Via del Lavoro - Concorezzo',
            href: '/impianti-elettrici'
          },
        ]
      },
    ],
  },
  {
    label: 'MANUTENZIONE',
    children: [
      {
        label: 'Residenziali',
        children: [],
      },
      {
        label: 'Industriali',
        children: [],
      },
    ]
  },
]

export default function Home() {
  return (
    <>
      <Suspense>
        <Header currentPage="/elettrico" />
      </Suspense>
      <main className='flex flex-col lg:flex-row max-w-7xl mx-auto'>
        <section className='w-1/4'>
          {leftMenu.map((item) => (
            <div className='not-first-of-type:mt-6 last-of-type:mb-6' key={item.label}>
              <h3>{item.label}</h3>
              {item.children.map((child) => (
                <div key={child.label}>
                  <h4 className='ml-2'>{child.label}</h4>
                  {child.children.map((childChild) => (
                    <div className='ml-4 hover:underline cursor-pointer' key={childChild.label}>{childChild.label}</div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </section>
        <section className='w-3/4 p-4' style={{
          backgroundImage: `linear-gradient(to right, rgba(219, 220, 55, 0.80), rgba(219, 220, 55, 0.80)), url(${bgElettrico.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='flex flex-row gap-4 justify-center items-center mt-20'>
            <div className='flex-col gap-4 text-center justify-center items-center'>
              <Image src={logoBianco} alt="impianti" width={60} height={60} className='mb-4 mx-auto' />
              <div className='rounded-full bg-white text-[#008DAA] px-6 py-1 text-center text-[26px] font-thin'>impianti</div>
            </div>
            <div className='flex-col gap-4 text-center justify-center items-center'>
              <Image src={logoBianco} alt="manutenzione" width={60} height={60} className='mb-4 mx-auto' />
              <div className='rounded-full bg-white text-[#008DAA] px-6 py-1 text-center text-[26px] font-thin'>manutenzione</div>
            </div>
          </div>
          <div className='flex flex-row w-full mt-5 mb-20 justify-center items-center'>
            <div className='w-9/12 mx-auto text-center text-[#043C48]'>
              <strong>Ci occupiamo della realizzazione e manutenzione di impianti elettrici residenziali,<br/>
              indutriali e retail, tradizionali e domotici, grazie a un ufficio tecnico interno.</strong><br/>
              Garantiamo assistenza dall’impianto più complesso alla piccola manutenzione.<br/>
              Tra i nostri ambiti: impianti video citofonici, automazione cancelli, video sorveglianza,<br/>
              rivelazione fumi e incendi, sistemi d’allarmi, impianti fotovoltaici, Tv e FTTH e<br/>
              allestimenti fieristici.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}