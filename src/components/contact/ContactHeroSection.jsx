import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import contactHeroImg from '../../assets/contact-hero.png'

export default function ContactHeroSection() {
  return (
    <section className="relative w-full -mt-[88px] sm:-mt-[96px] pt-[104px] sm:pt-[118px] lg:pt-[128px] pb-12 sm:pb-16 lg:pb-18 bg-gray-950 overflow-hidden select-none">
      
      {/* Background Hero Image with Enhanced Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactHeroImg}
          alt="Ecodriv Corporate Office & Customer Support"
          className="w-full h-full object-cover object-right lg:object-center opacity-80 sm:opacity-85"
        />
        {/* Balanced Overlays: Dark on the left for text readability, clear on the right for scooters */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/70 to-gray-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/30" />
      </div>

      {/* Decorative Emerald Glow Accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#2B9346]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-6 left-10 w-80 h-80 bg-[#85C440]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight font-sans leading-[1.15] mb-4 sm:mb-5">
            Let&apos;s Build the Future of <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B9346] via-[#48CA6C] to-[#85C440]">
              Green Electric Mobility
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-gray-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Whether you&apos;re exploring personal electric scooters, planning commercial fleet transitions, inquiring about dealership opportunities, or coordinating factory dispatch — connect directly with our leadership and support team.
          </p>

          {/* Quick Contact Chips Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-xs font-medium text-gray-200">
            <a
              href="tel:9205304877"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2B9346]" />
              <span>+91 9205304877</span>
            </a>

            <a
              href="mailto:info@ecodriv.in"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#2B9346]" />
              <span>info@ecodriv.in</span>
            </a>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Gurugram · Delhi</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mon – Sat: 9:30 AM – 7:00 PM</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

