import PartnerHeroSection from '../../components/our-partner/common/PartnerHeroSection'
import PartnerLogosSection from '../../components/our-partner/common/PartnerLogosSection'
import IotDetailsSection from '../../components/our-partner/iot-partner/IotDetailsSection'
import PartnerInquiryMasterForm from '../../components/our-partner/PartnerInquiryMasterForm'

export default function IotPartner() {
  return (
    <main className="bg-white min-h-screen">
      {/* Master Hero: Displays "Our IoT Partner" */}
      <PartnerHeroSection partnerType="iot" />

      {/* Master Partner Logos Strip */}
      <PartnerLogosSection />

      {/* IoT Topic-Specific Details */}
      <IotDetailsSection />

      {/* Master Inquiry Form configured for IoT Partner */}
      <PartnerInquiryMasterForm partnerType="iot" />
    </main>
  )
}
