import { useCallback, useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { fetchMe, fetchContactStats } from '../services/adminApi'
import { LEADS_CHANGED_EVENT } from '../utils/enquiry'
import { clearToken, getToken, UNAUTHORIZED_EVENT } from '../services/auth'

// Protected shell for every admin page: sidebar + top bar + page content.
export default function AdminLayout() {
  const navigate = useNavigate()
  const [admin, setAdmin] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [badges, setBadges] = useState({})
  const { pathname } = useLocation()
  const hasToken = Boolean(getToken())

  const logout = useCallback(() => {
    clearToken()
    navigate('/admin/login', { replace: true })
  }, [navigate])

  // Any API call that comes back 401 logs the admin out
  useEffect(() => {
    window.addEventListener(UNAUTHORIZED_EVENT, logout)
    return () => window.removeEventListener(UNAUTHORIZED_EVENT, logout)
  }, [logout])

  useEffect(() => {
    if (!hasToken) return
    fetchMe().then(({ admin }) => setAdmin(admin)).catch(() => {})
  }, [hasToken])

  // Sidebar "new" counts: refresh on navigation and whenever a lead changes
  useEffect(() => {
    if (!hasToken) return
    let cancelled = false
    const loadBadges = () =>
      fetchContactStats()
        .then(({ byType }) => {
          if (!cancelled) setBadges(Object.fromEntries(Object.entries(byType).map(([type, c]) => [type, c.new])))
        })
        .catch(() => {})
    loadBadges()
    window.addEventListener(LEADS_CHANGED_EVENT, loadBadges)
    return () => {
      cancelled = true
      window.removeEventListener(LEADS_CHANGED_EVENT, loadBadges)
    }
  }, [hasToken, pathname])

  if (!hasToken) return <Navigate to="/admin/login" replace />

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-gray-900">
      <Sidebar
        admin={admin}
        badges={badges}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={logout}
      />
      <div className="lg:pl-64 min-w-0">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Outlet context={{ admin }} />
        </main>
      </div>
    </div>
  )
}
