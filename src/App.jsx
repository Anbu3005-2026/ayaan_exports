import React from 'react'
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

function App() {
  return (
    <div className="min-h-screen bg-section-light text-navy-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <ImportExport />
      <GlobalMapPro />
      <Process />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
