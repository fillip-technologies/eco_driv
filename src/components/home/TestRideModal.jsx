import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { X, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'
import { SCOOTER_MODELS } from '../../constants/navigation'
import { submitContact } from '../../lib/api'

export default function TestRideModal({ isOpen, onClose }) {
  const [selectedModel, setSelectedModel] = useState(SCOOTER_MODELS[0].id)
  const [city, setCity] = useState('Bengaluru')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const location = useLocation()

  if (!isOpen) return null

  const cities = [
    'Bengaluru',
    'Delhi NCR',
    'Mumbai',
    'Hyderabad',
    'Pune',
    'Chennai',
    'Ahmedabad',
    'Kolkata',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    const digits = phone.replace(/\D/g, '').slice(-10)
    if (!/^[6-9]\d{9}$/.test(digits)) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    const model = SCOOTER_MODELS.find((m) => m.id === selectedModel)
    setError('')
    setIsSubmitting(true)
    try {
      await submitContact({
        formType: 'demo',
        name: name.trim(),
        phone: digits,
        model: model?.name || selectedModel,
        city,
        source: location.pathname,
      })
      setIsSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    if (isSubmitting) return
    setIsSubmitted(false)
    setError('')
    setName('')
    setPhone('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-black transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 font-semibold uppercase tracking-wider">
                Experience Center Test Ride
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900">
                Book Your Ride.
              </h3>
              <p className="text-xs text-gray-500">
                Experience instantaneous torque and smart navigation firsthand.
              </p>
            </div>

            {/* Step 1: Model Choice */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-600 block">Select Model</label>
              <div className="grid grid-cols-3 gap-2">
                {SCOOTER_MODELS.map((model) => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => setSelectedModel(model.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedModel === model.id
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-display font-bold text-xs">{model.name}</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${selectedModel === model.id ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      {model.topSpeed}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: City Choice */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-600 block">Select City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-xs font-mono focus:outline-none focus:border-black"
              >
                {cities.map((c) => (
                  <option key={c} value={c} className="bg-white text-gray-900">
                    {c} (Official Hub Available)
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-mono text-gray-600 block">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-xs placeholder:text-gray-400 focus:outline-none focus:border-black"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-gray-600 block">Mobile Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-xs placeholder:text-gray-400 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-gray-800 transition shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Booking…' : 'Confirm Test Ride Slot'}</span>
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-display font-black text-gray-900">Test Ride Confirmed!</h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-gray-900">{name}</strong>. Our {city} Experience Center specialist will reach you at <span className="font-mono text-emerald-700 font-semibold">+91 {phone.replace(/\D/g, '').slice(-10)}</span> with your booking pass.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full font-display font-semibold text-xs text-white bg-black hover:bg-gray-800 transition"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
