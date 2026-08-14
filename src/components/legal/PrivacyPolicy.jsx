import React from 'react'
import { ShieldCheck } from 'lucide-react'
import LegalPageLayout from './LegalPageLayout'

const CONTACT = {
  email: 'sales@ayaanexports.co.in',
  phone: '+91 8883164760',
  address:
    'Door No: 3-111E, Kallam Pottai, Maruthan Code Post, K.K. District, Tamil Nadu, India — 629163',
}

const sections = [
  {
    id: 'information-we-collect',
    heading: 'Information We Collect',
    paragraphs: ['Depending on how you use our Website, we may collect:'],
    list: [
      'Name',
      'Company/Business name',
      'Email address',
      'Phone number',
      'Billing or shipping address',
      'Country and business details',
      'Product enquiry and quotation information',
      'Order and transaction information',
      'Information that you voluntarily submit through email',
      'Technical information such as IP address, browser type and device information, where applicable',
    ],
  },
  {
    id: 'how-we-use',
    heading: 'How We Use Your Information',
    paragraphs: ['We may use collected information to:'],
    list: [
      'Respond to enquiries.',
      'Provide quotations.',
      'Process and manage orders.',
      'Communicate with customers and suppliers.',
      'Arrange shipping and logistics.',
      'Provide customer support.',
      'Maintain business and transaction records.',
      'Improve our Website and services.',
      'Prevent fraud, misuse and security threats.',
      'Comply with applicable legal and regulatory requirements.',
    ],
  },
  {
    id: 'sharing-of-information',
    heading: 'Sharing of Information',
    paragraphs: [
      'We may share relevant information with trusted service providers where necessary to operate our business, including:',
    ],
    list: [
      'Logistics and shipping providers.',
      'Customs and clearing agents.',
      'Payment service providers.',
      'IT, hosting and technical service providers.',
      'Professional advisers.',
      'Government or regulatory authorities where legally required.',
    ],
  },
  {
    id: 'international-transfers',
    heading: 'International Transfers',
    paragraphs: [
      'As an Import & Export business, certain transactions may involve customers, suppliers, logistics providers or service providers located in other countries. Where personal information is transferred internationally, we will take reasonable steps to handle such information in accordance with applicable privacy and data-protection requirements.',
    ],
  },
  {
    id: 'data-security',
    heading: 'Data Security',
    paragraphs: [
      'We take reasonable technical and organisational measures to protect personal information against unauthorised access, misuse, alteration, disclosure or destruction. However, no electronic transmission or storage system can be guaranteed to be completely secure.',
    ],
  },
  {
    id: 'data-retention',
    heading: 'Data Retention',
    paragraphs: [
      'We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including business, contractual, accounting, tax, legal and regulatory requirements. When information is no longer required, we may securely delete or anonymise it, subject to applicable legal requirements.',
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies',
    paragraphs: [
      'Our Website may use cookies and similar technologies to improve Website functionality, security, performance and user experience. Where applicable, cookies may also be used for analytics. You may be able to control cookies through your browser settings — disabling certain cookies may affect some Website functionality.',
    ],
  },
  {
    id: 'third-party-services',
    heading: 'Third-Party Services',
    paragraphs: [
      'Our Website may use third-party services such as hosting, analytics, payment or communication providers. These providers may process information according to their own privacy policies and applicable contractual or legal requirements.',
    ],
  },
  {
    id: 'childrens-privacy',
    heading: "Children's Privacy",
    paragraphs: [
      'Our Website and services are intended primarily for businesses and general users and are not specifically directed toward children. We do not knowingly collect personal information from children for purposes that are prohibited by applicable law.',
    ],
  },
  {
    id: 'changes-to-policy',
    heading: 'Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy periodically. Any changes will be published on this page with an updated "Last Updated" date.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      icon={ShieldCheck}
      eyebrow="Legal · Ayaan Exports"
      title="Privacy Policy"
      lastUpdated="13 August 2026"
      intro="At AYAAN EXPORTS, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose and protect information when you visit or use www.ayaanexports.co.in."
      sections={sections}
      contact={{ ...CONTACT, attn: 'Mr. Anbu Raj (Privacy Contact)' }}
    />
  )
}