import React, { useEffect, useRef, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
  typeName?: string
  autoClickDotIndex?: number // New prop to specify which dot to auto-click
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, typeName, autoClickDotIndex } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [allSlidesLoaded, setAllSlidesLoaded] = useState(false)
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(new Set())
  const dotsRef = useRef<HTMLDivElement>(null)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  // Track when each slide image is loaded
  const handleImageLoad = (slideIndex: number) => {
    setLoadedSlides(prev => {
      const newSet = new Set(prev)
      newSet.add(slideIndex)
      return newSet
    })
  }

  // Check if all slides are loaded
  useEffect(() => {
    if (loadedSlides.size === slides.length && slides.length > 0) {
      setAllSlidesLoaded(true)
    }
  }, [loadedSlides, slides.length])

  // Auto-click the specified dot when all slides are loaded
  useEffect(() => {
    if (allSlidesLoaded && autoClickDotIndex !== undefined && dotsRef.current) {
      // Using your exact selector logic but with React refs
      const dots = dotsRef.current
      if (dots && dots.childNodes[autoClickDotIndex]) {
        const targetDot = dots.childNodes[autoClickDotIndex] as HTMLElement
        if (targetDot && typeof targetDot.click === 'function') {
          // Small delay to ensure everything is properly rendered
          setTimeout(() => {
            targetDot.click()
          }, 100)
        }
      }
    }
  }, [allSlidesLoaded, autoClickDotIndex])

  // Programmatic method to click a specific dot (alternative approach)
  const clickDotByIndex = (index: number) => {
    if (allSlidesLoaded && dotsRef.current) {
      const dots = dotsRef.current
      if (dots && dots.childNodes[index]) {
        const targetDot = dots.childNodes[index] as HTMLElement
        if (targetDot && typeof targetDot.click === 'function') {
          targetDot.click()
        }
      }
    }
  }

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slideUrl, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Image 
                  src={slideUrl} 
                  alt={`Slide ${index}`} 
                  fill
                  style={{ objectFit: 'cover' }}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div 
          className={`embla__dots ${typeName || ''}`}
          ref={dotsRef}
        >
          {scrollSnaps.map((_: any, index: number) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel;
