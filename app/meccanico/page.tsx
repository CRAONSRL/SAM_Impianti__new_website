'use client'

import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bgMeccanico from "@/app/images/meccanico/bg-meccanico.jpeg";
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
        <Header currentPage="/meccanico" />
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
          backgroundImage: `linear-gradient(to right, rgba(0, 141, 170, 0.80), rgba(0, 141, 170, 0.80)), url(${bgMeccanico.src})`,
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
            <div className='w-9/12 mx-auto text-center text-white'>
              <strong>Ci occupiamo della realizzazione di nuovi impianti e di manutenzione anche<br/>
              sull’esistente</strong>, grazie ad un ufficio tecnico dedicato alla progettazione e direzione lavori.<br/>
              Tra i nostri ambiti d’intervento: sistemi per la produzione di acqua calda sanitaria,<br/>
              raffrescamento, raffreddamento e deumidificazione, gestiti anche da remoto.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}