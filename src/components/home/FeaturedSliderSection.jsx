import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import slider1 from '../../assets/home/slider-1.png'
import slider2 from '../../assets/home/slider-2.png'
import slider3 from '../../assets/home/slider-3.png'

const slides = [
  { id: 'slider-1', image: slider1, title: 'More Fast Charging' },
  { id: 'slider-2', image: slider2, title: 'Smart & Connected' },
  { id: 'slider-3', image: slider3, title: 'Safe & Reliable' },
]

export default function FeaturedSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideOffset, setSlideOffset] = useState(0) // -1 for next, +1 for prev, 0 for idle
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const N = slides.length

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideOffset(-1)

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % N)
      setSlideOffset(0)
      setIsAnimating(false)
    }, 550)
  }, [isAnimating, N])

  const handlePrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideOffset(1)

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + N) % N)
      setSlideOffset(0)
      setIsAnimating(false)
    }, 550)
  }, [isAnimating, N])

  const handleDotClick = (targetIndex) => {
    if (isAnimating || targetIndex === currentIndex) return
    const diff = (targetIndex - currentIndex + N) % N
    if (diff === 1) {
      handleNext()
    } else if (diff === N - 1) {
      handlePrev()
    } else {
      // Direct jump
      setIsAnimating(true)
      setSlideOffset(-1)
      setTimeout(() => {
        setCurrentIndex(targetIndex)
        setSlideOffset(0)
        setIsAnimating(false)
      }, 550)
    }
  }

  // Auto slide every 6 seconds when not animating
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [handleNext])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (diff > 50) {
      handlePrev()
    } else if (diff < -50) {
      handleNext()
    }
    touchStartX.current = null
  }

  // Card width percentage and gap
  const cardWidth = isMobile ? 86 : 72
  const gapRem = isMobile ? 1 : 1.5

  // Visible slots in the infinite carousel:
  // Slot 0: Prev slide (positioned offscreen to the left by 1 card)
  // Slot 1: Current active slide (aligned at 0)
  // Slot 2: Next slide (peeking on the right)
  // Slot 3: Incoming next slide
  const displayItems = [
    { ...slides[(currentIndex - 1 + N) % N], slotKey: 'prev' },
    { ...slides[currentIndex], slotKey: 'current' },
    { ...slides[(currentIndex + 1) % N], slotKey: 'next-1' },
    { ...slides[(currentIndex + 2) % N], slotKey: 'next-2' },
  ]

  // Base idle offset hides the Slot 0 (-1 card width - gap)
  // When sliding next (-1), moves to -2 cards
  // When sliding prev (+1), moves to 0 cards
  const baseTranslateIndex = 1 - slideOffset

  return (
    <section id="featured-lineup" className="py-12 sm:py-20 bg-white relative overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slider Carousel Container */}
        <div
          className="relative group"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/60 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 z-30 cursor-pointer shadow-lg active:scale-95 border border-white/10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/60 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 z-30 cursor-pointer shadow-lg active:scale-95 border border-white/10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Sliding Viewport with Right Peek */}
          <div className="overflow-hidden">
            <div
              className={`flex items-stretch gap-4 sm:gap-6 will-change-transform ${
                isAnimating
                  ? 'transition-transform duration-500 ease-out'
                  : 'transition-none'
              }`}
              style={{
                transform: `translateX(calc(-${baseTranslateIndex} * (${cardWidth}% + ${gapRem}rem)))`,
              }}
            >
              {displayItems.map((item, index) => (
                <div
                  key={`${item.slotKey}-${item.id}-${index}`}
                  style={{ width: `${cardWidth}%` }}
                  className="shrink-0 aspect-[1983/793] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-gray-100 transition-all duration-500"
                >
                  {/* High Resolution Cinematic Poster Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover block"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5 sm:mt-7">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2 bg-black'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
