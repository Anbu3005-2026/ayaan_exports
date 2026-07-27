import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  // Red conic-gradient ring that fills clockwise as scroll progress increases
  const background = useTransform(
    scrollYProgress,
    (v) => `conic-gradient(#dc2626 ${v * 360}deg, rgba(30, 64, 175, 0.15) ${v * 360}deg)`
  )

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={handleClick}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 24, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.7 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 w-10 h-12 rounded-full p-[2px] shadow-lg shadow-navy-900/20"
        >
          {/* Progress fill ring — fills with red as the page is scrolled */}
          <motion.div className="absolute inset-0 rounded-full" style={{ background }} />

          {/* Inner circular button */}
          <span className="relative z-10 w-full h-full rounded-full bg-accent-blue flex items-center justify-center">
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUp size={20} className="text-white" strokeWidth={2.5} />
            </motion.span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}