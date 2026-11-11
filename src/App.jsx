import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import TestRideModal from './components/home/TestRideModal'
import Home from './pages/Home'
import EcodrivApex from './pages/mobility/EcodrivApex'
import EcodrivDelivery from './pages/commercial-mobility/EcodrivDelivery'
import EcodrivCargo from './pages/commercial-mobility/EcodrivCargo'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import FinancePartner from './pages/our-partner/FinancePartner'
import BatteryPartner from './pages/our-partner/BatteryPartner'
import IotPartner from './pages/our-partner/IotPartner'
import TelematicsPartner from './pages/our-partner/TelematicsPartner'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [isTestRideOpen, setIsTestRideOpen] = useState(false)

  const handleOpenTestRide = () => setIsTestRideOpen(true)
  const handleCloseTestRide = () => setIsTestRideOpen(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-brand-mint selection:text-black">
        {/* Floating Ather Reference White Navbar */}
        <Navbar onBookTestRide={handleOpenTestRide} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home onBookTestRide={handleOpenTestRide} />} />
          <Route path="/apex" element={<EcodrivApex modelId="apex" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-apex" element={<Navigate to="/apex" replace />} />
          <Route path="/glide" element={<EcodrivApex modelId="glide" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-glide" element={<Navigate to="/glide" replace />} />
          <Route path="/450" element={<EcodrivApex modelId="450" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-450" element={<Navigate to="/450" replace />} />
          <Route path="/250" element={<EcodrivApex modelId="250" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-250" element={<Navigate to="/250" replace />} />
          <Route path="/200" element={<EcodrivApex modelId="200" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-200" element={<Navigate to="/200" replace />} />
          <Route path="/150" element={<EcodrivApex modelId="150" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-150" element={<Navigate to="/150" replace />} />
          <Route path="/personal-mobility/:modelId" element={<EcodrivApex onBookTestRide={handleOpenTestRide} />} />
          <Route path="/mobility/:modelId" element={<EcodrivApex onBookTestRide={handleOpenTestRide} />} />
          <Route path="/delivery" element={<EcodrivDelivery modelId="delivery-100" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/delivery-100" element={<Navigate to="/delivery" replace />} />
          <Route path="/ecodriv-delivery" element={<Navigate to="/delivery" replace />} />
          <Route path="/cargo-2w" element={<EcodrivDelivery modelId="cargo-2w" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-cargo-2w" element={<Navigate to="/cargo-2w" replace />} />
          <Route path="/cargo-150" element={<EcodrivCargo modelId="cargo-150" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-cargo-150" element={<Navigate to="/cargo-150" replace />} />
          <Route path="/cargo-200" element={<EcodrivCargo modelId="cargo-200" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-cargo-200" element={<Navigate to="/cargo-200" replace />} />
          <Route path="/loader-250" element={<EcodrivCargo modelId="loader-250" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-loader-250" element={<Navigate to="/loader-250" replace />} />
          <Route path="/delivery-300" element={<EcodrivCargo modelId="delivery-300" onBookTestRide={handleOpenTestRide} />} />
          <Route path="/ecodriv-delivery-300" element={<Navigate to="/delivery-300" replace />} />
          <Route path="/commercial-mobility/3-wheelers/:modelId" element={<EcodrivCargo onBookTestRide={handleOpenTestRide} />} />
          <Route path="/commercial-mobility/2-wheelers/:modelId" element={<EcodrivDelivery onBookTestRide={handleOpenTestRide} />} />
          <Route path="/cargo" element={<Navigate to="/cargo-150" replace />} />
          <Route path="/3-wheelers" element={<Navigate to="/cargo-150" replace />} />
          <Route path="/commercial-mobility/3-wheelers" element={<Navigate to="/cargo-150" replace />} />
          <Route path="/about" element={<AboutUs onBookTestRide={handleOpenTestRide} />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<ContactUs onBookTestRide={handleOpenTestRide} />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/our-partner/finance-partner" element={<FinancePartner onBookTestRide={handleOpenTestRide} />} />
          <Route path="/our-partners/finance-partner" element={<Navigate to="/our-partner/finance-partner" replace />} />
          <Route path="/finance-partner" element={<Navigate to="/our-partner/finance-partner" replace />} />

          <Route path="/our-partner/battery-partner" element={<BatteryPartner onBookTestRide={handleOpenTestRide} />} />
          <Route path="/our-partners/battery-partner" element={<Navigate to="/our-partner/battery-partner" replace />} />
          <Route path="/battery-partner" element={<Navigate to="/our-partner/battery-partner" replace />} />

          <Route path="/our-partner/iot-partner" element={<IotPartner onBookTestRide={handleOpenTestRide} />} />
          <Route path="/our-partners/iot-partner" element={<Navigate to="/our-partner/iot-partner" replace />} />
          <Route path="/iot-partner" element={<Navigate to="/our-partner/iot-partner" replace />} />

          <Route path="/our-partner/telematics-partner" element={<TelematicsPartner onBookTestRide={handleOpenTestRide} />} />
          <Route path="/our-partners/telematics-partner" element={<Navigate to="/our-partner/telematics-partner" replace />} />
          <Route path="/telematics-partner" element={<Navigate to="/our-partner/telematics-partner" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Clean Light Footer */}
        <Footer onBookTestRide={handleOpenTestRide} />

        {/* Book Test Ride Modal */}
        <TestRideModal isOpen={isTestRideOpen} onClose={handleCloseTestRide} />
      </div>
    </BrowserRouter>
  )
}
