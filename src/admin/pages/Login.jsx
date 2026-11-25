import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Lock, Mail, Loader2, Eye, EyeOff } from 'lucide-react'
import logoImg from '../../assets/logo2.png'
import { adminLogin } from '../services/adminApi'
import { getToken, setToken } from '../services/auth'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (getToken()) return <Navigate to="/admin" replace />

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { token } = await adminLogin(email.trim(), password)
      setToken(token)
      navigate('/admin', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const inputWrap =
    'flex items-center gap-3 bg-[#F3F4F7] focus-within:bg-white rounded-2xl px-4 py-3.5 border border-transparent focus-within:border-gray-300 transition'

  return (
    <div className="min-h-screen bg-[#FAFBFD] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
        <div className="mb-8 text-center">
          <img src={logoImg} alt="Ecodriv" className="h-9 w-auto mx-auto mb-5" />
          <span className="text-xs font-mono text-emerald-600 font-semibold uppercase tracking-wider">
            Ecodriv Admin
          </span>
          <h1 className="text-3xl font-bold text-gray-950 tracking-tight mt-1">Sign in</h1>
          <p className="text-sm text-gray-500 mt-2">Manage enquiries from the website</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className={inputWrap}>
            <Mail className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="email"
              required
              autoComplete="username"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
          </label>

          <label className={inputWrap}>
            <Lock className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              autoComplete="current-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="text-gray-400 hover:text-gray-800 cursor-pointer"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </label>

          {error && (
            <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
