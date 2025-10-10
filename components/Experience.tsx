import Image from "next/image";
import bottomBanner from "@/app/images/home/bottom-banner.jpeg";
import logo from "@/app/images/home/logo-bianco.png";

const Experience = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-16 lg:gap-20 px-8 py-8 lg:py-20 relative"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 60, 72, 0.57), rgba(0, 60, 72, 0.57)), url(${bottomBanner.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div className="w-[150px] h-[150px] justify-center items-center flex flex-col align-center">
          <Image src={logo} alt="Experience" width={100} height={100} />
        </div>
        <div className="w-auto">
          <h2 className="text-white text-[53px] -leading-6">
          Esperienza, tecnologia all’avanguardia,<br/>aggiornamento costante e conoscenza in<br/>campo normativo: <b>questo rende i nostri<br/>impianti sicuri e funzionali.</b>
          </h2>
        </div>
      </div>
      
    </section>
  );
};

export default Experience;
