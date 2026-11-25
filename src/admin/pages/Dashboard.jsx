import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Bike, CalendarCheck, MessageSquareText, CalendarDays, Sparkles, ArrowRight, Loader2 } from 'lucide-react'
import { fetchContacts, fetchContactStats } from '../services/adminApi'
import { STATUS_STYLES, capitalize, formatDate } from '../utils/enquiry'
import StatCard from '../components/StatCard'
import ErrorAlert from '../components/ErrorAlert'

const SECTIONS = [
  {
    type: 'enquiry',
    title: 'Recent vehicle enquiries',
    to: '/admin/vehicle-enquiries',
    empty: 'No vehicle enquiries yet',
    detail: (r) => [r.model, r.pincode, r.quantity && `Qty ${r.quantity}`].filter(Boolean).join(' · '),
  },
  {
    type: 'demo',
    title: 'Recent demo bookings',
    to: '/admin/demo-bookings',
    empty: 'No demo bookings yet',
    detail: (r) => [r.model, r.city].filter(Boolean).join(' · '),
  },
  {
    type: 'contact',
    title: 'Recent contact messages',
    to: '/admin/contact-messages',
    empty: 'No contact messages yet',
    detail: (r) => r.subject || r.message || 'Message',
  },
]

function RecentList({ title, to, empty, detail, items }) {
  return (
    <section className="bg-white border border-gray-200/80 rounded-2xl min-w-0">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-950">{title}</h3>
        <Link to={to} className="flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800">
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      {items === null ? (
        <div className="py-12 text-center text-gray-400"><Loader2 className="w-5 h-5 animate-spin inline" /></div>
      ) : items.length === 0 ? (
        <p className="py-12 text-center text-sm text-gray-400">{empty}</p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {items.map((r) => (
            <li key={r._id} className="flex items-center gap-3 px-5 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900 truncate">{r.name}</p>
                <p className="text-xs text-gray-500 truncate">+91 {r.phone} · {detail(r)}</p>
              </div>
              <div className="text-right shrink-0">
                <span className={`inline-block border rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[r.status]}`}>
                  {capitalize(r.status)}
                </span>
                <p className="text-[11px] text-gray-400 mt-1 whitespace-nowrap">{formatDate(r.createdAt)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function Dashboard() {
  const { admin } = useOutletContext()
  const [stats, setStats] = useState(null)
  const [recent, setRecent] = useState({ enquiry: null, demo: null, contact: null })
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    Promise.all([
      fetchContactStats(),
      fetchContacts({ formType: 'enquiry', limit: 5 }),
      fetchContacts({ formType: 'demo', limit: 5 }),
      fetchContacts({ formType: 'contact', limit: 5 }),
    ])
      .then(([s, enquiries, demos, messages]) => {
        if (cancelled) return
        setStats(s)
        setRecent({ enquiry: enquiries.items, demo: demos.items, contact: messages.items })
      })
      .catch((err) => {
        if (cancelled) return
        setError(err.message)
        setRecent({ enquiry: [], demo: [], contact: [] })
      })
    return () => { cancelled = true }
  }, [])

  const cards = [
    {
      label: 'Vehicle enquiries',
      value: stats?.byType.enquiry.total,
      icon: Bike,
      to: '/admin/vehicle-enquiries',
      accent: 'bg-sky-50 text-sky-700',
    },
    {
      label: 'Demo bookings',
      value: stats?.byType.demo.total,
      icon: CalendarCheck,
      to: '/admin/demo-bookings',
      accent: 'bg-emerald-50 text-emerald-700',
    },
    {
      label: 'Contact messages',
      value: stats?.byType.contact.total,
      icon: MessageSquareText,
      to: '/admin/contact-messages',
      accent: 'bg-violet-50 text-violet-700',
    },
    { label: 'Received today', value: stats?.today, icon: CalendarDays, accent: 'bg-amber-50 text-amber-700' },
    { label: 'Awaiting response', value: stats?.new, icon: Sparkles, accent: 'bg-rose-50 text-rose-700' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-950 tracking-tight">
          Welcome back{admin?.name ? `, ${admin.name}` : ''}
        </h2>
        <p className="text-sm text-gray-500 mt-1">Here&apos;s what&apos;s coming in from the website.</p>
      </div>

      <ErrorAlert>{error}</ErrorAlert>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
        {cards.map((card) => <StatCard key={card.label} {...card} />)}
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 gap-6">
        {SECTIONS.map(({ type, ...section }) => (
          <RecentList key={type} {...section} items={recent[type]} />
        ))}
      </div>
    </div>
  )
}
