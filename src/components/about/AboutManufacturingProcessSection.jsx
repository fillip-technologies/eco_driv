import { ChevronRight } from 'lucide-react'
import chassisImg from '../../assets/process-chassis.jpg'
import batteryImg from '../../assets/process-battery.jpg'
import testingImg from '../../assets/process-testing.jpg'
import dispatchImg from '../../assets/process-dispatch.jpg'

const processSteps = [
  {
    step: '01',
    title: 'Chassis & Frame Assembly',
    description: 'High-strength, durable frames engineered for Indian conditions.',
    image: chassisImg,
    alt: 'Ecodriv electric vehicle chassis and durable frame assembly',
  },
  {
    step: '02',
    title: 'Battery & Motor Integration',
    description: 'Reliable, high-performance battery and motor systems.',
    image: batteryImg,
    alt: 'High-performance lithium battery and electric motor integration',
  },
  {
    step: '03',
    title: 'Quality & Performance Testing',
    description: 'Multi-point safety, performance and durability checks.',
    image: testingImg,
    alt: 'Multi-point quality, safety, and performance dynamometer testing',
  },
  {
    step: '04',
    title: 'Final Inspection & Dispatch',
    description: 'Final quality approval and ready for nationwide delivery.',
    image: dispatchImg,
    alt: 'Finished electric vehicle fleet ready for inspection and nationwide dispatch',
  },
]

export default function AboutManufacturingProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* =========================================================================
            HEADER: TITLE & SUBTITLE
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-sans tracking-tight leading-tight mb-4">
            <span className="text-[#0F172A]">Our </span>
            <span className="text-[#2B9346]">Manufacturing Process</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed">
            A precise, multi-stage process that ensures every Ecodriv vehicle is safe, reliable and ready for Indian roads.
          </p>
        </div>

        {/* =========================================================================
            PROCESS CARDS WITH CONNECTING CHEVRONS
           ========================================================================= */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {processSteps.map((item, idx) => (
              <div key={item.step} className="relative flex">
                
                {/* Process Card */}
                <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-gray-100/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(43,147,70,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col group">
                  
                  {/* Step Image with Overlapping Pill Badge */}
                  <div className="relative mb-5 shrink-0">
                    <div className="w-full h-44 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Step Pill Badge overlapping bottom-left edge */}
                    <div className="absolute -bottom-2.5 left-3 z-10">
                      <span className="inline-flex items-center justify-center bg-[#2B9346] text-white font-bold text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Step Title Container (consistent height so all descriptions align) */}
                  <div className="h-12 sm:h-14 flex items-start mb-1.5">
                    <h3 className="text-base sm:text-[17px] font-bold text-[#0F172A] leading-snug group-hover:text-[#2B9346] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal">
                    {item.description}
                  </p>

                </div>

                {/* Connecting Chevron Arrow (Vertically centered against the images) */}
                {idx < processSteps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-4 top-[102px] sm:top-[112px] -translate-y-1/2 z-20 items-center justify-center text-[#2B9346]"
                    aria-hidden="true"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[3]" />
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

