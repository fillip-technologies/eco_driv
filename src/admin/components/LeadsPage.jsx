import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Trash2, RefreshCw, Loader2, ChevronLeft, ChevronRight } from 'lucide-react'
import { deleteContact, fetchContacts, fetchContactStats, updateContact } from '../services/adminApi'
import { STATUSES, STATUS_STYLES, capitalize, notifyLeadsChanged } from '../utils/enquiry'
import ErrorAlert from './ErrorAlert'

/**
 * Generic list page for one kind of form submission.
 *
 * props:
 *   formType      'enquiry' | 'contact' — which submissions to show
 *   columns       [{ header, className?, render: (row) => node }]
 *   searchPlaceholder, itemLabel ({ one, many }) — wording
 */
export default function LeadsPage({ formType, columns, searchPlaceholder, itemLabel }) {
  // ?status=new (e.g. from dashboard cards) pre-selects a status tab
  const [searchParams] = useSearchParams()
  const initialStatus = searchParams.get('status')
  const [filters, setFilters] = useState(() => ({
    status: STATUSES.includes(initialStatus) ? initialStatus : '',
    search: '',
    page: 1,
  }))
  const [searchInput, setSearchInput] = useState('')
  const [data, setData] = useState({ items: [], total: 0, page: 1, pages: 1 })
  const [stats, setStats] = useState(null)
  const [error, setError] = useState('')

  // Bumping reloadTick (or changing filters) triggers a fetch; `loading` stays
  // true until the response for the current request key has arrived.
  const [reloadTick, setReloadTick] = useState(0)
  const [loadedKey, setLoadedKey] = useState(null)
  const requestKey = `${formType}#${JSON.stringify(filters)}#${reloadTick}`
  const loading = loadedKey !== requestKey
  const reload = () => setReloadTick((t) => t + 1)

  useEffect(() => {
    let cancelled = false
    Promise.all([fetchContacts({ ...filters, formType, limit: 20 }), fetchContactStats({ formType })])
      .then(([list, s]) => {
        if (cancelled) return
        setData(list)
        setStats(s)
        setError('')
      })
      .catch((err) => !cancelled && setError(err.message))
      .finally(() => !cancelled && setLoadedKey(requestKey))
    return () => { cancelled = true }
  }, [formType, filters, requestKey])

  // Debounce the search box
  useEffect(() => {
    const t = setTimeout(() => {
      setFilters((f) => (f.search === searchInput ? f : { ...f, search: searchInput, page: 1 }))
    }, 350)
    return () => clearTimeout(t)
  }, [searchInput])

  const afterChange = () => {
    reload()
    notifyLeadsChanged()
  }

  const handleStatusChange = async (id, status) => {
    try {
      await updateContact(id, { status })
      afterChange()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete ${itemLabel.one} from ${row.name}? This cannot be undone.`)) return
    try {
      await deleteContact(row._id)
      afterChange()
    } catch (err) {
      setError(err.message)
    }
  }

  const tabs = [{ key: '', label: 'All', count: stats?.total }, ...STATUSES.map((s) => ({ key: s, label: capitalize(s), count: stats?.[s] }))]
  const colCount = columns.length + 2

  return (
    <div className="space-y-5">
      {/* Status tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {tabs.map(({ key, label, count }) => {
          const active = filters.status === key
          return (
            <button
              key={label}
              type="button"
              onClick={() => setFilters((f) => ({ ...f, status: key, page: 1 }))}
              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition cursor-pointer ${
                active ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              {label}
              <span className={`text-xs tabular-nums rounded-full px-1.5 ${active ? 'bg-white/20' : 'bg-gray-100 text-gray-500'}`}>
                {count ?? '–'}
              </span>
            </button>
          )
        })}
      </div>

      {/* Search + refresh */}
      <div className="flex gap-3">
        <label className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-4 py-2.5 focus-within:border-gray-400">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="search"
            placeholder={searchPlaceholder}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </label>
        <button
          type="button"
          onClick={reload}
          aria-label="Refresh"
          className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50 cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">Refresh</span>
        </button>
      </div>

      <ErrorAlert>{error}</ErrorAlert>

      {/* Table */}
      <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
              <tr>
                {columns.map((col) => (
                  <th key={col.header} className="px-4 py-3 font-semibold whitespace-nowrap">{col.header}</th>
                ))}
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading && data.items.length === 0 ? (
                <tr>
                  <td colSpan={colCount} className="px-4 py-12 text-center text-gray-400">
                    <Loader2 className="w-5 h-5 animate-spin inline" />
                  </td>
                </tr>
              ) : data.items.length === 0 ? (
                <tr>
                  <td colSpan={colCount} className="px-4 py-12 text-center text-gray-400">
                    No {itemLabel.many} found
                  </td>
                </tr>
              ) : (
                data.items.map((row) => (
                  <tr key={row._id} className="hover:bg-gray-50/60 align-top">
                    {columns.map((col) => (
                      <td key={col.header} className={`px-4 py-3 ${col.className || ''}`}>{col.render(row)}</td>
                    ))}
                    <td className="px-4 py-3">
                      <select
                        value={row.status}
                        onChange={(e) => handleStatusChange(row._id, e.target.value)}
                        aria-label={`Status for ${row.name}`}
                        className={`border rounded-full px-3 py-1 text-xs font-semibold cursor-pointer ${STATUS_STYLES[row.status]}`}
                      >
                        {STATUSES.map((s) => <option key={s} value={s}>{capitalize(s)}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        type="button"
                        onClick={() => handleDelete(row)}
                        aria-label={`Delete ${itemLabel.one} from ${row.name}`}
                        className="p-2 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 text-sm text-gray-500">
          <span>
            {data.total} {data.total === 1 ? itemLabel.one : itemLabel.many} · Page {data.page} of {data.pages}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={data.page <= 1}
              onClick={() => setFilters((f) => ({ ...f, page: f.page - 1 }))}
              aria-label="Previous page"
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled={data.page >= data.pages}
              onClick={() => setFilters((f) => ({ ...f, page: f.page + 1 }))}
              aria-label="Next page"
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
