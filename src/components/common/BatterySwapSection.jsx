import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  MapPin,
  BatteryCharging,
  Zap,
  Clock,
  Wallet,
  ShieldCheck,
  Truck,
  ArrowLeftRight,
} from 'lucide-react'
import indofastLogo from '../../assets/personal-mobility/indofast.svg'
import yumaLogo from '../../assets/personal-mobility/yuma-image-removebg-preview.png'

// Swap network partners. The Indofast logo is lime-yellow and disappears on white,
// so it sits on a dark tile; the blue Yuma logo sits on a white tile.
const SWAP_PARTNERS = [
  {
    id: 'indofast',
    name: 'Indofast Energy',
    logo: indofastLogo,
    tileClass: 'bg-[#0F172A] border-[#0F172A]',
    logoClass: 'h-10 sm:h-12',
  },
  {
    id: 'yuma',
    name: 'Yuma Energy',
    logo: yumaLogo,
    tileClass: 'bg-white border-gray-200',
    logoClass: 'h-16 sm:h-20',
  },
]

const STEPS = [
  { id: 'locate', icon: MapPin, title: 'Find a Station', text: 'Locate the nearest swap station in the app.' },
  { id: 'swap', icon: BatteryCharging, title: 'Swap the Battery', text: 'Drop your used pack, pick up a fully charged one.' },
  { id: 'ride', icon: Zap, title: 'Ride On', text: 'Back on the road in minutes — no waiting to charge.' },
]

// Copy that changes between personal and business pages
const VARIANTS = {
  personal: {
    title: 'Never Wait to Charge.',
    highlight: 'Just Swap & Ride.',
    subtitle: (name) =>
      `Your ${name} works with partner battery swapping networks, so a full battery is always just a quick stop away.`,
    benefits: [
      { id: 'time', icon: Clock, title: 'Swap in Minutes', text: 'Quicker than a petrol refill.' },
      { id: 'cost', icon: Wallet, title: 'Pay As You Ride', text: 'Flexible plans for your budget.' },
      { id: 'health', icon: ShieldCheck, title: 'Healthy Packs', text: 'Checked and maintained for you.' },
    ],
  },
  business: {
    title: 'Zero Downtime',
    highlight: 'for Your Fleet.',
    subtitle: (name) =>
      `Keep every ${name} earning. Swap batteries between shifts instead of parking vehicles to charge.`,
    benefits: [
      { id: 'uptime', icon: Truck, title: 'Maximum Uptime', text: 'Vehicles stay on the road.' },
      { id: 'cost', icon: Wallet, title: 'Lower Running Cost', text: 'Predictable per-swap pricing.' },
      { id: 'health', icon: ShieldCheck, title: 'Managed Batteries', text: 'The network maintains the packs.' },
    ],
  },
}

// Vertical swappable battery pack graphic
function BatteryPack({ level, tone, animated = false, label, sublabel }) {
  const isFull = tone === 'full'
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Terminal cap */}
        <div className={`mx-auto w-10 sm:w-12 h-2.5 rounded-t-md ${isFull ? 'bg-[#2B9346]/60' : 'bg-gray-300'}`} />
        {/* Shell */}
        <div
          className={`relative w-24 sm:w-28 h-40 sm:h-48 rounded-2xl border-2 p-1.5 bg-white ${
            isFull ? 'border-[#2B9346]/60 shadow-[0_12px_36px_rgba(43,147,70,0.25)]' : 'border-gray-200 shadow-sm'
          }`}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
            {/* Fill */}
            <div
              className={`absolute inset-x-0 bottom-0 rounded-xl ${
                isFull
                  ? 'bg-gradient-to-t from-[#2B9346] via-[#4CB963] to-[#85C440]'
                  : 'bg-gradient-to-t from-[#DC2626] to-[#F97316] swap-low-pulse'
              } ${animated ? 'swap-fill' : ''}`}
              style={{ height: `${level}%` }}
            >
              {isFull && <div className="absolute inset-0 swap-shimmer" />}
            </div>
            {/* Cell lines */}
            <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-px bg-white/60" />
              ))}
            </div>
            {/* Bolt */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap
                className={`w-7 h-7 sm:w-8 sm:h-8 ${isFull ? 'text-white drop-shadow' : 'text-gray-300'}`}
                fill="currentColor"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-3 text-2xl sm:text-3xl font-black font-mono ${isFull ? 'text-[#2B9346]' : 'text-[#EA580C]'}`}>
        {label}
      </div>
      <div className="text-[11px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
        {sublabel}
      </div>
    </div>
  )
}

export default function BatterySwapSection({ vehicle, variant = 'personal' }) {
  const containerRef = useRef(null)
  const copy = VARIANTS[variant] || VARIANTS.personal
  const vehicleName = vehicle?.name || 'Ecodriv'

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let hasAnimated = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true
          gsap.fromTo(
            el.querySelectorAll('.anim-swap'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'power2.out', clearProps: 'all' }
          )
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      id="battery-swap"
      className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-[#F3FAF5] via-white to-white overflow-hidden border-t border-gray-100"
    >
      <style>{`
        @keyframes swapFill { 0%, 8% { height: 14%; } 55%, 100% { height: 100%; } }
        @keyframes swapShimmer { 0% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }
        @keyframes swapLowPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.45; } }
        @keyframes swapSpin { to { transform: rotate(360deg); } }
        .swap-fill { animation: swapFill 4.5s ease-in-out infinite; }
        .swap-shimmer { background: linear-gradient(to top, transparent, rgba(255,255,255,0.45), transparent); animation: swapShimmer 2.2s linear infinite; }
        .swap-low-pulse { animation: swapLowPulse 1.6s ease-in-out infinite; }
        .swap-ring { animation: swapSpin 14s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .swap-fill, .swap-shimmer, .swap-low-pulse, .swap-ring { animation: none; }
        }
      `}</style>

      {/* Background: soft brand glows + faint grid */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#2B9346]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-[#85C440]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.35] bg-[linear-gradient(to_right,#E5EDE8_1px,transparent_1px),linear-gradient(to_bottom,#E5EDE8_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_30%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ================= LEFT: Copy, benefits, partners ================= */}
          <div className="lg:col-span-6">
            <h2 className="anim-swap text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0F172A] tracking-tight font-sans leading-[1.05]">
              {copy.title}
              <br />
              <span className="bg-gradient-to-r from-[#2B9346] via-[#5DAE3E] to-[#85C440] bg-clip-text text-transparent">
                {copy.highlight}
              </span>
            </h2>

            <p className="anim-swap mt-5 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
              {copy.subtitle(vehicleName)}
            </p>

            {/* Benefits */}
            <div className="anim-swap mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {copy.benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.id}
                    className="rounded-2xl bg-white border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-3 sm:p-4 hover:border-[#2B9346]/30 hover:shadow-[0_10px_24px_rgba(43,147,70,0.12)] transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#2B9346]/10 text-[#2B9346] flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-bold text-gray-950 leading-snug">{b.title}</div>
                    <div className="hidden sm:block text-xs text-gray-500 leading-relaxed mt-0.5">{b.text}</div>
                  </div>
                )
              })}
            </div>

            {/* Partners */}
            <div className="anim-swap mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                  Swap Network Partners
                </span>
                <span className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
                {SWAP_PARTNERS.map((partner) => (
                  <div
                    key={partner.id}
                    className={`h-20 sm:h-24 rounded-2xl border flex items-center justify-center px-4 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ${partner.tileClass}`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      className={`w-auto max-w-full object-contain ${partner.logoClass}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT: Swap station visual ================= */}
          <div className="anim-swap lg:col-span-6">
            <div className="relative rounded-[32px] bg-white border border-gray-100 p-6 sm:p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              {/* Station header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#2B9346] flex items-center justify-center">
                    <BatteryCharging className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-950 leading-tight">Swap Station</div>
                    <div className="text-[11px] text-gray-500">Partner network</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2B9346]/10 text-[#2B9346] text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2B9346] animate-pulse" />
                  Live
                </span>
              </div>

              {/* Batteries on a soft green stage */}
              <div className="mt-6 sm:mt-8 rounded-3xl bg-gradient-to-b from-[#F3FAF5] to-[#EAF6EE] border border-emerald-100/80 py-8 sm:py-10 flex items-center justify-center gap-4 sm:gap-8">
                <BatteryPack level={14} tone="low" label="14%" sublabel="Your Battery" />

                {/* Swap control */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 -mt-12">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2B9346]/40 swap-ring" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#2B9346] to-[#85C440] flex items-center justify-center shadow-[0_10px_24px_rgba(43,147,70,0.35)]">
                    <ArrowLeftRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                <BatteryPack level={100} tone="full" animated label="100%" sublabel="Fresh Battery" />
              </div>

              {/* How it works */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="relative grid grid-cols-3 gap-2 sm:gap-4">
                  {/* Connector line */}
                  <div className="absolute top-5 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#2B9346]/10 via-[#2B9346]/40 to-[#2B9346]/10" />
                  {STEPS.map((step, idx) => {
                    const Icon = step.icon
                    return (
                      <div key={step.id} className="relative flex flex-col items-center text-center">
                        <div className="relative w-10 h-10 rounded-full bg-white border border-[#2B9346]/40 text-[#2B9346] flex items-center justify-center shadow-sm">
                          <Icon className="w-4.5 h-4.5" />
                          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#2B9346] text-white text-[10px] font-black flex items-center justify-center">
                            {idx + 1}
                          </span>
                        </div>
                        <div className="mt-3 text-xs sm:text-sm font-bold text-gray-950">{step.title}</div>
                        <div className="hidden sm:block text-[11px] text-gray-500 leading-relaxed mt-1 max-w-[150px]">
                          {step.text}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
