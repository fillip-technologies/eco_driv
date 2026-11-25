import { NavLink, Link } from 'react-router-dom'
import { LogOut, X, ExternalLink } from 'lucide-react'
import logoImg from '../../assets/logo2.png'
import { ADMIN_NAV } from '../config/navigation'

// badges: { enquiry: 3, contact: 1 } — count of "new" items per form type
export default function Sidebar({ admin, badges = {}, open, onClose, onLogout }) {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px] lg:hidden transition-opacity ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand */}
        <div className="h-16 shrink-0 flex items-center justify-between px-5 border-b border-gray-100">
          <Link to="/admin" onClick={onClose} className="flex items-center gap-2.5">
            <img src={logoImg} alt="Ecodriv" className="h-7 w-auto" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-md px-1.5 py-0.5">
              Admin
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
          {ADMIN_NAV.map((group) => (
            <div key={group.group}>
              <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                {group.group}
              </p>
              <ul className="space-y-1">
                {group.items.map(({ label, to, icon: Icon, end, badge }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                          isActive
                            ? 'bg-black text-white shadow-sm'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-950'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon className="w-[18px] h-[18px] shrink-0" />
                          <span className="flex-1 truncate">{label}</span>
                          {badge && badges[badge] > 0 && (
                            <span
                              title={`${badges[badge]} new`}
                              className={`min-w-5 h-5 px-1.5 rounded-full text-[11px] font-bold tabular-nums flex items-center justify-center ${
                                isActive ? 'bg-white text-black' : 'bg-emerald-600 text-white'
                              }`}
                            >
                              {badges[badge] > 99 ? '99+' : badges[badge]}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-gray-100 p-3 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
          >
            <ExternalLink className="w-4 h-4" /> View website
          </a>
          <div className="flex items-center gap-3 px-3 py-2.5">
            <div className="w-9 h-9 shrink-0 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm font-bold">
              {(admin?.name || admin?.email || 'A')[0].toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900 truncate">{admin?.name || 'Admin'}</p>
              <p className="text-xs text-gray-500 truncate">{admin?.email || '…'}</p>
            </div>
            <button
              type="button"
              onClick={onLogout}
              title="Log out"
              aria-label="Log out"
              className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
