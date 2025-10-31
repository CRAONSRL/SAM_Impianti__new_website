import Image from "next/image";
import logoGiallo from "@/app/images/home/logo-giallo.png";
import logoAzzurro from "@/app/images/home/logo-azzurro.png";
import Link from "next/link";

const ImpiantiMeccaniciElettrici = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 sm:px-8 py-12 lg:py-20 relative"
    style={{
      background: `linear-gradient(to right, rgba(0, 141, 170, 0.2), rgba(219, 220, 55, 0.2))`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-6 sm:gap-8 lg:gap-14 items-center justify-center text-center lg:text-center lg:items-center">
        <Link href="/elettrico" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[450px] h-[260px] sm:h-[320px] lg:h-[450px] bg-white flex items-center justify-center flex-col px-6">
          <Image src={logoGiallo} alt="Impianti Elettrici" width={100} height={100} className="mb-10"/>
          <h2 className="text-2xl sm:text-[32px] lg:text-[40px] text-[#043C48] leading-tight">
            impianti<br/>ELETTRICI
          </h2>
        </Link>
        <Link href="/meccanico" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[450px] h-[260px] sm:h-[320px] lg:h-[450px] bg-white flex items-center justify-center flex-col px-6">
          <Image src={logoAzzurro} alt="Impianti Meccanici" width={100} height={100} className="mb-10" />
          <h2 className="text-2xl sm:text-[32px] lg:text-[40px] text-[#043C48] leading-tight">
            impianti<br/>MECCANICI
          </h2>
        </Link>
      </div>
      
    </section>
  );
};

export default ImpiantiMeccaniciElettrici;
