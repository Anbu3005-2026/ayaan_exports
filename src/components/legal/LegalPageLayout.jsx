import React from 'react'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

// Auto-links any phone number, email address, or website URL found inside
// a plain string of body text. Applied to every intro/paragraph/list item
// below, so contact details anywhere in the document become clickable
// without needing to hand-wrap each occurrence in the page content files.
function linkifyText(text) {
  if (typeof text !== 'string') return text

  // Email domain uses (?:\.[\w-]+)+ (one or more dot-segments) so multi-level
  // domains like ayaanexports.co.in match in full, not just up to the first dot.
  const pattern = /(https?:\/\/[^\s,)]+)|(www\.[^\s,)]+)|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)|(\+91[\s-]?\d{3,5}[\s-]?\d{5,6})/g
  const nodes = []
  let lastIndex = 0
  let match
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    let value = match[0]
    // Strip trailing sentence punctuation the regex may have swept up
    // (e.g. a URL at the end of a sentence followed by a period) so it
    // isn't included inside the clickable link or the mailto/tel target.
    let trailing = ''
    const trailingMatch = value.match(/[.,;:!?]+$/)
    if (trailingMatch) {
      trailing = trailingMatch[0]
      value = value.slice(0, -trailing.length)
    }
    let href
    let external = false

    if (match[1]) {
      href = value
      external = true
    } else if (match[2]) {
      href = `https://${value}`
      external = true
    } else if (match[3]) {
      href = `mailto:${value}`
    } else if (match[4]) {
      href = `tel:${value.replace(/[^+\d]/g, '')}`
    }

    nodes.push(
      <a
        key={key++}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="text-accent-red underline decoration-accent-red/30 underline-offset-2 hover:decoration-accent-red transition-colors"
      >
        {value}
      </a>
    )
    if (trailing) nodes.push(trailing)

    lastIndex = pattern.lastIndex
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}

/**
 * LegalPageLayout
 * Shared shell for all Ayaan Exports legal documents (Terms & Conditions,
 * Privacy Policy, Shipping & Delivery Policy, Cancellation & Refund Policy).
 *
 * Visual language is pulled directly from Footer.jsx: navy-900/600/500/100
 * text scale, accent-red brand mark, section-padding, font-display headings,
 * rounded-lg bordered cards on a bg-section-light-alt surface.
 *
 * Props
 * ---------------------------------------------------------------------
 * icon        : lucide-react icon component shown in the header badge
 * eyebrow     : small label above the title, e.g. "Legal / Policy 01"
 * title       : page title, e.g. "Terms & Conditions"
 * lastUpdated : string, e.g. "13 August 2026"
 * intro       : one short paragraph introducing the document
 * sections    : [{ id, heading, paragraphs?: string[], list?: string[] }]
 * contact     : { email, phone, address } — rendered in the closing card
 */
export default function LegalPageLayout({
  icon: Icon,
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections = [],
  contact,
}) {
  return (
    <div className="min-h-screen bg-section-light text-navy-900">
      {/* Header */}
      <header className="border-b border-navy-100 bg-section-light-alt">
        <div className="section-padding max-w-[1440px] mx-auto py-20 sm:py-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-red mb-5">
            <span>{eyebrow}</span>
          </div>
          <h1 className="font-display font-bold text-navy-900 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-sm text-navy-500 mb-6">Last updated: {lastUpdated}</p>
          )}
          {intro && (
            <p className="body-md text-navy-600 max-w-2xl">{linkifyText(intro)}</p>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="section-padding max-w-[1440px] mx-auto py-16 sm:py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16">
          {/* On-page nav — desktop only */}
          <nav className="hidden lg:block">
            {/* top-24 pins this to the viewport as the page scrolls. Its containing
               block (this nav) stretches to match the content column's height
               (default grid stretch), so it stays put for the full scroll —
               no separate internal scrollbar needed. */}
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-900 mb-4">
                On this page
              </p>
              <ul className="space-y-1 border-l border-navy-100">
                {sections.map((s, i) => (
                  <li key={s.id || i}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-start gap-1.5 pl-4 -ml-px py-1.5 text-sm text-navy-500 border-l border-transparent hover:border-accent-red hover:text-navy-900 transition-colors"
                    >
                      <span className="text-navy-400 group-hover:text-accent-red transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{s.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Sections */}
          <div className="min-w-0">
            {sections.map((s, i) => (
              <section
                key={s.id || i}
                id={s.id}
                className="scroll-mt-24 pb-10 mb-10 border-b border-navy-100 last:border-b-0 last:mb-0 last:pb-0"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display text-sm font-bold text-accent-red">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display font-bold text-navy-900 text-xl sm:text-2xl">
                    {s.heading}
                  </h2>
                </div>

                {s.paragraphs?.map((p, pi) => (
                  <p key={pi} className="body-md text-navy-600 leading-relaxed mb-3 last:mb-0">
                    {linkifyText(p)}
                  </p>
                ))}

                {s.list && s.list.length > 0 && (
                  <ul className="mt-3 space-y-2.5">
                    {s.list.map((item, li) => (
                      <li key={li} className="flex items-start gap-2.5 text-navy-600 body-md">
                        <ChevronRight size={14} className="mt-1 flex-shrink-0 text-accent-red" />
                        <span>{linkifyText(item)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Contact card */}
            {contact && (
              <div className="mt-14 rounded-xl border border-navy-100 bg-section-light-alt p-8">
                <h3 className="font-display font-bold text-navy-900 text-lg mb-1">
                  Questions about this document?
                </h3>
                {contact.attn && (
                  <p className="text-sm text-navy-500 mb-4">Attn: {contact.attn}</p>
                )}
                <div className={`grid sm:grid-cols-2 gap-4 ${contact.attn ? 'mt-4' : 'mt-5'}`}>
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 text-sm text-navy-600 hover:text-navy-900 transition-colors"
                    >
                      <span className="w-9 h-9 rounded-lg bg-white border border-navy-100 flex items-center justify-center text-navy-500 flex-shrink-0">
                        <Mail size={15} />
                      </span>
                      {contact.email}
                    </a>
                  )}
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                      className="flex items-center gap-3 text-sm text-navy-600 hover:text-navy-900 transition-colors"
                    >
                      <span className="w-9 h-9 rounded-lg bg-white border border-navy-100 flex items-center justify-center text-navy-500 flex-shrink-0">
                        <Phone size={15} />
                      </span>
                      {contact.phone}
                    </a>
                  )}
                  {contact.address && (
                    <div className="flex items-start gap-3 text-sm text-navy-600 sm:col-span-2">
                      <span className="w-9 h-9 rounded-lg bg-white border border-navy-100 flex items-center justify-center text-navy-500 flex-shrink-0">
                        <MapPin size={15} />
                      </span>
                      <span>{linkifyText(contact.address)}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}