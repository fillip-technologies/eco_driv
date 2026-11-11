import { Building2, Cpu, Factory, Bike, Network } from 'lucide-react'

const milestones = [
  {
    year: '2019',
    icon: Building2,
    title: 'Company Incorporation',
    description: 'Founding vision to build indigenous clean electric mobility.',
  },
  {
    year: '2020',
    icon: Cpu,
    title: 'R&D and Product Development',
    description: 'Indigenous powertrain, thermal BMS, and heavy chassis engineering.',
  },
  {
    year: '2022',
    icon: Factory,
    title: 'Manufacturing Facility Setup (Gurugram)',
    description: 'State-of-the-art plant with multi-stage quality testing lines.',
  },
  {
    year: '2024',
    icon: Bike,
    title: 'Expanded Product Portfolio',
    description: 'Launch of Apex 2W and rugged commercial 3W electric platforms.',
  },
  {
    year: '2025',
    icon: Network,
    title: 'Growing Partner & Fleet Network',
    description: 'Nationwide dealer expansion and large enterprise fleet deployments.',
  },
]

export default function AboutJourneySection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFCFB] relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-72 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* =========================================================================
            HEADER: TITLE & SUBTITLE
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-sans tracking-tight leading-tight mb-4">
            <span className="text-[#0F172A]">Our </span>
            <span className="text-[#2B9346]">Journey</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed">
            A look at our growth and key milestones in building India&apos;s electric mobility ecosystem.
          </p>
        </div>

        {/* =========================================================================
            TIMELINE TRACK & MILESTONE CARDS
           ========================================================================= */}
        <div className="relative">
          
          {/* Horizontal Connecting Timeline Track (Desktop) */}
          <div className="hidden lg:block absolute top-2.5 left-12 right-12 h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100 z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch relative z-10">
            {milestones.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.year} className="flex flex-col items-center group">
                  
                  {/* Timeline Milestone Node Dot (Desktop) */}
                  <div className="hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-[#2B9346] shadow-sm mb-6 transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#2B9346]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2B9346] group-hover:bg-white transition-colors" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full flex-1 bg-white rounded-2xl p-5 sm:p-6 border border-gray-100/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(43,147,70,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center">
                    
                    {/* Outline Icon */}
                    <div className="w-12 h-12 rounded-xl bg-emerald-50/70 text-[#2B9346] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2B9346] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Year */}
                    <span className="text-2xl sm:text-[26px] font-black text-[#2B9346] tracking-tight mb-2 font-sans">
                      {item.year}
                    </span>

                    {/* Milestone Title */}
                    <h3 className="text-sm sm:text-[14px] font-bold text-[#0F172A] leading-snug mb-1">
                      {item.title}
                    </h3>

                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

