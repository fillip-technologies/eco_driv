import { useState, useRef, useEffect, useMemo } from 'react'
import {
  Zap,
  BatteryCharging,
  Gauge,
  Sliders,
  ShieldCheck,
  Smartphone,
  Ruler,
} from 'lucide-react'
import gsap from 'gsap'
import scooterProfileImg from '../../../assets/personal-mobility/view-2.png'
import { DEFAULT_VEHICLE } from '../../../data/personalVehiclesData'

function getSpecCategories(vehicle) {
  return [
    {
      id: 'performance',
      label: 'Performance',
      icon: Zap,
      description: 'Track-tuned acceleration, high-torque mid-drive motor, and dynamic riding modes.',
      specs: [
        { label: 'Top Speed', value: `${vehicle.topSpeed} km/h`, highlight: true, note: 'Electronically limited for safety' },
        { label: '0 to 40 km/h', value: vehicle.acceleration, highlight: true, note: 'Instant launch acceleration' },
        { label: 'Peak Motor Power', value: vehicle.motorPower, note: 'Mid-drive Permanent Magnet Synch Motor (PMSM)' },
        { label: 'Max Wheel Torque', value: vehicle.torque, note: 'Instant peak torque from 0 RPM' },
        { label: 'Gradeability', value: vehicle.gradeability, note: 'Effortless flyover & steep hill climb capability' },
        { label: 'Riding Modes', value: vehicle.modes, note: 'Multi-mode ride dynamics' },
        { label: 'Transmission', value: 'Carbon Belt', note: 'Zero-maintenance silent power delivery' },
        { label: 'Drive Efficiency', value: '92%', note: 'Optimized high-speed magnetic stator core' },
      ],
    },
    {
      id: 'battery',
      label: 'Battery & Range',
      icon: BatteryCharging,
      description: 'High-energy NMC lithium-ion cells with intelligent BMS and active thermal management.',
      specs: [
        { label: 'Certified Range (IDC)', value: vehicle.range, highlight: true, note: 'Ideal Driving Conditions certification' },
        { label: 'TrueRange™ Real World', value: vehicle.trueRange, highlight: true, note: 'Standard city riding with pillion' },
        { label: 'Battery Capacity', value: vehicle.battery, note: 'Automotive-grade NMC Lithium-Ion pack' },
        { label: 'Fast Charge (0–80%)', value: `${vehicle.chargingTime} min`, note: 'At Ecodriv Hypercharger fast-charge hubs' },
        { label: 'Home Charge (0–100%)', value: `${vehicle.hours} Hours`, note: 'Via standard 5A household wall outlet' },
        { label: 'Pack Ingress Rating', value: 'IP67', note: 'Dust-tight & submerged water resistant' },
        { label: 'Battery Warranty', value: vehicle.warranty, note: 'Comprehensive capacity degradation warranty' },
        { label: 'Smart BMS', value: 'Active Balancing', note: 'Cell-level voltage, thermals & short-circuit shield' },
      ],
    },
    {
      id: 'chassis',
      label: 'Chassis & Brakes',
      icon: Sliders,
      description: 'Hybrid aluminium subframe, progressive suspension, and dual ventilated disc braking.',
      specs: [
        { label: 'Chassis Type', value: 'Hybrid Aluminium', highlight: true, note: 'Precision die-cast spaceframe architecture' },
        { label: 'Front Suspension', value: 'Telescopic Forks', note: '30 mm hydraulic inverted damper travel' },
        { label: 'Rear Suspension', value: 'Centrally Linked Monoshock', note: 'Progressive coil spring mono-absorber' },
        { label: 'Front Brake', value: '200 mm Disc', note: 'Hydraulic dual-piston caliper with CBS' },
        { label: 'Rear Brake', value: '190 mm Disc', note: 'Ventilated rotor with regenerative braking' },
        { label: 'Wheels', value: '12-inch Alloy', note: 'Diamond-cut machine finished lightweight alloys' },
        { label: 'Tire Specifications', value: '90/90-12 (F) | 100/80-12 (R)', note: 'Custom high-traction tubeless compound' },
        { label: 'Braking Distance', value: '28 m (60–0 km/h)', note: 'Class-leading stopping stability' },
      ],
    },
    {
      id: 'dimensions',
      label: 'Dimensions',
      icon: Ruler,
      description: 'Comfortable seating geometry, balanced mass centralization, and generous storage.',
      specs: [
        { label: 'Kerb Weight', value: '111.6 kg', highlight: true, note: 'Optimal agility and easy low-speed maneuvering' },
        { label: 'Ground Clearance', value: '170 mm', highlight: true, note: 'Conquers severe speed bumps and broken roads' },
        { label: 'Seat Height', value: '765 mm', note: 'Low stance accessible for riders of all heights' },
        { label: 'Wheelbase', value: '1296 mm', note: 'High-speed directional stability on highways' },
        { label: 'Boot Storage', value: '34 Litres', note: 'Fits full-face helmet with room to spare' },
        { label: 'Water Wading Depth', value: '300 mm', note: 'High water clearance for monsoon city roads' },
        { label: 'Payload Capacity', value: '180 kg', note: 'Engineered for two adult riders plus luggage' },
        { label: 'Turning Radius', value: '1.9 m', note: 'Ultra-tight turning circle for city traffic' },
      ],
    },
    {
      id: 'tech',
      label: 'Smart Tech & OS',
      icon: Smartphone,
      description: 'Snapdragon-powered multi-touch cockpit, connected telematics, and over-the-air updates.',
      specs: [
        { label: 'Cockpit Display', value: '7" Touchscreen TFT', highlight: true, note: '1000 Nits brightness readable in direct sunlight' },
        { label: 'Operating System', value: 'Ecodriv OS 4.0', highlight: true, note: 'Fluid 60 FPS custom automotive UI interface' },
        { label: 'Processor', value: 'Qualcomm Snapdragon', note: 'Quad-core dedicated automotive chip' },
        { label: 'Navigation', value: 'Live Google Maps', note: 'Turn-by-turn guidance with live traffic' },
        { label: 'Connectivity', value: '4G LTE eSIM + Bluetooth 5.0', note: 'Seamless cloud sync & smartphone pairing' },
        { label: 'Smart Security', value: 'Theft & Tow Alerts', note: 'GPS geo-fencing and instant smartphone notifications' },
        { label: 'Safety Assist', value: 'FallSafe™ + Auto-Hold', note: 'Motor cut-off on tilt & hill-hold without brakes' },
        { label: 'Firmware Updates', value: 'OTA (Over-The-Air)', note: 'Continuous new features & performance upgrades' },
      ],
    },
  ]
}

export default function ApexSpecsSection({ vehicle = DEFAULT_VEHICLE }) {
  const [activeTab, setActiveTab] = useState('performance')
  const contentRef = useRef(null)

  const categories = useMemo(() => getSpecCategories(vehicle), [vehicle])
  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0]

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
            Engineered to Excel in <span className="text-[#2B9346]">Every Metric</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            From the track-tuned {vehicle.motorPower} mid-drive motor to the aerospace aluminium subframe, explore every precision parameter of {vehicle.name}.
          </p>
        </div>

        {/* =========================================================================
            TOP 4 HERO BENCHMARK STAT CARDS
           ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-12 sm:mb-16">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
              <Gauge className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.topSpeed} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">km/h</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Top Speed
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Electronically limited
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#2B9346]/10 text-[#2B9346] flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.acceleration}
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              0 to 40 km/h
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Instant launch acceleration
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.range}
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Certified Range (IDC)
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              {vehicle.trueRange} TrueRange™
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F8FAF9] to-white border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <BatteryCharging className="w-5 h-5" strokeWidth={2.6} />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-sans text-black tracking-tight leading-none">
              {vehicle.chargingTime} <span className="text-xs sm:text-sm font-bold text-gray-700 font-mono">min</span>
            </div>
            <div className="text-xs font-bold text-gray-900 mt-2">
              Fast Charging (0–80%)
            </div>
            <div className="text-[11px] text-gray-500 font-mono mt-0.5">
              Hypercharger network
            </div>
          </div>

        </div>

        {/* =========================================================================
            CATEGORY TABS SELECTOR
           ========================================================================= */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-12">
          {categories.map((cat) => {
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
                  {vehicle.tag?.toUpperCase() || 'MODERN ARCHITECTURE'}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight mt-1">
                  {vehicle.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Engineered with central mass distribution for supreme stability.
                </p>
              </div>

              {/* Scooter Render */}
              <div className="relative my-8 w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B9346]/5 to-[#85C440]/5 rounded-full blur-2xl pointer-events-none" />
                <img
                  src={scooterProfileImg}
                  alt={`${vehicle.name} Technical Profile`}
                  className="w-full max-w-[380px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Quick Dimension Pill Badges */}
              <div className="w-full grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">170 mm</div>
                  <div className="text-[10px] font-mono text-gray-700">Clearance</div>
                </div>
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">765 mm</div>
                  <div className="text-[10px] font-mono text-gray-700">Seat Height</div>
                </div>
                <div className="text-center p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-black text-gray-900">111.6 kg</div>
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

      </div>
    </section>
  )
}


