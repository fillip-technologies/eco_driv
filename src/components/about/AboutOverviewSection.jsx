import { ShieldCheck, Truck, Factory } from 'lucide-react'
import warehouseImg from '../../assets/commerical-mobility/warehouse-image.png'

const highlights = [
  {
    icon: Truck,
    title: 'Passenger & Cargo',
    desc: '2-wheelers, e-rickshaws, e-autos & e-loaders',
  },
  {
    icon: Factory,
    title: 'OEM Partnerships',
    desc: 'Strategic manufacturing for maximum uptime',
  },
  {
    icon: ShieldCheck,
    title: 'Strict Quality Control',
    desc: 'World-class engineering, safety & durability',
  },
]

export default function AboutOverviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-lime-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: WAREHOUSE FACILITY IMAGE
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <img
                src={warehouseImg}
                alt="Ecodriv Electric Vehicles Manufacturing Facility and Warehouse"
                className="w-full h-[360px] sm:h-[460px] lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: CONTENT PROVIDED BY USER
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sans text-[#0F172A] tracking-tight leading-tight mb-6">
              Empowering India’s Transition to <br className="hidden sm:inline" />
              <span className="text-[#2B9346]">Sustainable Electric Mobility</span>
            </h2>

            {/* Paragraph 1 (Exact text from user) */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-4">
              Ecodriv has a comprehensive range of electric vehicles, delivering sustainable mobility solutions across India. Our product portfolio includes electric two-wheelers, e-rickshaws, e-autos, and e-loaders, catering to both passenger and cargo movement. Under strategic partnerships with our OEM partners, the vehicles are built for reliability, performance, efficiency and to meet the diverse needs of urban commuters, fleet operators, and logistics businesses.
            </p>

            {/* Paragraph 2 (Exact text from user) */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-8">
              At Ecodriv, we believe in empowering the transition towards cleaner mobility. All our vehicles are manufactured at state-of-the-art facilities that follow strict quality control standards, ensuring world-class engineering, safety, and long-term dependability. Each model reflects our commitment to innovation, quality, and sustainability.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-gray-100">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-gray-200/70 hover:border-[#2B9346]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white text-[#2B9346] shadow-2xs flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-gray-950 font-sans">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-gray-500 font-normal mt-0.5 leading-snug">
                      {item.desc}
                    </div>
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

