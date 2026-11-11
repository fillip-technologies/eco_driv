import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Building2, Store } from 'lucide-react'
import logoImg from '../../assets/logo2.png'

export default function Footer({ onBookTestRide }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-10 text-gray-500 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* =========================================================================
            TOP SECTION: BRAND & MULTI-COLUMN NAVIGATION
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Info & Direct Contacts (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block select-none focus:outline-none">
              <img
                src={logoImg}
                alt="ECODRIV - Fueling Green India"
                className="h-10 sm:h-12 w-auto object-contain block"
              />
            </Link>
            
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-sm">
              Intelligent electric mobility engineered for unmatched performance, safety, and sustainable freedom across personal and commercial transport.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 pt-2 border-t border-gray-100 text-xs text-gray-600">
              <a
                href="tel:9205304877"
                className="flex items-center gap-2.5 hover:text-[#2B9346] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#2B9346] shrink-0" />
                <span>+91 9205304877</span>
              </a>

              <a
                href="mailto:info@ecodriv.in"
                className="flex items-center gap-2.5 hover:text-[#2B9346] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#2B9346] shrink-0" />
                <span>info@ecodriv.in</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <Store className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-800 font-semibold">Showroom:</strong> Property No. 9, Ground Floor, Rohini Sector 17, Delhi
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Building2 className="w-3.5 h-3.5 text-[#2B9346] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-800 font-semibold">Factory:</strong> Khandsa Behrampur, Gurugram, Haryana – 122004
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Personal Mobility (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-gray-900">
              Personal Mobility
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/apex" className="hover:text-black transition-colors flex items-center gap-1.5">
                  <span>Ecodriv Apex</span>
                  <span className="bg-[#C49A2A] text-white text-[8px] font-bold px-1 py-0.2 rounded-full leading-none">New</span>
                </Link>
              </li>
              <li>
                <Link to="/glide" className="hover:text-black transition-colors">
                  Ecodriv Glide
                </Link>
              </li>
              <li>
                <Link to="/450" className="hover:text-black transition-colors">
                  Ecodriv 450
                </Link>
              </li>
              <li>
                <Link to="/250" className="hover:text-black transition-colors">
                  Ecodriv 250
                </Link>
              </li>
              <li>
                <Link to="/200" className="hover:text-black transition-colors">
                  Ecodriv 200
                </Link>
              </li>
              <li>
                <Link to="/150" className="hover:text-black transition-colors">
                  Ecodriv 150
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Commercial Mobility (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-gray-900">
              Commercial Fleet
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/delivery" className="hover:text-black transition-colors flex items-center gap-1.5 font-medium text-emerald-800">
                  <span>Delivery 100 (2W)</span>
                  <span className="bg-[#2B9346] text-white text-[8px] font-bold px-1 py-0.2 rounded-full leading-none">B2B</span>
                </Link>
              </li>
              <li>
                <Link to="/cargo-2w" className="hover:text-black transition-colors">
                  Ecodriv Cargo 2W
                </Link>
              </li>
              <li>
                <Link to="/cargo-150" className="hover:text-black transition-colors">
                  Cargo 150 (3W)
                </Link>
              </li>
              <li>
                <Link to="/cargo-200" className="hover:text-black transition-colors">
                  Cargo 200 (3W)
                </Link>
              </li>
              <li>
                <Link to="/loader-250" className="hover:text-black transition-colors">
                  Loader 250 (3W)
                </Link>
              </li>
              <li>
                <Link to="/delivery-300" className="hover:text-black transition-colors">
                  Delivery 300 (3W)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Locations & Facilities (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-gray-900">
              Locations
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/contact" className="hover:text-black transition-colors">
                  Gurugram Factory
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black transition-colors">
                  Delhi Showroom
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-black transition-colors">
                  Bulk Assembly Plant
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black transition-colors">
                  Become a Dealer
                </Link>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Property+No.+9+Ground+Floor+Rohini+Sector+17+Delhi" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  <span>Showroom Map</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Support (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-display font-bold text-xs uppercase tracking-wider text-gray-900">
              Support
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-black transition-colors font-medium">
                  About Ecodriv
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black transition-colors font-semibold text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onBookTestRide}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Book a Test Ride
                </button>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-black transition-colors">
                  Fleet Inquiry
                </Link>
              </li>
              <li>
                <a href="mailto:COO@ecofleet.in" className="hover:text-black transition-colors">
                  Executive Desk
                </a>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-black transition-colors">
                  Service & Warranty
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM BAR: COPYRIGHT + LEGAL + DESIGNED & DEVELOPED CREDIT
           ========================================================================= */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-[11px]">
          
          {/* Copyright */}
          <p className="text-center md:text-left">
            © {currentYear} Ecodriv Mobility Pvt Ltd. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-5 text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">FAME II Subsidy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Security</a>
          </div>

          {/* Designed and Developed by Fillip Technologies */}
          <p className="text-center md:text-right text-gray-500">
            Designed and Developed by{' '}
            <a
              href="https://filliptechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-800 hover:text-[#2B9346] transition-colors underline decoration-gray-300 hover:decoration-[#2B9346]"
            >
              Fillip Technologies
            </a>
          </p>

        </div>

      </div>
    </footer>
  )
}
