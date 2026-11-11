import bajajImg from '../../../assets/our-partner/Bajaj.jpg'
import kotak1Img from '../../../assets/our-partner/Kotak-1.jpg'
import kotak2Img from '../../../assets/our-partner/Kotak-2.jpg'
import kotak3Img from '../../../assets/our-partner/Kotak-3.jpg'
import kotak4Img from '../../../assets/our-partner/Kotak-4.jpg'

const partnerLogos = [
  { id: 'bajaj', name: 'Bajaj Finserv', logo: bajajImg },
  { id: 'loantap', name: 'LoanTap', logo: kotak1Img },
  { id: 'cleverpe', name: 'CleverPe', logo: kotak2Img },
  { id: 'hdb', name: 'HDB Financial Services', logo: kotak3Img },
  { id: 'credfin', name: 'CredFin', logo: kotak4Img },
]

// Duplicate list to achieve a continuous, seamless infinite loop
const marqueeList = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]

export default function PartnerLogosSection() {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden select-none">
      <style>{`
        @keyframes partnerMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .partner-marquee-track {
          display: flex;
          width: max-content;
          animation: partnerMarquee 26s linear infinite;
        }
        .partner-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-60 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      {/* Edge Gradient Fades for Seamless Infinite Illusion */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

      {/* Marquee Track Container */}
      <div className="w-full overflow-hidden relative z-0 py-2">
        <div className="partner-marquee-track flex items-center gap-4 sm:gap-6">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="bg-white rounded-2xl px-6 py-4 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(43,147,70,0.12)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-52 sm:w-64 h-24 sm:h-28 shrink-0 group cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 sm:max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

