import ecommerceImg from '../../../assets/3-wheelers/categories/ecommerce-logistics.jpg'
import fmcgImg from '../../../assets/3-wheelers/categories/fmcg-grocery.jpg'
import industrialImg from '../../../assets/3-wheelers/categories/industrial-cargo.jpg'
import agricultureImg from '../../../assets/3-wheelers/categories/agriculture-produce.jpg'

const CATEGORIES = [
  {
    id: 'ecommerce',
    title: 'E-Commerce & Courier Logistics',
    image: ecommerceImg,
  },
  {
    id: 'fmcg',
    title: 'FMCG & Grocery Distribution',
    image: fmcgImg,
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware Cargo',
    image: industrialImg,
  },
  {
    id: 'agriculture',
    title: 'Agricultural & Mandi Produce',
    image: agricultureImg,
  },
]

export default function ThreeWheelerCategoriesSection({ onBookTestRide }) {
  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2B9346]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER: TITLE WITH MASTER GREEN ACCENT
           ========================================================================= */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          {/* Left: Green indicator bar + Section Title */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 sm:h-7 bg-[#2B9346] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-sans text-[#0F172A] tracking-tight">
              Vehicle Application Categories
            </h2>
          </div>

          {/* Right: Counter pill badge */}
          <span className="px-3.5 py-1 rounded-full bg-[#EBF8EE] text-[#2B9346] border border-[#2B9346]/25 font-mono text-xs font-semibold tracking-wider">
            01 — 04
          </span>
        </div>

        {/* =========================================================================
            FOUR CATEGORY CARDS: ONLY IMAGE AND TITLE
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CATEGORIES.map((item) => (
            <div
              key={item.id}
              onClick={onBookTestRide}
              className="group relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-gray-900"
            >
              {/* Category Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Gradient Scrim for crisp text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

              {/* Only Title at the bottom of the card */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 pointer-events-none">
                <h3 className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-[#85C440] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

