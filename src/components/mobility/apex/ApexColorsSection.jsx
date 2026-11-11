import { useState, useRef, useEffect } from 'react'
import { PhoneCall } from 'lucide-react'
import gsap from 'gsap'
import { DEFAULT_VEHICLE } from '../../../data/personalVehiclesData'

import whiteScooterImg from '../../../assets/personal-mobility/view-2.png'
import redScooterImg from '../../../assets/models/scooty-2.png'
import blueScooterImg from '../../../assets/models/scooty-3.png'
import blackScooterImg from '../../../assets/models/scooty-1.png'

const COLOR_GROUPS = [
  {
    groupLabel: 'Mono',
    colors: [
      {
        id: 'cosmic-black',
        name: 'Cosmic Black',
        swatchBg: '#18181B',
        swatchBorder: '#3F3F46',
        image: blackScooterImg,
        imgScale: 'max-h-[320px] sm:max-h-[380px] lg:max-h-[420px]',
      },
      {
        id: 'racing-red',
        name: 'True Red',
        swatchBg: '#DC2626',
        swatchBorder: '#B91C1C',
        image: redScooterImg,
        imgScale: 'max-h-[290px] sm:max-h-[350px] lg:max-h-[380px]',
      },
    ],
  },
  {
    groupLabel: 'Overtones',
    colors: [
      {
        id: 'polar-white',
        name: 'Polar White',
        swatchBg: '#FFFFFF',
        swatchBorder: '#D1D5DB',
        image: whiteScooterImg,
        imgScale: 'max-h-[320px] sm:max-h-[380px] lg:max-h-[420px]',
      },
      {
        id: 'lunar-grey',
        name: 'Lunar Grey',
        swatchBg: '#64748B',
        swatchBorder: '#475569',
        image: blackScooterImg,
        imgScale: 'max-h-[320px] sm:max-h-[380px] lg:max-h-[420px]',
        customFilter: 'grayscale(0.6) brightness(1.2)',
      },
    ],
  },
  {
    groupLabel: 'Signature',
    colors: [
      {
        id: 'hyper-blue',
        name: 'Hyper Blue',
        swatchBg: '#0EA5E9',
        swatchBorder: '#0284C7',
        image: blueScooterImg,
        imgScale: 'max-h-[290px] sm:max-h-[350px] lg:max-h-[380px]',
      },
      {
        id: 'ecodriv-green',
        name: 'Ecodriv Green',
        swatchBg: '#2B9346',
        swatchBorder: '#227637',
        image: whiteScooterImg,
        imgScale: 'max-h-[320px] sm:max-h-[380px] lg:max-h-[420px]',
        customFilter: 'hue-rotate(95deg) saturate(1.2)',
      },
    ],
  },
]

export default function ApexColorsSection({ onBookTestRide, vehicle = DEFAULT_VEHICLE }) {
  const [selectedColor, setSelectedColor] = useState(COLOR_GROUPS[0].colors[0])
  const imageRef = useRef(null)

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.96, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      )
    }
  }, [selectedColor, vehicle?.id])

  return (
    <section className="relative w-full py-8 sm:py-12 bg-black select-none">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-6">
        
        {/* =========================================================================
            STUDIO BOX (EXACT ATHER REFERENCE DESIGN)
           ========================================================================= */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#EEEEF0] via-[#E6E7EB] to-[#DCDEE3] border border-white/40 shadow-2xl p-4 sm:p-8 min-h-[460px] sm:min-h-[540px] flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Wall-to-Floor Horizon Perspective Line */}
          <div className="absolute inset-x-0 top-0 h-[65%] bg-gradient-to-b from-[#F2F3F5] to-[#E5E6EA] pointer-events-none" />
          <div className="absolute inset-x-0 top-[65%] h-px bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />

          {/* ==================== CENTER: SCOOTER SHOWCASE ==================== */}
          <div className="relative z-10 my-auto w-full flex items-center justify-center py-4">
            
            {/* Ground Contact Cast Shadow */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[70%] max-w-[520px] h-6 bg-black/20 blur-xl rounded-full pointer-events-none" />
            <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 w-[50%] max-w-[380px] h-3 bg-black/30 blur-sm rounded-full pointer-events-none" />

            {/* Scooter Graphic */}
            <div ref={imageRef} className="relative z-10 flex items-center justify-center">
              <img
                src={selectedColor.image}
                alt={`${vehicle.name} - ${selectedColor.name}`}
                className={`w-auto max-w-full object-contain pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.14)] ${selectedColor.imgScale}`}
                style={selectedColor.customFilter ? { filter: selectedColor.customFilter } : undefined}
                loading="eager"
              />
            </div>
          </div>

          {/* ==================== BOTTOM: COLOR CONFIGURATOR & ACTION ==================== */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            
            {/* Active Color Tooltip Name (Ather Reference Style) */}
            <div className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-sm text-xs font-bold text-gray-900 tracking-tight">
              {selectedColor.name}
            </div>

            {/* Grouped Swatches Pill Container */}
            <div className="flex items-center gap-3 sm:gap-6 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-md max-w-full overflow-x-auto">
              {COLOR_GROUPS.map((group) => (
                <div key={group.groupLabel} className="flex flex-col items-center gap-1.5 shrink-0">
                  
                  {/* Swatches Row */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {group.colors.map((c) => {
                      const isSelected = c.id === selectedColor.id
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedColor(c)}
                          className={`relative w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all cursor-pointer ${
                            isSelected
                              ? 'ring-2 ring-offset-2 ring-black scale-110 shadow-md'
                              : 'hover:scale-110 opacity-80 hover:opacity-100'
                          }`}
                          style={{
                            backgroundColor: c.swatchBg,
                            border: `1.5px solid ${c.swatchBorder}`,
                          }}
                          title={c.name}
                        />
                      )
                    })}
                  </div>

                  {/* Group Label */}
                  <span className="text-[10px] font-medium text-gray-500 font-sans tracking-tight">
                    {group.groupLabel}
                  </span>

                </div>
              ))}
            </div>

          </div>

          {/* ==================== REQUEST CALL BACK (CLEAN MOBILE + DESKTOP ADAPTIVE) ==================== */}
          <div className="relative z-20 w-full flex justify-center mt-3 sm:mt-0 sm:w-auto sm:absolute sm:bottom-6 sm:right-6">
            <button
              type="button"
              onClick={onBookTestRide}
              className="px-5 py-2 sm:py-2.5 rounded-full bg-white/95 hover:bg-white text-gray-900 border border-gray-200/90 shadow-sm hover:shadow-md text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gray-700" />
              <span>Request a call back</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
