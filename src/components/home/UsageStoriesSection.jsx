import { Package, Bike, GraduationCap } from 'lucide-react'
import deliveryImg from '../../assets/home/use-delivery.jpg'
import dailyImg from '../../assets/home/use-daily.jpg'
import collegeImg from '../../assets/home/use-college.jpg'

const useCases = [
  {
    id: 'delivery',
    category: 'DELIVERY PARTNERS',
    title: 'Powering Deliveries',
    icon: Package,
    image: deliveryImg,
  },
  {
    id: 'commute',
    category: 'EVERYDAY COMMUTE',
    title: 'A Smarter Daily Ride',
    icon: Bike,
    image: dailyImg,
  },
  {
    id: 'college',
    category: 'COLLEGE STUDENTS',
    title: 'Your Campus Companion',
    icon: GraduationCap,
    image: collegeImg,
  },
]

export default function UsageStoriesSection() {
  return (
    <section id="use-cases" className="pt-14 sm:pt-20 pb-6 sm:pb-8 bg-white relative overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Exactly matching reference text & layout */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
            {/* Eyebrow with Sleek Black Bar & Text */}
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-black rounded-full inline-block" />
              <span className="text-xs font-mono font-bold tracking-widest text-gray-900 uppercase">
                MADE FOR EVERY JOURNEY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-sans text-gray-950 leading-[1.14] tracking-tight">
              Electric mobility<br />for every lifestyle.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              From daily deliveries to office commutes and campus life — Ecodriv fits your journey.
            </p>
          </div>

          {/* Right Column: 3 Increased Width Visual Cards matching reference UI */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {useCases.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
                >
                  {/* Background Lifestyle Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette / Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

                  {/* Content Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white pointer-events-none">
                    <div className="space-y-1">
                      {/* Category Eyebrow with Icon */}
                      <div className="flex items-center gap-1.5 text-xs font-mono font-medium tracking-wider text-gray-300">
                        <Icon className="w-3.5 h-3.5 text-white/90" />
                        <span className="text-gray-400">|</span>
                        <span className="uppercase text-[11px] sm:text-xs text-gray-200">
                          {item.category}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold font-sans text-white tracking-tight leading-snug">
                        {item.title}
                      </h3>
                    </div>
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

