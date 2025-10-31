// import Image from "next/image";
// import Link from "next/link";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./embla/EmblaCarousel";
import './embla/embla.css'

const OPTIONS: EmblaOptionsType = {
  align: 'start',
  dragFree: true,
  direction: 'ltr',
  loop: true
}

const SLIDES = [
  '/images/team-idraulico/001.jpeg',
  '/images/team-idraulico/002.jpeg',
  '/images/team-idraulico/003.jpeg',
  '/images/team-idraulico/004.jpeg',
  '/images/team-idraulico/005.jpeg',
  '/images/team-idraulico/006.jpeg',
];
const SLIDES_2 = [
  '/images/team-elettrico/004.jpeg',
  '/images/team-elettrico/003.jpeg',
  '/images/team-elettrico/002.jpeg',
  '/images/team-elettrico/001.jpeg',
];
const SLIDES_3 = [
  '/images/team-amministrativo/001.jpeg',
  '/images/team-amministrativo/002.jpeg',
  '/images/team-amministrativo/003.jpeg',
  '/images/team-amministrativo/004.jpeg',
  '/images/team-amministrativo/005.jpeg',
  '/images/team-amministrativo/006.jpeg',
  '/images/team-amministrativo/007.jpeg',
];

const TeamSlides = () => {
  return (
    <section className="w-full flex flex-col gap-8 lg:gap-10 px-6 sm:px-8 py-12 lg:py-20" id="la-squadra">
      <h2 className="text-3xl sm:text-[39px] text-[#008DAA] text-center w-full">
        La squadra
      </h2>
      <div className="flex flex-col max-w-7xl mx-auto gap-4 lg:gap-5 bg-white w-full px-4 sm:px-6 py-6 sm:py-8 rounded-2xl">
        <h2 className="text-xl sm:text-[27px] font-bold text-[#008DAA]">Team Impianti Meccanici</h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} typeName="meccanica" autoClickDotIndex={0} />
      </div>
      <div className="flex flex-col max-w-7xl mx-auto gap-4 lg:gap-5 bg-white w-full px-4 sm:px-6 py-6 sm:py-8 rounded-2xl">
        <h2 className="text-xl sm:text-[27px] font-bold text-[#008DAA]">Team Impianti Elettrici</h2>
        <EmblaCarousel slides={SLIDES_2} options={OPTIONS} typeName="elettrico" autoClickDotIndex={0} />
      </div>
      <div className="flex flex-col max-w-7xl mx-auto gap-4 lg:gap-5 bg-white w-full px-4 sm:px-6 py-6 sm:py-8 rounded-2xl">
        <h2 className="text-xl sm:text-[27px] font-bold text-[#008DAA]">Uffici</h2>
        <EmblaCarousel slides={SLIDES_3} options={OPTIONS} typeName="amministrazione" autoClickDotIndex={0} />
      </div>
    </section>
  );
};

export default TeamSlides;
