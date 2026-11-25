import { useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { ADMIN_NAV_ITEMS } from '../config/navigation'

export default function Topbar({ onMenuClick }) {
  const { pathname } = useLocation()
  // Longest matching nav path wins, so /admin/enquiries beats /admin
  const current = [...ADMIN_NAV_ITEMS]
    .sort((a, b) => b.to.length - a.to.length)
    .find((item) => pathname === item.to || pathname.startsWith(`${item.to}/`))

  return (
    <header className="sticky top-0 z-20 h-16 bg-white/90 backdrop-blur border-b border-gray-200 flex items-center gap-3 px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="lg:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
      >
        <Menu className="w-5 h-5" />
      </button>
      <h1 className="text-lg font-bold text-gray-950">{current?.label || 'Admin'}</h1>
    </header>
  )
}
