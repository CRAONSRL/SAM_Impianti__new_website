import Image from "next/image";
import logoBianco from "@/app/images/chi-siamo/logo-bianco.png";

const WhyUs = () => {
  return (
    <section id="perche-noi" className="w-full flex flex-col lg:flex-row gap-16 lg:gap-20 px-8 py-8 lg:py-20 relative"
    style={{
      background: `linear-gradient(to right, rgba(0, 141, 170, 1),rgba(0, 141, 170, 0.66), rgba(219, 220, 55, 0.66))`,
    }}>
      
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-7 lg:gap-10 items-center justify-center text-center lg:text-center lg:items-center">
        <div className="w-9/12">
          <h2 className="text-[40px] text-white text-left font-normal">
            Perché lavorare con noi?
          </h2>
          <p className="text-[20px] text-white text-left mt-10">
          Siamo una società giovane, con uno staff tecnico ed operativo altamente qualificato.<br />
          <b>Studiamo nuove tecnologie e aggiorniamo il nostro know-how per offrire soluzioni funzionali e coerenti con i prezzi di mercato.</b>
          </p>
        </div>
        <div className="w-3/12 flex items-center justify-center">
          <Image src={logoBianco} alt="Logo Bianco" width={100} height={100} />
        </div>
      </div>
      
    </section>
  );
};

export default WhyUs;
