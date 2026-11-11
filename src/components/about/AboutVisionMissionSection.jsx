import { Target, Box, Clock } from 'lucide-react'

const cards = [
  {
    id: 'mission',
    title: 'Mission',
    icon: Target,
    text: 'We craft electric mobility solutions that blend safety, value and technology, while strengthening a trusted national network and nurturing a sustainable ecosystem for tomorrow.',
    bgClass: 'bg-[#1D9BF0] hover:bg-[#1a8cd8]',
  },
  {
    id: 'vision',
    title: 'Vision',
    icon: Box,
    text: 'A future where every Indian moves with clean, reliable and intelligent mobility—quietly powered by innovation and responsibility.',
    bgClass: 'bg-[#0E90A7] hover:bg-[#0c7f93]',
  },
  {
    id: 'goal',
    title: 'Goal',
    icon: Clock,
    text: 'Focused on long-term goals such as expanding manufacturing capacity and strengthening nationwide services.',
    bgClass: 'bg-[#22A06B] hover:bg-[#1e8d5e]',
  },
]

export default function AboutVisionMissionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden select-none border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Dedicated Colored Cards: Mission, Vision, Goal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.id}
                className={`p-7 sm:p-8 rounded-3xl text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${card.bgClass}`}
              >
                <div>
                  {/* Icon in Circle + Title Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl sm:text-[26px] font-bold font-sans text-white tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="text-sm sm:text-[14.5px] font-medium leading-relaxed text-white/95">
                    {card.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
