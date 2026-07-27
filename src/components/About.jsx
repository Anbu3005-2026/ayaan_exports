import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Shield, TrendingUp } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="relative py-10 sm:py-20 overflow-hidden bg-section-light">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none" />

      <div className="section-padding max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              About Ayaan Exports
            </span>
            <h2 className="heading-lg text-navy-900 mb-6">
              Your Gateway to{' '}
              <span className="text-gradient">Import & Export</span>
            </h2>
            <p className="body-lg text-navy-700 mb-8">
              Founded in 2021 in Tamil Nadu, India, Ayaan Exports has rapidly 
              established itself as a trusted name in international import and 
              export trade. We specialize in sourcing, importing, and exporting 
              quality products across diverse industries — from Resort and hospitality 
              supplies to engineering equipment, Electrical and Plumbing related 
              supplies fittings, Cold room and refrigeration related products, 
              construction materials, RO plant and related products and general cargo.
            </p>
            <p className="body-md text-navy-500 mb-10">
              Our deep understanding of global supply chains, combined with an unwavering commitment 
              to quality and timely delivery, makes us the preferred partner for businesses 
              seeking reliable import and export solutions from India.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Target, title: 'Precision', desc: 'Accurate sourcing & delivery' },
                { icon: Shield, title: 'Reliability', desc: 'Trusted by global partners' },
                { icon: TrendingUp, title: 'Growth', desc: 'Scaling with your business' },
                { icon: Eye, title: 'Vision', desc: 'Future-ready trade solutions' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={18} className="text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-navy-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
                  <Target size={24} className="text-accent-blue" />
                </div>
                <h3 className="heading-md text-navy-900 mb-4">Our Mission</h3>
                <p className="body-md text-navy-600 leading-relaxed">
                  To empower businesses worldwide by delivering quality products with uncompromising 
                  reliability. We bridge the gap between Indian manufacturers and global markets, 
                  ensuring every shipment reflects excellence, sustainability, and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center mb-6">
                  <Eye size={24} className="text-accent-red" />
                </div>
                <h3 className="heading-md text-navy-900 mb-4">Our Vision</h3>
                <p className="body-md text-navy-600 leading-relaxed">
                  To become the premier global trade partner recognized for innovation, integrity, 
                  and operational excellence. We envision a connected world where businesses thrive 
                  through seamless cross-border commerce powered by Indian craftsmanship.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
