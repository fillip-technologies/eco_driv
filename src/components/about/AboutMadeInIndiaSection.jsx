import { ShieldCheck, CloudRain, ThermometerSun, Sliders } from 'lucide-react'
import madeInIndiaImg from '../../assets/made-in-india-manufacturing.jpg'

const points = [
  {
    icon: Sliders,
    text: 'Engineered for Indian road topography & heavy speed bumps',
  },
  {
    icon: CloudRain,
    text: 'IP67 water-sealed battery & motor for monsoon floods',
  },
  {
    icon: ThermometerSun,
    text: '50°C high-heat thermal BMS built for Indian summers',
  },
  {
    icon: ShieldCheck,
    text: 'Rigorous quality testing at our Gurugram facility',
  },
]

export default function AboutMadeInIndiaSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFCFB] relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: TEXT & INDIGENOUS CAPABILITIES (6 cols on lg)
             ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-sans text-[#0F172A] tracking-tight leading-tight mb-5">
              Made in India. <br />
              <span className="text-[#2B9346]">Built for Indian Roads.</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm lg:text-[15px] text-gray-600 font-normal leading-relaxed mb-8">
              <p>
                At Ecodriv, we take immense pride in powering India&apos;s transition to self-reliant, clean electric mobility. Our complete lineup of two-wheelers and three-wheelers is engineered indigenously to conquer the real-world demands of Indian traffic, extreme climate variations, and heavy daily utility.
              </p>
              <p>
                From reinforced steel chassis frames to custom thermal-regulated battery systems, every vehicle undergoes multi-stage quality inspections at our state-of-the-art facility to ensure uncompromising safety, long-term dependability, and maximum savings for Indian riders.
              </p>
            </div>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-200/80">
              {points.map((pt) => {
                const Icon = pt.icon
                return (
                  <div key={pt.text} className="flex items-start gap-2.5 p-2 rounded-xl">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100/70 text-[#2B9346] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-gray-800 leading-snug">
                      {pt.text}
                    </span>
                  </div>
                )
              })}
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: MANUFACTURING & ASSEMBLY IMAGE (6 cols on lg)
             ========================================================================= */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <img
                src={madeInIndiaImg}
                alt="Ecodriv Electric Vehicle Manufacturing Plant in India"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
