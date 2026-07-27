import React from 'react'
import { motion } from 'framer-motion'
import { TRIVANDRUM_HUB, arcPath } from './worldMapData'

export default function AirRoute({ destination, active = true, delay = 0, color = '#f43f5e' }) {
  const { id, x, y, curve = 0.2 } = destination
  const pathId = `air-path-${id}`
  const d = arcPath(TRIVANDRUM_HUB.x, TRIVANDRUM_HUB.y, x, y, curve * 1.6)
  const duration = 7 + Math.random() * 3

  return (
    <g>
      <motion.path
        id={pathId}
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="0.4"
        strokeDasharray="1.2 2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 0.55 } : {}}
        transition={{ duration: 1.4, delay: delay + 0.3, ease: 'easeInOut' }}
      />

      {active && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 1.2 }}
        >
          <g filter="url(#gmp-plane-glow)">
            <circle r="2" fill="#08131f" opacity="0.7" />
            <g transform="rotate(45) scale(0.25) translate(-12,-12)">
              <path
                d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                fill={color}
                stroke="#08131f"
                strokeWidth="0.3"
                strokeLinejoin="round"
              />
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