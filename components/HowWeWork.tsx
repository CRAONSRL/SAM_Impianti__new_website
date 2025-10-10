import Image from "next/image";
import logoBianco from "@/app/images/chi-siamo/logo-bianco.png";

const HowWeWork = () => {
  return (
    <section id="come-lavoriamo" className="w-full flex flex-col lg:flex-row gap-16 lg:gap-20 px-8 py-8 lg:py-20 relative bg-white">
      
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-7 lg:gap-10 items-center justify-center text-center lg:text-center lg:items-center">
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-10 w-full">
          <div className="col-span-1">
            <h2 className="text-[39px] text-[#043C48] text-left font-normal flex items-center justify-center">
              Come lavoriamo
            </h2>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
              Siamo attenti alle esigenze specifiche del cliente
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
              Ottimizziamo i tempi di realizzazione e di gestione degli impianti
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
              Siamo veloci e affidabili, sempre: 7/7 e H24
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
              Investiamo in aggiornamento e tecnologie all’avanguardia
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
              Operiamo grazie a uno staff tecnico-operativo con know-how specializzato
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
              Utilizziamo un sistema di gestione della commessa per monitorare i processi, anche da remoto
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
              Adottiamo un approccio che prevede la Risk Analisys
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
              Abbiamo un magazzino interno che permette una veloce reperibilità dei pezzi necessari
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-[#008DAA] h-[250px] w-[250px] rounded-full flex items-center justify-center">
              <p className="text-[19px] text-white font-normal p-10">
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
