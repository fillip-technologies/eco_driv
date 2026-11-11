import { useRef, useEffect } from 'react'
import { ArrowUpRight, Clock, Calendar, ChevronRight } from 'lucide-react'
import gsap from 'gsap'

// Blog Images
import blog1 from '../../assets/blogs/blog-1.jpg'
import blog2 from '../../assets/blogs/blog-2.jpg'
import blog3 from '../../assets/blogs/blog-3.jpg'

const blogPosts = [
  {
    id: 'fast-charging-guide',
    category: 'EV Charging',
    title: 'The Ultimate Fast Charging Guide: How to Maximize Battery Longevity',
    excerpt: 'Learn how smart thermal management and optimal charging cycles keep your battery at peak performance for years to come.',
    date: 'Oct 28, 2026',
    readTime: '4 min read',
    author: 'Ecodriv Tech Labs',
    image: blog1,
  },
  {
    id: 'petrol-vs-ev-savings',
    category: 'Cost Savings',
    title: 'Petrol vs EV in 2026: How Indian Commuters Save ₹65,000 Annually',
    excerpt: 'A comprehensive running cost breakdown comparing fuel, maintenance schedules, and state electric subsidies.',
    date: 'Oct 24, 2026',
    readTime: '5 min read',
    author: 'Mobility Insights',
    image: blog2,
  },
  {
    id: 'connected-riding-features',
    category: 'Smart Tech',
    title: 'Connected Riding: 5 Smart Features That Make Daily Commutes Effortless',
    excerpt: 'From live geofencing and anti-theft tracking to turn-by-turn navigation on your dash — welcome to the connected era.',
    date: 'Oct 19, 2026',
    readTime: '3 min read',
    author: 'Software & IoT Team',
    image: blog3,
  },
]

export default function ExploreBlogsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let hasAnimated = false
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true
          gsap.fromTo(
            el.querySelectorAll('.anim-blog'),
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.09,
              ease: 'power2.out',
              clearProps: 'all',
            }
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
      id="blogs"
      className="py-16 sm:py-24 bg-white relative overflow-hidden select-none border-t border-gray-100"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            {/* Title */}
            <h2 className="anim-blog text-3xl sm:text-4xl lg:text-[42px] font-bold font-sans text-gray-950 tracking-tight leading-tight">
              Stories, Guides & The Future of EV.
            </h2>

            {/* Subtitle */}
            <p className="anim-blog text-sm sm:text-base text-gray-600 font-sans mt-2 max-w-2xl leading-relaxed">
              Stay ahead with practical charging advice, battery maintenance guides, and real-world rider stories.
            </p>
          </div>

          {/* View All CTA Link */}
          <a
            href="#blogs"
            className="anim-blog inline-flex items-center gap-2 text-sm font-bold text-gray-950 hover:text-emerald-600 transition-colors group shrink-0"
          >
            <span>View All Articles</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="anim-blog group bg-[#FBFBFC] hover:bg-white rounded-3xl p-4 sm:p-5 border border-gray-200/70 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-400 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Banner with Hover Zoom */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                    loading="lazy"
                  />
                  {/* Category Pill on Image */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Metadata Row: Date & Read Time */}
                <div className="flex items-center gap-4 text-xs text-gray-500 font-mono mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="text-lg sm:text-xl font-bold font-sans text-gray-950 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 font-sans leading-relaxed line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom Footer: Author & Read More Link */}
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-gray-700 font-sans">
                  {post.author}
                </span>

                <span className="inline-flex items-center gap-1 font-bold text-gray-950 group-hover:text-emerald-600 transition-colors">
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

