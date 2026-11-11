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
import vehicles1Img from '../../../assets/3-wheelers/vehicles-1.png'
import { DEFAULT_COMMERCIAL_3W } from '../../../data/commercialVehiclesData'

export default function ThreeWheelerSpecsSection({ vehicle = DEFAULT_COMMERCIAL_3W }) {
  const [activeTab, setActiveTab] = useState('performance')
  const contentRef = useRef(null)

  const SPEC_CATEGORIES = [
    {
      id: 'performance',
      label: 'Performance & Power',
      icon: Zap,
      description: 'High-torque heavy-duty electric powertrain engineered for non-stop intra-city cargo logistics.',
      specs: [
        { label: 'Top Speed', value: `${vehicle.topSpeed} km/h`, highlight: true, note: 'Optimized for safe, high-torque urban commercial freight' },
        { label: 'Peak Motor Power', value: vehicle.motorPower, highlight: true, note: 'High-efficiency mid-drive differential electric powertrain' },
        { label: 'Max Wheel Torque', value: vehicle.torque, note: `Extreme low-end pulling power for steep climbs under full ${vehicle.payload} load` },
        { label: 'Gradeability', value: '22°', note: 'Effortless flyovers, steep warehouse ramps and bridge climbs' },
        { label: 'Riding Modes', value: '3 Drive Modes', note: 'Eco (30 km/h) · City (40 km/h) · Heavy Cargo (50 km/h)' },
        { label: 'Reverse Assist', value: 'Electronic Reverse Gear', note: 'Audio warning buzzer for tight depot loading bays' },
        { label: 'Braking System', value: 'Triple Hydraulic Drums + CBS', note: 'All-wheel synchronized braking with mechanical hand parking lever' },
        { label: 'Regenerative Braking', value: 'Smart Dual-Regen', note: 'Recovers up to 12% kinetic energy during descent & braking' },
      ],
    },
    {
      id: 'battery',
      label: 'Battery & Range',
      icon: BatteryCharging,
      description: 'High-capacity automotive-grade lithium battery pack with active thermal safety.',
      specs: [
        { label: 'Real-World Range', value: vehicle.trueRange, highlight: true, note: `Tested under continuous stop-and-go with full ${vehicle.payload} payload` },
        { label: 'Certified IDC Range', value: vehicle.idcRange, highlight: true, note: 'Ideal Driving Conditions official ARAI standard' },
        { label: 'Battery Capacity', value: vehicle.battery, note: 'Heavy-duty automotive LFP/NMC cells in rugged metal enclosure' },
        { label: 'Fast Charge Time', value: `${vehicle.hours} Hours (0–100%)`, note: 'Compatible with standard 16A commercial depot outlets' },
        { label: 'Ingress Protection', value: 'IP67 Dust & Water', note: 'Fully submersible battery pack resistant to heavy monsoon flooding' },
        { label: 'Commercial Warranty', value: vehicle.warranty, note: 'Comprehensive capacity degradation and replacement warranty' },
        { label: 'Smart BMS', value: 'Active Cell Balancing', note: 'Cell-level voltage, thermals & multi-tier short-circuit protection' },
        { label: 'Charger Specification', value: '48V / 25A Fast Depot Unit', note: 'Built-in auto power cutoff on full charge' },
      ],
    },
    {
      id: 'cargo',
      label: 'Cargo Deck & Payload',
      icon: Package,
      description: 'Heavy-gauge steel loading deck engineered for e-commerce, FMCG, groceries, and industrial delivery.',
      specs: [
        { label: 'Rated Payload Capacity', value: `${vehicle.payload} Certified`, highlight: true, note: 'Reinforced ladder chassis for sustained heavy freight' },
        { label: 'Cargo Deck Dimensions', value: vehicle.deckDimensions, highlight: true, note: 'Extra-wide loading bay accepts standard courier totes & crates' },
        { label: 'Deck Floor Material', value: 'Anti-Skid Chequered Steel', note: 'Corrosion-resistant powder-coated heavy steel base' },
        { label: 'Tailgate Configuration', value: '3-Way Drop Down Panels', note: 'Side and rear panels open flat for fast dock loading' },
        { label: 'Loading Floor Height', value: '580 mm Low-Deck', note: 'Ergonomic height minimizes driver lifting effort' },
        { label: 'Cargo Volume', value: vehicle.volume, note: 'Engineered for optimal cargo storage volume' },
        { label: 'Tie-Down Anchor Points', value: '8 Heavy Lashing Rings', note: 'High-tensile perimeter rings for secure cargo strap-downs' },
        { label: 'Driver Cabin', value: 'Ergonomic Single Seater', note: 'High-density foam seat with supportive lumbar backrest' },
      ],
    },
    {
      id: 'chassis',
      label: 'Chassis & Durability',
      icon: Sliders,
      description: 'Rugged tubular ladder frame architecture and heavy leaf spring suspension for demanding Indian roads.',
      specs: [
        { label: 'Chassis Construction', value: 'High-Tensile Tubular Ladder Frame', highlight: true, note: 'Precision robotically welded tubular steel spaceframe' },
        { label: 'Front Suspension', value: 'Dual Telescopic Hydraulic Damper', note: 'Reinforced helical coil springs absorbing severe potholes' },
        { label: 'Rear Suspension', value: 'Multi-Leaf Heavy Spring Pack', note: 'High-capacity semi-elliptical leaf springs with dual shock absorbers' },
        { label: 'Ground Clearance', value: '185 mm High Stance', note: 'High ground clearance avoids underbody scraping on speed breakers' },
        { label: 'Wheelbase', value: '2150 mm Long Wheelbase', note: 'High directional stability and anti-rollover mass centralization' },
        { label: 'Turning Radius', value: '2.6 m Ultra-Agile', note: 'Tight turning circle for congested inner-city marketplace alleys' },
        { label: 'Tire Specifications', value: '3.75 - 12 Commercial Heavy-Ply', note: 'Puncture-resistant high-load tubeless commercial compound' },
        { label: 'Kerb Weight', value: '285 kg Rigid Platform', note: 'Engineered balance of lightweight efficiency and structural stiffness' },
      ],
    },
    {
      id: 'iot',
      label: 'Fleet IoT & Telematics',
      icon: Smartphone,
      description: 'Connected cloud telematics, live vehicle tracking, remote security controls, and enterprise ERP sync.',
      specs: [
        { label: 'Telematics Module', value: '4G LTE eSIM + GPS / GLONASS', highlight: true, note: 'Always-connected dual-constellation satellite telematics' },
        { label: 'Live Location Tracking', value: '10s Real-Time Ping', highlight: true, note: 'Live location, speed, direction and route tracking on dashboard' },
        { label: 'Remote Immobilization', value: 'One-Click Cloud Cutoff', note: 'Instantly disable vehicle power remotely via admin portal on theft' },
        { label: 'Smart Geofencing', value: 'Automated Route & Depot Alerts', note: 'Instant alerts when vehicle exits pre-authorized delivery zone' },
        { label: 'Driver Analytics', value: 'Behavior Scorecard', note: 'Monitors aggressive acceleration, harsh braking, and vehicle idling' },
        { label: 'Overload Telemetry', value: 'Axle Load Monitoring', note: 'Alerts fleet operators against damaging cargo overloading' },
        { label: 'Battery Telemetry', value: 'Live SoC & Battery Health', note: 'Predictive maintenance warnings and real-time degradation status' },
        { label: 'Enterprise ERP API', value: 'REST API & Webhooks', note: 'Seamless bi-directional integration with your logistics dispatch stack' },
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
      
      {/* Background Soft Accent Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2B9346]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#85C440]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER
           ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
            Engineered for Heavy Duty <span className="text-[#2B9346]">Cargo Logistics</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            From the reinforced {vehicle.payload} steel ladder chassis to the high-efficiency {vehicle.motorPower} powertrain, explore every heavy-duty metric of {vehicle.name}.
          </p>
        </div>

        {/* =========================================================================
            TOP 4 HERO BENCHMARK STAT CARDS
           ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-12 sm:mb-16">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Package className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.payload.replace(' kg', '')} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">kg</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Rated Payload
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Reinforced ladder frame
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.trueRange.replace(' km', '')} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">km</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              True Range
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Tested with {vehicle.payload} load
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <Gauge className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.topSpeed} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">km/h</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Top Speed
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              High-torque differential
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
              <BatteryCharging className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.hours} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">Hours</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Fast Charge (0–100%)
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Commercial depot socket
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
                  Engineered with central mass distribution and low loading deck for maximum freight stability.
                </p>
              </div>

              {/* 3-Wheeler Render */}
              <div className="relative my-8 w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B9346]/5 to-[#85C440]/5 rounded-full blur-2xl pointer-events-none" />
                <img
                  src={vehicles1Img}
                  alt={`${vehicle.name} Technical Profile`}
                  className="w-full max-w-[340px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Quick Dimension Pill Badges */}
              <div className="w-full grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">185 mm</div>
                  <div className="text-[10px] font-mono text-gray-700">Clearance</div>
                </div>
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">{vehicle.payload}</div>
                  <div className="text-[10px] font-mono text-gray-700">Payload</div>
                </div>
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">2150 mm</div>
                  <div className="text-[10px] font-mono text-gray-700">Wheelbase</div>
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

      </div>
    </section>
  )
}


