import Image from "next/image";
import logoBianco from "@/app/images/chi-siamo/logo-bianco.png";

const HowWeWork = () => {
  return (
    <section id="come-lavoriamo" className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 sm:px-8 py-12 lg:py-20 relative bg-white">
      
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-8 lg:gap-10 items-center justify-center text-center lg:text-center lg:items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 w-full">
          <div className="col-span-1 flex items-center justify-center sm:justify-start lg:justify-center">
            <h2 className="text-2xl sm:text-[32px] lg:text-[39px] text-[#043C48] text-center sm:text-left font-normal">
              Come lavoriamo
            </h2>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Siamo attenti alle esigenze specifiche del cliente
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Ottimizziamo i tempi di realizzazione e di gestione degli impianti
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Siamo veloci e affidabili, sempre: 7/7 e H24
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Investiamo in aggiornamento e tecnologie all’avanguardia
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Operiamo grazie a uno staff tecnico-operativo con know-how specializzato
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Utilizziamo un sistema di gestione della commessa per monitorare i processi, anche da remoto
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Adottiamo un approccio che prevede la Risk Analisys
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Abbiamo un magazzino interno che permette una veloce reperibilità dei pezzi necessari
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-48 w-48 sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] mx-auto rounded-full flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-[19px] text-white font-normal px-6 text-center">
              Garantiamo la sicurezza e la salute del nostro personale durante tutte le fasi di lavoro
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HowWeWork;
