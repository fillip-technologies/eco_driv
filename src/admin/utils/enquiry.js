export const STATUSES = ['new', 'contacted', 'converted', 'closed']

export const STATUS_STYLES = {
  new: 'bg-blue-50 text-blue-700 border-blue-200',
  contacted: 'bg-amber-50 text-amber-700 border-amber-200',
  converted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  closed: 'bg-gray-100 text-gray-600 border-gray-200',
}

export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

export const formatDate = (iso) =>
  new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })

// Fired after an enquiry is updated or deleted so the sidebar badges refresh
export const LEADS_CHANGED_EVENT = 'ecodriv:admin-leads-changed'
export const notifyLeadsChanged = () => window.dispatchEvent(new Event(LEADS_CHANGED_EVENT))
