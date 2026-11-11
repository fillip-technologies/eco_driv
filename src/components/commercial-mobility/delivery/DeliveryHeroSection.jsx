import { useRef, useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, ArrowRight, Gauge, Clock, PackageCheck } from 'lucide-react'
import gsap from 'gsap'
import deliveryVideo from '../../../assets/commerical-mobility/2-commerical-hero.mp4'
import { DEFAULT_COMMERCIAL_2W } from '../../../data/commercialVehiclesData'

export default function DeliveryHeroSection({ onBookTestRide, vehicle = DEFAULT_COMMERCIAL_2W }) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    gsap.fromTo(
      el.querySelectorAll('.anim-fade'),
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all',
      }
    )

    gsap.fromTo(
      el.querySelectorAll('.anim-up'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.15,
        ease: 'power2.out',
        clearProps: 'all',
      }
    )
  }, [vehicle?.id])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden bg-black select-none -mt-[88px] sm:-mt-[96px]"
    >
      {/* Full-bleed edge-to-edge Video */}
      <video
        ref={videoRef}
        src={deliveryVideo}
        autoPlay
        muted
        loop
        playsInline
        className="anim-fade absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle Cinematic Vignette Overlays for crisp readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

      {/* Floating Video Controls — Top Right */}
      <div className="anim-fade absolute top-28 sm:top-32 right-6 sm:right-8 z-30 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition active:scale-95 cursor-pointer shadow-lg"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition active:scale-95 cursor-pointer shadow-lg"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Floating Bottom HUD: Telemetry Metrics + Action CTA */}
      <div className="anim-up absolute bottom-4 sm:bottom-8 left-0 right-0 z-20 flex justify-center px-3 sm:px-4">
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl border border-gray-200/90 rounded-2xl sm:rounded-full px-3.5 sm:px-8 py-3 sm:py-3.5 shadow-[0_12px_45px_rgba(0,0,0,0.2)] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          
          {/* Metrics Row: 3 Commercial Telemetry Items (3-column grid on phone, flex on sm+) */}
          <div className="w-full sm:w-auto grid grid-cols-3 sm:flex sm:items-center sm:justify-start gap-1.5 sm:gap-7 md:gap-9">
            
            {/* 1. Top Speed */}
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 justify-center sm:justify-start">
              <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-emerald-100/90 text-emerald-700 ring-2 ring-emerald-200/60 flex items-center justify-center shrink-0 shadow-xs">
                <Gauge className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2.5} />
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

            {/* 2. Range / Ride Duration */}
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 justify-center sm:justify-start border-x border-gray-200/60 sm:border-x-0 px-1 sm:px-0">
              <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-amber-100/90 text-amber-600 ring-2 ring-amber-200/60 flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] sm:text-2xl lg:text-3xl font-black font-sans text-black tracking-tight leading-none flex items-baseline">
                  {vehicle.trueRange.replace(' km', '')} <span className="text-[9px] sm:text-sm font-bold text-gray-800 font-sans ml-0.5">km</span>
                </div>
                <div className="text-[8.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider text-gray-700 mt-0.5 sm:mt-1 truncate">
                  True Range
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-300" />

            {/* 3. Payload Capacity */}
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 justify-center sm:justify-start">
              <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-blue-100/90 text-blue-700 ring-2 ring-blue-200/60 flex items-center justify-center shrink-0 shadow-xs">
                <PackageCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5" strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] sm:text-2xl lg:text-3xl font-black font-sans text-black tracking-tight leading-none flex items-baseline">
                  {vehicle.payload.replace(' kg', '')} <span className="text-[9px] sm:text-sm font-bold text-gray-800 font-sans ml-0.5">kg</span>
                </div>
                <div className="text-[8.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider text-gray-700 mt-0.5 sm:mt-1 truncate">
                  Max Payload
                </div>
              </div>
            </div>

          </div>

          <div className="hidden sm:block h-8 w-px bg-gray-300" />

          {/* Action CTA Button */}
          <button
            type="button"
            onClick={onBookTestRide}
            className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <span>Book Fleet Test Ride</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </section>
  )
}

