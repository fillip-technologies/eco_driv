import { useParams } from 'react-router-dom'
import DeliveryHeroSection from '../../components/commercial-mobility/delivery/DeliveryHeroSection'
import DeliveryViewsSection from '../../components/commercial-mobility/delivery/DeliveryViewsSection'
import DeliveryUseCasesSection from '../../components/commercial-mobility/delivery/DeliveryUseCasesSection'
import DeliverySpecsSection from '../../components/commercial-mobility/delivery/DeliverySpecsSection'
import DeliveryWarehouseSection from '../../components/commercial-mobility/delivery/DeliveryWarehouseSection'
import ContactFormSection from '../../components/home/ContactFormSection'
import { COMMERCIAL_2W_MAP, DEFAULT_COMMERCIAL_2W } from '../../data/commercialVehiclesData'

export default function EcodrivDelivery({ onBookTestRide, modelId }) {
  const params = useParams()
  const rawId = (modelId || params.modelId || 'delivery-100').toLowerCase().replace('comm-', '').replace('ecodriv-', '')
  const vehicle = COMMERCIAL_2W_MAP[rawId] || DEFAULT_COMMERCIAL_2W

  return (
    <main className="bg-white">
      <DeliveryHeroSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
      <DeliveryViewsSection vehicle={vehicle} />
      <DeliveryUseCasesSection vehicle={vehicle} onBookTestRide={onBookTestRide} />
      <DeliverySpecsSection vehicle={vehicle} />
      <DeliveryWarehouseSection vehicle={vehicle} />
      <ContactFormSection
        defaultModel={vehicle.name}
        modelList={Object.values(COMMERCIAL_2W_MAP).map(v => ({ id: v.id, label: v.name }))}
      />
    </main>
  )
}

