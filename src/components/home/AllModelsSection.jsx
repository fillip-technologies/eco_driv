import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import formScooterImg from '../../assets/home/form-image.png'
import scootyImg from '../../assets/models/scooty-1.png'
import scooty2Img from '../../assets/models/scooty-2.png'
import scooty3Img from '../../assets/models/scooty-3.png'
import threeWheelerImg from '../../assets/models/3-wheeler.png'

const twoWheelers = [
  { id: 'apex', name: 'Ecodriv Apex', image: formScooterImg, href: '/apex' },
  { id: 'glide', name: 'Ecodriv Glide', image: scooty3Img, href: '/glide' },
  { id: '450', name: 'Ecodriv 450', image: scootyImg, href: '/450' },
  { id: '250', name: 'Ecodriv 250', image: scooty2Img, href: '/250' },
  { id: '200', name: 'Ecodriv 200', image: scootyImg, href: '/200' },
  { id: '150', name: 'Ecodriv 150', image: scooty3Img, href: '/150' },
]

const threeWheelers = [
  { id: 'cargo-150', name: 'Ecodriv Cargo 150', image: threeWheelerImg, href: '/cargo-150' },
  { id: 'cargo-200', name: 'Ecodriv Cargo 200', image: threeWheelerImg, href: '/cargo-200' },
  { id: 'loader-250', name: 'Ecodriv Loader 250', image: threeWheelerImg, href: '/loader-250' },
  { id: 'delivery-300', name: 'Ecodriv Delivery 300', image: threeWheelerImg, href: '/delivery-300' },
  { id: 'auto-350', name: 'Ecodriv Auto 350', image: threeWheelerImg, href: '/cargo-150' },
  { id: 'cargo-hd', name: 'Ecodriv Cargo HD', image: threeWheelerImg, href: '/cargo-150' },
  { id: 'max-500', name: 'Ecodriv Max 500', image: threeWheelerImg, href: '/cargo-150' },
]

export default function AllModelsSection() {
  const [category, setCategory] = useState('2w') // '2w' | '3w'
  const currentModels = category === '2w' ? twoWheelers : threeWheelers
  const N = currentModels.length

  const [activeIndex, setActiveIndex] = useState(2) // Defaults to 3rd model
  const [slideOffset, setSlideOffset] = useState(0) // -1 for sliding left (next), +1 for sliding right (prev), 0 for idle
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const handleCategoryChange = (newCategory) => {
    if (category === newCategory || isAnimating) return
    setCategory(newCategory)
    setActiveIndex(0)
    setSlideOffset(0)
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Slide one by one to Next model
  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideOffset(-1)

    // Complete the slide smoothly before settling into the new active index
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % N)
      setSlideOffset(0)
      setIsAnimating(false)
    }, 300)
  }

  // Slide one by one to Previous model
  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideOffset(1)

    // Complete the slide smoothly before settling into the new active index
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + N) % N)
      setSlideOffset(0)
      setIsAnimating(false)
    }, 300)
  }

  // 7 slots around activeIndex: [-3, -2, -1, 0, 1, 2, 3]
  // Pre-loaded slots outside both sides so there is NEVER any empty space
  const slots = [-3, -2, -1, 0, 1, 2, 3]

  // Translation calculation:
  // Desktop: 5 visible items (20% each). Center slot is at index 3 in the 7-slot strip. Base translate is -20%.
  // Mobile: 3 visible items (33.333% each). Center slot is at index 3 in the 7-slot strip. Base translate is -66.666%.
  const slotWidthPercent = isMobile ? 33.3333 : 20
  const baseTranslate = isMobile ? -66.6666 : -20
  const currentTranslate = baseTranslate + slideOffset * slotWidthPercent

  return (
    <section id="all-models" className="py-8 sm:py-10 bg-[#F4F4F6] relative overflow-hidden select-none border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Tabs */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 tracking-tight">
            All models
          </h2>

          {/* 2-Wheelers / 3-Wheelers Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-gray-200/80 mt-4 border border-gray-300/60 shadow-inner">
            <button
              type="button"
              onClick={() => handleCategoryChange('2w')}
              className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                category === '2w'
                  ? 'bg-white text-gray-950 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              2 Wheelers
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('3w')}
              className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                category === '3w'
                  ? 'bg-white text-gray-950 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              3 Wheelers
            </button>
          </div>
        </div>

        {/* Carousel Container with Left/Right Arrows */}
        <div className="relative flex items-center justify-between gap-1 sm:gap-3 max-w-6xl mx-auto">
          {/* Left Arrow Button (Master Green) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous model"
            className="p-1 sm:p-3 text-[#2B9346] hover:text-[#227637] hover:scale-120 active:scale-95 transition-all z-20 shrink-0 cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 sm:w-9 sm:h-9 stroke-[2.5]" />
          </button>

          {/* Masked Window: Exactly 5 models visible on desktop, 3 on mobile */}
          <div className="flex-1 overflow-hidden pt-4 pb-1 relative">
            {/* Sliding Track: Slides one-by-one with zero jumping */}
            <div
              className="flex items-end will-change-transform"
              style={{
                transform: `translateX(${currentTranslate}%)`,
                transition: isAnimating ? 'transform 300ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
              }}
            >
              {slots.map((offset) => {
                const modelIdx = (activeIndex + offset + N * 10) % N
                const item = currentModels[modelIdx]
                const isCenter = offset === 0

                return (
                  <div
                    key={`${category}-${offset}-${modelIdx}`}
                    onClick={() => {
                      if (offset === 1) handleNext()
                      else if (offset === -1) handlePrev()
                      else if (offset > 1 || offset < -1) {
                        setActiveIndex((prev) => (prev + offset + N * 10) % N)
                      }
                    }}
                    style={{ width: `${slotWidthPercent}%` }}
                    className={`shrink-0 flex flex-col items-center justify-end text-center cursor-pointer transition-opacity duration-300 px-0.5 sm:px-2 ${
                      isCenter
                        ? 'opacity-100 z-10'
                        : Math.abs(offset) === 1
                        ? 'opacity-65 hover:opacity-90'
                        : 'opacity-40 hover:opacity-75'
                    }`}
                  >
                    {/* Vehicle Image (Center Links Directly to Vehicle Page) */}
                    {isCenter ? (
                      <Link
                        to={item.href}
                        className="relative w-full flex items-center justify-center min-h-[160px] sm:min-h-[185px] md:min-h-[225px] mb-3 sm:mb-4 group"
                        title={`View ${item.name}`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full max-w-[210px] sm:max-w-[260px] md:max-w-[290px] object-contain transition-all duration-300 scale-170 sm:scale-145 -translate-y-2 sm:-translate-y-2 drop-shadow-2xl z-10 group-hover:scale-175 sm:group-hover:scale-150"
                        />
                      </Link>
                    ) : (
                      <div className="relative w-full flex items-center justify-center min-h-[160px] sm:min-h-[185px] md:min-h-[225px] mb-3 sm:mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full max-w-[210px] sm:max-w-[260px] md:max-w-[290px] object-contain transition-all duration-300 scale-95 sm:scale-90 hover:scale-100 drop-shadow-sm"
                        />
                      </div>
                    )}

                    {/* Model Label (Master Green Color + Direct Link) */}
                    <div className="w-full text-center pb-2">
                      <Link
                        to={item.href}
                        className={`text-xs sm:text-sm md:text-base font-display font-black tracking-wide block transition-colors ${
                          isCenter
                            ? 'text-[#2B9346] hover:text-[#227637] hover:underline'
                            : 'text-[#2B9346]/70 hover:text-[#2B9346]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Fixed Center Active Indicator Bar (Master Green) */}
            <div className="w-full flex justify-center mt-1">
              <div className="w-16 sm:w-24 h-[3.5px] bg-[#2B9346] rounded-full shadow-xs" />
            </div>
          </div>

          {/* Right Arrow Button (Master Green) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next model"
            className="p-1 sm:p-3 text-[#2B9346] hover:text-[#227637] hover:scale-120 active:scale-95 transition-all z-20 shrink-0 cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-6 h-6 sm:w-9 sm:h-9 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  )
}
