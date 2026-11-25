import { Phone } from 'lucide-react'
import LeadsPage from '../components/LeadsPage'
import { formatDate } from '../utils/enquiry'

// Submissions from the "Get in touch" vehicle form (Home, Delivery, Cargo pages)
const columns = [
  { header: 'Date', className: 'whitespace-nowrap text-gray-500', render: (r) => formatDate(r.createdAt) },
  { header: 'Name', className: 'font-medium text-gray-900', render: (r) => r.name },
  {
    header: 'Phone',
    className: 'whitespace-nowrap',
    render: (r) => (
      <a href={`tel:+91${r.phone}`} className="flex items-center gap-1.5 text-gray-800 hover:text-emerald-700">
        <Phone className="w-3.5 h-3.5" /> +91 {r.phone}
      </a>
    ),
  },
  { header: 'Vehicle', className: 'whitespace-nowrap font-medium text-gray-900', render: (r) => r.model || '–' },
  { header: 'Pin / Area', className: 'text-gray-700', render: (r) => r.pincode || '–' },
  { header: 'Qty', className: 'text-gray-700 tabular-nums', render: (r) => r.quantity ?? '–' },
  { header: 'Page', className: 'text-gray-500 whitespace-nowrap', render: (r) => r.source || '–' },
]

export default function VehicleEnquiries() {
  return (
    <LeadsPage
      formType="enquiry"
      columns={columns}
      searchPlaceholder="Search name, phone, vehicle, pin code…"
      itemLabel={{ one: 'enquiry', many: 'enquiries' }}
    />
  )
}
