import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Ship, Plane, Boxes, Building2, 
  ShoppingCart, Truck, ArrowRight, Palmtree,
  X, Check
} from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = '918883164760'

const featuredService = {
  icon: Palmtree,
  title: 'Resort & Hospitality Supplies',
  description: 'End-to-end sourcing and export of premium resort and hotel essentials — from in-room amenities and linen to F&B equipment and décor — tailored for hospitality businesses worldwide.',
  features: ['In-Room Amenities', 'Linen & Housekeeping', 'F&B Equipment', 'Furniture & Décor'],
  fullDescription: 'We supply resorts and hotel groups with everything needed to run guest-facing operations at a premium standard — sourced, quality-checked, and shipped directly from India. Whether you\'re outfitting a new property or restocking an existing one, we handle bulk orders, custom branding, and consistent reordering.',
  fullFeatures: [
    'In-Room Guest Amenities (toiletries, slippers, welcome kits)',
    'Bed & Bath Linen, Towels',
    'Housekeeping & Cleaning Supplies',
    'F&B Operating Equipment & Tableware',
    'Furniture, Décor & Signage',
    'Custom Branding for Hotel Groups',
  ],
  color: 'blue',
}

const services = [
  {
    icon: Ship,
    title: 'Sea Cargo',
    description: 'Full-container (FCL) and less-than-container (LCL) shipping solutions with end-to-end tracking and customs clearance support.',
    features: ['FCL & LCL Shipping', 'Port-to-Port Delivery', 'Customs Documentation'],
    fullDescription: 'Our sea freight division manages full-container load (FCL) and less-than-container load (LCL) shipments across major global trade lanes, handling booking, documentation, and port clearance—so your cargo moves predictably from India to destination ports worldwide, as well as imports from international origins into India with the same level of efficiency and reliability.',
    fullFeatures: [
      'FCL & LCL Shipping',
      'Port-to-Port',
      'Customs Documentation & HS Code Classification',
      'Bill of Lading & Insurance Support',
      'Container Tracking',
      'Consolidation Services',
    ],
    color: 'blue',
  },
  {
    icon: Plane,
    title: 'Air Cargo',
    description: 'Express and standard air freight services for time-sensitive shipments with real-time tracking and competitive rates.',
    features: ['Express Delivery', 'Charter Services', 'Customs Documentation'],
    fullDescription: 'For time-critical shipments, our air cargo service moves goods fast without compromising on documentation accuracy or tracking visibility — from single pallets to chartered bulk loads.',
    fullFeatures: [
      'Express & Standard Air Freight',
      'Charter Services for Bulk/Urgent Loads',
      'Real-Time Shipment Tracking',
      'Airport-to-Airport',
      'Customs Clearance',
      'Temperature-Sensitive Cargo Handling',
    ],
    color: 'red',
  },
  {
    icon: Boxes,
    title: 'All Material Supply',
    description: 'Reliable sourcing and export of a wide range of industrial, commercial, and specialty materials — tailored to your exact project or business requirements.',
    features: ['Industrial Materials', 'Raw Materials', 'Custom Sourcing'],
    fullDescription: 'Whatever your business needs, we can source it. Our all-material supply service covers everything from industrial raw materials and packaging supplies to specialty and custom-requested items — vetted, quality-checked, and shipped from India to your destination.',
    fullFeatures: [
      'Industrial & Raw Materials',
      'Packaging Materials',
      'Custom & Bulk Sourcing',
      'Quality Inspection Before Shipment',
      'Flexible Order Quantities',
      'Nationwide Supplier Network',
    ],
    color: 'blue',
  },
  {
    icon: Building2,
    title: 'Construction Materials',
    description: 'Premium quality granite, marble, quartz stone, tiles, and bulk construction materials for international projects.',
    features: [ 'Tiles & Ceramics', 'Bulk Materials'],
    fullDescription: 'From natural stone quarries to tile manufacturers across Tamil Nadu, we source premium construction materials for international builds — with container-safe packing as standard.',
    fullFeatures: [
      'Granite, Marble & Quartz Stone',
      'Tiles & Ceramics',
      'Bulk Construction Materials',
      'Custom Cutting & Finishing',
      'Palletized & Container-Safe Packing',
    ],
    color: 'red',
  },
  {
    icon: ShoppingCart,
    title: 'General Cargo',
    description: 'Comprehensive sourcing of hotel supplies, housekeeping equipment, F&B operating supplies, and hospitality essentials.',
    features: ['Hotel Supplies', 'Housekeeping', 'F&B Equipment'],
    fullDescription: 'Our general cargo service covers everything that doesn\'t fit a single category — mixed consolidated shipments of hospitality, retail, and consumer goods, sourced and packed together for efficient shipping.',
    fullFeatures: [
      'Hotel & Hospitality Supplies',
      'Housekeeping Equipment',
      'F&B Operating Supplies',
      'Retail & Consumer Goods',
      'Mixed-Cargo Consolidation',
      'Landscaping Equipment’s Supplies',
    ],
    color: 'blue',
  },
  {
    icon: Truck,
    title: 'End-to-End Logistics',
    description: 'Complete supply chain management from procurement in India to final delivery at your destination — hassle-free.',
    features: ['Procurement', 'Packaging', 'Last-Mile Delivery'],
    fullDescription: 'From the moment you place an order to the moment it arrives at your door, we manage every step — supplier coordination, quality checks, freight booking, customs, and last-mile delivery — through a single point of contact.',
    fullFeatures: [
      'Supplier Procurement in India',
      'Quality Checks & Packaging',
      'Freight Booking (Sea/Air)',
      'Customs & Compliance Handling',
      'Last-Mile Delivery',
      'Single Point of Contact',
    ],
    color: 'red',
  },
]

function ServiceModal({ service, onClose }) {
  if (!service) return null

  const isRed = service.color === 'red'
  const message = encodeURIComponent(
    `Hi, I'm interested in your ${service.title} service. Could you share more details and a quote?`
  )

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-navy-900/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-50 hover:bg-navy-100 flex items-center justify-center text-navy-500 hover:text-navy-900 transition-colors z-10"
            >
              <X size={16} />
            </button>

            <div className="p-8">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                isRed ? 'bg-accent-red/10' : 'bg-accent-blue/10'
              }`}>
                <service.icon size={26} className={isRed ? 'text-accent-red' : 'text-accent-blue'} />
              </div>

              <h3 className="heading-md text-navy-900 mb-3">{service.title}</h3>
              <p className="body-md text-navy-600 mb-6">{service.fullDescription}</p>

              <p className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-3">
                What's Included
              </p>
              <ul className="space-y-2.5 mb-8">
                {service.fullFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-navy-700">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${isRed ? 'text-accent-red' : 'text-accent-blue'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <FaWhatsapp size={18} />
                Get a Quote via WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeService, setActiveService] = useState(null)

  return (
    <section id="services" className="relative py-10 sm:py-20 overflow-hidden bg-section-light-alt">
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
            What We Do
          </span>
          <h2 className="heading-lg text-navy-900 mb-6">
            Comprehensive Trade{' '}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="body-lg text-navy-700">
            From sourcing to delivery, we handle every aspect of your international trade 
            requirements with precision and professionalism.
          </p>
        </motion.div>

        {/* Featured Card — Resort & Hospitality Supplies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card glass-card-hover rounded-2xl p-8 sm:p-10 mb-6 relative overflow-hidden group cursor-pointer"
          onClick={() => setActiveService(featuredService)}
        >
          <div className="absolute top-0 right-0 w-56 h-56 bg-accent-blue/10 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-125 transition-transform duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
            {/* Icon + Title */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-5 group-hover:bg-accent-blue/20 transition-colors">
                <featuredService.icon size={30} className="text-accent-blue" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-navy-900 mb-2 group-hover:text-accent-blue transition-colors">
                {featuredService.title}
              </h3>
              <div className="flex items-center gap-2 text-sm font-medium text-accent-blue">
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Description + Features */}
            <div className="md:w-2/3">
              <p className="body-md text-navy-600 mb-5">
                {featuredService.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {featuredService.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-navy-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActiveService(service)}
              className="glass-card glass-card-hover rounded-2xl p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                service.color === 'blue' 
                  ? 'bg-accent-blue/10 group-hover:bg-accent-blue/20' 
                  : 'bg-accent-red/10 group-hover:bg-accent-red/20'
              }`}>
                <service.icon size={26} className={
                  service.color === 'blue' ? 'text-accent-blue' : 'text-accent-red'
                } />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-navy-900 mb-3 group-hover:text-accent-blue transition-colors">
                {service.title}
              </h3>
              <p className="body-md text-navy-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-navy-700">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      service.color === 'blue' ? 'bg-accent-blue' : 'bg-accent-red'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                service.color === 'blue' 
                  ? 'text-accent-blue group-hover:text-blue-700' 
                  : 'text-accent-red group-hover:text-red-700'
              }`}>
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </section>
  )
}