import PartnerHeroSection from '../../components/our-partner/common/PartnerHeroSection'
import PartnerLogosSection from '../../components/our-partner/common/PartnerLogosSection'
import BatteryDetailsSection from '../../components/our-partner/battery-partner/BatteryDetailsSection'
import PartnerInquiryMasterForm from '../../components/our-partner/PartnerInquiryMasterForm'

export default function BatteryPartner() {
  return (
    <main className="bg-white min-h-screen">
      {/* Master Hero: Displays "Our Battery Partner" */}
      <PartnerHeroSection partnerType="battery" />

      {/* Master Partner Logos Strip */}
      <PartnerLogosSection />

      {/* Battery Topic-Specific Details */}
      <BatteryDetailsSection />

      {/* Master Inquiry Form configured for Battery Partner */}
      <PartnerInquiryMasterForm partnerType="battery" />
    </main>
  )
}
