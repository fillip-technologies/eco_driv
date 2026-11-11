import { useEffect, useRef } from 'react'
import { ArrowRight, Gauge, Clock, BatteryCharging } from 'lucide-react'
import gsap from 'gsap'
import apexHeroImg from '../../../assets/personal-mobility/model-hero-1.png'
import { DEFAULT_VEHICLE } from '../../../data/personalVehiclesData'

export default function ApexHeroSection({ onBookTestRide, vehicle = DEFAULT_VEHICLE }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    gsap.fromTo(
      el.querySelectorAll('.anim-fade'),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'all',
      }
    )

    gsap.fromTo(
      el.querySelectorAll('.anim-up'),
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1,
        ease: 'power2.out',
        clearProps: 'all',
      }
    )
  }, [vehicle?.id])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden bg-white select-none -mt-[88px] sm:-mt-[96px]"
    >
      {/* Full-Bleed Hero Image: Starts flush from the absolute top (y=0) behind floating navbar */}
      <img
        src={apexHeroImg}
        alt={`${vehicle.name} Full View Lineup`}
        className="anim-fade absolute inset-0 top-0 left-0 w-full h-full object-cover object-top pointer-events-none"
        loading="eager"
      />

      {/* Floating Bottom HUD: Only km/h, Total Hours, Charging Time + Action Button */}
      <div className="anim-up absolute bottom-4 sm:bottom-8 left-0 right-0 z-20 flex justify-center px-3 sm:px-4">
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl border border-gray-200/90 rounded-2xl sm:rounded-full px-3.5 sm:px-8 py-3 sm:py-3.5 shadow-[0_12px_45px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          
          {/* Metrics Row: 3 items (3-column grid on phone, flex on sm+) */}
          <div className="w-full sm:w-auto grid grid-cols-3 sm:flex sm:items-center sm:justify-start gap-1.5 sm:gap-7 md:gap-9">
            
            {/* 1. km/h (Top Speed) */}
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 justify-center sm:justify-start">
              <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-red-100/90 text-red-600 ring-2 ring-red-200/60 flex items-center justify-center shrink-0 shadow-xs">
                <Gauge className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2.75} />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] sm:text-2xl lg:text-3xl font-black font-sans text-black tracking-tight leading-none flex items-baseline">
                  {vehicle.topSpeed} <span className="text-[9px] sm:text-sm font-bold text-gray-800 font-sans ml-0.5">km/h</span>
                </div>
                <div className="text-[8.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider text-gray-700 mt-0.5 sm:mt-1 truncate">
                  Top Speed
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-300" />

            {/* 2. Total Hours (Ride Duration / Range) */}
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 justify-center sm:justify-start border-x border-gray-200/60 sm:border-x-0 px-1 sm:px-0">
              <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-amber-100/90 text-amber-600 ring-2 ring-amber-200/60 flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2.75} />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] sm:text-2xl lg:text-3xl font-black font-sans text-black tracking-tight leading-none flex items-baseline">
                  {vehicle.hours} <span className="text-[9px] sm:text-sm font-bold text-gray-800 font-sans ml-0.5">Hours</span>
                </div>
                <div className="text-[8.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider text-gray-700 mt-0.5 sm:mt-1 truncate">
                  Total Hours
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-300" />

            {/* 3. Charging Time */}
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 justify-center sm:justify-start">
              <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-emerald-100/90 text-emerald-600 ring-2 ring-emerald-200/60 flex items-center justify-center shrink-0 shadow-xs">
                <BatteryCharging className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2.75} />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] sm:text-2xl lg:text-3xl font-black font-sans text-black tracking-tight leading-none flex items-baseline">
                  {vehicle.chargingTime} <span className="text-[9px] sm:text-sm font-bold text-gray-800 font-sans ml-0.5">Min</span>
                </div>
                <div className="text-[8.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider text-gray-700 mt-0.5 sm:mt-1 truncate">
                  Charging Time
                </div>
              </div>
            </div>

          </div>

          <div className="hidden sm:block h-8 w-px bg-gray-300" />

          {/* Minimal Action CTA Button */}
          <button
            type="button"
            onClick={onBookTestRide}
            className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <span>Book Test Ride</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </section>
  )
}
