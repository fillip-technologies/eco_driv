import { Link } from 'react-router-dom'

export default function StatCard({ label, value, icon: Icon, to, accent = 'text-gray-500 bg-gray-100' }) {
  const body = (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-500">{label}</p>
        {Icon && (
          <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${accent}`}>
            <Icon className="w-4 h-4" />
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-950 mt-2 tabular-nums">{value ?? '–'}</p>
    </>
  )
  const cls = 'block bg-white border border-gray-200/80 rounded-2xl p-4 transition'

  return to ? (
    <Link to={to} className={`${cls} hover:border-gray-300 hover:shadow-sm`}>{body}</Link>
  ) : (
    <div className={cls}>{body}</div>
  )
}
