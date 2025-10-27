import Image from "next/image";
import bottomBanner from "@/app/images/home/bottom-banner.jpeg";
import logo from "@/app/images/home/logo-bianco.png";

const Certification = () => {
  return (
    <section className="w-full bg-[#008DAA] flex flex-col lg:flex-row gap-16 lg:gap-20 px-8 py-8 lg:py-20 relative">
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div className="w-full lg:w-1/3">
          <h2 className="text-white text-[39px] -leading-6 font-bold">
            Le Nostre Certificazioni
          </h2>
        </div>
        <div className="w-2/3 flex lg:flex-row flex-col gap-10">
          <div className="w-[200px] h-[200px] bg-white rounded-[100px] flex items-center justify-center">
            <Image src="/files/certifications/ISO/BVCER_withAccredia-ISO 9001.png" alt="Certification" width={190} height={190} />
          </div>
          <div className="w-[200px] h-[200px] bg-white rounded-[100px] flex items-center justify-center">
            <Image src="/files/certifications/SOA/soalaghi___organismo_di_attestazione___spa_logo.jpeg" alt="Certification" width={140} height={140} />
          </div>
          <div className="w-[200px] h-[200px] bg-white rounded-[100px] flex items-center justify-center">
            <Image src="/files/certifications/AFOCERT/afocert-logo.png" alt="Certification" width={190} height={190} />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Certification;
