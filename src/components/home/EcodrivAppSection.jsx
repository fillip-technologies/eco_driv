import { useState, useRef, useEffect } from 'react'
import {
  Bell,
  Menu,
  Power,
  Volume2,
  Shield,
  Mic,
  Key,
  Bluetooth,
  Wifi,
  ChevronRight,
  MapPin,
  Navigation,
  AlertTriangle,
  PhoneCall,
  Wrench,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  LocateFixed,
  Battery,
  Share2,
} from 'lucide-react'
import gsap from 'gsap'

const leftFeatures = [
  { id: 'status', label: 'Bike Status', align: 'self-end mr-6' },
  { id: 'swipe', label: 'Swipe Control', align: 'self-start ml-2' },
  { id: 'find', label: 'Find My Bike', align: 'self-end mr-4' },
  { id: 'tracking', label: 'Live Tracking', align: 'self-start ml-4' },
  { id: 'sos', label: 'SOS Alerts', align: 'self-end mr-8' },
]

const rightFeatures = [
  { id: 'voice', label: 'Voice Control', align: 'self-end mr-2' },
  { id: 'geofence', label: 'Geofencing', align: 'self-start ml-6' },
  { id: 'sound', label: 'Sound Control', align: 'self-end mr-4' },
  { id: 'key', label: 'Digital Key', align: 'self-start ml-2' },
  { id: 'support', label: 'Service & Support', align: 'self-end mr-2' },
]

export default function EcodrivAppSection() {
  const [activeFeature, setActiveFeature] = useState('status')
  const [rideMode, setRideMode] = useState('ECO')
  const [isSwiped, setIsSwiped] = useState(false)
  const [geofenceRadius, setGeofenceRadius] = useState(3)
  const [soundProfile, setSoundProfile] = useState('Blade Turbo')
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true

          const tl = gsap.timeline()
          tl.fromTo(
            el.querySelectorAll('.anim-app-text'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', clearProps: 'all' }
          )
            .fromTo(
              el.querySelector('.anim-app-phone'),
              { opacity: 0, scale: 0.94, y: 30 },
              { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all' },
              '-=0.4'
            )
            .fromTo(
              el.querySelectorAll('.anim-app-pill'),
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', clearProps: 'all' },
              '-=0.5'
            )
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      id="app"
      className="pt-10 sm:pt-16 pb-20 sm:pb-28 bg-[#FAFAFC] relative overflow-hidden select-none border-t border-gray-100/80"
    >
      {/* 1. Precision Tech Dot Matrix Grid with Soft Radial Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none opacity-65 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_60%,#000_20%,transparent_100%)]" />

      {/* 2. Concentric Orbit Rings Centered on Phone */}
      <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] pointer-events-none hidden sm:block">
        <div className="absolute inset-0 rounded-full border border-gray-300/40" />
        <div className="absolute inset-[14%] rounded-full border border-gray-300/30" />
        <div className="absolute inset-[28%] rounded-full border border-dashed border-gray-300/50 animate-[spin_160s_linear_infinite]" />
        <div className="absolute inset-[40%] rounded-full bg-gradient-to-tr from-gray-200/40 via-white/50 to-transparent blur-2xl" />
      </div>

      {/* 3. Soft Studio Spotlight Glow behind Phone */}
      <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[520px] bg-gradient-to-b from-gray-200/50 via-gray-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="anim-app-text text-3xl sm:text-4xl lg:text-[44px] font-bold font-sans text-gray-950 tracking-tight leading-[1.2] max-w-2xl mx-auto [text-wrap:balance]">
            Complete Control. Right in Your Pocket.
          </h2>

          <p className="anim-app-text text-sm sm:text-base text-gray-600 font-sans mt-3 leading-relaxed max-w-xl mx-auto [text-wrap:balance]">
            Track battery diagnostics, live GPS routes, customized ride audio, and start your ride with a single swipe.
          </p>
        </div>

        {/* Interactive App & Floating Badges Stage */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 max-w-5xl mx-auto min-h-[550px]">
          {/* Left Alternating Pills (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between h-[490px] flex-1 py-4">
            {leftFeatures.map((feat) => {
              const isActive = activeFeature === feat.id
              return (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => setActiveFeature(feat.id)}
                  className={`anim-app-pill px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-xs cursor-pointer ${
                    feat.align
                  } ${
                    isActive
                      ? 'bg-black text-white shadow-md scale-105 border border-black'
                      : 'bg-gray-100/90 text-gray-700 hover:bg-gray-200/90 border border-gray-200/60'
                  }`}
                >
                  {feat.label}
                </button>
              )
            })}
          </div>

          {/* Central Smartphone Frame Mockup */}
          <div className="anim-app-phone relative w-[310px] sm:w-[335px] rounded-[48px] p-3.5 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black shadow-2xl ring-1 ring-white/10 shrink-0">
            {/* Outer Titanium Edge Accent */}
            <div className="absolute inset-0 rounded-[48px] pointer-events-none ring-1 ring-inset ring-neutral-700/50" />

            {/* Inner Screen */}
            <div className="relative w-full h-[525px] rounded-[38px] bg-white overflow-hidden shadow-inner flex flex-col font-sans transition-all duration-300">
              {/* Phone Status Bar with Dynamic Island */}
              <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-bold text-gray-900 bg-white z-20 shrink-0">
                <span>02:31</span>
                {/* Dynamic Island */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                <div className="flex items-center gap-1.5 text-gray-800">
                  <Wifi className="w-3 h-3" />
                  <div className="w-4 h-2 rounded-xs border border-gray-800 flex items-center p-0.5">
                    <div className="w-full h-full bg-emerald-500 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Top App Bar */}
              <div className="px-5 py-2 flex items-center justify-between border-b border-gray-100 bg-white shrink-0">
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 rounded-md bg-black text-white flex items-center justify-center font-display font-black text-[9px] tracking-tighter">
                    E
                  </div>
                  <span className="font-display font-black text-xs tracking-wider text-gray-900">
                    ECODRIV
                  </span>
                </div>

                <div className="px-2.5 py-0.5 rounded-full bg-gray-100 border border-gray-200/80 text-[9px] font-mono font-medium text-gray-600">
                  SOS Assist
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Bell className="w-3.5 h-3.5" />
                  <Menu className="w-4 h-4" />
                </div>
              </div>

              {/* DYNAMIC SCREEN CONTENT ACCORDING TO ACTIVE TOPIC */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* SCREEN 1: Bike Status (Default Dashboard) */}
                {activeFeature === 'status' && (
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="px-5 pt-3 pb-2 bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-bold text-gray-900 tracking-tight">
                            ECODRIV 150
                          </span>
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                            <Bluetooth className="w-2.5 h-2.5" /> Connected
                          </span>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-500 font-sans mt-0.5 truncate">
                        Cyber City, Phase 2, Gurugram, India
                      </p>
                    </div>

                    <div className="px-5 py-2 bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-12 rounded-lg border-2 border-emerald-500 p-1 flex flex-col justify-end">
                            <div className="w-full h-full bg-emerald-500 rounded-xs" />
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-mono tracking-wider text-gray-400 block">
                              BATTERY
                            </span>
                            <span className="text-2xl font-black font-sans text-gray-900 leading-none">
                              100%
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1 items-end">
                          {['ECO', 'CITY', 'SPORT', 'REVERSE'].map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setRideMode(mode)}
                              className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded transition-all ${
                                rideMode === mode
                                  ? 'bg-black text-white'
                                  : 'text-gray-400 hover:text-gray-900'
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500">
                          EST. RANGE
                        </span>
                        <span className="text-sm font-extrabold font-mono text-gray-950">
                          150 <span className="text-[10px] text-gray-500 font-sans">KM</span>
                        </span>
                      </div>

                      <div className="mt-1 text-center">
                        <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">
                          LAST SYNC : TODAY, 02:31 PM
                        </span>
                      </div>
                    </div>

                    {/* Bottom Console */}
                    <div className="bg-neutral-950 text-white p-4 rounded-t-[28px] space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded-xl bg-neutral-900/80 border border-neutral-800">
                          <Volume2 className="w-3 h-3 text-red-500 mb-1" />
                          <div className="text-[8px] font-mono uppercase text-gray-400">SOUND</div>
                          <div className="text-[9px] font-bold text-white">REVOLT+</div>
                        </div>
                        <div className="p-2 rounded-xl bg-neutral-900/80 border border-neutral-800">
                          <Shield className="w-3 h-3 text-emerald-400 mb-1" />
                          <div className="text-[8px] font-mono uppercase text-gray-400">GEO-FENCE</div>
                          <div className="text-[9px] font-bold text-emerald-400">ACTIVE</div>
                        </div>
                      </div>

                      <div className="relative bg-neutral-900 border border-neutral-800 rounded-full p-1 flex items-center justify-between overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setIsSwiped(!isSwiped)}
                          className={`w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 cursor-pointer shadow-md ${
                            isSwiped ? 'translate-x-[180px] bg-emerald-400' : 'translate-x-0'
                          }`}
                        >
                          <Power className="w-3.5 h-3.5" />
                        </button>
                        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono font-bold tracking-wider text-gray-400 pointer-events-none">
                          {isSwiped ? 'IGNITION ON' : '>>> Swipe to Start'}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-600 mr-2" />
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 2: Swipe Control */}
                {activeFeature === 'swipe' && (
                  <div className="flex-1 flex flex-col justify-between p-5 bg-gradient-to-b from-gray-50 to-white">
                    <div className="text-center pt-2">
                      <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Power className={`w-7 h-7 transition-colors ${isSwiped ? 'text-emerald-400' : 'text-white'}`} />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 tracking-tight">
                        {isSwiped ? 'Powertrain Armed' : 'Keyless Remote Ignition'}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-1 max-w-[200px] mx-auto">
                        {isSwiped
                          ? 'Motor unlocked. Ready to throttle.'
                          : 'Slide the thumb slider to activate electric motor.'}
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-xs space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-mono text-gray-500">IGNITION STATE</span>
                        <span className={`font-bold font-mono ${isSwiped ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {isSwiped ? 'ONLINE • READY' : 'STANDBY LOCK'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-mono text-gray-500">ANTI-THEFT SYSTEM</span>
                        <span className="font-bold text-emerald-600">ENGAGED</span>
                      </div>
                    </div>

                    <div className="relative bg-neutral-950 border border-neutral-800 rounded-full p-1.5 flex items-center justify-between shadow-xl">
                      <button
                        type="button"
                        onClick={() => setIsSwiped(!isSwiped)}
                        className={`w-11 h-11 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 cursor-pointer shadow-lg z-10 ${
                          isSwiped ? 'translate-x-[185px] bg-emerald-400 text-black' : 'translate-x-0'
                        }`}
                      >
                        <Power className="w-5 h-5" />
                      </button>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold tracking-wider text-white/90 pointer-events-none">
                        {isSwiped ? 'POWER ACTIVE' : '>>> Slide To Start'}
                      </span>
                    </div>
                  </div>
                )}

                {/* SCREEN 3: Find My Bike */}
                {activeFeature === 'find' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-gray-50">
                    {/* Simulated Radar Map View */}
                    <div className="relative h-44 rounded-2xl bg-neutral-900 overflow-hidden border border-gray-200 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px]" />
                      <div className="absolute w-32 h-32 rounded-full border border-blue-500/20 animate-ping" />
                      <div className="absolute w-20 h-20 rounded-full border border-blue-500/40" />

                      <div className="relative flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg ring-4 ring-red-500/30">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-bold text-white bg-black/80 px-2 py-0.5 rounded-full mt-1">
                          Ecodriv 150
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 p-3 bg-white rounded-xl border border-gray-100 shadow-xs">
                      <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                        <span>Parking Bay B-14</span>
                        <span className="text-emerald-600 font-mono text-[10px]">180m away</span>
                      </div>
                      <p className="text-[10px] text-gray-500">Level 2, Cyber Hub Basement, Gurugram</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        className="py-2.5 px-3 rounded-xl bg-black text-white text-[10px] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Blink & Beep</span>
                      </button>
                      <button
                        type="button"
                        className="py-2.5 px-3 rounded-xl bg-gray-100 text-gray-900 text-[10px] font-bold flex items-center justify-center gap-1.5 border border-gray-200 active:scale-95 transition-all"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Navigate</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* SCREEN 4: Live Tracking */}
                {activeFeature === 'tracking' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-white">
                    <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-[11px] font-bold text-gray-900">GPS Live Telemetry</span>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                        ACTIVE RIDE
                      </span>
                    </div>

                    <div className="text-center py-2">
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                        CURRENT SPEED
                      </span>
                      <span className="text-4xl font-black font-sans text-gray-950 tracking-tight">
                        48 <span className="text-xs font-mono font-medium text-gray-500">km/h</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 text-center">
                        <span className="text-[8px] text-gray-400 block font-mono">TODAY DIST</span>
                        <span className="text-xs font-bold text-gray-900">14.2 km</span>
                      </div>
                      <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 text-center">
                        <span className="text-[8px] text-gray-400 block font-mono">AVG SPEED</span>
                        <span className="text-xs font-bold text-gray-900">36 km/h</span>
                      </div>
                      <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 text-center">
                        <span className="text-[8px] text-gray-400 block font-mono">TRIP TIME</span>
                        <span className="text-xs font-bold text-gray-900">28 min</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-neutral-900 text-white flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2">
                        <LocateFixed className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Route: Golf Course Road → Cyber City</span>
                      </div>
                      <span className="text-emerald-400 font-mono text-[9px]">4G LTE</span>
                    </div>
                  </div>
                )}

                {/* SCREEN 5: SOS Alerts */}
                {activeFeature === 'sos' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-red-50/40">
                    <div className="text-center pt-2">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg ring-4 ring-red-200">
                        <AlertTriangle className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs font-bold text-red-600 tracking-tight uppercase">
                        Emergency Safety Shield
                      </h4>
                      <p className="text-[10px] text-gray-600 mt-1 max-w-[200px] mx-auto">
                        FallSafe crash sensors & live emergency broadcasting active.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-xl bg-white border border-red-100 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-red-600" />
                          <div>
                            <div className="text-[10px] font-bold text-gray-900">FallSafe Detection</div>
                            <div className="text-[8px] text-gray-500">Auto cut-off upon tilt &gt; 60°</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                          ARMED
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-red-100 shadow-xs flex items-center justify-between">
                        <div className="text-[10px] font-bold text-gray-900">Emergency Contacts</div>
                        <span className="text-[9px] font-mono text-gray-600">3 Synced</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>24/7 Roadside Assist Hotline</span>
                    </button>
                  </div>
                )}

                {/* SCREEN 6: Voice Control */}
                {activeFeature === 'voice' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
                    <div className="text-center pt-3">
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                        ECODRIV AI ASSISTANT
                      </span>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        &ldquo;Listening to command...&rdquo;
                      </h4>
                    </div>

                    {/* Glowing Audio Waveform */}
                    <div className="flex items-center justify-center gap-1.5 h-16">
                      {[18, 36, 52, 24, 48, 60, 32, 20].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}px` }}
                          className="w-1.5 bg-gradient-to-t from-emerald-500 to-teal-300 rounded-full animate-pulse"
                        />
                      ))}
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[8px] font-mono text-gray-400 uppercase tracking-wider block">
                        SUGGESTED COMMANDS
                      </span>
                      <div className="p-2 rounded-lg bg-white/10 text-[9px] text-gray-200">
                        &ldquo;Navigate to nearest EcoGrid fast charger&rdquo;
                      </div>
                      <div className="p-2 rounded-lg bg-white/10 text-[9px] text-gray-200">
                        &ldquo;Check estimated battery range for home&rdquo;
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[9px] text-gray-400 pt-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>Powered by SmartStack Voice Engine</span>
                    </div>
                  </div>
                )}

                {/* SCREEN 7: Geofencing */}
                {activeFeature === 'geofence' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-white">
                    <div className="text-center pt-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2 border border-emerald-200">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-gray-900">Smart Safe Zone Perimeter</h4>
                      <p className="text-[9px] text-gray-500 mt-0.5">Instant phone buzzer if moved outside boundary</p>
                    </div>

                    {/* Geofence Perimeter Graphic */}
                    <div className="relative h-32 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-2 border-dashed border-emerald-500 bg-emerald-500/10 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-300" />
                      </div>
                      <span className="absolute bottom-2 text-[8px] font-mono text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                        Radius: {geofenceRadius} km
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-mono text-gray-500">BOUNDARY RADIUS</span>
                        <div className="flex gap-1">
                          {[1, 3, 5].map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => setGeofenceRadius(r)}
                              className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                                geofenceRadius === r
                                  ? 'bg-black text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {r} KM
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Security perimeter is armed & active.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 8: Sound Control */}
                {activeFeature === 'sound' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-neutral-950 text-white">
                    <div className="text-center pt-2">
                      <div className="w-10 h-10 rounded-full bg-white/10 text-red-500 flex items-center justify-center mx-auto mb-2">
                        <Volume2 className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-white tracking-tight">
                        Acoustic Synthesizer
                      </h4>
                      <p className="text-[9px] text-gray-400 mt-0.5">Pedestrian warning audio & throttle roar</p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest block">
                        AUDIO PROFILES
                      </span>
                      {['Blade Turbo', 'Warp Pulse', 'Stealth Silent', 'Sonic Roar'].map((profile) => (
                        <button
                          key={profile}
                          type="button"
                          onClick={() => setSoundProfile(profile)}
                          className={`w-full p-2 rounded-xl text-[10px] font-bold flex items-center justify-between transition-all ${
                            soundProfile === profile
                              ? 'bg-white text-black shadow-md'
                              : 'bg-neutral-900 text-gray-300 hover:bg-neutral-800'
                          }`}
                        >
                          <span>{profile}</span>
                          {soundProfile === profile && (
                            <span className="text-[8px] font-mono bg-black text-white px-1.5 py-0.5 rounded">
                              ACTIVE
                            </span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-[9px]">
                      <span className="text-gray-400 font-mono">EXTERIOR SPEAKER</span>
                      <span className="text-emerald-400 font-bold">78 dB (LEGAL)</span>
                    </div>
                  </div>
                )}

                {/* SCREEN 9: Digital Key */}
                {activeFeature === 'key' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-gradient-to-b from-gray-50 to-white">
                    <div className="text-center pt-1">
                      <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2 border border-amber-200">
                        <Key className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-gray-900">Smart Digital Key</h4>
                      <p className="text-[9px] text-gray-500 mt-0.5">Keyless unlock within 2m Bluetooth range</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-neutral-950 text-white space-y-2 shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-gray-400">PASSHOLDER</span>
                        <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded">
                          PRIMARY OWNER
                        </span>
                      </div>
                      <div className="text-base font-black font-mono tracking-wider">ECO-8492-KEY</div>
                      <div className="text-[8px] text-gray-400">NFC &amp; Ultra-Wideband Paired</div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 border border-gray-100 text-[10px]">
                        <span className="font-medium text-gray-800">Auto-Proximity Unlock</span>
                        <span className="font-bold text-emerald-600">ON</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 border border-gray-100 text-[10px]">
                        <span className="font-medium text-gray-800">Shared Family Keys</span>
                        <span className="text-gray-500 font-mono">2 Active</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full py-2.5 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Temporary Access</span>
                    </button>
                  </div>
                )}

                {/* SCREEN 10: Service & Support */}
                {activeFeature === 'support' && (
                  <div className="flex-1 flex flex-col justify-between p-4 bg-white">
                    <div className="text-center pt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2 border border-blue-200">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-gray-900">Diagnostics &amp; Health</h4>
                      <p className="text-[9px] text-gray-500 mt-0.5">Vehicle components operating normally</p>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <Battery className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="font-medium text-gray-800">Battery Health</span>
                        </div>
                        <span className="font-bold text-emerald-600">99% Optimal</span>
                      </div>

                      <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-[10px]">
                        <span className="font-medium text-gray-800">Tire Pressure (TPMS)</span>
                        <span className="font-mono text-gray-900 font-bold text-[9px]">F: 32 | R: 34 PSI</span>
                      </div>

                      <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-[10px]">
                        <span className="font-medium text-gray-800">Next Scheduled Service</span>
                        <span className="font-mono text-gray-600 text-[9px]">In 2,400 km</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full py-2.5 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                    >
                      <span>Book Doorstep Service</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Alternating Pills (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between h-[490px] flex-1 py-4">
            {rightFeatures.map((feat) => {
              const isActive = activeFeature === feat.id
              return (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => setActiveFeature(feat.id)}
                  className={`anim-app-pill px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-xs cursor-pointer ${
                    feat.align
                  } ${
                    isActive
                      ? 'bg-black text-white shadow-md scale-105 border border-black'
                      : 'bg-gray-100/90 text-gray-700 hover:bg-gray-200/90 border border-gray-200/60'
                  }`}
                >
                  {feat.label}
                </button>
              )
            })}
          </div>

          {/* Mobile Staggered Pills Carousel / Wrap */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 mt-4 px-2">
            {[...leftFeatures, ...rightFeatures].map((feat) => {
              const isActive = activeFeature === feat.id
              return (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => setActiveFeature(feat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 border border-gray-200/60'
                  }`}
                >
                  {feat.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
