import PartnerHeroSection from '../../components/our-partner/common/PartnerHeroSection'
import PartnerLogosSection from '../../components/our-partner/common/PartnerLogosSection'
import TelematicsDetailsSection from '../../components/our-partner/telematics-partner/TelematicsDetailsSection'
import PartnerInquiryMasterForm from '../../components/our-partner/PartnerInquiryMasterForm'

export default function TelematicsPartner() {
  return (
    <main className="bg-white min-h-screen">
      {/* Master Hero: Displays "Our Telematics Partner" */}
      <PartnerHeroSection partnerType="telematics" />

      {/* Master Partner Logos Strip */}
      <PartnerLogosSection />

      {/* Telematics Topic-Specific Details */}
      <TelematicsDetailsSection />

      {/* Master Inquiry Form configured for Telematics Partner */}
      <PartnerInquiryMasterForm partnerType="telematics" />
    </main>
  )
}
