import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import modernElectricImg from '../../assets/home/Modern-Electric.png'

export default function PerformanceSection() {
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
            el.querySelector('.anim-perf-img'),
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', clearProps: 'all' }
          )
            .fromTo(
              el.querySelectorAll('.anim-perf-text'),
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', clearProps: 'all' },
              '-=0.4'
            )
            .fromTo(
              el.querySelectorAll('.anim-perf-stat'),
              { opacity: 0, scale: 0.95, y: 15 },
              { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', clearProps: 'all' },
              '-=0.3'
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
      id="performance"
      className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white relative overflow-hidden select-none"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Smart Dashboard Image */}
          <div className="lg:col-span-6 anim-perf-img">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-gray-100">
              <img
                src={modernElectricImg}
                alt="Ecodriv Smart Dashboard"
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Performance Specs and Copy */}
          <div className="lg:col-span-6 space-y-5">
            {/* Eyebrow with Red Bar */}
            <div className="anim-perf-text flex items-center gap-2">
              <span className="w-1 h-3.5 bg-red-600 rounded-full inline-block" />
              <span className="text-xs font-mono font-bold tracking-widest text-gray-900 uppercase">
                PERFORMANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="anim-perf-text text-3xl sm:text-4xl lg:text-[44px] font-bold font-sans text-gray-950 tracking-tight leading-[1.14]">
              Engineered for<br />Everyday Performance.
            </h2>

            {/* Expanded Subtitle Copy */}
            <div className="anim-perf-text space-y-2 max-w-lg">
              <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                A smooth, responsive, and efficient ride designed for your daily journeys. Engineered with an intelligent powertrain that delivers instant torque from the moment you twist the throttle.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed">
                Featuring real-time regenerative braking and adaptive battery thermal management for effortless agility across heavy traffic, flyovers, and open stretches.
              </p>
            </div>

            {/* 3 Performance Stats with Dividers */}
            <div className="pt-2 sm:pt-4 grid grid-cols-3 items-center">
              {/* Stat 1: Certified Range */}
              <div className="anim-perf-stat pr-3 sm:pr-6">
                <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-sans text-red-600 tracking-tight leading-none">
                  120 km
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-sans mt-2">
                  Certified Range
                </div>
              </div>

              {/* Stat 2: Acceleration */}
              <div className="anim-perf-stat px-3 sm:px-6 border-x border-gray-200">
                <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-sans text-red-600 tracking-tight leading-none">
                  3.2 sec
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-sans mt-2">
                  0–40 km/h
                </div>
              </div>

              {/* Stat 3: Top Speed */}
              <div className="anim-perf-stat pl-3 sm:pl-6">
                <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-sans text-red-600 tracking-tight leading-none">
                  80 km/h
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-sans mt-2">
                  Top Speed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

