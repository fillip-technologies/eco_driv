import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { changePassword } from '../services/adminApi'
import ErrorAlert from '../components/ErrorAlert'
import { setToken } from '../services/auth'

const inputCls =
  'w-full bg-[#F3F4F7] focus:bg-white text-gray-900 text-sm rounded-xl px-4 py-3 border border-transparent focus:border-gray-300 focus:outline-none transition'

export default function Settings() {
  const { admin } = useOutletContext()
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [saving, setSaving] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setSuccess(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.newPassword.length < 8) return setError('New password must be at least 8 characters.')
    if (form.newPassword !== form.confirmPassword) return setError('New passwords do not match.')

    setError('')
    setSaving(true)
    try {
      // Changing the password invalidates old tokens; keep this session with the new one
      const { token } = await changePassword(form.currentPassword, form.newPassword)
      if (token) setToken(token)
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <section className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6">
        <h3 className="font-semibold text-gray-950">Profile</h3>
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-gray-500">Name</dt>
            <dd className="font-medium text-gray-900 mt-0.5">{admin?.name || '–'}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Email</dt>
            <dd className="font-medium text-gray-900 mt-0.5 break-all">{admin?.email || '–'}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6">
        <h3 className="font-semibold text-gray-950">Change password</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {[
            ['currentPassword', 'Current password', 'current-password'],
            ['newPassword', 'New password', 'new-password'],
            ['confirmPassword', 'Confirm new password', 'new-password'],
          ].map(([name, label, autoComplete]) => (
            <label key={name} className="block">
              <span className="block text-xs font-semibold text-gray-700 mb-1.5">{label}</span>
              <input
                type="password"
                name={name}
                required
                autoComplete={autoComplete}
                value={form[name]}
                onChange={handleChange}
                className={inputCls}
              />
            </label>
          ))}

          <ErrorAlert>{error}</ErrorAlert>
          {success && (
            <p className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3">
              <CheckCircle2 className="w-4 h-4" /> Password updated.
            </p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition cursor-pointer disabled:opacity-60 flex items-center gap-2"
          >
            {saving && <Loader2 className="w-4 h-4 animate-spin" />}
            {saving ? 'Saving…' : 'Update password'}
          </button>
        </form>
      </section>
    </div>
  )
}
