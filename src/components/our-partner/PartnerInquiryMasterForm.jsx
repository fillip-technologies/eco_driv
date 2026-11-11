import { useState } from 'react'
import { CheckCircle2, Send, ChevronDown } from 'lucide-react'

// Pre-configured category options for each partner vertical
const PARTNER_CATEGORIES = {
  finance: [
    { id: 'retail-loan', label: 'Retail Vehicle Loan' },
    { id: 'fleet-lease', label: 'Commercial Fleet Leasing' },
    { id: 'bank-nbfc', label: 'Bank / NBFC Partnership' },
    { id: 'dealer-finance', label: 'Dealership Inventory Finance' },
  ],
  battery: [
    { id: 'cell-supply', label: 'Cell & Pack Manufacturing' },
    { id: 'swap-network', label: 'Swapping Station Network' },
    { id: 'bms-tech', label: 'Thermal BMS Integration' },
    { id: 'recycling', label: 'Circular Battery Recycling' },
  ],
  iot: [
    { id: 'ecu-controller', label: 'Smart ECU & Motor Controllers' },
    { id: 'can-bus', label: 'CAN Bus & Cloud Gateways' },
    { id: 'keyless', label: 'Keyless & NFC Access' },
    { id: 'ota', label: 'OTA Firmware Infrastructure' },
  ],
  telematics: [
    { id: 'gps-telematics', label: 'Fleet Telematics Integration' },
    { id: 'driver-behavior', label: 'Driver Safety & Performance' },
    { id: 'predictive-service', label: 'Predictive Service Analytics' },
    { id: 'api-partner', label: 'Enterprise Fleet ERP API' },
  ],
}

export default function PartnerInquiryMasterForm({ partnerType = 'finance' }) {
  const categories = PARTNER_CATEGORIES[partnerType] || PARTNER_CATEGORIES.finance

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    category: categories[0]?.label || '',
    message: '',
    agreeTerms: true,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      city: '',
      category: categories[0]?.label || '',
      message: '',
      agreeTerms: true,
    })
  }

  return (
    <section id="partner-form" className="py-16 sm:py-24 bg-[#FAFCFB] relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standard Heading Before Form */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight leading-tight mb-2.5">
            <span className="text-[#0F172A]">Partnership </span>
            <span className="text-[#2B9346]">Form</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
            Fill in your details below and our partnership team will connect with you.
          </p>
        </div>

        {/* Clean Master Form Container */}
        <div className="bg-white border border-gray-100/90 rounded-3xl sm:rounded-[36px] shadow-[0_12px_44px_-8px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-12">
          
          {isSubmitted ? (
            <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#2B9346] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] mb-2 font-sans">
                Partnership Request Received!
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-md mx-auto">
                Thank you, <span className="font-bold text-gray-900">{formData.name}</span>. Our partnership team will contact you shortly regarding <span className="font-bold text-[#2B9346]">{formData.category}</span>.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
              >
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Partnership Category Dropdown */}
              <div>
                <label htmlFor="category" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Partnership Category <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 pr-10 rounded-xl bg-gray-50/70 border border-gray-200 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B9346] focus:border-transparent transition-all cursor-pointer appearance-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.label}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full h-11 px-3.5 rounded-xl bg-gray-50/70 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B9346] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Company / Organization Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Finance Corp"
                    className="w-full h-11 px-3.5 rounded-xl bg-gray-50/70 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B9346] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs font-bold text-gray-500 select-none">
                      +91
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      maxLength={10}
                      className="w-full h-11 pl-12 pr-3.5 rounded-xl bg-gray-50/70 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B9346] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full h-11 px-3.5 rounded-xl bg-gray-50/70 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B9346] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Operating City / State
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Gurugram / Delhi NCR / Mumbai / Bengaluru"
                  className="w-full h-11 px-3.5 rounded-xl bg-gray-50/70 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B9346] focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Partnership Scope & Details (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details on your products, expected volume, or collaboration scope..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50/70 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B9346] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-gray-300 text-[#2B9346] focus:ring-[#2B9346]"
                />
                <span className="text-[11.5px] text-gray-500 leading-snug">
                  I agree to receive official correspondence from Ecodriv regarding this partnership request.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2B9346] hover:bg-[#237c3a] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit Partnership Application'}</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  )
}
