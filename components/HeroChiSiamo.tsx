import Image from "next/image";
import logoGiallo from "@/app/images/chi-siamo/logo-giallo.png";
import logoAzzurro from "@/app/images/chi-siamo/logo-azzurro.png";
import logoSfumato from "@/app/images/chi-siamo/logo-sfumato.png";
import background from "@/app/images/chi-siamo/top-banner.jpeg";
import Link from "next/link";

const HeroChiSiamo = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 sm:px-8 py-12 lg:py-20 relative"
    style={{
      background: `url(${background.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%',
      backgroundRepeat: 'no-repeat'
    }}>
      
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-6 sm:gap-8 lg:gap-10 items-center justify-center text-center lg:text-center lg:items-center">
        <div className="w-full max-w-xs sm:max-w-sm lg:w-[500px] h-[280px] sm:h-[360px] lg:h-[450px] p-8 sm:p-10 bg-white flex items-center justify-center flex-col">
          <Image src={logoAzzurro} alt="La squadra" width={75} height={75} className="mb-10" />
          <h2 className="text-2xl sm:text-[32px] lg:text-[40px] text-[#043C48]">
            La squadra
          </h2>
          <Link href="/chi-siamo#la-squadra">
            <div className="text-[#008DAA] text-sm sm:text-md border border-[#008DAA] rounded-full px-6 sm:px-8 py-3 sm:py-4 mt-8 hover:text-[#FFFFFF] hover:bg-[#008DAA] transition-all duration-300">
              leggi
            </div>
          </Link>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm lg:w-[500px] h-[280px] sm:h-[360px] lg:h-[450px] p-8 sm:p-10 bg-white flex items-center justify-center flex-col">
          <Image src={logoGiallo} alt="Perchè noi" width={75} height={75} className="mb-10"/>
          <h2 className="text-2xl sm:text-[32px] lg:text-[40px] text-[#043C48]">
            Perchè noi
          </h2>
          <Link href="/chi-siamo#perche-noi">
            <div className="text-[#008DAA] text-sm sm:text-md border border-[#008DAA] rounded-full px-6 sm:px-8 py-3 sm:py-4 mt-8 hover:text-[#FFFFFF] hover:bg-[#008DAA] transition-all duration-300">
              leggi
            </div>
          </Link>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm lg:w-[500px] h-[280px] sm:h-[360px] lg:h-[450px] p-8 sm:p-10 bg-white flex items-center justify-center flex-col">
            <Image src={logoSfumato} alt="Come lavoriamo" width={75} height={75} className="mb-10"/>
          <h2 className="text-2xl sm:text-[32px] lg:text-[40px] text-[#043C48]">
            Come lavoriamo
          </h2>
          <Link href="/chi-siamo#come-lavoriamo">
            <div className="text-[#008DAA] text-sm sm:text-md border border-[#008DAA] rounded-full px-6 sm:px-8 py-3 sm:py-4 mt-8 hover:text-[#FFFFFF] hover:bg-[#008DAA] transition-all duration-300">
              leggi
            </div>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default HeroChiSiamo;
