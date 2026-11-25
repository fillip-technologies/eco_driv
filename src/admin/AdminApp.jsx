import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import VehicleEnquiries from './pages/VehicleEnquiries'
import ContactMessages from './pages/ContactMessages'
import DemoBookings from './pages/DemoBookings'
import Settings from './pages/Settings'

// All admin routes, mounted at /admin/* in src/App.jsx.
// New sections: add a <Route> inside the layout and an entry in config/navigation.js.
export default function AdminApp() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="vehicle-enquiries" element={<VehicleEnquiries />} />
        <Route path="demo-bookings" element={<DemoBookings />} />
        <Route path="contact-messages" element={<ContactMessages />} />
        <Route path="enquiries" element={<Navigate to="/admin/vehicle-enquiries" replace />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  )
}
