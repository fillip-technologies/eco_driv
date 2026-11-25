import { useParams } from 'react-router-dom'
import BatterySwapSection from '../../components/common/BatterySwapSection'
import ApexHeroSection from '../../components/mobility/apex/ApexHeroSection'
import ApexViewsSection from '../../components/mobility/apex/ApexViewsSection'
import ApexSpecsSection from '../../components/mobility/apex/ApexSpecsSection'
import ApexCloseUpSection from '../../components/mobility/apex/ApexCloseUpSection'
import ApexColorsSection from '../../components/mobility/apex/ApexColorsSection'
import { PERSONAL_VEHICLES_MAP, DEFAULT_VEHICLE } from '../../data/personalVehiclesData'

export default function EcodrivApex({ onBookTestRide, modelId }) {
  const params = useParams()
  const activeId = (modelId || params.modelId || 'apex').toLowerCase()
  const vehicle = PERSONAL_VEHICLES_MAP[activeId] || DEFAULT_VEHICLE

  return (
    <main className="bg-white">
      <ApexHeroSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
      <ApexViewsSection vehicle={vehicle} />
      <ApexSpecsSection vehicle={vehicle} />
      <BatterySwapSection vehicle={vehicle} variant="personal" />
      <ApexCloseUpSection vehicle={vehicle} />
      <ApexColorsSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
    </main>
  )
}

