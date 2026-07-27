import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Ship, Plane, MapPin, ArrowRight } from 'lucide-react'
import WorldMapSVG from './WorldMapSVG'
import SeaRoute from './SeaRoute'
import AirRoute from './AirRoute'
import RouteMarker from './RouteMarker'
import { DESTINATIONS } from './worldMapData'

/**
 * GlobalMapPro
 *
 * Drop-in replacement for the old GlobalMap.jsx — same section id/props
 * contract, real-geometry map instead of hand-drawn blobs. Renders:
 *   header -> legend + map (WorldMapSVG + SeaRoute/AirRoute/RouteMarker
 *   layers) -> bottom stats bar -> route summary cards.
 */
export default function GlobalMapPro() {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, amount: 0.2 })

  const seaDestinations = DESTINATIONS.filter((d) => d.modes.includes('sea'))
  const airDestinations = DESTINATIONS.filter((d) => d.modes.includes('air'))

  return (
    <section id="global" ref={containerRef} className="relative py-10 sm:py-20 overflow-hidden bg-section-light">
      <div className="section-padding max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Global Network
          </span>
          <h2 className="heading-lg text-navy-900 mb-6">
            Our Core Export{' '}<span className="text-gradient">Markets</span>
          </h2>
          <p className="body-lg text-navy-700">
            We focus where our supply chain is strongest — Saudi Arabia, 
            UAE, Oman, Qatar, Republic of Maldives, and Asia 
            Country's — with dedicated sea and air corridors from India to each.
          </p>
        </motion.div>

        {/* Map card — kept as a dark "night map" panel for contrast against the light page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden bg-navy-950 border border-navy-800 shadow-xl shadow-navy-900/10"
        >
          {/* Legend */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 sm:gap-3">
            <Legend color="bg-accent-blue" label="Sea Routes" />
            <Legend color="bg-accent-red" label="Air Routes" icon={<Plane size={11} className="text-white" />} />
            <Legend color="bg-yellow-400" label="Destinations" icon={<MapPin size={11} className="text-navy-950" />} />
          </div>

          <WorldMapSVG active={inView}>
            {seaDestinations.map((dest, i) => (
              <SeaRoute key={`sea-${dest.id}`} destination={dest} active={inView} delay={1.4 + i * 0.25} />
            ))}
            {airDestinations.map((dest, i) => (
              <AirRoute key={`air-${dest.id}`} destination={dest} active={inView} delay={1.6 + i * 0.2} />
            ))}
            {DESTINATIONS.map((dest, i) => (
              <RouteMarker key={dest.id} destination={dest} active={inView} delay={2.2 + i * 0.12} />
            ))}
          </WorldMapSVG>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-950/90 to-transparent">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {[
                { icon: Ship, label: 'Sea Cargo', value: 'Weekly Departures', color: 'text-accent-blue' },
                { icon: Plane, label: 'Air Cargo', value: 'Within 1 Day', color: 'text-accent-red' },
                { icon: MapPin, label: 'Coverage', value: '10+ Countries', color: 'text-yellow-400' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon size={18} className={item.color} />
                  <div>
                    <p className="text-xs text-navy-400">{item.label}</p>
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Route cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {DESTINATIONS.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="glass-card glass-card-hover rounded-xl p-4 flex items-center justify-between group cursor-pointer"
            >
              <div>
                <p className="text-sm font-medium text-navy-900 mb-2">India → {route.name}</p>
                <div className="flex items-center gap-3">
                  {route.seaTime && (
                    <div className="flex items-center gap-1.5">
                      <Ship size={12} className="text-accent-blue" />
                      <span className="text-xs text-navy-600">{route.seaTime}</span>
                    </div>
                  )}
                  {route.airTime && (
                    <div className="flex items-center gap-1.5">
                      <Plane size={12} className="text-accent-red" />
                      <span className="text-xs text-navy-600">{route.airTime}</span>
                    </div>
                  )}
                </div>
              </div>
              <ArrowRight size={16} className="text-navy-400 group-hover:text-accent-blue group-hover:translate-x-1 transition-all flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Legend({ color, label, icon }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/80 backdrop-blur-sm border border-white/10">
      <div className={`w-3 h-3 rounded-full ${color} flex items-center justify-center`}>{icon}</div>
      <span className="text-xs text-navy-200">{label}</span>
    </div>
  )
}
