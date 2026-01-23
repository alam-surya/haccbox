import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './components/Navigation/Navigation'
import ContactSection from './components/ContactSection/ContactSection'
import RunningText from './components/RunningText/RunningText'
import LandingPage from './pages/LandingPage/LandingPage'
import AboutUs from './pages/AboutUs/AboutUs'
import Portfolio from './pages/Portfolio/Portfolio'
import OurProducts from './pages/OurProducts/OurProducts'
import Location from './pages/Location/Location'
import QnA from './pages/QnA/QnA'
import SocialMedia from './pages/SocialMedia/SocialMedia'
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
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/products" element={<OurProducts />} />
            <Route path="/location" element={<Location />} />
            <Route path="/qna" element={<QnA />} />
            <Route path="/social-media" element={<SocialMedia />} />
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
