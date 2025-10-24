import bottomBanner from "@/app/images/chi-siamo/bottom-banner.jpeg";
import texture from "@/app/images/chi-siamo/texture-logo-bianco.png";
import donwload from "@/app/images/chi-siamo/download.png";
import Image from "next/image";
import Link from "next/link";


const QualityPolicy = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-16 lg:gap-20 px-8 py-8 lg:py-20 relative h-[22rem]"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 141, 170, 0.66), rgba(0, 141, 170, 0.66), rgba(219, 220, 55, 0.66)),url(${bottomBanner.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%',
      backgroundRepeat: 'no-repeat'
    }}>
      <Image src={texture} alt="Texture" width={1000} height={1000} className="absolute top-0 right-0 w-[50%] h-full " />
      <div className="flex lg:flex-row w-full flex-col max-w-7xl mx-auto gap-10 lg:gap-14 items-left justify-start text-left lg:text-left lg:items-start">
        <div className="flex flex-row gap-10 w-1/3 items-center absolute justify-around">
          <div className="w-1/2 flex items-center justify-center h-full">
            <h2 className="text-[39px] text-white text-left font-normal">Politica<br/>di Qualità</h2>
          </div>
          <div className="w-1/2">
            <Link href="/public/files/Politica_della_Qualita_SAM_IMPIANTI_2023.pdf" target="_blank" download>
            <div className="h-[180px] w-[180px] bg-white rounded-full">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <Image src={donwload} alt="Download" width={75} height={75} />
                <p className="text-[23px] text-[#008DAA] text-left font-normal">
                  SCARICA
                </p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
