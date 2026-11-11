import { useState } from 'react'
import { LocateFixed, CheckCircle2, PhoneCall } from 'lucide-react'
import formScooterImg from '../../assets/home/form-image.png'

const models = [
  { id: 'ecodriv-apex', label: 'Ecodriv Apex' },
  { id: 'ecodriv-450', label: 'Ecodriv 450' },
  { id: 'ecodriv-glide', label: 'Ecodriv Glide' },
]

export default function ContactFormSection({ defaultModel = 'Ecodriv Apex', modelList = models }) {
  const [selectedModel, setSelectedModel] = useState(defaultModel)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLocating, setIsLocating] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLocate = () => {
    setIsLocating(true)
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setFormData((prev) => ({ ...prev, pincode: '122002 (Gurugram)' }))
          setIsLocating(false)
        },
        () => {
          setFormData((prev) => ({ ...prev, pincode: '110001 (New Delhi)' }))
          setIsLocating(false)
        },
        { timeout: 4000 }
      )
    } else {
      setFormData((prev) => ({ ...prev, pincode: '110001 (New Delhi)' }))
      setIsLocating(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) return
    setIsSubmitted(true)
  }

  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="bg-[#FAFBFD] border border-gray-200/80 rounded-3xl sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.03)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Get In Touch Form (5 cols on lg) */}
            <div className="lg:col-span-5 max-w-lg mx-auto lg:mx-0 w-full z-10">
              <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-950 tracking-tight mb-8 text-center lg:text-left">
                Get in touch
              </h2>

              {isSubmitted ? (
                <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-md text-center">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 mb-2">Request Received!</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Our Ecodriv product specialist will contact you shortly regarding the <span className="font-semibold text-gray-900">{selectedModel}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', phone: '', pincode: '' })
                    }}
                    className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-gray-800 transition cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#F3F4F7] hover:bg-[#EFF0F4] focus:bg-white text-gray-900 placeholder:text-gray-400 text-sm sm:text-base font-sans rounded-2xl px-5 py-4 border border-transparent focus:border-gray-300 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Phone Input with +91 Prefix */}
                  <div className="flex items-center bg-[#F3F4F7] hover:bg-[#EFF0F4] focus-within:bg-white text-gray-900 text-sm sm:text-base font-sans rounded-2xl px-5 py-4 border border-transparent focus-within:border-gray-300 transition-all duration-200">
                    <span className="text-gray-500 font-semibold pr-3 border-r border-gray-300 select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone number*"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 pl-3 focus:outline-none"
                    />
                  </div>

                  {/* Pin Code / Area with GPS icon */}
                  <div className="flex items-center bg-[#F3F4F7] hover:bg-[#EFF0F4] focus-within:bg-white text-gray-900 text-sm sm:text-base font-sans rounded-2xl px-5 py-4 border border-transparent focus-within:border-gray-300 transition-all duration-200">
                    <input
                      type="text"
                      name="pincode"
                      required
                      placeholder="Enter Pin Code or Area*"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 pr-3 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleLocate}
                      title="Use current location"
                      className="text-gray-400 hover:text-gray-800 transition p-1 cursor-pointer"
                    >
                      <LocateFixed className={`w-5 h-5 ${isLocating ? 'animate-spin text-emerald-600' : ''}`} />
                    </button>
                  </div>

                  {/* Model Selector */}
                  <div className="pt-2">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Pick your model*
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {modelList.map((model) => {
                        const isSelected = selectedModel === model.label
                        return (
                          <button
                            key={model.id}
                            type="button"
                            onClick={() => setSelectedModel(model.label)}
                            className={`py-3.5 px-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer text-center ${
                              isSelected
                                ? 'bg-black text-white shadow-sm'
                                : 'bg-[#F3F4F7] text-gray-700 hover:bg-[#EAECEF]'
                            }`}
                          >
                            {model.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#E5E7EB] hover:bg-black hover:text-white text-gray-600 text-sm sm:text-base font-semibold transition-all duration-300 shadow-xs cursor-pointer active:scale-[0.99]"
                    >
                      Submit
                    </button>
                  </div>

                  {/* Disclaimer Text */}
                  <p className="text-[11px] text-gray-400 font-sans leading-relaxed text-center lg:text-left pt-2">
                    By clicking on &apos;Submit&apos; you are agreeing to our{' '}
                    <a href="#privacy" className="font-semibold text-gray-600 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and are allowing us (Ecodriv) and our service partners to get in touch with you.
                  </p>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Official Scooter Image (7 cols on lg) */}
            <div className="lg:col-span-7 flex items-center justify-center relative">
              {/* Subtle Ambient Radial Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/30 via-slate-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative w-full max-w-[640px] lg:max-w-none flex justify-center">
                <img
                  src={formScooterImg}
                  alt="Ecodriv Electric Scooter"
                  className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] block transform lg:scale-105 transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Floating 'Request a call back' button matching reference */}
          <div className="hidden sm:flex absolute bottom-6 right-6 z-20">
            <button
              type="button"
              onClick={() => {
                const phoneInput = document.querySelector('input[name="phone"]')
                phoneInput?.focus()
              }}
              className="bg-white/95 hover:bg-black hover:text-white text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-full border border-gray-200/90 shadow-md backdrop-blur-md flex items-center gap-2 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Request a call back</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

