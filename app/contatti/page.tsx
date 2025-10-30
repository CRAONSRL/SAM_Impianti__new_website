'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import contactImage from '@/app/images/contatti/contatti.jpeg';
import logoSfumato from '@/app/images/chi-siamo/logo-sfumato.png';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header currentPage="/contatti" />
      </Suspense>

      <section className="w-full bg-white h-full">
        <div className="flex w-full flex-col overflow-hidden lg:flex-row h-full">
          <div className="relative w-full overflow-hidden lg:w-2/5">
            <Image
              src={contactImage}
              alt="Tecnici al lavoro"
              className="h-full w-full -scale-x-100 object-cover"
              priority
            />
            <div className="absolute bottom-10 right-10 p-6 text-[#024050] bg-white/60 text-right">
              <h2 className="text-2xl font-semibold text-[#00586C]">
                SAM impianti srl
              </h2>
              <p className="mt-3 text-md leading-relaxed">
                Via G. de Castillia, 7
                <br />
                Vimercate
                <br />
                20871 (MB) Italia
              </p>
              <p className="mt-4 text-md leading-relaxed">
                039 648 451
                <br />
                segreteria@samimp.it
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col justify-center items-center bg-[#004B5F] px-8 py-12 text-white lg:w-3/5 lg:px-16 lg:py-40">
            <div className="flex flex-col items-center gap-12 w-full max-w-md">
              <Image
                src={logoSfumato}
                alt="Logo SAM Impianti"
                className="h-20 w-20 object-contain"
                priority
              />

              <div className="flex flex-col gap-8 w-full">
                <div className="text-center">
                  <p className="text-sm font-light tracking-wide text-white/80 mb-4">
                    Chiamaci direttamente
                  </p>
                  <a
                    href="tel:+39039648451"
                    className="block w-full border border-white/60 bg-transparent px-8 py-4 text-2xl font-light text-white outline-none transition hover:bg-white/10 hover:border-white rounded-lg"
                  >
                    039 648 451
                  </a>
                </div>

                <div className="text-center">
                  <p className="text-sm font-light tracking-wide text-white/80 mb-4">
                    Scrivici una email
                  </p>
                  <a
                    href="mailto:segreteria@samimp.it"
                    className="block w-full border border-white/60 bg-transparent px-8 py-4 text-xl font-light text-white outline-none transition hover:bg-white/10 hover:border-white rounded-lg break-all"
                  >
                    segreteria@samimp.it
                  </a>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm font-light tracking-wide text-white/60">
                  Saremo felici di aiutarti con i tuoi progetti
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
