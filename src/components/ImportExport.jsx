import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ArrowUpRight, ArrowDownLeft, FileCheck2, ShieldCheck,
  ClipboardCheck, Users, ArrowRight, CheckCircle2
} from 'lucide-react'

const exportItems = [
  'Resort & Hospitality Supplies',
  'Granite, Marble & Construction Materials',
  'Engineering & Industrial Goods',
  'General & Consolidated Cargo',
  'Handicrafts & Home Décor',
  'Textiles & Linen',
]

const importItems = [
  'Industrial & Specialty Raw Materials',
  'Machinery & Equipment Components',
  'Packaging Materials',
  'Hospitality & F&B Equipment',
  'Custom-Sourced Business Supplies',
  'Bulk Consumer Goods',
]

const highlights = [
  {
    icon: FileCheck2,
    title: 'Documentation & Compliance',
    description: 'Accurate invoicing, packing lists, HS code classification, and certificates handled for every shipment.',
  },
  {
    icon: ShieldCheck,
    title: 'Customs Clearance',
    description: 'End-to-end coordination with customs authorities on both origin and destination ends.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality & Compliance Checks',
    description: 'Pre-shipment inspection and standards verification so every consignment meets destination regulations.',
  },
  {
    icon: Users,
    title: 'Dedicated Trade Consultants',
    description: 'A single point of contact guiding you through sourcing, freight, and delivery from start to finish.',
  },
]

export default function ImportExport() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="import-export" className="relative py-10 sm:py-20 overflow-hidden bg-section-light">
      <div className="section-padding max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Cross-Border Trade
          </span>
          <h2 className="heading-lg text-navy-900 mb-6">
            Import & Export{' '}
            <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="body-lg text-navy-700">
            We move goods both ways — exporting Indian-made products to the world and
            importing the materials and equipment your business needs, backed by
            full documentation and customs support.
          </p>
        </motion.div>

        {/* Export / Import Columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Export */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-8 sm:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-accent-blue/10 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
                <ArrowUpRight size={26} className="text-accent-blue" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-navy-900 mb-2">
                What We Export
              </h3>
              <p className="body-md text-navy-600 mb-6">
                Quality-checked, India-sourced products shipped to clients across 10+ countries.
              </p>
              <ul className="space-y-3">
                {exportItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-navy-700">
                    <CheckCircle2 size={16} className="text-accent-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Import */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card glass-card-hover rounded-2xl p-8 sm:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-accent-red/10 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent-red/10 flex items-center justify-center mb-6">
                <ArrowDownLeft size={26} className="text-accent-red" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-navy-900 mb-2">
                What We Import
              </h3>
              <p className="body-md text-navy-600 mb-6">
                Reliable global sourcing of materials and equipment for businesses across India.
              </p>
              <ul className="space-y-3">
                {importItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-navy-700">
                    <CheckCircle2 size={16} className="text-accent-red flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-accent-blue" />
              </div>
              <h4 className="text-base font-display font-semibold text-navy-900 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-navy-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <a href="#contact" className="btn-primary">
            Discuss Your Trade Requirement
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
