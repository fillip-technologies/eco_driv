import { useParams } from 'react-router-dom'
import ThreeWheelerHeroSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerHeroSection'
import ThreeWheelerViewsSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerViewsSection'
import ThreeWheelerSpecsSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerSpecsSection'
import ThreeWheelerCategoriesSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerCategoriesSection'
import ThreeWheelerColorsSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerColorsSection'
import { COMMERCIAL_3W_MAP, DEFAULT_COMMERCIAL_3W } from '../../data/commercialVehiclesData'

export default function EcodrivCargo({ onBookTestRide, modelId }) {
  const params = useParams()
  const rawId = (modelId || params.modelId || 'cargo-150').toLowerCase().replace('comm-', '').replace('ecodriv-', '')
  const vehicle = COMMERCIAL_3W_MAP[rawId] || DEFAULT_COMMERCIAL_3W

  return (
    <main className="bg-white">
      <ThreeWheelerHeroSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
      <ThreeWheelerViewsSection vehicle={vehicle} />
      <ThreeWheelerSpecsSection vehicle={vehicle} />
      <ThreeWheelerCategoriesSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
      <ThreeWheelerColorsSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
    </main>
  )
}

