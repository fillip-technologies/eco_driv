import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { DEFAULT_VEHICLE } from '../../../data/personalVehiclesData'
import sideViewImg from '../../../assets/personal-mobility/view-2.png'

// Close-up detail shots.
// Each card zooms into a part of the side-view image:
//   focus = [x, y] point of the image (0–1) to centre in the card
//   zoom  = image width relative to the card width
// When dedicated close-up photos are available, replace `image`
// and set zoom: 1, focus: [0.5, 0.5].
const DETAILS = [
  {
    id: 'shocker',
    label: 'Rear Suspension',
    caption: 'Twin-tube hydraulic shock absorber',
    image: sideViewImg,
    focus: [0.765, 0.66],
    zoom: 4.2,
    gridClass: 'col-span-2 row-span-2',
  },
  {
    id: 'handle',
    label: 'Handlebar & Controls',
    caption: 'Ergonomic grips with wide mirrors',
    image: sideViewImg,
    focus: [0.39, 0.17],
    zoom: 4.4,
    gridClass: 'col-span-2',
  },
  {
    id: 'disc',
    label: 'Front Disc Brake',
    caption: 'Strong, consistent stopping',
    image: sideViewImg,
    focus: [0.15, 0.83],
    zoom: 4.2,
    gridClass: 'col-span-1',
  },
  {
    id: 'headlamp',
    label: 'LED Headlamp',
    caption: 'Signature DRL design',
    image: sideViewImg,
    focus: [0.29, 0.26],
    zoom: 5,
    gridClass: 'col-span-1',
  },
  {
    id: 'taillamp',
    label: 'LED Tail Lamp',
    caption: 'High-visibility rear lighting',
    image: sideViewImg,
    focus: [0.84, 0.47],
    zoom: 4.2,
    gridClass: 'col-span-1 lg:col-span-2',
  },
  {
    id: 'seat',
    label: 'Comfort Seat & Grab Rail',
    caption: 'Long seat with sturdy pillion rail',
    image: sideViewImg,
    focus: [0.68, 0.38],
    zoom: 2.4,
    gridClass: 'col-span-1 lg:col-span-2',
  },
]

function CloseUpCard({ item }) {
  const [fx, fy] = item.focus

  return (
    <div
      className={`anim-closeup group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#F4F8F5] to-[#E7F3EA] border border-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300 ${item.gridClass}`}
    >
      {/* Zoomed image, centred on the focus point */}
      <img
        src={item.image}
        alt={item.label}
        loading="lazy"
        draggable="false"
        className="absolute left-1/2 top-1/2 max-w-none h-auto pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        style={{
          width: `${item.zoom * 100}%`,
          translate: `${-fx * 100}% ${-fy * 100}%`,
          transformOrigin: `${fx * 100}% ${fy * 100}%`,
        }}
      />

      {/* Bottom gradient + label */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 text-white pointer-events-none">
        <h3 className="text-sm sm:text-lg font-bold font-sans tracking-tight leading-snug">
          {item.label}
        </h3>
        <p className="hidden sm:block text-xs text-white/80 mt-0.5">{item.caption}</p>
      </div>
    </div>
  )
}

export default function ApexCloseUpSection({
  vehicle = DEFAULT_VEHICLE,
  details = DETAILS,
  subtitle,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let hasAnimated = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true
          gsap.fromTo(
            el.querySelectorAll('.anim-closeup'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', clearProps: 'all' }
          )
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="anim-closeup inline-block text-xs font-mono font-bold tracking-widest text-[#2B9346] uppercase mb-3">
            Close-Up Details
          </span>
          <h2 className="anim-closeup text-3xl sm:text-4xl lg:text-[44px] font-bold font-sans text-gray-950 tracking-tight leading-tight">
            Built Right, <span className="text-[#2B9346]">Down to Every Part</span>
          </h2>
          <p className="anim-closeup text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            {subtitle || `A closer look at the components that make the ${vehicle.name} ride the way it does.`}
          </p>
        </div>

        {/* Close-up grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[170px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-3 sm:gap-5">
          {details.map((item) => (
            <CloseUpCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
