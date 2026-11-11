import { useState, useRef, useEffect } from 'react'
import { PhoneCall } from 'lucide-react'
import gsap from 'gsap'

import redVehicleImg from '../../../assets/3-wheelers/vehicles-1.png'
import greenVehicleImg from '../../../assets/3-wheelers/green-color.png'
import yellowVehicleImg from '../../../assets/3-wheelers/yellow-color.png'
import { DEFAULT_COMMERCIAL_3W } from '../../../data/commercialVehiclesData'

const COLOR_OPTIONS = [
  {
    id: 'commercial-red',
    name: 'Commercial Red',
    swatchBg: '#DC2626',
    swatchBorder: '#B91C1C',
    image: redVehicleImg,
    imgScale: 'max-h-[300px] sm:max-h-[380px] lg:max-h-[420px]',
  },
  {
    id: 'ecodriv-green',
    name: 'Ecodriv Green',
    swatchBg: '#2B9346',
    swatchBorder: '#227637',
    image: greenVehicleImg,
    imgScale: 'max-h-[300px] sm:max-h-[380px] lg:max-h-[420px]',
  },
  {
    id: 'fleet-yellow',
    name: 'Fleet Yellow',
    swatchBg: '#EAB308',
    swatchBorder: '#CA8A04',
    image: yellowVehicleImg,
    imgScale: 'max-h-[300px] sm:max-h-[380px] lg:max-h-[420px]',
  },
]

export default function ThreeWheelerColorsSection({ onBookTestRide, vehicle = DEFAULT_COMMERCIAL_3W }) {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]) // Default Red
  const imageRef = useRef(null)

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      )
    }
  }, [selectedColor, vehicle?.id])

  return (
    <section className="relative w-full py-8 sm:py-14 bg-black select-none border-t border-gray-900">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-6">
        
        {/* =========================================================================
            STUDIO BOX (EXACT ATHER REFERENCE DESIGN)
           ========================================================================= */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#EEEEF0] via-[#E6E7EB] to-[#DCDEE3] border border-white/40 shadow-2xl p-4 sm:p-8 min-h-[480px] sm:min-h-[560px] flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Wall-to-Floor Horizon Perspective Line */}
          <div className="absolute inset-x-0 top-0 h-[65%] bg-gradient-to-b from-[#F2F3F5] to-[#E5E6EA] pointer-events-none" />
          <div className="absolute inset-x-0 top-[65%] h-px bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />

          {/* ==================== CENTER: 3-WHEELER SHOWCASE ==================== */}
          <div className="relative z-10 my-auto w-full flex items-center justify-center py-4 sm:py-6">
            
            {/* Ground Contact Cast Shadow */}
            <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 w-[75%] max-w-[560px] h-7 bg-black/20 blur-xl rounded-full pointer-events-none" />
            <div className="absolute bottom-4 sm:bottom-7 left-1/2 -translate-x-1/2 w-[55%] max-w-[420px] h-4 bg-black/30 blur-sm rounded-full pointer-events-none" />

            {/* 3-Wheeler Graphic */}
            <div ref={imageRef} className="relative z-10 flex items-center justify-center">
              <img
                src={selectedColor.image}
                alt={`${vehicle.name} - ${selectedColor.name}`}
                className={`w-auto max-w-full object-contain pointer-events-none drop-shadow-[0_22px_32px_rgba(0,0,0,0.18)] ${selectedColor.imgScale}`}
                loading="eager"
              />
            </div>
          </div>

          {/* ==================== BOTTOM: COLOR CONFIGURATOR & ACTION ==================== */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            
            {/* Active Color Tooltip Name */}
            <div className="px-4 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-sm text-xs font-bold text-gray-900 tracking-tight">
              {selectedColor.name}
            </div>

            {/* Swatches Pill Container */}
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-md">
              {COLOR_OPTIONS.map((c) => {
                const isSelected = c.id === selectedColor.id
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-offset-2 ring-black scale-110 shadow-md'
                        : 'hover:scale-110 opacity-80 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: c.swatchBg,
                      border: `2px solid ${c.swatchBorder}`,
                    }}
                    title={c.name}
                  />
                )
              })}
            </div>

          </div>

          {/* ==================== REQUEST CALL BACK ACTION ==================== */}
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

