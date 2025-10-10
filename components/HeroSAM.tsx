import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import topBanner from "@/app/images/home/top-banner.jpeg";

const HeroSAM = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-16 lg:gap-20 px-8 py-8 lg:py-20 relative"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 141, 170, 0.66), rgba(219, 220, 55, 0.66)), url(${topBanner.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      
      <div className="flex flex-col max-w-7xl mx-auto  gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="text-white text-[41px] font-semibold">
        IMPIANTI ELETTRICI E MECCANICI IN UN’UNICA SQUADRA
        </h1>
        <p className="text-white text-[23px]">
        Ci occupiamo della realizzazione e manutenzione di impianti industriali e residenziali nel settore idraulico,
        climatizzazione, riscaldamento, gas, antincendio ed elettrico.<br/>Competenza professionale e solido background ci permettono di curare l’esecuzione delle opere fino al<br/>collaudo finale.<br/>
<span className="font-semibold">Progettiamo soluzioni per aziende, privati e Pubbliche Amministrazioni, garantendo sempre la stessa<br/>attenzione e qualità.</span>
        </p>
      </div>
      
    </section>
  );
};

export default HeroSAM;
