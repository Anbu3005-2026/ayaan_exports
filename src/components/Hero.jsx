import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Globe, Anchor, Plane } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Background Image */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <img 
          src="/hero-logistics.jpg" 
          alt="Global logistics — container ship, truck and cargo plane" 
          className="w-full h-full object-cover"
        />
        {/* Left-side scrim so text sits clearly over the photo — lightened */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/40 to-navy-950/15 z-10" />
        {/* Vertical scrim, softer overall and lighter toward the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-navy-950/20 to-navy-950/55 z-10" />
      </motion.div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-[5] opacity-[0.06]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[6] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 section-padding max-w-[1440px] mx-auto w-full pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
          >
            <Globe size={14} className="text-accent-red" />
            <span className="text-sm text-white">Serving Clients Across 10+ Countries</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-xl mb-6 text-white"
          >
            Bridging India to the{' '}
            <span className="text-gradient">Global Market</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="body-lg max-w-xl mb-5 text-navy-200"
          >
            Your trusted partner for seamless import and export trade, 
            We provide the broadest selection of quality hotel/Resort and Other supplies, 
            specializing in resort and hospitality supplies like all kind of General Cargo’s products, 
            Quartz Stone, Granite & Marble Stone, Tiles, All Construction Bulk Materials, 
            maintenance spare parts, and freezer, Chiller Etc..
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#services" className="btn-primary">
              Explore Services
              <ArrowRight size={18} />
            </a>
            <a
              href="#global"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white/30 text-white font-medium rounded-lg
                         transition-all duration-300 hover:bg-white/10 hover:border-white/50 active:scale-[0.98]"
            >
              <Globe size={18} />
              Our Global Reach
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-8 sm:gap-12"
          >
            {[
              { icon: Anchor, label: 'Sea Freight', desc: 'Global Shipping' },
              { icon: Plane, label: 'Air Cargo', desc: 'Express Delivery' },
              { icon: Globe, label: '10+ Countries', desc: 'Worldwide Network' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <item.icon size={18} className="text-accent-red" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-navy-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade — blends the hero into the light-blue page below */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-[#eef5fc] to-transparent z-20" />
    </section>
  )
}
