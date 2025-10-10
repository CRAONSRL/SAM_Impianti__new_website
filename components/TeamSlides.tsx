// import Image from "next/image";
// import Link from "next/link";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./embla/EmblaCarousel";
import './embla/embla.css'

const OPTIONS: EmblaOptionsType = {
  align: 'end',
  dragFree: true,
  direction: 'rtl',
  loop: true
}
const SLIDE_COUNT = Math.floor(Math.random() * 5) + 5
const SLIDE_COUNT_2 = Math.floor(Math.random() * 5) + 5
const SLIDE_COUNT_3 = Math.floor(Math.random() * 5) + 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const SLIDES_2 = Array.from(Array(SLIDE_COUNT_2).keys())
const SLIDES_3 = Array.from(Array(SLIDE_COUNT_3).keys())

const TeamSlides = () => {
  return (
    <section className="w-full flex flex-col gap-8 lg:gap-10 px-8 py-8 lg:py-20" id="la-squadra">
      <h2 className="text-[39px] text-[#008DAA] text-center w-full">
        La squadra
      </h2>
      <div className="flex flex-col max-w-7xl mx-auto gap-3 lg:gap-5 bg-white w-full">
        <h2 className="text-[27px] font-bold text-[#008DAA]">Team Meccanica</h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="flex flex-col max-w-7xl mx-auto gap-3 lg:gap-5 bg-white w-full">
        <h2 className="text-[27px] font-bold text-[#008DAA]">Team Elettrico</h2>
        <EmblaCarousel slides={SLIDES_2} options={OPTIONS} />
      </div>
      <div className="flex flex-col max-w-7xl mx-auto gap-3 lg:gap-5 bg-white w-full">
        <h2 className="text-[27px] font-bold text-[#008DAA]">Amministrazione</h2>
        <EmblaCarousel slides={SLIDES_3} options={OPTIONS} />
      </div>
    </section>
  );
};

export default TeamSlides;
