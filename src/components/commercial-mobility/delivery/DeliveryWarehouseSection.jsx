import { Target, Box, Clock } from 'lucide-react'
import warehouseImg from '../../../assets/commerical-mobility/warehouse-image.png'

const items = [
  {
    id: 'mission',
    icon: Target,
    text: 'We craft electric mobility solutions that blend safety, value and technology, while strengthening a trusted national network and nurturing a sustainable ecosystem for tomorrow.',
    bgClass: 'bg-[#1D9BF0] hover:bg-[#1a8cd8]',
  },
  {
    id: 'vision',
    icon: Box,
    text: 'A future where every Indian moves with clean, reliable and intelligent mobility—quietly powered by innovation and responsibility.',
    bgClass: 'bg-[#0E90A7] hover:bg-[#0c7f93]',
  },
  {
    id: 'goals',
    icon: Clock,
    text: 'Focused on long-term goals such as expanding manufacturing capacity and strengthening nationwide services.',
    bgClass: 'bg-[#22A06B] hover:bg-[#1e8d5e]',
  },
]

export default function DeliveryWarehouseSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: WAREHOUSE FACILITY IMAGE
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
              <img
                src={warehouseImg}
                alt="Ecodriv Electric Scooters Bulk Warehouse and Manufacturing Facility"
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: VISION & MISSION CARDS
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Heading & Subtitle */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-sans text-[#0F172A] tracking-tight leading-snug">
                Vision & Mission
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                Accelerating India’s transition to sustainable and accessible electric mobility
              </p>
            </div>

            {/* 3 Colored Cards */}
            <div className="space-y-4 sm:space-y-4.5">
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl text-white shadow-sm transition-all duration-300 ${item.bgClass}`}
                  >
                    {/* Left Icon with subtle circular border */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" strokeWidth={2} />
                    </div>

                    {/* Right Text */}
                    <p className="text-xs sm:text-[13.5px] lg:text-sm font-medium leading-relaxed text-white/95">
                      {item.text}
                    </p>
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

