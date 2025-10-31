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
      <main className='flex flex-col lg:flex-row max-w-7xl mx-auto w-full gap-8 px-6 sm:px-8'>
        <LeftMenu typeOfEntry="impiantiMeccanici" />
        <section className='w-full lg:w-3/4 px-6 sm:px-10 py-10 lg:py-16' style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 141, 170, 0.80), rgba(0, 141, 170, 0.80)), url(${bgMeccanico.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='text-lg sm:text-xl text-white text-center font-medium'>
            <strong>Ci occupiamo della realizzazione e manutenzione di impianti meccanici residenziali,<br className="hidden sm:block"/>
              industriali e retail, tradizionali e domotici, grazie a un ufficio tecnico interno.</strong><br/>
          </div>
          <div className='flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-36 justify-center items-center mt-12 sm:mt-16 lg:mt-20'>
            <div className='flex flex-col gap-4 text-center justify-center items-center'>
              <Image src={logoBianco} alt="impianti" width={60} height={60} className='mb-4 mx-auto' />
              <div className='rounded-full bg-white text-[#008DAA] px-6 py-2 text-center text-xl sm:text-2xl font-thin'>impianti</div>
            </div>
            <div className='flex flex-col gap-4 text-center justify-center items-center'>
              <Image src={logoBianco} alt="manutenzione" width={60} height={60} className='mb-4 mx-auto' />
              <div className='rounded-full bg-white text-[#008DAA] px-6 py-2 text-center text-xl sm:text-2xl font-thin'>manutenzione</div>
            </div>
          </div>
          <div className='flex w-full mt-10 sm:mt-12 lg:mt-16 justify-center items-center'>
            <div className='mx-auto text-center text-white font-medium text-base sm:text-lg lg:text-xl leading-relaxed'>
              Tra i nostri ambiti d’intervento: sistemi per la produzione di acqua calda sanitaria,<br className="hidden sm:block"/>
              raffrescamento, raffreddamento e deumidificazione, gestiti anche da remoto.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
