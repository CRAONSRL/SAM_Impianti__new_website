import Image from "next/image";
import bottomBanner from "@/app/images/home/bottom-banner.jpeg";
import logo from "@/app/images/home/logo-bianco.png";

const Certification = () => {
  return (
    <section className="w-full bg-[#008DAA] flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 sm:px-8 py-12 lg:py-20 relative">
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-8 sm:gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div className="w-full lg:w-1/3">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-[39px] -leading-6 font-bold">
            Le Nostre Certificazioni
          </h2>
        </div>
        <div className="w-full lg:w-2/3 flex lg:flex-row flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-[200px] lg:h-[200px] bg-white rounded-full flex items-center justify-center">
            <Image src="/files/certifications/ISO/BVCER_withAccredia-ISO 9001.png" alt="Certification" width={190} height={190} className="w-20 sm:w-28 lg:w-[190px] h-auto" />
          </div>
          <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-[200px] lg:h-[200px] bg-white rounded-full flex items-center justify-center">
            <Image src="/files/certifications/SOA/soalaghi___organismo_di_attestazione___spa_logo.jpeg" alt="Certification" width={140} height={140} className="w-16 sm:w-24 lg:w-[140px] h-auto" />
          </div>
          <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-[200px] lg:h-[200px] bg-white rounded-full flex items-center justify-center">
            <Image src="/files/certifications/AFOCERT/afocert-logo.png" alt="Certification" width={190} height={190} className="w-20 sm:w-28 lg:w-[190px] h-auto" />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Certification;
