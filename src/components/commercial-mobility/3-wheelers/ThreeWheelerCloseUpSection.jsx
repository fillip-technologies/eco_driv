import ApexCloseUpSection from '../../mobility/apex/ApexCloseUpSection'
import { DEFAULT_COMMERCIAL_3W } from '../../../data/commercialVehiclesData'
import sideViewImg from '../../../assets/3-wheelers/vehicles-1.png'

// Close-up detail shots for the 3-wheeler.
// Each card zooms into a part of the vehicle image:
//   focus = [x, y] point of the image (0–1) to centre in the card
//   zoom  = image width relative to the card width
// Only parts that are clearly 3-wheeler are used — the front fork,
// headlamp and front wheel look like a 2-wheeler when cropped.
// When dedicated close-up photos are available, replace `image`
// and set zoom: 1, focus: [0.5, 0.5].
const DETAILS = [
  {
    id: 'cabin',
    label: 'Cabin & Seating',
    caption: 'Cushioned seats with safety side rails',
    image: sideViewImg,
    focus: [0.66, 0.42],
    zoom: 2,
    gridClass: 'col-span-2 row-span-2',
  },
  {
    id: 'roof',
    label: 'Roof Carrier & Grab Handles',
    caption: 'Steel roof rack with sturdy overhead grips',
    image: sideViewImg,
    focus: [0.58, 0.16],
    zoom: 2.6,
    gridClass: 'col-span-2',
  },
  {
    id: 'extinguisher',
    label: 'Onboard Fire Extinguisher',
    caption: 'Safety equipment fitted as standard',
    image: sideViewImg,
    focus: [0.5, 0.66],
    zoom: 4.5,
    gridClass: 'col-span-1',
  },
  {
    id: 'windshield',
    label: 'Windshield & Cockpit',
    caption: 'Full-width glass with wiper',
    image: sideViewImg,
    focus: [0.2, 0.3],
    zoom: 3,
    gridClass: 'col-span-1',
  },
  {
    id: 'rear-wheel',
    label: 'Rear Alloy Wheel',
    caption: 'High-load tubeless commercial tyre',
    image: sideViewImg,
    focus: [0.75, 0.76],
    zoom: 3.4,
    gridClass: 'col-span-1 lg:col-span-2',
  },
  {
    id: 'rear-body',
    label: 'Rear Body & Reflectors',
    caption: 'Steel body panels with high-visibility reflectors',
    image: sideViewImg,
    focus: [0.8, 0.58],
    zoom: 3.2,
    gridClass: 'col-span-1 lg:col-span-2',
  },
]

export default function ThreeWheelerCloseUpSection({ vehicle = DEFAULT_COMMERCIAL_3W }) {
  return (
    <ApexCloseUpSection
      vehicle={vehicle}
      details={DETAILS}
      subtitle={`A closer look at the heavy-duty components that keep the ${vehicle.name} working all day.`}
    />
  )
}
