import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Package, ConciergeBell, Globe2, Award } from 'lucide-react'

const stats = [
  { icon: Package, value: 500, suffix: '+', label: 'Shipments Delivered', description: 'Successful cargo movements' },
  { icon: ConciergeBell, value: 80, suffix: '+', label: 'Hospitality Clients', description: 'Resorts & hotels supplied' },
  { icon: Globe2, value: 10, suffix: '+', label: 'Countries Served', description: 'International reach' },
  { icon: Award, value: 5, suffix: '+', label: 'Years of Excellence', description: 'Since 2021' },
]

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="relative py-20 -mt-10 z-30">
      <div className="section-padding max-w-[1440px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-accent-blue/20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-2">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-sm font-medium text-navy-700 mb-1">{stat.label}</p>
                <p className="text-xs text-navy-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}