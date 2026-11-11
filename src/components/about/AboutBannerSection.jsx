import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import bannerImg from '../../assets/about-image-1.png'

export default function AboutBannerSection({ onBookTestRide }) {
  const handlePartnerClick = () => {
    if (typeof onBookTestRide === 'function') {
      onBookTestRide()
    } else {
      const contactElem = document.getElementById('contact-form')
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="pt-12 sm:pt-16 pb-0 bg-white relative overflow-hidden select-none">
      
      {/* Full Left & Right Gap via standard max-w container with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Container */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-100 min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center group">
          
          {/* Background Image: Factory, Vehicles & Ecodriv Sign */}
          <img
            src={bannerImg}
            alt="Ecodriv Electric Mobility Lineup and Factory"
            className="absolute inset-0 w-full h-full object-cover object-right sm:object-center block select-none transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Smooth Dark Gradient Overlay on the Left for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 md:via-slate-950/50 to-transparent pointer-events-none" />

          {/* Left-Side Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-xl">
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-white leading-tight tracking-tight mb-3 sm:mb-4">
              Let&apos;s Build a <span className="text-[#2B9346]">Greener</span> <br />
              Future Together.
            </h2>
            
            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-gray-200 font-normal leading-relaxed mb-6 sm:mb-8 max-w-md">
              Discover how Ecodriv is transforming personal and commercial mobility with reliable electric vehicle solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Primary Button */}
              <Link
                to="/apex"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Our Vehicles</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              {/* Secondary Button */}
              <button
                type="button"
                onClick={handlePartnerClick}
                className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border-2 border-[#2B9346] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#2B9346] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Become Our Partner</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
