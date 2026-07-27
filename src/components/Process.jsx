import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ClipboardList, Search, CheckCircle, Truck } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Requirement Analysis',
    description: 'You specify the products and services you need. We listen carefully to understand your exact requirements, quantities, and delivery timelines.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Identification',
    description: 'We identify and vet the best Indian manufacturers and suppliers who can deliver quality products on time, at the right price.',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Selection & Negotiation',
    description: 'We assist you in the selection process using industry-tested standards and negotiate the best terms on your behalf.',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Delivery & Support',
    description: 'We handle all logistics, documentation, and customs clearance to ensure your products arrive safely and on schedule.',
  },
]

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="process" className="relative py-10 sm:py-20 overflow-hidden bg-section-light-alt">
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
            How We Work
          </span>
          <h2 className="heading-lg text-navy-900 mb-6">
            Our Four-Step{' '}
            <span className="text-gradient">Process</span>
          </h2>
          <p className="body-lg text-navy-700">
            A streamlined approach to international trade that ensures transparency, 
            efficiency, and complete customer satisfaction at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector Line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-navy-200 to-transparent" />
              )}

              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full relative overflow-hidden group">
                {/* Number Background */}
                <div className="absolute -top-4 -right-4 text-8xl font-display font-bold text-navy-900/[0.04] select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors">
                  <step.icon size={24} className="text-accent-blue" />
                </div>

                {/* Number */}
                <span className="text-xs font-bold text-accent-blue tracking-widest mb-3 block">
                  STEP {step.number}
                </span>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="body-md text-navy-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
