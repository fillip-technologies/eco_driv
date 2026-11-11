import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  UserCheck,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export default function ContactDetailsSection({ onBookTestRide }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Fleet & Commercial Inquiry',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) return
    setIsSubmitted(true)
  }

  return (
    <section className="py-16 sm:py-24 bg-[#FAFCFB] relative overflow-hidden select-none border-t border-gray-100">
      
      {/* Background Soft Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* =========================================================================
            TOP SECTION: EXECUTIVE CONTACT & DIRECT CHANNELS
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          
          {/* Card 1: Co-Founder & COO Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF8EE] text-[#2B9346] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#2B9346] font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
              Leadership Direct
            </div>
            <h3 className="text-xl font-bold font-sans text-gray-950 tracking-tight">
              Naushad Tyagi
            </h3>
            <p className="text-xs text-gray-500 font-medium mb-4">
              Co-founder & Chief Operating Officer (COO)
            </p>
            <div className="space-y-2 pt-2 border-t border-gray-100 text-xs sm:text-[13px]">
              <a
                href="tel:9205304877"
                className="flex items-center gap-2.5 font-semibold text-gray-900 hover:text-[#2B9346] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2B9346] shrink-0" />
                <span>+91 9205304877</span>
              </a>
              <a
                href="mailto:COO@ecofleet.in"
                className="flex items-center gap-2.5 font-semibold text-gray-900 hover:text-[#2B9346] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2B9346] shrink-0" />
                <span>COO@ecofleet.in</span>
              </a>
            </div>
          </div>

          {/* Card 2: General Corporate & Customer Inquiries */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
              Corporate & Support
            </div>
            <h3 className="text-xl font-bold font-sans text-gray-950 tracking-tight">
              General Inquiries
            </h3>
            <p className="text-xs text-gray-500 font-medium mb-4">
              Sales, customer support, and official partnerships.
            </p>
            <div className="space-y-2 pt-2 border-t border-gray-100 text-xs sm:text-[13px]">
              <a
                href="mailto:info@ecodriv.in"
                className="flex items-center gap-2.5 font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>info@ecodriv.in</span>
              </a>
              <div className="flex items-center gap-2.5 text-gray-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Official Communication</span>
              </div>
            </div>
          </div>

          {/* Card 3: Experience Center / Test Ride CTA */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-gray-900 to-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#2B9346]/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-4 backdrop-blur-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white tracking-tight">
                Experience Ecodriv Live
              </h3>
              <p className="text-xs text-gray-300 font-normal mt-1 leading-relaxed">
                Take a test ride of the flagship Ecodriv Apex or trial the Delivery 100 commercial vehicle at our showroom.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onBookTestRide}
                className="w-full py-3 rounded-xl bg-[#2B9346] hover:bg-[#247c3b] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer text-center"
              >
                Book a Demo / Test Ride
              </button>
            </div>
          </div>

        </div>

        {/* =========================================================================
            LOCATIONS SHOWCASE (FACTORY vs SHOWROOM)
           ========================================================================= */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black font-sans text-[#0F172A] tracking-tight">
              Our <span className="text-[#2B9346]">Operating Locations</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 font-medium">
              Visit our manufacturing facility for bulk B2B dispatch or experience our personal EV line at the Delhi showroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* FACTORY ADDRESS CARD */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-gray-950 tracking-tight mb-4">
                  Gurugram Manufacturing Facility
                </h3>

                <div className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed mb-6">
                  <MapPin className="w-5 h-5 text-[#2B9346] shrink-0 mt-0.5" />
                  <p className="font-medium text-gray-700">
                    Khasra No. 1531/918/2919P, Khandsa Behrampur, Gurugram, Haryana – 122004
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Haryana – 122004</span>
                <a
                  href="https://maps.google.com/?q=Khandsa+Behrampur+Gurugram+Haryana+122004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2B9346] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* SHOWROOM ADDRESS CARD */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-gray-950 tracking-tight mb-4">
                  Delhi Flagship Showroom
                </h3>

                <div className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed mb-6">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="font-medium text-gray-700">
                    Property No. 9, Ground Floor, Rohini Sector 17, Delhi
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Rohini, Delhi</span>
                <a
                  href="https://maps.google.com/?q=Property+No.+9+Ground+Floor+Rohini+Sector+17+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE CONTACT FORM & DIRECT QUERY SECTION
           ========================================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-[0_12px_45px_rgba(0,0,0,0.04)] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left info column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B9346]">
                  SEND DIRECT MESSAGE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-1 mb-4">
                  Have a Question or Looking for a Custom Fleet Quote?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Fill out the form and our team will get in touch with you within 2 business hours. For immediate support, you can call our COO desk directly.
                </p>

                <div className="space-y-4 py-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#2B9346] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-500 font-medium">Call Us Directly</div>
                      <a href="tel:9205304877" className="font-bold text-gray-900 hover:text-[#2B9346]">
                        +91 9205304877
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#2B9346] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-500 font-medium">Official Emails</div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm">
                        <a href="mailto:info@ecodriv.in" className="hover:text-[#2B9346]">info@ecodriv.in</a> · <a href="mailto:COO@ecofleet.in" className="hover:text-[#2B9346]">COO@ecofleet.in</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-800 leading-relaxed mt-6">
                <strong>Fast Response SLA:</strong> All fleet quotations, B2B RFP responses, and dealership requests receive dedicated account manager assignment within 24 hours.
              </div>
            </div>

            {/* Right Form column */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-[#F9FCFA] rounded-2xl border border-emerald-200">
                  <div className="w-14 h-14 bg-emerald-100 text-[#2B9346] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-950 mb-2">Message Dispatched!</h4>
                  <p className="text-sm text-gray-600 max-w-md leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Your inquiry regarding <span className="font-semibold text-gray-900">{formData.subject}</span> has been forwarded to our team.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Fleet & Commercial Inquiry',
                        message: '',
                      })
                    }}
                    className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-gray-800 transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#F3F4F7] hover:bg-[#EFF0F4] focus:bg-white text-gray-900 placeholder:text-gray-400 text-sm font-sans rounded-xl px-4 py-3 border border-transparent focus:border-gray-300 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Phone Number*
                      </label>
                      <div className="flex items-center bg-[#F3F4F7] hover:bg-[#EFF0F4] focus-within:bg-white rounded-xl px-4 py-3 border border-transparent focus-within:border-gray-300 transition-all">
                        <span className="text-gray-500 font-semibold pr-2.5 border-r border-gray-300 text-sm select-none">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 pl-2.5 text-sm focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#F3F4F7] hover:bg-[#EFF0F4] focus:bg-white text-gray-900 placeholder:text-gray-400 text-sm font-sans rounded-xl px-4 py-3 border border-transparent focus:border-gray-300 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1.5">
                        Inquiry Purpose
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#F3F4F7] hover:bg-[#EFF0F4] focus:bg-white text-gray-900 text-sm font-sans rounded-xl px-4 py-3 border border-transparent focus:border-gray-300 focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Fleet & Commercial Inquiry">Fleet & Commercial (B2B)</option>
                        <option value="Personal Scooter Booking">Personal Scooter Booking</option>
                        <option value="Dealership & Franchise">Become a Dealer / Franchise</option>
                        <option value="Factory Visit & Logistics">Factory Visit & Logistics</option>
                        <option value="Other Assistance">Other Assistance</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1.5">
                      Your Message or Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your fleet requirements, desired model, or query..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#F3F4F7] hover:bg-[#EFF0F4] focus:bg-white text-gray-900 placeholder:text-gray-400 text-sm font-sans rounded-xl px-4 py-3 border border-transparent focus:border-gray-300 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#0F172A] hover:bg-[#2B9346] text-white text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Ecodriv</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

