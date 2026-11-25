import { Phone, Mail } from 'lucide-react'
import LeadsPage from '../components/LeadsPage'
import { formatDate } from '../utils/enquiry'

// Submissions from the Contact Us page form
const columns = [
  { header: 'Date', className: 'whitespace-nowrap text-gray-500', render: (r) => formatDate(r.createdAt) },
  { header: 'Name', className: 'font-medium text-gray-900', render: (r) => r.name },
  {
    header: 'Contact',
    className: 'whitespace-nowrap',
    render: (r) => (
      <>
        <a href={`tel:+91${r.phone}`} className="flex items-center gap-1.5 text-gray-800 hover:text-emerald-700">
          <Phone className="w-3.5 h-3.5" /> +91 {r.phone}
        </a>
        {r.email && (
          <a href={`mailto:${r.email}`} className="flex items-center gap-1.5 text-gray-500 hover:text-emerald-700 mt-1">
            <Mail className="w-3.5 h-3.5" /> {r.email}
          </a>
        )}
      </>
    ),
  },
  { header: 'Purpose', className: 'whitespace-nowrap font-medium text-gray-900', render: (r) => r.subject || '–' },
  {
    header: 'Message',
    className: 'text-gray-600 min-w-[240px] max-w-[420px] whitespace-pre-line break-words',
    render: (r) => r.message || <span className="text-gray-400">–</span>,
  },
]

export default function ContactMessages() {
  return (
    <LeadsPage
      formType="contact"
      columns={columns}
      searchPlaceholder="Search name, phone, email, message…"
      itemLabel={{ one: 'message', many: 'messages' }}
    />
  )
}
