import PartnerHeroSection from '../../components/our-partner/common/PartnerHeroSection'
import PartnerLogosSection from '../../components/our-partner/common/PartnerLogosSection'
import FinanceFlexibleSection from '../../components/our-partner/finance-partner/FinanceFlexibleSection'
import PartnerInquiryMasterForm from '../../components/our-partner/PartnerInquiryMasterForm'

export default function FinancePartner() {
  return (
    <main className="bg-white min-h-screen">
      {/* Master Hero: Displays "Our Finance Partner" */}
      <PartnerHeroSection partnerType="finance" />

      {/* Master Partner Logos Strip */}
      <PartnerLogosSection />

      {/* Finance Topic-Specific Details */}
      <FinanceFlexibleSection />

      {/* Master Inquiry Form configured for Finance Partner */}
      <PartnerInquiryMasterForm partnerType="finance" />
    </main>
  )
}
