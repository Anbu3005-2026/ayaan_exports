import React from 'react'
import { motion } from 'framer-motion'
import { TUTICORIN_HUB, arcPath } from './worldMapData'

export default function SeaRoute({ destination, active = true, delay = 0, color = '#3b82f6' }) {
  const { id, x, y, curve = 0.2 } = destination
  const pathId = `sea-path-${id}`
  const d = arcPath(TUTICORIN_HUB.x, TUTICORIN_HUB.y, x, y, curve)
  const duration = 16 + Math.random() * 6

  return (
    <g>
      <motion.path
        id={pathId}
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="0.55"
        strokeDasharray="2.8 2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 0.65 } : {}}
        transition={{ duration: 1.8, delay, ease: 'easeInOut' }}
      />

      {active && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 1 }}
        >
          <g>
            <circle r="2.6" fill="#08131f" opacity="0.85" />
            <circle r="2.6" fill={color} opacity="0.18" />

            <g transform="scale(0.24) translate(-12,-13)">
              <path
                d="M2,13 L18,13 L23,16.5 L18,20 L4,20 Z"
                fill={color}
                stroke="#08131f"
                strokeWidth="0.6"
                strokeLinejoin="round"
              />
              <rect x="6" y="7" width="6" height="6" rx="1" fill={color} />
              <rect x="13.2" y="9" width="1.6" height="4" fill={color} />
              <line x1="9" y1="7" x2="9" y2="3" stroke={color} strokeWidth="1" strokeLinecap="round" />
              <path d="M9,3 L12,4.2 L9,5.4 Z" fill={color} />
            </g>

            <animateMotion dur={`${duration}s`} repeatCount="indefinite" rotate="auto">
              <mpath href={`#${pathId}`} />
            </animateMotion>
          </g>
        </motion.g>
      )}
    </g>
  )
}