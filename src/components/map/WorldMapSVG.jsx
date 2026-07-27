import React from 'react'
import { motion } from 'framer-motion'
import { WORLD_MAP_VIEWBOX, WORLD_MAP_PATHS, TRIVANDRUM_HUB, TUTICORIN_HUB } from './worldMapData'

const [VB_X, VB_Y, VB_W, VB_H] = WORLD_MAP_VIEWBOX.split(' ')

export default function WorldMapSVG({ children, active = true, className = '' }) {
  return (
    <svg
      viewBox={WORLD_MAP_VIEWBOX}
      className={`w-full h-auto ${className}`}
      style={{ minHeight: '360px' }}
      role="img"
      aria-label="Map showing sea routes from Tuticorin and air routes from Thiruvananthapuram to Saudi Arabia, UAE, Oman, Maldives, and Singapore"
    >
      <defs>
        <pattern id="gmp-grid" width="13" height="13" patternUnits="userSpaceOnUse">
          <path d="M 13 0 L 0 0 0 13" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="0.2" />
        </pattern>
        <radialGradient id="gmp-india-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
        <clipPath id="gmp-clip">
          <rect x={VB_X} y={VB_Y} width={VB_W} height={VB_H} />
        </clipPath>
        <filter id="gmp-plane-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="0" dy="0" stdDeviation="0.6" floodColor="#f43f5e" floodOpacity="0.7" />
        </filter>
      </defs>

      <g clipPath="url(#gmp-clip)">
        <rect x={VB_X} y={VB_Y} width={VB_W} height={VB_H} fill="#08131f" />
        <rect x={VB_X} y={VB_Y} width={VB_W} height={VB_H} fill="url(#gmp-grid)" />

        <g
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="0.25"
          dangerouslySetInnerHTML={{ __html: WORLD_MAP_PATHS }}
        />

        {/* Tuticorin — sea cargo origin */}
        <g>
          <circle cx={TUTICORIN_HUB.x} cy={TUTICORIN_HUB.y} r="8" fill="url(#gmp-india-glow)" />
          <motion.circle
            cx={TUTICORIN_HUB.x} cy={TUTICORIN_HUB.y} r="1.6" fill="#60a5fa"
            initial={{ opacity: 0, scale: 0 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.circle
            cx={TUTICORIN_HUB.x} cy={TUTICORIN_HUB.y} r="1.6" fill="none" stroke="#60a5fa" strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: [0, 0.6, 0], scale: [1, 3.2, 3.2] } : {}}
            transition={{ duration: 2.4, repeat: Infinity, delay: 1.2, ease: 'easeOut' }}
          />
        </g>

        {/* Thiruvananthapuram — air cargo origin */}
        <g>
          <circle cx={TRIVANDRUM_HUB.x} cy={TRIVANDRUM_HUB.y} r="8" fill="url(#gmp-india-glow)" />
          <motion.circle
            cx={TRIVANDRUM_HUB.x} cy={TRIVANDRUM_HUB.y} r="1.6" fill="#f43f5e"
            initial={{ opacity: 0, scale: 0 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
          <motion.circle
            cx={TRIVANDRUM_HUB.x} cy={TRIVANDRUM_HUB.y} r="1.6" fill="none" stroke="#f43f5e" strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: [0, 0.6, 0], scale: [1, 3.2, 3.2] } : {}}
            transition={{ duration: 2.4, repeat: Infinity, delay: 1.3, ease: 'easeOut' }}
          />
        </g>

        {children}

        {/* Hub name labels — rendered last so routes/icons never cover them */}
        <g pointerEvents="none">
          <motion.text
            x={TUTICORIN_HUB.x + 4} y={TUTICORIN_HUB.y - 1}
            fill="#bfdbfe" fontSize="5" fontWeight="700" letterSpacing="0.3" textAnchor="start"
            style={{ paintOrder: 'stroke', stroke: '#08131f', strokeWidth: 2.2 }}
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Tuticorin
          </motion.text>

          <motion.text
            x={TRIVANDRUM_HUB.x + 33} y={TRIVANDRUM_HUB.y + 9}
            fill="#fecaca" fontSize="5" fontWeight="700" letterSpacing="0.3" textAnchor="end"
            style={{ paintOrder: 'stroke', stroke: '#08131f', strokeWidth: 2.2 }}
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Trivandrum
          </motion.text>
        </g>
      </g>
    </svg>
  )
}