import HeroSection from '../components/home/HeroSection'
import AllModelsSection from '../components/home/AllModelsSection'
import MadeInIndiaSection from '../components/home/MadeInIndiaSection'
import UsageStoriesSection from '../components/home/UsageStoriesSection'
import WhyEcodrivSection from '../components/home/WhyEcodrivSection'
import PerformanceSection from '../components/home/PerformanceSection'
import EcodrivAppSection from '../components/home/EcodrivAppSection'
import FeaturedSliderSection from '../components/home/FeaturedSliderSection'
import ExploreBlogsSection from '../components/home/ExploreBlogsSection'
import ContactFormSection from '../components/home/ContactFormSection'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <AllModelsSection />
      <MadeInIndiaSection />
      <UsageStoriesSection />
      <WhyEcodrivSection />
      <PerformanceSection />
      <EcodrivAppSection />
      <FeaturedSliderSection />
      <ExploreBlogsSection />
      <ContactFormSection />
    </main>
  )
}

