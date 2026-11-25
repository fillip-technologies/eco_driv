import { useParams } from 'react-router-dom'
import BatterySwapSection from '../../components/common/BatterySwapSection'
import ThreeWheelerHeroSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerHeroSection'
import ThreeWheelerViewsSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerViewsSection'
import ThreeWheelerSpecsSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerSpecsSection'
import ThreeWheelerCategoriesSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerCategoriesSection'
import ThreeWheelerColorsSection from '../../components/commercial-mobility/3-wheelers/ThreeWheelerColorsSection'
import ContactFormSection from '../../components/home/ContactFormSection'
import { COMMERCIAL_3W_MAP, DEFAULT_COMMERCIAL_3W } from '../../data/commercialVehiclesData'
import threeWheelerFormImg from '../../assets/3-wheelers/vehicles-1.png'

export default function EcodrivCargo({ onBookTestRide, modelId }) {
  const params = useParams()
  const rawId = (modelId || params.modelId || 'cargo-150').toLowerCase().replace('comm-', '').replace('ecodriv-', '')
  const vehicle = COMMERCIAL_3W_MAP[rawId] || DEFAULT_COMMERCIAL_3W

  return (
    <main className="bg-white">
      <ThreeWheelerHeroSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
      <ThreeWheelerViewsSection vehicle={vehicle} />
      <ThreeWheelerSpecsSection vehicle={vehicle} />
      <BatterySwapSection vehicle={vehicle} variant="business" />
      <ThreeWheelerCategoriesSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
      <ThreeWheelerColorsSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
      <ContactFormSection
        key={vehicle.id}
        defaultModel={vehicle.name}
        showQuantity
        image={threeWheelerFormImg}
        imageAlt={`${vehicle.name} Electric Cargo Three-Wheeler`}
        modelList={Object.values(COMMERCIAL_3W_MAP).map((v) => ({ id: v.id, label: v.name }))}
      />
    </main>
  )
}

