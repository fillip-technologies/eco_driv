import { useEffect, useRef } from 'react'
import { Route, Zap, Smartphone, ShieldCheck } from 'lucide-react'
import gsap from 'gsap'

const features = [
  {
    id: 'range',
    title: 'Long Range',
    description: 'Go further with an efficient battery built for everyday use.',
    icon: Route,
  },
  {
    id: 'charging',
    title: 'Fast Charging',
    description: 'Get back on the road quickly with convenient charging options.',
    icon: Zap,
  },
  {
    id: 'connectivity',
    title: 'Smart Connectivity',
    description: 'Stay in control with connected features and ride updates.',
    icon: Smartphone,
  },
  {
    id: 'safety',
    title: 'Advanced Safety',
    description: 'Ride with confidence with reliable braking and safety systems.',
    icon: ShieldCheck,
  },
]

export default function WhyEcodrivSection() {
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
            el.querySelectorAll('.anim-text'),
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              clearProps: 'all',
            }
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
      id="why-ecodriv"
      className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50/50 via-white to-sky-50/40 relative overflow-hidden select-none border-y border-gray-100"
    >
      {/* Soft Ambient Color Glows (No Grids, No Lines) */}
      <div className="absolute -top-32 right-10 w-[550px] h-[550px] bg-emerald-400/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[500px] h-[500px] bg-sky-400/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-300/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Eyebrow with Black Bar & Text */}
          <div className="anim-text flex items-center gap-2 mb-3">
            <span className="w-1 h-3.5 bg-black rounded-full inline-block" />
            <span className="text-xs font-mono font-bold tracking-widest text-gray-900 uppercase">
              WHY ECODRIV
            </span>
          </div>

          {/* Title */}
          <h2 className="anim-text text-3xl sm:text-4xl lg:text-[42px] font-bold font-sans text-gray-950 tracking-tight leading-tight">
            Smart Features. Simple Rides.
          </h2>

          {/* Subtitle */}
          <p className="anim-text text-sm sm:text-base text-gray-600 font-sans mt-2 max-w-2xl leading-relaxed">
            Thoughtfully designed features that make every ride smarter, safer, and more convenient.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="bg-white/85 backdrop-blur-md border border-gray-200/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-400/60 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Edge Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container with Smooth Hover Transition */}
                <div className="anim-text mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-100/90 border border-gray-200/70 flex items-center justify-center text-gray-900 group-hover:bg-gray-950 group-hover:text-white group-hover:border-gray-950 transition-all duration-300 shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[1.85]" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="anim-text">
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-gray-950 tracking-tight mb-2 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

