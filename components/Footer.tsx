import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import icon from "@/app/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-[#043C48] border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="lg:w-1/3 w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={icon}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-32"
                width={250}
                height={250}
              />
            </Link>

            <p className="hidden lg:block mt-3 text-sm text-white/60">
              Copyright © {new Date().getFullYear()} - All rights reserved<br/>
              <Link href="/privacy-policy" className="text-white">Privacy Policy</Link><br />Designed By&nbsp;
              <Link href="https://www.officinacreativa25.com" target="_blank" className="text-white">Officina Creativa 25</Link> &&nbsp; 
              <Link href="https://www.craon.it" target="_blank" className="text-white">Craon S.r.l.</Link>
            </p>

          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/4 w-full px-4">
              <div className="text-white text-sm md:text-left mb-2">
                Sede operativa:
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <span className="new-line text-white text-sm md:text-left -mt-1">Via 1° Maggio 87</span>
                <span className="new-line text-white text-sm md:text-left -mt-1">Concorezzo</span>
                <span className="new-line text-white text-sm md:text-left -mt-1">20863 (MB) Italia</span>
              </div>
            </div>

            <div className="lg:w-1/4 w-full px-4">
              <div className="text-white text-sm md:text-left mb-2">
                Sede legale:
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <span className="new-line text-white text-sm md:text-left -mt-1">Via G. de Castilla, 7</span>
                <span className="new-line text-white text-sm md:text-left -mt-1">Vimercate</span>
                <span className="new-line text-white text-sm md:text-left -mt-1">20871 (MB) Italia</span>
              </div>
            </div>

            <div className="lg:w-1/4 w-full px-4">
              <div className="text-white text-sm md:text-left mb-2">
                Contatti:
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <span className="new-line text-white text-sm md:text-left -mt-1">039 648 451</span>
                <span className="new-line text-white text-sm md:text-left -mt-1">segreteria@samimp.it</span>
                <span className="new-line text-white text-sm md:text-left -mt-1">P.IVA 10314060962</span>
              </div>
            </div>

          </div>

          <div className="lg:hidden flex flex-row justify-center items-center gap-2 text-center mt-10">
            <p className="mt-3 text-sm text-white/60">
              Copyright © {new Date().getFullYear()} - All rights reserved<br/>
              <Link href="/privacy-policy" className="text-white">Privacy Policy</Link><br />Designed By&nbsp;
              <Link href="https://www.officinacreativa25.com" target="_blank" className="text-white">Officina Creativa 25</Link> &&nbsp; 
              <Link href="https://www.craon.it" target="_blank" className="text-white">Craon S.r.l.</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
