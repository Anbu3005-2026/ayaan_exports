import React from 'react'
import { motion } from 'framer-motion'

export default function RouteMarker({ destination, active = true, delay = 0 }) {
  const { x, y, name, country, modes, labelDx = 0, labelDy = -3.6 } = destination
  const color = modes.includes('sea') && modes.includes('air')
    ? '#fbbf24'
    : modes.includes('air')
      ? '#f43f5e'
      : '#3b82f6'

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={active ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, delay, type: 'spring', stiffness: 260, damping: 18 }}
    >
      <title>{`${name} — ${country}`}</title>

      <circle cx={x} cy={y} r="2.8" fill={color} opacity="0.15" />
      <circle cx={x} cy={y} r="1.4" fill={color} stroke="rgba(255,255,255,0.4)" strokeWidth="0.3" />
      <motion.circle
        cx={x}
        cy={y}
        r="1.4"
        fill="none"
        stroke={color}
        strokeWidth="0.4"
        initial={{ opacity: 0 }}
        animate={active ? { opacity: [0, 0.5, 0], scale: [1, 2.6, 2.6] } : {}}
        transition={{ duration: 2.2, repeat: Infinity, delay: delay + 0.6, ease: 'easeOut' }}
      />

      <text
        x={x + labelDx}
        y={y + labelDy}
        fill="rgba(255,255,255,0.9)"
        fontSize="4"
        fontWeight="600"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        style={{ paintOrder: 'stroke', stroke: '#08131f', strokeWidth: 1.2 }}
      >
        {name}
      </text>
    </motion.g>
  )
}