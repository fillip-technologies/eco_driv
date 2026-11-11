import AboutHeroSection from '../components/about/AboutHeroSection'
import AboutOverviewSection from '../components/about/AboutOverviewSection'
import AboutVisionMissionSection from '../components/about/AboutVisionMissionSection'
import AboutMadeInIndiaSection from '../components/about/AboutMadeInIndiaSection'
import AboutManufacturingProcessSection from '../components/about/AboutManufacturingProcessSection'
import AboutJourneySection from '../components/about/AboutJourneySection'
import AboutBannerSection from '../components/about/AboutBannerSection'

export default function AboutUs({ onBookTestRide }) {
  return (
    <main className="bg-white">
      <AboutHeroSection onBookTestRide={onBookTestRide} />
      <AboutOverviewSection />
      <AboutVisionMissionSection />
      <AboutMadeInIndiaSection />
      <AboutManufacturingProcessSection />
      <AboutJourneySection />
      <AboutBannerSection onBookTestRide={onBookTestRide} />
    </main>
  )
}

