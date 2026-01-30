import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './components/Navigation/Navigation'
import ContactSection from './components/ContactSection/ContactSection'
import RunningText from './components/RunningText/RunningText'
import LandingPage from './pages/LandingPage/LandingPage'
import ContactPerson from './pages/Menu/ContactPerson/ContactPerson'
import Company from './pages/Menu/Organization/Company/Company'
import OwnerProfile from './pages/Menu/Organization/OwnerProfile/OwnerProfile'
import OrganizationCulture from './pages/Menu/Organization/OrganizationCulture/OrganizationCulture'
import OuterProduct from './pages/Menu/Product/OuterProduct/OuterProduct'
import ProductAccessories from './pages/Menu/Product/ProductAccessories/ProductAccessories'
import ProductQuality from './pages/Menu/Product/ProductQuality/ProductQuality'
import CustomPackaging from './pages/Menu/Service/CustomPackaging/CustomPackaging'
import CustomPrinting from './pages/Menu/Service/CustomPrinting/CustomPrinting'
import FinishingOption from './pages/Menu/Service/FinishingOption/FinishingOption'
import DeliveryService from './pages/Menu/Service/DeliveryService/DeliveryService'
import Guarantee from './pages/Menu/Guarantee/Guarantee'
import HowToOrder from './pages/Menu/HowToOrder/HowToOrder'
import Gallery from './pages/Menu/Gallery/Gallery'
import './App.css'

function AppRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100vh', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ 
            width: '100%', 
            minHeight: '100vh',
            willChange: 'transform, opacity',
            position: 'relative'
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact-person" element={<ContactPerson />} />
            <Route path="/organization" element={<Navigate to="/organization/company" replace />} />
            <Route path="/organization/company" element={<Company />} />
            <Route path="/organization/owner-profile" element={<OwnerProfile />} />
            <Route path="/organization/organization-culture" element={<OrganizationCulture />} />
            <Route path="/product" element={<Navigate to="/product/outer-product" replace />} />
            <Route path="/product/outer-product" element={<OuterProduct />} />
            <Route path="/product/product-accessories" element={<ProductAccessories />} />
            <Route path="/product/product-quality" element={<ProductQuality />} />
            <Route path="/service" element={<Navigate to="/service/custom-packaging" replace />} />
            <Route path="/service/custom-packaging" element={<CustomPackaging />} />
            <Route path="/service/custom-printing" element={<CustomPrinting />} />
            <Route path="/service/finishing-option" element={<FinishingOption />} />
            <Route path="/service/delivery-service" element={<DeliveryService />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <AppRoutes />
        <ContactSection />
        <RunningText />
      </div>
    </Router>
  )
}

export default App
