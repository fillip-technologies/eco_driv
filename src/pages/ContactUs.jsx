import ContactHeroSection from '../components/contact/ContactHeroSection'
import ContactDetailsSection from '../components/contact/ContactDetailsSection'

export default function ContactUs({ onBookTestRide }) {
  return (
    <main className="bg-white">
      <ContactHeroSection />
      <ContactDetailsSection onBookTestRide={onBookTestRide} />
    </main>
  )
}

