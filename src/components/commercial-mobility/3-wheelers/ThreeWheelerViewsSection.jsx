import { useState, useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import vehicles1Img from '../../../assets/3-wheelers/vehicles-1.png'
import { DEFAULT_COMMERCIAL_3W } from '../../../data/commercialVehiclesData'

// Custom sleek vehicle orientation icons
function FrontIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="18" r="3" />
      <path d="M7 6h10" />
      <path d="M12 6v6" />
      <path d="M8.5 12h7l-1 3.5h-5z" />
      <circle cx="7" cy="5" r="1" />
      <circle cx="17" cy="5" r="1" />
    </svg>
  )
}

function RearIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="18" r="3" />
      <path d="M7 7h10" />
      <path d="M6 10h12" />
      <path d="M8.5 13.5h7" />
      <circle cx="12" cy="4.5" r="1.5" />
    </svg>
  )
}

function SideIcon({ className = 'w-5 h-5', flip = false }) {
  return (
    <svg className={`${className} ${flip ? '-scale-x-100' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 18h4l3-7h3" />
      <path d="M16 8l1-3h3" />
      <path d="M9 11h4" />
    </svg>
  )
}

function TopIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="4" ry="8" />
      <path d="M8 7h8" />
      <path d="M10 17h4" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  )
}

const ALL_VIEWS = [
  {
    id: 'front',
    label: 'Front View',
    image: vehicles1Img,
    icon: FrontIcon,
    stageClass: 'max-h-[340px] sm:max-h-[400px] lg:max-h-[440px]',
    thumbClass: 'max-h-[85px] sm:max-h-[95px]',
  },
  {
    id: 'rear',
    label: 'Rear View',
    image: vehicles1Img,
    icon: RearIcon,
    stageClass: 'max-h-[340px] sm:max-h-[400px] lg:max-h-[440px]',
    thumbClass: 'max-h-[85px] sm:max-h-[95px]',
  },
  {
    id: 'left',
    label: 'Left View',
    image: vehicles1Img,
    icon: SideIcon,
    flipIcon: false,
    stageClass: 'max-h-[320px] sm:max-h-[380px] lg:max-h-[420px]',
    thumbClass: 'max-h-[80px] sm:max-h-[90px]',
  },
  {
    id: 'right',
    label: 'Right View',
    image: vehicles1Img,
    icon: SideIcon,
    flipIcon: true,
    stageClass: 'max-h-[320px] sm:max-h-[380px] lg:max-h-[420px]',
    thumbClass: 'max-h-[80px] sm:max-h-[90px]',
  },
  {
    id: 'top',
    label: 'Top View',
    image: vehicles1Img,
    icon: TopIcon,
    stageClass: 'max-h-[280px] sm:max-h-[340px] lg:max-h-[370px]',
    thumbClass: 'max-h-[70px] sm:max-h-[80px]',
  },
]

export default function ThreeWheelerViewsSection({ vehicle = DEFAULT_COMMERCIAL_3W }) {
  const [activeId, setActiveId] = useState('left')
  const centerImgRef = useRef(null)

  const activeView = ALL_VIEWS.find((v) => v.id === activeId) || ALL_VIEWS[0]
  const otherViews = ALL_VIEWS.filter((v) => v.id !== activeId)

  // Smooth GSAP animation on view change
  useEffect(() => {
    if (centerImgRef.current) {
      gsap.fromTo(
        centerImgRef.current,
        { opacity: 0, scale: 0.94, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      )
    }
  }, [activeId, vehicle?.id])

  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-[#EBF8EE]/60 via-[#F7FAF8] to-white overflow-hidden select-none">
      
      {/* Background Soft Glow Accents in Logo Colors */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2B9346]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#85C440]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER (EXACT BRAND STYLE WITH MASTER GREEN ACCENTS)
           ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
            Explore in <span className="text-[#2B9346]">All Angles</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 font-medium">
            Take a closer look at the {vehicle.name} from every perspective.
          </p>
        </div>

        {/* =========================================================================
            3-COLUMN LAYOUT (LEFT LIST, CENTER PODIUM, RIGHT 2X2 GRID)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ==================== LEFT COLUMN: VERTICAL LIST ==================== */}
          <div className="lg:col-span-3 flex flex-col gap-3 order-2 lg:order-1">
            {ALL_VIEWS.map((view) => {
              const isActive = view.id === activeId
              const IconComp = view.icon
              return (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setActiveId(view.id)}
                  className={`w-full h-[58px] sm:h-[62px] px-5 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2B9346] to-[#85C440] text-white shadow-[0_10px_25px_rgba(43,147,70,0.35)] scale-[1.02]'
                      : 'bg-white hover:bg-gray-50/80 text-[#1E293B] border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'text-white' : 'text-[#334155]'
                      }`}
                    >
                      <IconComp className="w-5 h-5" flip={view.flipIcon} />
                    </div>
                    <span className="font-bold text-sm sm:text-[15px] tracking-tight">
                      {view.label}
                    </span>
                  </div>

                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-white shrink-0" strokeWidth={3} />
                  )}
                </button>
              )
            })}
          </div>

          {/* ==================== CENTER COLUMN: PODIUM SHOWCASE ==================== */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] flex items-center justify-center order-1 lg:order-2 py-4">
            
            {/* Background Circular Halo Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full border-2 border-emerald-100/80 bg-gradient-to-b from-emerald-50/40 to-transparent pointer-events-none" />

            {/* 3D Circular Display Podium (Pedestal) in Logo Emerald & Lime */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[380px] h-[64px] sm:h-[78px] pointer-events-none">
              {/* Outer soft glow ring */}
              <div className="absolute inset-0 rounded-[100%] bg-emerald-200/50 blur-lg transform scale-110" />
              {/* Top pedestal disc */}
              <div className="absolute inset-0 rounded-[100%] bg-gradient-to-b from-white via-[#EBF9EE] to-[#D5F2DB] border-2 border-emerald-300/90 shadow-[0_12px_35px_rgba(43,147,70,0.18)]" />
              {/* Inner accent ring */}
              <div className="absolute inset-2 sm:inset-3 rounded-[100%] border border-emerald-400/50" />
              {/* Ground tire shadow */}
              <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-44 sm:w-56 h-5 bg-black/25 blur-md rounded-[100%]" />
            </div>

            {/* Active 3-Wheeler Image */}
            <div className="relative z-10 flex items-center justify-center w-full px-4">
              <img
                ref={centerImgRef}
                src={activeView.image}
                alt={`${vehicle.name} - ${activeView.label}`}
                className={`w-auto max-w-full object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.14)] ${activeView.stageClass}`}
                loading="eager"
              />
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: 2X2 THUMBNAIL GRID ==================== */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5 sm:gap-4 order-3">
            {otherViews.map((view) => (
              <button
                key={view.id}
                type="button"
                onClick={() => setActiveId(view.id)}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-xl p-3 sm:p-4 flex flex-col items-center justify-between cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-emerald-300 group"
              >
                {/* Thumbnail Image Container */}
                <div className="h-24 sm:h-28 w-full flex items-center justify-center p-1 overflow-hidden">
                  <img
                    src={view.image}
                    alt={view.label}
                    className={`w-auto max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 ${view.thumbClass}`}
                    loading="lazy"
                  />
                </div>

                {/* Thumbnail Label */}
                <span className="font-bold text-xs sm:text-sm text-[#1E293B] group-hover:text-[#2B9346] transition-colors mt-2">
                  {view.label}
                </span>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

