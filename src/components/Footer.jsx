import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { FaWhatsapp, FaViber } from "react-icons/fa";

const EMAIL = 'sales@ayaanexports.co.in'
const PHONE = '+918883164760'
const WHATSAPP_NUMBER = '918883164760' // no "+", no spaces — wa.me format
const VIBER_NUMBER = '+918883164760'

const footerLinks = {
  services: [
    { name: 'Sea Freight', href: '#services' },
    { name: 'Air Cargo', href: '#services' },
    { name: 'Resort & Hospitality Supplies', href: '#services' },
    { name: 'Electronic Materials', href: '#services'},
    { name: 'Plumbing Materials', href: '#services' },
    { name: 'Engineering Supplies', href: '#services' },
    { name: 'General Cargo', href: '#services' },
    { name: 'Construction Materials', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Global Network', href: '#global' },
    { name: 'Contact', href: '#contact' },
  ],
  // GST line stays a plain, non-interactive label (no href, not a page).
  // The other four now point at real routes — see App.jsx.
  legal: [
    { name: 'GST: 33AQAPR9048P1Z7', href: null },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Shipping & Delivery Policy', href: '/shipping-policy' },
    { name: 'Cancellation & Refund Policy', href: '/refund-policy' },
  ],
}

const socialLinks = [
  { icon: Mail, href: `mailto:${EMAIL}`, label: 'Email', external: false },
  { icon: FaWhatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp', external: true },
  { icon: FaViber, href: `viber://chat?number=${encodeURIComponent(VIBER_NUMBER)}`, label: 'Viber', external: false },
  { icon: Phone, href: `tel:${PHONE}`, label: 'Call', external: false },
]

// Same polling scroll helper as Navbar.jsx — keeps behavior identical whether
// someone clicks an anchor link in the header or the footer.
function scrollToIdWhenReady(id, attemptsLeft = 30) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }
  if (attemptsLeft > 0) {
    requestAnimationFrame(() => scrollToIdWhenReady(id, attemptsLeft - 1))
  }
}

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    if (location.pathname !== '/') navigate('/')
    scrollToIdWhenReady(id)
  }

  return (
    <footer className="relative bg-navy-950 border-t border-white/10">
      <div className="section-padding max-w-[1440px] mx-auto py-16 sm:py-9">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/ayaan_exports_logo.jpeg"
                  alt="Ayaan Exports"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div>
                <span className="text-lg font-display font-bold text-white">
                  AYAAN<span className="text-accent-red"> EXPORTS</span>
                </span>
              </div>
            </a>
            <p className="body-md text-white/60 mb-6 max-w-sm">
              Your trusted import-export partner from India — resort and hospitality supplies,
              engineering and plumbing materials, construction supplies, and general cargo,
              delivered to 10+ countries worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  title={item.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  {link.href ? (
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <span className="text-sm text-white/60">{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Ayaan Exports. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <MapPin size={12} />
            <span>Door No: 3-111E, Kallam Pottai, Maruthan Code Post, Vilavan Code, K.K. District, Tamil Nadu, India — 629163</span>
          </div>
        </div>
      </div>
    </footer>
  )
}