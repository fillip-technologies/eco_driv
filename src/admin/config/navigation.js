import { LayoutDashboard, Bike, CalendarCheck, MessageSquareText, Settings } from 'lucide-react'

// Sidebar menu. To add a new admin section:
//   1. create the page in src/admin/pages/
//   2. add its <Route> in src/admin/AdminApp.jsx
//   3. add an entry here (optionally inside a new group)
// `badge` (optional) shows the count of "new" items of that form type from /contacts/stats.
export const ADMIN_NAV = [
  {
    group: 'Overview',
    items: [{ label: 'Dashboard', to: '/admin', icon: LayoutDashboard, end: true }],
  },
  {
    group: 'Leads',
    items: [
      { label: 'Vehicle Enquiries', to: '/admin/vehicle-enquiries', icon: Bike, badge: 'enquiry' },
      { label: 'Demo Bookings', to: '/admin/demo-bookings', icon: CalendarCheck, badge: 'demo' },
      { label: 'Contact Messages', to: '/admin/contact-messages', icon: MessageSquareText, badge: 'contact' },
    ],
  },
  {
    group: 'Account',
    items: [{ label: 'Settings', to: '/admin/settings', icon: Settings }],
  },
]

// Flattened list, used for the page title in the top bar
export const ADMIN_NAV_ITEMS = ADMIN_NAV.flatMap((g) => g.items)
