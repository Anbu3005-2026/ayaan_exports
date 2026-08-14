import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import ImportExport from './components/ImportExport'
import GlobalMapPro from './components/map/GlobalMapPro'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import TermsAndConditions from './components/legal/TermsAndConditions'
import PrivacyPolicy from './components/legal/PrivacyPolicy'
import ShippingDeliveryPolicy from './components/legal/ShippingDeliveryPolicy'
import CancellationRefundPolicy from './components/legal/CancellationRefundPolicy'

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <ImportExport />
      <GlobalMapPro />
      <Process />
      <CTA />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-section-light text-navy-900 overflow-x-clip">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<ShippingDeliveryPolicy />} />
        <Route path="/refund-policy" element={<CancellationRefundPolicy />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App