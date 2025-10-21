import { Suspense } from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bgMeccanico from "@/app/images/meccanico/bg-meccanico.jpeg";
import logoBianco from "@/app/images/elettrico/logo-bianco.png";
import Image from 'next/image';
import LeftMenu from '@/components/LeftMenu';


export default function Home() {
  return (
    <>
      <Suspense>
        <Header currentPage="/meccanico" />
      </Suspense>
      <main className='flex flex-col lg:flex-row lg:max-w-full max-w-7xl mx-auto'>
        <LeftMenu typeOfEntry="impiantiMeccanici" />
        <section className='w-3/4 p-4' style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 141, 170, 0.80), rgba(0, 141, 170, 0.80)), url(${bgMeccanico.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='text-xl text-white text-center font-medium mt-10'>
            <strong>Ci occupiamo della realizzazione e manutenzione di impianti meccanici residenziali,<br/>
              industriali e retail, tradizionali e domotici, grazie a un ufficio tecnico interno.</strong><br/>
          </div>
          <div className='flex flex-row gap-36 justify-center items-center mt-20'>
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
            <div className='mx-auto text-center text-white *:font-medium mt-10 text-xl'>
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