import React from 'react'
import { RotateCcw } from 'lucide-react'
import LegalPageLayout from './LegalPageLayout'

const CONTACT = {
  email: 'sales@ayaanexports.co.in',
  phone: '+91 8883164760',
}

const sections = [
  {
    id: 'order-cancellation',
    heading: 'Order Cancellation',
    paragraphs: [
      'Cancellation requests must be submitted in writing to sales@ayaanexports.co.in.',
      'Cancellation may be accepted only before the order has entered processing, production, packing or shipment, depending on the nature of the product and transaction.',
    ],
  },
  {
    id: 'customised-orders',
    heading: 'Customised or Special Orders',
    list: [
      'Customised, specially manufactured, specially sourced or non-standard products may not be eligible for cancellation or refund once processing has commenced.',
      'The applicable terms will be specified in the quotation or sales agreement.',
    ],
  },
  {
    id: 'refund-eligibility',
    heading: 'Refund Eligibility',
    list: [
      'Where a refund is approved, the refund amount and applicable deductions will depend on the reason for cancellation, payment terms, transaction status and applicable agreement.',
      'Any applicable bank, payment processing, shipping or other non-refundable charges may be deducted where permitted.',
    ],
  },
  {
    id: 'damaged-or-defective',
    heading: 'Damaged or Defective Products',
    paragraphs: [
      'If a product is received damaged, defective or materially different from the agreed specification, the customer should notify us within 3 days of delivery. We may request photographs, inspection reports, shipping documents or other supporting information before determining the appropriate resolution.',
    ],
  },
  {
    id: 'refund-processing',
    heading: 'Refund Processing',
    paragraphs: [
      'Approved refunds will normally be processed through the original payment method or Credit Note where possible.',
    ],
  },
  {
    id: 'international-transactions',
    heading: 'International Transactions',
    paragraphs: [
      'For international transactions, refunds may be affected by banking procedures, currency conversion, international transfer charges and applicable regulations. The applicable commercial agreement will prevail where it contains specific refund provisions.',
    ],
  },
  {
    id: 'non-refundable-charges',
    heading: 'Non-Refundable Charges',
    paragraphs: [
      'Certain charges may be non-refundable where permitted by the applicable agreement, including completed services, customised products, shipping charges or third-party charges.',
    ],
  },
]

export default function CancellationRefundPolicy() {
  return (
    <LegalPageLayout
      icon={RotateCcw}
      eyebrow="Legal · Ayaan Exports"
      title="Cancellation & Refund Policy"
      lastUpdated="13 August 2026"
      intro="This Cancellation & Refund Policy applies to purchases and orders made with AYAAN EXPORTS."
      sections={sections}
      contact={CONTACT}
    />
  )
}