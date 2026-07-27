import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowRight, Mail, Phone, MessageCircle, MessageSquare, 
  ExternalLink, Copy, Check, Send 
} from 'lucide-react'
import { FaWhatsapp, FaViber } from "react-icons/fa";

const EMAIL = 'sales@ayaanexports.co.in'
const PHONE = '+918883164760'
const WHATSAPP_NUMBER = '918883164760' // no "+", no spaces — wa.me format
const VIBER_NUMBER = '+918883164760'   // Viber deep link expects "+" and country code

const mailOptions = [
  {
    label: 'Gmail',
    icon: Send,
    action: () => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`, '_blank'),
  },
  {
    label: 'Outlook',
    icon: ExternalLink,
    action: () => window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}`, '_blank'),
  },
  {
    label: 'Default Mail App',
    icon: Mail,
    action: () => { window.location.href = `mailto:${EMAIL}` },
  },
]

function MailPopover({ open, onClose, anchorClassName = '' }) {
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose()
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, onClose])

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className={`absolute bottom-full mb-3 w-64 bg-white rounded-xl border border-navy-100 shadow-xl shadow-navy-900/10 overflow-hidden z-50 text-left ${anchorClassName}`}
        >
          <div className="px-4 py-3 border-b border-navy-100">
            <p className="text-xs text-navy-500">Send email to</p>
            <p className="text-sm font-medium text-navy-900 truncate">{EMAIL}</p>
          </div>
          <div className="p-1.5">
            {mailOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => { opt.action(); onClose() }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
              >
                <opt.icon size={16} className="text-accent-blue" />
                {opt.label}
              </button>
            ))}
            <button
              onClick={handleCopy}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
            >
              {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-accent-blue" />}
              {copied ? 'Copied!' : 'Copy Email Address'}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [mailOpenBtn, setMailOpenBtn] = useState(false)
  const [mailOpenCard, setMailOpenCard] = useState(false)

  return (
    <section id="contact" className="relative py-10 sm:py-20 overflow-hidden bg-section-light">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-padding max-w-[1440px] mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">
              Ready to Ship?
            </span>
            <h2 className="heading-lg text-navy-900 mb-6 max-w-2xl mx-auto">
              Let Us Handle Your{' '}
              <span className="text-gradient">Global Trade</span>{' '}
              Needs
            </h2>
            <p className="body-lg text-navy-700 max-w-xl mx-auto mb-10">
              Whether you need resort and hospitality supplies, electronic and plumbing materials, engineering 
              supplies, construction materials, or general cargo — we are ready to source, 
              negotiate, and deliver. Get in touch today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="relative">
                <button
                  onClick={() => setMailOpenBtn(!mailOpenBtn)}
                  className="btn-primary"
                >
                  <Mail size={18} />
                  Send Inquiry
                  <ArrowRight size={18} />
                </button>
                <MailPopover
                  open={mailOpenBtn}
                  onClose={() => setMailOpenBtn(false)}
                  anchorClassName="left-1/2 -translate-x-1/2"
                />
              </div>

              <a 
                href={`tel:${PHONE}`} 
                className="btn-outline"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="relative">
                <button
                  onClick={() => setMailOpenCard(!mailOpenCard)}
                  className="w-full flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-navy-100 hover:border-accent-blue/30 hover:shadow-sm transition-all"
                >
                  <Mail size={20} className="text-accent-blue mb-1" />
                  <span className="text-xs text-navy-500 uppercase tracking-wider">Email</span>
                  <span className="text-sm text-navy-900 font-medium truncate max-w-full">{EMAIL}</span>
                </button>
                <MailPopover
                  open={mailOpenCard}
                  onClose={() => setMailOpenCard(false)}
                  anchorClassName="left-1/2 -translate-x-1/2"
                />
              </div>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-navy-100 hover:border-accent-blue/30 hover:shadow-sm transition-all"
              >
                <FaWhatsapp size={20} className="text-accent-blue mb-1" />
                <span className="text-xs text-navy-500 uppercase tracking-wider">WhatsApp</span>
                <span className="text-sm text-navy-900 font-medium">+91 88831 64760</span>
              </motion.a>

              <motion.a
                href={`viber://chat?number=${encodeURIComponent(VIBER_NUMBER)}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-navy-100 hover:border-accent-blue/30 hover:shadow-sm transition-all"
              >
                <FaViber size={20} className="text-accent-blue mb-1" />
                <span className="text-xs text-navy-500 uppercase tracking-wider">Viber</span>
                <span className="text-sm text-navy-900 font-medium">+91 88831 64760</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}