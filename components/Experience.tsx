import Image from "next/image";
import bottomBanner from "@/app/images/home/bottom-banner.jpeg";
import logo from "@/app/images/home/logo-bianco.png";

const Experience = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 sm:px-8 py-12 lg:py-20 relative"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 60, 72, 0.57), rgba(0, 60, 72, 0.57)), url(${bottomBanner.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-6 sm:gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-[150px] lg:h-[150px] justify-center items-center flex flex-col align-center">
          <Image src={logo} alt="Experience" width={100} height={100} />
        </div>
        <div className="w-full lg:w-auto px-2">
          <h2 className="text-white text-xl sm:text-3xl lg:text-[53px] leading-normal sm:leading-snug lg:-leading-6">
          Esperienza, tecnologia all’avanguardia,<br/>aggiornamento costante e conoscenza in<br/>campo normativo: <b>questo rende i nostri<br/>impianti sicuri e funzionali.</b>
          </h2>
        </div>
      </div>
      
    </section>
  );
};

export default Experience;
