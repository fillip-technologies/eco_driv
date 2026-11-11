import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import logoImg from '../../assets/logo2.png'
import scootyImg from '../../assets/models/scooty-1.png'
import scooty2Img from '../../assets/models/scooty-2.png'
import scooty3Img from '../../assets/models/scooty-3.png'
import threeWheelerImg from '../../assets/models/3-wheeler.png'
import formScooterImg from '../../assets/home/form-image.png'

const personalVehicles = [
  {
    id: 'apex',
    name: 'Ecodriv Apex',
    tag: 'Flagship Sport',
    isNew: true,
    specs: '100 km/h · 157 km Range',
    image: formScooterImg,
    href: '/apex',
  },
  {
    id: 'glide',
    name: 'Ecodriv Glide',
    tag: 'Comfort & Family',
    isNew: false,
    specs: '80 km/h · 160 km Range',
    image: scooty3Img,
    href: '/glide',
  },
  {
    id: '450',
    name: 'Ecodriv 450',
    tag: 'Agile Performance',
    isNew: false,
    specs: '90 km/h · 150 km Range',
    image: scootyImg,
    href: '/450',
  },
  {
    id: '250',
    name: 'Ecodriv 250',
    tag: 'Sport Commuter',
    isNew: false,
    specs: '85 km/h · 130 km Range',
    image: scooty2Img,
    href: '/250',
  },
  {
    id: '200',
    name: 'Ecodriv 200',
    tag: 'Daily Classic',
    isNew: false,
    specs: '80 km/h · 120 km Range',
    image: scootyImg,
    href: '/200',
  },
  {
    id: '150',
    name: 'Ecodriv 150',
    tag: 'Smart Urban',
    isNew: false,
    specs: '75 km/h · 100 km Range',
    image: scooty3Img,
    href: '/150',
  },
]

const commercial2Wheelers = [
  {
    id: 'comm-delivery-100',
    name: 'Ecodriv Delivery 100',
    tag: 'Quick Delivery',
    isNew: true,
    specs: '75 km/h · 120 km Range',
    image: scooty2Img,
    href: '/delivery',
  },
  {
    id: 'comm-cargo-2w',
    name: 'Ecodriv Cargo 2W',
    tag: 'Dual Battery Cargo',
    isNew: false,
    specs: '80 km/h · 170 km Range',
    image: formScooterImg,
    href: '/cargo-2w',
  },
]

const commercial3Wheelers = [
  {
    id: 'comm-cargo-150',
    name: 'Ecodriv Cargo 150',
    tag: 'City Cargo Auto',
    isNew: false,
    specs: '500 kg Payload · 120 km',
    image: threeWheelerImg,
    href: '/cargo-150',
  },
  {
    id: 'comm-cargo-200',
    name: 'Ecodriv Cargo 200',
    tag: 'Logistics Pro',
    isNew: true,
    specs: '650 kg Payload · 140 km',
    image: threeWheelerImg,
    href: '/cargo-200',
  },
  {
    id: 'comm-loader-250',
    name: 'Ecodriv Loader 250',
    tag: 'Heavy Duty Loader',
    isNew: false,
    specs: '750 kg Payload · 150 km',
    image: threeWheelerImg,
    href: '/loader-250',
  },
  {
    id: 'comm-delivery-300',
    name: 'Ecodriv Delivery 300',
    tag: 'Closed Box Van',
    isNew: false,
    specs: '850 kg Payload · 160 km',
    image: threeWheelerImg,
    href: '/delivery-300',
  },
]

const partnerCategories = [
  { id: 'finance', title: 'Finance Partner', href: '/our-partner/finance-partner' },
  { id: 'battery', title: 'Battery Partner', href: '/our-partner/battery-partner' },
  { id: 'iot', title: 'IoT Partner', href: '/our-partner/iot-partner' },
  { id: 'telematics', title: 'Telematics Partner', href: '/our-partner/telematics-partner' },
]

export default function Navbar({ onBookTestRide }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  return (
    <>
      {/* ===== FLOATING PILL NAVBAR ===== */}
      <nav className="fixed top-4 left-4 right-4 sm:top-5 sm:left-6 sm:right-6 lg:left-8 lg:right-8 z-50">
        <div className="bg-white rounded-2xl border border-[#E2E2E2] shadow-[0_2px_16px_rgba(0,0,0,0.06)] px-5 sm:px-6 h-[56px] flex items-center justify-between">

          {/* ===== LEFT: Logo + Personal Mobility + Commercial Mobility Dropdown ===== */}
          <div className="flex items-center gap-5 lg:gap-7">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center select-none focus:outline-none shrink-0"
            >
              <img
                src={logoImg}
                alt="ECODRIV - Fueling Green India"
                className="h-8 sm:h-9 w-auto object-contain block"
              />
            </Link>

            {/* Personal Mobility Menu — desktop */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setActiveDropdown('personal-mobility')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-[13px] font-semibold text-[#222] hover:text-black transition-colors py-3 cursor-pointer select-none"
              >
                <span>Personal Mobility</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#777] transition-transform duration-200 ${activeDropdown === 'personal-mobility' ? 'rotate-180 text-black' : ''
                    }`}
                />
              </button>

              {/* 6 Vehicles Product List Dropdown Menu */}
              {activeDropdown === 'personal-mobility' && (
                <div className="absolute left-0 top-full mt-2 w-[550px] bg-white border border-[#E2E2E2] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-3.5 z-50">
                  <div className="grid grid-cols-2 gap-2">
                    {personalVehicles.map((vehicle) => (
                      <Link
                        key={vehicle.id}
                        to={vehicle.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group/veh flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50/90 border border-transparent hover:border-gray-200/80 transition-all duration-200"
                      >
                        <div className="w-15 h-12 shrink-0 bg-gray-100/70 rounded-lg flex items-center justify-center p-1 group-hover/veh:bg-white group-hover/veh:shadow-xs transition-colors">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-contain group-hover/veh:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[13px] font-bold text-gray-950 truncate group-hover/veh:text-emerald-700 transition-colors">
                              {vehicle.name}
                            </span>
                            {vehicle.isNew && (
                              <span className="bg-[#C49A2A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none shrink-0">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                            {vehicle.specs}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Commercial Mobility Menu — desktop */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setActiveDropdown('commercial-mobility')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-[13px] font-semibold text-[#222] hover:text-black transition-colors py-3 cursor-pointer select-none"
              >
                <span>For Business</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#777] transition-transform duration-200 ${activeDropdown === 'commercial-mobility' ? 'rotate-180 text-black' : ''
                    }`}
                />
              </button>

              {/* Commercial Mobility Dropdown */}
              {activeDropdown === 'commercial-mobility' && (
                <div className="absolute left-0 top-full mt-2 w-[580px] bg-white border border-[#E2E2E2] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-4 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {/* 2 Wheelers (2) */}
                    <div>
                      <div className="pb-1.5 mb-2 border-b border-gray-100">
                        <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-gray-700">
                          2 Wheelers Fleet
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {commercial2Wheelers.map((vehicle) => (
                          <Link
                            key={vehicle.id}
                            to={vehicle.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/veh flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50/90 border border-transparent hover:border-gray-200/80 transition-all duration-200"
                          >
                            <div className="w-14 h-11 shrink-0 bg-gray-100/70 rounded-lg flex items-center justify-center p-1 group-hover/veh:bg-white group-hover/veh:shadow-xs transition-colors">
                              <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-contain group-hover/veh:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[12.5px] font-bold text-gray-950 truncate group-hover/veh:text-emerald-700 transition-colors">
                                  {vehicle.name}
                                </span>
                                {vehicle.isNew && (
                                  <span className="bg-[#C49A2A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none shrink-0">
                                    New
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                                {vehicle.specs}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 3 Wheelers (4) */}
                    <div>
                      <div className="pb-1.5 mb-2 border-b border-gray-100">
                        <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-gray-700">
                          3 Wheelers Fleet
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {commercial3Wheelers.map((vehicle) => (
                          <Link
                            key={vehicle.id}
                            to={vehicle.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/veh flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50/90 border border-transparent hover:border-gray-200/80 transition-all duration-200"
                          >
                            <div className="w-14 h-11 shrink-0 bg-gray-100/70 rounded-lg flex items-center justify-center p-1 group-hover/veh:bg-white group-hover/veh:shadow-xs transition-colors">
                              <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-contain group-hover/veh:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[12.5px] font-bold text-gray-950 truncate group-hover/veh:text-emerald-700 transition-colors">
                                  {vehicle.name}
                                </span>
                                {vehicle.isNew && (
                                  <span className="bg-[#C49A2A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none shrink-0">
                                    New
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                                {vehicle.specs}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ===== RIGHT: About Us + Our Partner + Contact Us + Book Demo + Hamburger ===== */}
          <div className="flex items-center gap-3.5 sm:gap-4.5 lg:gap-5">

            {/* About Us */}
            <Link
              to="/about"
              className="hidden md:block text-[13px] font-medium text-[#444] hover:text-black transition-colors select-none"
            >
              About Us
            </Link>

            {/* Our Partners Dropdown */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setActiveDropdown('our-partners')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-[13px] font-medium text-[#444] hover:text-black transition-colors py-2 cursor-pointer select-none"
              >
                <span>Our Partners</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#777] transition-transform duration-200 ${activeDropdown === 'our-partners' ? 'rotate-180 text-black' : ''
                    }`}
                />
              </button>

              {/* Partners Dropdown Menu */}
              {activeDropdown === 'our-partners' && (
                <div className="absolute right-0 top-full mt-2 w-[190px] bg-white border border-[#E2E2E2] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="space-y-0.5">
                    {partnerCategories.map((partner) => {
                      const isInternal = partner.href.startsWith('/')
                      return isInternal ? (
                        <Link
                          key={partner.id}
                          to={partner.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3 py-2 rounded-lg text-[13px] font-medium text-gray-700 hover:text-[#2B9346] hover:bg-emerald-50/70 transition-colors"
                        >
                          {partner.title}
                        </Link>
                      ) : (
                        <a
                          key={partner.id}
                          href={partner.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3 py-2 rounded-lg text-[13px] font-medium text-gray-700 hover:text-[#2B9346] hover:bg-emerald-50/70 transition-colors"
                        >
                          {partner.title}
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link
              to="/contact"
              className="hidden md:block text-[13px] font-medium text-[#444] hover:text-black transition-colors select-none"
            >
              Contact Us
            </Link>

            {/* Book Demo Button */}
            <button
              type="button"
              onClick={onBookTestRide}
              className="px-4 py-1.5 rounded-full bg-black hover:bg-[#2B9346] text-white text-[12.5px] font-semibold transition-all duration-200 cursor-pointer shadow-xs active:scale-95 shrink-0"
            >
              Book Demo
            </button>

            {/* Dark circular hamburger button (mobile/tablet only, hidden on laptop) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="lg:hidden w-[38px] h-[38px] rounded-full bg-[#1A1A1A] hover:bg-black flex flex-col items-center justify-center gap-[5px] transition-colors active:scale-95 cursor-pointer shrink-0"
            >
              {isMobileMenuOpen ? (
                <X className="w-[14px] h-[14px] text-white" />
              ) : (
                <>
                  <span className="block w-[14px] h-[1.5px] bg-white rounded-full" />
                  <span className="block w-[14px] h-[1.5px] bg-white rounded-full" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* ===== Expanded drawer (mobile/tablet only) ===== */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl border border-[#E2E2E2] shadow-[0_12px_40px_rgba(0,0,0,0.12)] px-5 py-5 max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="flex flex-col divide-y divide-gray-100">
              
              {/* 1. Personal Mobility Dropdown */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setMobileDropdown((prev) => (prev === 'personal' ? null : 'personal'))}
                  className="w-full flex items-center justify-between py-2.5 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[14px] font-bold text-gray-900 group-hover:text-[#2B9346] transition-colors">
                      Personal Mobility
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      6
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileDropdown === 'personal' ? 'rotate-180 text-[#2B9346]' : ''
                    }`}
                  />
                </button>

                {mobileDropdown === 'personal' && (
                  <div className="pt-2 pb-2 space-y-1 pl-1">
                    {personalVehicles.map((vehicle) => (
                      <Link
                        key={vehicle.id}
                        to={vehicle.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      >
                        <div className="w-12 h-10 shrink-0 bg-gray-100/70 rounded-lg flex items-center justify-center p-1">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[13px] font-bold text-gray-900">
                              {vehicle.name}
                            </span>
                            {vehicle.isNew && (
                              <span className="bg-[#C49A2A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none shrink-0">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                            {vehicle.specs}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. For Business Dropdown */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setMobileDropdown((prev) => (prev === 'business' ? null : 'business'))}
                  className="w-full flex items-center justify-between py-2.5 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[14px] font-bold text-gray-900 group-hover:text-[#2B9346] transition-colors">
                      For Business
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#EBF8EE] text-[#2B9346]">
                      Fleet
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileDropdown === 'business' ? 'rotate-180 text-[#2B9346]' : ''
                    }`}
                  />
                </button>

                {mobileDropdown === 'business' && (
                  <div className="pt-2 pb-2 space-y-3 pl-1">
                    {/* 2-Wheelers Fleet */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-gray-700 block mb-1 px-2">
                        2 Wheelers Fleet
                      </span>
                      <div className="space-y-1">
                        {commercial2Wheelers.map((vehicle) => (
                          <Link
                            key={vehicle.id}
                            to={vehicle.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="w-12 h-10 shrink-0 bg-gray-100/70 rounded-lg flex items-center justify-center p-1">
                              <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-bold text-gray-900">
                                  {vehicle.name}
                                </span>
                                {vehicle.isNew && (
                                  <span className="bg-[#C49A2A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none shrink-0">
                                    New
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                                {vehicle.specs}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 3-Wheelers Fleet */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-gray-700 block mb-1 px-2">
                        3 Wheelers Fleet
                      </span>
                      <div className="space-y-1">
                        {commercial3Wheelers.map((vehicle) => (
                          <Link
                            key={vehicle.id}
                            to={vehicle.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                          >
                            <div className="w-12 h-10 shrink-0 bg-gray-100/70 rounded-lg flex items-center justify-center p-1">
                              <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-bold text-gray-900">
                                  {vehicle.name}
                                </span>
                                {vehicle.isNew && (
                                  <span className="bg-[#C49A2A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none shrink-0">
                                    New
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                                {vehicle.specs}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Our Partners Dropdown */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setMobileDropdown((prev) => (prev === 'partners' ? null : 'partners'))}
                  className="w-full flex items-center justify-between py-2.5 text-left cursor-pointer group"
                >
                  <span className="text-[14px] font-bold text-gray-900 group-hover:text-[#2B9346] transition-colors">
                    Our Partners
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileDropdown === 'partners' ? 'rotate-180 text-[#2B9346]' : ''
                    }`}
                  />
                </button>

                {mobileDropdown === 'partners' && (
                  <div className="pt-2 pb-2 space-y-1 pl-2 border-l-2 border-[#2B9346] ml-2">
                    {partnerCategories.map((partner) => {
                      const isInternal = partner.href.startsWith('/')
                      return isInternal ? (
                        <Link
                          key={partner.id}
                          to={partner.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1.5 px-2 text-gray-700 hover:text-[#2B9346] text-[13px] font-medium transition-colors"
                        >
                          {partner.title}
                        </Link>
                      ) : (
                        <a
                          key={partner.id}
                          href={partner.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1.5 px-2 text-gray-700 hover:text-[#2B9346] text-[13px] font-medium transition-colors"
                        >
                          {partner.title}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* 4. Direct Pages */}
              <div className="py-2.5 space-y-2">
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1.5 text-[14px] font-bold text-gray-900 hover:text-[#2B9346] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1.5 text-[14px] font-bold text-gray-900 hover:text-[#2B9346] transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* 5. CTA Button */}
              <div className="pt-4 pb-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onBookTestRide?.()
                  }}
                  className="w-full h-[46px] rounded-full text-[13.5px] font-bold text-white bg-black hover:bg-[#2B9346] transition active:scale-[0.98] cursor-pointer shadow-sm flex items-center justify-center gap-2"
                >
                  Book Demo
                </button>
              </div>

            </div>
          </div>
        )}
      </nav>

      {/* Spacer so page content starts below the floating navbar */}
      <div className="h-[88px] sm:h-[96px]" />
    </>
  )
}
