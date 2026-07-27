import React, { useRef, useState } from 'react'
import { motion, useScroll, useInView } from 'framer-motion'
import { MapPin, Ship, Plane, ArrowRight } from 'lucide-react'

// Simplified but recognizable world map using actual country shapes
const COUNTRIES = [
  // North America
  "M120,120 L180,110 L220,115 L260,105 L300,110 L320,130 L310,160 L280,180 L240,185 L200,175 L160,165 L130,150 Z",
  "M140,160 L160,155 L170,165 L165,180 L150,185 L135,175 Z",
  // South America
  "M220,240 L260,230 L280,250 L290,290 L280,340 L260,380 L240,400 L220,390 L210,350 L205,300 L210,260 Z",
  // Europe
  "M420,100 L460,95 L480,105 L490,120 L485,135 L470,140 L450,138 L435,130 L425,115 Z",
  "M440,140 L460,135 L470,145 L465,155 L450,160 L440,150 Z",
  "M470,110 L500,105 L520,115 L525,130 L515,140 L490,135 L475,125 Z",
  // Africa
  "M430,180 L470,175 L500,185 L520,210 L530,250 L525,300 L510,340 L490,360 L460,355 L440,330 L430,290 L425,250 L420,210 Z",
  // Asia
  "M520,100 L580,90 L640,95 L700,105 L750,120 L780,140 L790,170 L780,200 L760,220 L730,230 L690,225 L650,210 L610,190 L570,170 L540,150 L525,125 Z",
  "M640,220 L670,215 L690,225 L695,245 L680,255 L655,250 L640,235 Z",
  // India
  "M580,180 L610,175 L630,185 L640,205 L635,225 L620,240 L600,245 L585,235 L575,215 L570,195 Z",
  // Australia
  "M720,320 L780,310 L820,320 L840,350 L830,390 L800,410 L760,405 L730,385 L715,355 Z",
  // Middle East
  "M520,160 L560,155 L580,165 L585,185 L575,200 L550,195 L530,185 L515,170 Z",
];

// Major shipping route paths (curved bezier paths from India to destinations)
const SHIPPING_ROUTES = [
  { 
    id: 'india-europe',
    path: 'M 610,210 C 580,180 550,150 520,140 C 500,130 480,125 460,120',
    label: 'India → Europe'
  },
  { 
    id: 'india-middle-east',
    path: 'M 610,210 C 600,200 590,190 580,185 C 570,180 560,175 550,170',
    label: 'India → Middle East'
  },
  { 
    id: 'india-africa',
    path: 'M 610,210 C 600,240 580,270 560,290 C 540,310 520,320 500,330',
    label: 'India → Africa'
  },
  { 
    id: 'india-sea',
    path: 'M 610,210 C 640,220 670,230 700,235 C 730,240 750,245 770,250',
    label: 'India → Southeast Asia'
  },
  { 
    id: 'india-australia',
    path: 'M 610,210 C 640,250 670,290 700,320 C 730,340 760,350 780,360',
    label: 'India → Australia'
  },
];

// Air routes (straighter paths)
const AIR_ROUTES = [
  { 
    id: 'air-india-europe',
    path: 'M 610,210 L 580,170 L 540,140 L 480,115',
    label: 'Air: India → Europe'
  },
  { 
    id: 'air-india-me',
    path: 'M 610,210 L 590,190 L 570,175 L 550,165',
    label: 'Air: India → Middle East'
  },
  { 
    id: 'air-india-africa',
    path: 'M 610,210 L 590,250 L 560,300 L 520,340',
    label: 'Air: India → Africa'
  },
  { 
    id: 'air-india-sea',
    path: 'M 610,210 L 650,220 L 700,230 L 760,245',
    label: 'Air: India → SE Asia'
  },
];

// Destination markers with coordinates
const DESTINATIONS = [
  { x: 460, y: 120, name: 'Europe', type: 'both' },
  { x: 550, y: 170, name: 'Middle East', type: 'both' },
  { x: 500, y: 330, name: 'Africa', type: 'both' },
  { x: 770, y: 250, name: 'SE Asia', type: 'both' },
  { x: 780, y: 360, name: 'Australia', type: 'ship' },
  { x: 260, y: 115, name: 'North America', type: 'air' },
  { x: 250, y: 320, name: 'South America', type: 'ship' },
];

export default function GlobalMap() {
  const containerRef = useRef(null)
  const ref = useRef(null);

const inView = useInView(ref, {
  once: true,
  amount: 0.2,
});

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  return (
    <section id="global" ref={containerRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/20 to-navy-950" />

      <div className="section-padding max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Global Network
          </span>
          <h2 className="heading-lg text-white mb-6">
            Shipping Routes From{' '}
            <span className="text-gradient">India</span>
          </h2>
          <p className="body-lg text-navy-300">
            Our strategic logistics network spans across continents, connecting Indian manufacturers 
            to businesses worldwide through optimized sea and air corridors.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden glass-card border border-white/10"
        >
          {/* Map Legend */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/80 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full bg-accent-blue" />
              <span className="text-xs text-navy-200">Sea Routes</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/80 backdrop-blur-sm border border-white/10">
              <div className="w-3 h-3 rounded-full bg-accent-red" />
              <span className="text-xs text-navy-200">Air Routes</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-950/80 backdrop-blur-sm border border-white/10">
              <MapPin size={12} className="text-yellow-400" />
              <span className="text-xs text-navy-200">Destinations</span>
            </div>
          </div>

          {/* SVG World Map */}
          <svg 
            viewBox="0 0 900 450" 
            className="w-full h-auto"
            style={{ minHeight: '400px' }}
          >
            {/* Ocean Background */}
            <rect width="900" height="450" fill="#0b1d2e" />

            {/* Grid Lines */}
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="900" height="450" fill="url(#grid)" />

            {/* Continents */}
            {COUNTRIES.map((country, i) => (
              <motion.path
                key={i}
                d={country}
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              />
            ))}

            {/* India Highlight */}
            <motion.path
              d="M580,180 L610,175 L630,185 L640,205 L635,225 L620,240 L600,245 L585,235 L575,215 L570,195 Z"
              fill="rgba(30, 58, 95, 0.4)"
              stroke="#60a5fa"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.text
              x="605"
              y="215"
              fill="#60a5fa"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              INDIA
            </motion.text>

            {/* Pulsing India Marker */}
            <motion.circle
              cx="605"
              cy="210"
              r="4"
              fill="#60a5fa"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.circle
              cx="605"
              cy="210"
              r="8"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: [0, 0.6, 0], scale: [1, 2, 2] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />

            {/* Shipping Routes */}
            {SHIPPING_ROUTES.map((route, i) => (
              <g key={route.id}>
                {/* Route Path */}
                <motion.path
                  d={route.path}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
                  transition={{ duration: 2, delay: 1.5 + i * 0.3, ease: 'easeInOut' }}
                />
                {/* Animated Ship */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 2 + i * 0.3 }}
                >
                  <circle
                    r="4"
                    fill="#3b82f6"
                    filter="drop-shadow(0 0 4px #3b82f6)"
                  >
                    <animateMotion
                      dur={`${15 + i * 3}s`}
                      repeatCount="indefinite"
                      path={route.path}
                    />
                  </circle>
                  <circle
                    r="8"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="0.5"
                    opacity="0.3"
                  >
                    <animateMotion
                      dur={`${15 + i * 3}s`}
                      repeatCount="indefinite"
                      path={route.path}
                    />
                  </circle>
                </motion.g>
              </g>
            ))}

            {/* Air Routes */}
            {AIR_ROUTES.map((route, i) => (
              <g key={route.id}>
                <motion.path
                  d={route.path}
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
                  transition={{ duration: 1.5, delay: 2 + i * 0.2, ease: 'easeInOut' }}
                />
                {/* Animated Plane */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 2.5 + i * 0.2 }}
                >
                  <circle
                    r="3"
                    fill="#dc2626"
                    filter="drop-shadow(0 0 4px #dc2626)"
                  >
                    <animateMotion
                      dur={`${8 + i * 2}s`}
                      repeatCount="indefinite"
                      path={route.path}
                    />
                  </circle>
                </motion.g>
              </g>
            ))}

            {/* Destination Markers */}
            {DESTINATIONS.map((dest, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
              >
                <circle
                  cx={dest.x}
                  cy={dest.y}
                  r="4"
                  fill={dest.type === 'air' ? '#dc2626' : dest.type === 'ship' ? '#3b82f6' : '#fbbf24'}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                <text
                  x={dest.x}
                  y={dest.y - 10}
                  fill="rgba(255,255,255,0.7)"
                  fontSize="8"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                >
                  {dest.name}
                </text>
              </motion.g>
            ))}
          </svg>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-950/90 to-transparent">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {[
                { icon: Ship, label: 'Sea Cargo', value: 'Weekly Departures', color: 'text-accent-blue' },
                { icon: Plane, label: 'Air Cargo', value: 'Express 3-5 Days', color: 'text-accent-red' },
                { icon: MapPin, label: 'Coverage', value: '30+ Countries', color: 'text-yellow-400' },
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

        {/* Route Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { from: 'India', to: 'Europe', time: '18-25 Days', mode: 'Sea', color: 'blue' },
            { from: 'India', to: 'Middle East', time: '7-12 Days', mode: 'Sea', color: 'blue' },
            { from: 'India', to: 'Africa', time: '15-22 Days', mode: 'Sea', color: 'blue' },
            { from: 'India', to: 'SE Asia', time: '5-8 Days', mode: 'Sea', color: 'blue' },
          ].map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="glass-card rounded-xl p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div>
                <p className="text-xs text-navy-400 mb-1">{route.mode} Freight</p>
                <p className="text-sm font-medium text-white">{route.from} → {route.to}</p>
                <p className="text-xs text-accent-blue mt-1">{route.time}</p>
              </div>
              <ArrowRight size={16} className="text-navy-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
