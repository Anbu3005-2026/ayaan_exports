import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Phone, Mail, ExternalLink, Copy, Check, Send } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Import & Export', href: '#import-export' },
  { name: 'Global Reach', href: '#global' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

const EMAIL = 'sales@ayaanexports.co.in'
const PHONE = '+918883164760'

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

function MailMenu({ light }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`transition-colors ${light ? 'text-white/80 hover:text-white' : 'text-navy-500 hover:text-navy-900'}`}
        title={`Email ${EMAIL}`}
      >
        <Mail size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-3 w-56 bg-white rounded-xl border border-navy-100 shadow-xl shadow-navy-900/10 overflow-hidden z-50"
          >
            <div className="px-4 py-3 border-b border-navy-100">
              <p className="text-xs text-navy-500">Send email to</p>
              <p className="text-sm font-medium text-navy-900 truncate">{EMAIL}</p>
            </div>
            <div className="p-1.5">
              {mailOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => { opt.action(); setOpen(false) }}
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
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-navy-100 shadow-md shadow-navy-900/5' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-lg ring-1 ring-white/10">
                <img 
                  src="/ayaan_exports_logo.jpeg" 
                  alt="Ayaan Exports" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-display font-bold tracking-wide transition-colors duration-500 ${
                  scrolled ? 'text-navy-900' : 'text-white'
                }`}>
                  AYAAN EXPORTS
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  scrolled ? 'text-navy-700' : 'text-white/75'
                }`}>Indian Import & Exporter</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 relative group ${
                    scrolled ? 'text-navy-600 hover:text-navy-900' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-blue transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <MailMenu light={!scrolled} />
              <a href="https://wa.me/918883164760" target="_blank" className={`transition-colors ${
                scrolled ? 'text-navy-500 hover:text-navy-900' : 'text-white/80 hover:text-white'
              }`}>
                <FaWhatsapp size={18} className="-translate-y-0.5" />
              </a>
              <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
                Get a Quote
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-navy-900' : 'text-white'}`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-24 overflow-y-auto"
          >
            <div className="section-padding flex flex-col gap-6 pb-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-display text-navy-700 hover:text-navy-900 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="mt-4 pt-6 border-t border-navy-100">
                <p className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-3">Email us via</p>
                <div className="flex flex-col gap-2 mb-6">
                  {mailOptions.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={opt.action}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-navy-50 border border-navy-100 text-sm text-navy-700 hover:bg-navy-100 transition-colors text-left"
                    >
                      <opt.icon size={16} className="text-accent-blue" />
                      {opt.label}
                    </button>
                  ))}
                </div>
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-navy-600">
                  <Phone size={16} /> {PHONE}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
