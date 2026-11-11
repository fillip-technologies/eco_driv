import { Package, Users, Bike, Handshake } from 'lucide-react'

import lastMileImg from '../../../assets/commerical-mobility/commercial-last-mile.jpg'
import passengerImg from '../../../assets/commerical-mobility/commercial-passenger.jpg'
import fleetImg from '../../../assets/commerical-mobility/commercial-fleet.jpg'
import enterpriseImg from '../../../assets/commerical-mobility/commercial-enterprise.jpg'

const solutions = [
  {
    id: 'last-mile',
    title: 'Last-Mile Delivery',
    subtitle: 'Food, grocery & parcel delivery',
    icon: Package,
    image: lastMileImg,
  },
  {
    id: 'passenger-mobility',
    title: 'Passenger Mobility',
    subtitle: 'Bike taxi, shared rides & commute',
    icon: Users,
    image: passengerImg,
  },
  {
    id: 'fleet-operations',
    title: 'Fleet Operations',
    subtitle: 'Manage, deploy & scale your fleet',
    icon: Bike,
    image: fleetImg,
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    subtitle: 'B2B leasing, corporate hubs & charging',
    icon: Handshake,
    image: enterpriseImg,
  },
]

export default function DeliveryUseCasesSection({ onBookTestRide }) {
  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Subtle background ambient tint */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER: EXACT MATCH TO USER REFERENCE
           ========================================================================= */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          {/* Left: Green indicator bar + Title */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 sm:h-7 bg-[#2B9346] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-sans text-[#0F172A] tracking-tight">
              Commercial Mobility Solutions
            </h2>
          </div>

          {/* Right: Counter pill badge */}
          <span className="px-3.5 py-1 rounded-full bg-[#EBF8EE] text-[#2B9346] border border-[#2B9346]/25 font-mono text-xs font-semibold tracking-wider">
            01 — 04
          </span>
        </div>

        {/* =========================================================================
            2x2 GRID OF CARDS (EXACT MATCH TO USER REFERENCE)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {solutions.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                onClick={onBookTestRide}
                className="group relative aspect-[16/10] sm:aspect-[16/10.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-gray-900"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Dark Vignette / Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                {/* Top-Left Icon Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-center text-[#2B9346] pointer-events-none transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                </div>

                {/* Bottom Content Row */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 pointer-events-none">
                  {/* Heading & Subtitle */}
                  <div className="space-y-0.5 sm:space-y-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-sans text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-normal">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
