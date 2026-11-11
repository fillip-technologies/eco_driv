import { Zap, ShieldCheck, BatteryCharging } from 'lucide-react'
import batteryPartnerImg from '../../../assets/our-partner/battery-partner.jpg'

const features = [
  {
    id: 'smart-swapping',
    icon: Zap,
    title: 'Smart Swapping',
    desc: 'Instant battery swaps in under 90 seconds',
  },
  {
    id: 'thermal-bms',
    icon: ShieldCheck,
    title: 'Thermal BMS',
    desc: 'Tested for 50°C extreme Indian summers',
  },
  {
    id: 'high-density',
    icon: BatteryCharging,
    title: 'High Density',
    desc: 'Extended range with advanced NMC/LFP cells',
  },
]

export default function BatteryDetailsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: PHOTO WITH ROUNDED CORNERS
             ========================================================================= */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Subtle decorative green corner accent behind the image */}
              <div className="absolute -top-3 -left-3 w-28 h-28 bg-emerald-100/70 rounded-3xl -z-10 blur-xs" />
              <div className="absolute -bottom-3 -right-3 w-28 h-28 bg-emerald-100/50 rounded-3xl -z-10 blur-xs" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100/90 group bg-gray-50">
                <img
                  src={batteryPartnerImg}
                  alt="Advanced Swappable Battery Pack and Thermal BMS for Ecodriv Vehicles"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: TEXT, HEADING & 3 HIGHLIGHT CARDS
             ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow Label with Green Dash */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-6 sm:w-8 h-[2.5px] bg-[#2B9346] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-wide">
                Battery Partner
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-sans text-[#0F172A] tracking-tight leading-[1.2] mb-5">
              Next-Gen Power for <br />
              <span className="text-[#2B9346]">Sustainable EV Fleets</span>
            </h2>

            {/* Detailed Multi-Paragraph Content */}
            <div className="space-y-4 text-xs sm:text-sm lg:text-[15px] text-gray-600 font-normal leading-relaxed mb-8">
              <p>
                Powering India&apos;s electric transition demands rugged, intelligent energy storage engineered to withstand severe road vibrations, monsoon flooding, and extreme summer temperatures. Ecodriv collaborates with pioneering cell manufacturers and energy operators to integrate high-density, IP67-sealed modular lithium-ion battery packs.
              </p>
              <p>
                Our standardized energy architecture features active thermal BMS safety monitoring, automated rapid swap-station compatibility, and ultra-durable charge cycles. Whether supporting heavy commercial delivery fleets running 150+ km daily or personal commuters seeking zero range anxiety, our battery partnerships guarantee maximum reliability, sustained range, and unmatched operating safety.
              </p>
            </div>

            {/* 3 Highlights Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-100">
              {features.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-[#2B9346] flex items-center justify-center mb-2 group-hover:bg-[#2B9346] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug">
                      {item.title}
                    </span>
                    <span className="hidden sm:block text-[11px] text-gray-500 leading-tight mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
