import React from 'react'
import { Scale } from 'lucide-react'
import LegalPageLayout from './LegalPageLayout'

const CONTACT = {
  email: 'sales@ayaanexports.co.in',
  phone: '+91 8883164760',
}

const sections = [
  {
    id: 'company-information',
    heading: 'Company Information',
    list: [
      'Company Name: AYAAN EXPORTS',
      `Registered/Business Address: ${CONTACT.address}`,
      `Email: ${CONTACT.email}`,
      `Phone: ${CONTACT.phone}`,
      'Website: www.ayaanexports.co.in',
    ],
    
  },
  {
    id: 'use-of-website',
    heading: 'Use of Website',
    paragraphs: ['You agree to use this Website only for lawful purposes. You must not:'],
    list: [
      'Provide false or misleading information.',
      'Attempt to gain unauthorised access to the Website or its systems.',
      'Copy, reproduce or distribute Website content without permission.',
      'Use the Website for fraudulent, unlawful or harmful activities.',
      'Interfere with the security or proper functioning of the Website.',
    ],
  },
  {
    id: 'enquiries-and-quotations',
    heading: 'Enquiries and Quotations',
    list: [
      'Submitting an enquiry through the Website does not automatically constitute an order or a binding contract.',
      'Prices, quantities, specifications, delivery terms, payment terms and other conditions will be confirmed through an official quotation, purchase order or sales agreement.',
      'A quotation may be subject to availability and may have a specified validity period.',
    ],
  },
  {
    id: 'orders-and-acceptance',
    heading: 'Orders and Acceptance',
    list: [
      'An order will be considered accepted only after written confirmation from the Company or after the applicable sales agreement is executed.',
      'The Company reserves the right to refuse or cancel an order where there is a legitimate business, legal, regulatory or availability-related reason.',
    ],
  },
  {
    id: 'pricing-and-duties',
    heading: 'Pricing and Duties',
    list: [
      'Unless otherwise stated, prices quoted by the Company may not include applicable freight charges, insurance or other government charges.',
      'The applicable charges and responsibility for such costs will be specified in the relevant quotation or sales agreement.',
    ],
  },
  {
    id: 'payment-terms',
    heading: 'Payment Terms',
    list: [
      'Payment terms will be specified in the relevant quotation, invoice or sales agreement.',
      'The Company may require advance payment, partial payment or full payment depending on the nature of the transaction.',
    ],
  },
  {
    id: 'shipping-and-delivery',
    heading: 'Shipping and Delivery',
    list: [
      'Delivery terms, shipping arrangements, estimated delivery dates and responsibility for transportation costs will be specified in the relevant quotation or sales agreement.',
      'For international transactions, applicable Incoterms may be specified in the transaction documents.',
      'Delivery dates are estimates unless expressly guaranteed in writing.',
    ],
  },
  {
    id: 'import-export-customs',
    heading: 'Import, Export and Customs Compliance',
    list: [
      'International transactions may be subject to applicable import/export laws, customs regulations, sanctions, licensing requirements, documentation requirements and restrictions of the relevant countries.',
      'The buyer/importer is responsible for complying with the laws applicable in the destination country unless otherwise agreed in writing.',
    ],
  },
  {
    id: 'inspection-and-claims',
    heading: 'Inspection and Claims',
    list: [
      'Customers are expected to inspect the products upon receipt.',
      'Any shortage, damage, defect or discrepancy should be reported to the Company within 3 days of receipt, together with relevant supporting documents and photographs where applicable.',
      'Specific claim procedures may be provided in the applicable sales agreement.',
    ],
  },
  {
    id: 'cancellation-and-refunds',
    heading: 'Cancellation and Refunds',
    list: [
      "Cancellation and refund conditions will be governed by the Company's applicable Cancellation and Refund Policy and/or the relevant sales agreement.",
      'Certain products or customised orders may not be eligible for cancellation or refund.',
    ],
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    list: [
      'All Website content, including text, photographs, graphics, logos, trademarks, product descriptions, designs and other materials, is owned by or licensed to the Company unless otherwise stated.',
      'No part of the Website may be reproduced, copied, modified or distributed without prior written permission.',
    ],
  },
  {
    id: 'third-party-websites',
    heading: 'Third-Party Websites',
    paragraphs: [
      'The Website may contain links to third-party websites or services. The Company does not control and is not responsible for the content, availability, security or privacy practices of third-party websites.',
    ],
  },
  {
    id: 'force-majeure',
    heading: 'Force Majeure',
    paragraphs: [
      'The Company shall not be liable for delays or failure to perform obligations caused by circumstances beyond its reasonable control, including natural disasters, war, strikes, government restrictions, pandemics, transportation disruptions, customs delays, or major technical failures.',
    ],
  },
  {
    id: 'changes-to-terms',
    heading: 'Changes to These Terms',
    paragraphs: [
      'We reserve the right to modify these Terms & Conditions from time to time. Updated terms will be published on this Website with the revised "Last Updated" date.',
    ],
  },
  {
    id: 'governing-law',
    heading: 'Governing Law',
    list: [
      'These Terms & Conditions shall be governed by the laws of India, unless otherwise agreed in a written contract.',
      'Any disputes shall be subject to the jurisdiction of the courts specified in the applicable agreement or, where not specified, the competent courts at Kuzhithurai Jurisdiction, Kanyakumari District, Tamil Nadu, India.',
    ],
  },
]

export default function TermsAndConditions() {
  return (
    <LegalPageLayout
      icon={Scale}
      eyebrow="Legal · Ayaan Exports"
      title="Terms & Conditions"
      lastUpdated="13 August 2026"
      intro='Welcome to AYAAN EXPORTS INDIAN IMPORT & EXPORTER. These Terms & Conditions govern your access to and use of www.ayaanexports.co.in and the products and services offered through the Website.
      By accessing or using this Website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these Terms, please do not use the Website.'
      sections={sections}
      contact={CONTACT}
    />
  )
}