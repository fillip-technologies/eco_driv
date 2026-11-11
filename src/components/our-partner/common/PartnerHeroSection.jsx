import partnerHeroImg from '../../../assets/our-partner/partner-hero.png'

const PARTNER_TITLES = {
  finance: 'Finance Partner',
  battery: 'Battery Partner',
  iot: 'IoT Partner',
  telematics: 'Telematics Partner',
}

export default function PartnerHeroSection({
  prefix = 'Our',
  highlight,
  partnerType = 'finance',
}) {
  const highlightText = highlight || PARTNER_TITLES[partnerType] || 'Partners'

  return (
    <section className="relative w-full h-[50vh] sm:h-[52vh] min-h-[340px] sm:min-h-[420px] max-h-[560px] overflow-hidden -mt-[88px] sm:-mt-[96px] bg-black select-none">
      
      {/* Background Handshake Image */}
      <img
        src={partnerHeroImg}
        alt={`Ecodriv ${prefix} ${highlightText} Hero`}
        className="absolute inset-0 w-full h-full object-cover object-center block"
        loading="eager"
      />

      {/* Subtle Overlay for text clarity */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Heading according to active page */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 pt-10 sm:pt-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
          <span className="text-white">{prefix} </span>
          <span className="text-[#38C968]">{highlightText}</span>
        </h1>
      </div>

    </section>
  )
}
