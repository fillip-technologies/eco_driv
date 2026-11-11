import { useState, useRef, useEffect } from 'react'
import {
  Zap,
  BatteryCharging,
  Gauge,
  Sliders,
  Package,
  Smartphone,
  ShieldCheck,
} from 'lucide-react'
import gsap from 'gsap'
import scooterProfileImg from '../../../assets/personal-mobility/view-2.png'
import { DEFAULT_COMMERCIAL_2W } from '../../../data/commercialVehiclesData'

export default function DeliverySpecsSection({ vehicle = DEFAULT_COMMERCIAL_2W }) {
  const [activeTab, setActiveTab] = useState('performance')
  const contentRef = useRef(null)

  const SPEC_CATEGORIES = [
    {
      id: 'performance',
      label: 'Performance',
      icon: Zap,
      description: 'High-torque commercial motor built for non-stop city stop-and-go delivery runs.',
      specs: [
        { label: 'Top Speed', value: `${vehicle.topSpeed} km/h`, highlight: true, note: 'Optimized for quick urban deliveries & highway commutes' },
        { label: 'Peak Motor Power', value: vehicle.motorPower, highlight: true, note: 'High-efficiency motor with silent drive' },
        { label: 'Wheel Torque', value: vehicle.torque, note: 'Instant high low-end torque for heavy cargo starts' },
        { label: 'Gradeability', value: '18°', note: 'Effortless steep flyovers, basement ramps & bridge climbs' },
        { label: 'Riding Modes', value: vehicle.modes, note: 'Multi-mode power & economy mapping' },
        { label: 'Reverse Assist', value: 'Reverse Throttle', note: 'Effortless backing out of tight loading docks & crowded lanes' },
        { label: 'Regenerative Braking', value: 'Smart Dual-Regen', note: 'Recovers up to 10% battery energy during braking' },
        { label: 'Drive Efficiency', value: '91%', note: 'Thermal-optimized magnetic stator for all-day running' },
      ],
    },
    {
      id: 'battery',
      label: 'Battery & Range',
      icon: BatteryCharging,
      description: 'Swappable automotive-grade packs engineered for continuous shift operations.',
      specs: [
        { label: 'Real-World TrueRange™', value: vehicle.trueRange, highlight: true, note: `Tested with full ${vehicle.payload} delivery payload` },
        { label: 'Certified IDC Range', value: vehicle.idcRange, highlight: true, note: 'Ideal Driving Conditions certification' },
        { label: 'Battery Architecture', value: 'Dual Swappable', note: 'Two lightweight portable packs for quick swap' },
        { label: 'Total Pack Capacity', value: vehicle.battery, note: 'High-density lithium-ion cells with metal housing' },
        { label: 'Battery Swap Time', value: '< 60 Seconds', note: 'Swap depleted pack for fresh one at any fleet hub' },
        { label: 'Hub Fast Charging', value: `${vehicle.hours} Hours (0–100%)`, note: 'Simultaneous dual pack charger included' },
        { label: 'Ingress Protection', value: 'IP67 Waterproof', note: 'Submersion tested pack resistant to monsoon floods' },
        { label: 'Commercial Warranty', value: vehicle.warranty, note: 'Comprehensive warranty for high-mileage fleets' },
      ],
    },
    {
      id: 'payload',
      label: 'Payload & Cargo',
      icon: Package,
      description: 'Heavy-duty steel subframe and modular mounts for food crates, courier boxes & parcels.',
      specs: [
        { label: 'Certified Max Payload', value: vehicle.payload, highlight: true, note: 'Reinforced load-bearing chassis structure' },
        { label: 'Rear Carrier Capacity', value: '65 kg Heavy-Duty', highlight: true, note: 'Direct-chassis bolted rear cargo rack' },
        { label: 'Floorboard Cargo Space', value: '420 mm Extra Wide', note: 'Spacious flat floorboard accommodates gas cylinder or grocery crate' },
        { label: 'Universal Box Mounts', value: 'Multi-Delivery Ready', note: 'Plug & bolt compatible with Zomato, Swiggy, Zepto & Amazon boxes' },
        { label: 'Underseat Storage', value: '22 Litres', note: 'Secure lockable compartment for documents & valuables' },
        { label: 'Cargo Tie-Down Hooks', value: '6 Bungee Anchors', note: 'High-tensile steel tie-down points for secure load fastening' },
        { label: 'Foldable Footrests', value: 'Dual Reinforced Racks', note: 'Heavy-duty side footboards for pillion or extra panniers' },
        { label: 'Front Bag Hook', value: '3 kg Certified', note: 'Spring-loaded luggage hook on steering column' },
      ],
    },
    {
      id: 'chassis',
      label: 'Chassis & Durability',
      icon: Sliders,
      description: 'Tough tubular steel frame and all-weather suspension built for tough Indian city conditions.',
      specs: [
        { label: 'Frame Architecture', value: 'Tubular Steel Spaceframe', highlight: true, note: 'Double cradle reinforced steel frame for commercial longevity' },
        { label: 'Front Suspension', value: 'Heavy Telescopic Forks', note: '31 mm hydraulic dampeners absorbing potholes and bumps' },
        { label: 'Rear Suspension', value: 'Twin Hydraulic Shocks', note: '5-step preload adjustable twin shock absorbers' },
        { label: 'Front Braking', value: '190 mm Ventilated Disc', note: 'Hydraulic caliper for reliable high-speed stopping' },
        { label: 'Rear Braking', value: '130 mm Drum + CBS', note: 'Combined Braking System avoids wheel skid under heavy load' },
        { label: 'Wheels & Tires', value: '90/90-12 Tubeless', note: 'Anti-skid high-traction compound with puncture resistance' },
        { label: 'Ground Clearance', value: '175 mm High Clearance', note: 'Zero bottom scraping over severe speed breakers and rough terrain' },
        { label: 'Kerb Weight', value: '98 kg (Ultra-Light)', note: 'Easy to handle, push, and maneuver in dense city alleys' },
      ],
    },
    {
      id: 'fleet-iot',
      label: 'Fleet IoT & Telematics',
      icon: Smartphone,
      description: 'Enterprise fleet management console, 4G live GPS telematics, and automated safety alerts.',
      specs: [
        { label: 'Connectivity Module', value: '4G LTE eSIM + GPS', highlight: true, note: 'Always-connected telematics unit with GLONASS positioning' },
        { label: 'Real-Time Telematics', value: 'Live 10s Ping Tracking', highlight: true, note: 'Track exact vehicle location, speed, and heading on fleet dashboard' },
        { label: 'Smart Geofencing', value: 'Automated Zone Alerts', note: 'Instant notification on unauthorized boundary or route deviations' },
        { label: 'Remote Immobilization', value: 'One-Click Cloud Kill', note: 'Remotely disable motor via enterprise admin panel in case of theft' },
        { label: 'Driver Behavior Analytics', value: 'Scorecard & Logs', note: 'Logs harsh acceleration, sudden braking, and excessive idling' },
        { label: 'Battery Telematics', value: 'Live SoC & Cell Health', note: 'Predictive maintenance warnings and remaining operational range' },
        { label: 'Crash & Tilt SOS', value: 'FallSafe™ Alert System', note: 'Automatic motor shut-off and dispatch emergency notification' },
        { label: 'Enterprise API', value: 'REST API & Webhooks', note: 'Seamless bi-directional integration with your logistics ERP software' },
      ],
    },
  ]

  const activeCategory = SPEC_CATEGORIES.find((cat) => cat.id === activeTab) || SPEC_CATEGORIES[0]

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.spec-row'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out' }
      )
    }
  }, [activeTab, vehicle?.id])

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white border-t border-gray-100 overflow-hidden select-none">
      
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2B9346]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#85C440]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER
           ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
            Engineered for Heavy Duty <span className="text-[#2B9346]">Fleet Operations</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            From the reinforced {vehicle.payload} load-bearing chassis to the fast-swappable battery system, discover every commercial capability of {vehicle.name}.
          </p>
        </div>

        {/* =========================================================================
            TOP 4 HERO BENCHMARK STAT CARDS
           ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-12 sm:mb-16">
          
          {/* Card 1: Top Speed */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Gauge className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.topSpeed} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">km/h</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Top Speed
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              High-efficiency hub drive
            </div>
          </div>

          {/* Card 2: True Range */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <BatteryCharging className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.trueRange.replace(' km', '')} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">km</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              TrueRange™
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Tested with full load
            </div>
          </div>

          {/* Card 3: Payload Capacity */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#2B9346]/10 text-[#2B9346] flex items-center justify-center mb-3">
              <Package className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.payload.replace(' kg', '')} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">kg</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Max Payload
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Reinforced subframe
            </div>
          </div>

          {/* Card 4: Battery */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.battery}
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Pack Capacity
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Swappable architecture
            </div>
          </div>

        </div>

        {/* =========================================================================
            CATEGORY TABS SELECTOR
           ========================================================================= */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-12">
          {SPEC_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTab
            const IconComponent = cat.icon
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2B9346] to-[#85C440] text-white shadow-[0_8px_20px_rgba(43,147,70,0.3)] scale-[1.02]'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/90 shadow-2xs'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* =========================================================================
            SPECIFICATIONS TABLE & PROFILE DISPLAY
           ========================================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-[0_16px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/80">
            
            {/* Left Column: Side Profile Visual with Dimension callouts */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col items-center justify-between bg-gradient-to-b from-[#FAFCFB] to-white">
              
              <div className="w-full text-left">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-700">
                  {vehicle.tag.toUpperCase()}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight mt-1">
                  {vehicle.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Engineered with commercial heavy-duty steel spaceframe architecture.
                </p>
              </div>

              {/* Scooter Render */}
              <div className="relative my-8 w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B9346]/5 to-[#85C440]/5 rounded-full blur-2xl pointer-events-none" />
                <img
                  src={scooterProfileImg}
                  alt={`${vehicle.name} Technical Profile`}
                  className="w-full max-w-[340px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Quick Dimension Pill Badges */}
              <div className="w-full grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">175 mm</div>
                  <div className="text-[10px] font-mono text-gray-700">Clearance</div>
                </div>
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">{vehicle.payload}</div>
                  <div className="text-[10px] font-mono text-gray-700">Payload</div>
                </div>
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">98 kg</div>
                  <div className="text-[10px] font-mono text-gray-700">Kerb Weight</div>
                </div>
              </div>

            </div>

            {/* Right Column: Detailed Specs List */}
            <div ref={contentRef} className="lg:col-span-7 p-6 sm:p-10 divide-y divide-gray-100">
              {activeCategory.specs.map((item) => (
                <div
                  key={item.label}
                  className="spec-row py-4 sm:py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 hover:bg-[#F9FCFA] transition-colors rounded-xl px-3"
                >
                  <div className="max-w-sm">
                    <div className="text-sm font-bold text-gray-900 font-sans">
                      {item.label}
                    </div>
                    {item.note && (
                      <div className="text-xs text-gray-500 font-sans mt-0.5">
                        {item.note}
                      </div>
                    )}
                  </div>

                  <div className="text-right sm:text-right shrink-0">
                    <span
                      className={`text-base sm:text-lg font-black font-sans tracking-tight ${
                        item.highlight ? 'text-[#2B9346]' : 'text-gray-950'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Fleet Notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#F8FAF9] border border-gray-200/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2B9346]/10 text-[#2B9346] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              <strong className="text-gray-900 font-semibold">Bulk Fleet Orders & Custom Branding:</strong> We offer custom corporate vinyl wrap, telemetry API tokens, and dedicated battery swapping stations for fleets above 10 units.
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-full bg-gray-900 hover:bg-[#2B9346] text-white text-xs font-bold transition-colors shadow-2xs"
          >
            Inquire Fleet Pricing
          </a>
        </div>

      </div>
    </section>
  )
}

