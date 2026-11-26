import ApexCloseUpSection from '../../mobility/apex/ApexCloseUpSection'
import { DEFAULT_COMMERCIAL_2W } from '../../../data/commercialVehiclesData'
import sideViewImg from '../../../assets/personal-mobility/view-2.png'

// Close-up detail shots for the delivery 2-wheeler.
// Uses the same side-view image as the delivery specs section.
//   focus = [x, y] point of the image (0–1) to centre in the card
//   zoom  = image width relative to the card width
// When dedicated close-up photos are available, replace `image`
// and set zoom: 1, focus: [0.5, 0.5].
const DETAILS = [
  {
    id: 'shocker',
    label: 'Rear Suspension',
    caption: 'Twin hydraulic shocks built for full loads',
    image: sideViewImg,
    focus: [0.765, 0.66],
    zoom: 4.2,
    gridClass: 'col-span-2 row-span-2',
  },
  {
    id: 'handle',
    label: 'Handlebar & Controls',
    caption: 'Ergonomic grips for long delivery shifts',
    image: sideViewImg,
    focus: [0.39, 0.17],
    zoom: 4.4,
    gridClass: 'col-span-2',
  },
  {
    id: 'disc',
    label: 'Front Disc Brake',
    caption: 'Confident stopping under load',
    image: sideViewImg,
    focus: [0.15, 0.83],
    zoom: 4.2,
    gridClass: 'col-span-1',
  },
  {
    id: 'headlamp',
    label: 'LED Headlamp',
    caption: 'Clear visibility on night runs',
    image: sideViewImg,
    focus: [0.29, 0.26],
    zoom: 5,
    gridClass: 'col-span-1',
  },
  {
    id: 'taillamp',
    label: 'LED Tail Lamp',
    caption: 'High-visibility rear lighting',
    image: sideViewImg,
    focus: [0.84, 0.47],
    zoom: 4.2,
    gridClass: 'col-span-1 lg:col-span-2',
  },
  {
    id: 'seat',
    label: 'Seat & Rear Carrier',
    caption: 'Long seat with load-ready rear rail',
    image: sideViewImg,
    focus: [0.68, 0.38],
    zoom: 2.4,
    gridClass: 'col-span-1 lg:col-span-2',
  },
]

export default function DeliveryCloseUpSection({ vehicle = DEFAULT_COMMERCIAL_2W }) {
  return (
    <ApexCloseUpSection
      vehicle={vehicle}
      details={DETAILS}
      subtitle={`A closer look at the components that keep the ${vehicle.name} delivering, shift after shift.`}
    />
  )
}
