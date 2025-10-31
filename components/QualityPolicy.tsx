import bottomBanner from "@/app/images/chi-siamo/bottom-banner-new.jpg";
import texture from "@/app/images/chi-siamo/texture-logo-bianco.png";
import donwload from "@/app/images/chi-siamo/download.png";
import Image from "next/image";
import Link from "next/link";

//linear-gradient(to right, rgba(0, 141, 170, 0.66), rgba(0, 141, 170, 0.66), rgba(219, 220, 55, 0.66)),
const QualityPolicy = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 sm:px-8 py-14 lg:py-20 relative"
    style={{
      backgroundImage: `url(${bottomBanner.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* <Image src={texture} alt="Texture" width={1000} height={1000} className="absolute top-0 right-0 w-[50%] h-full " /> */}
      <div className="flex lg:flex-row flex-col w-full max-w-7xl mx-auto gap-8 lg:gap-14 items-center justify-between text-center lg:text-left">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-[36px] lg:text-[39px] text-white font-normal leading-tight">
            Politica<br/>di Qualità
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Link href="/files/Politica_della_Qualita_SAM_IMPIANTI_2023.pdf" target="_blank" download className="block">
            <div className="h-40 w-40 sm:h-[180px] sm:w-[180px] bg-white/90 rounded-full backdrop-blur-sm flex flex-col items-center justify-center transition-transform duration-300 hover:scale-[1.03]">
              <Image src={donwload} alt="Download" width={70} height={70} className="w-12 sm:w-[70px] h-auto" />
              <p className="text-lg sm:text-[23px] text-[#008DAA] font-normal mt-3">
                SCARICA
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
