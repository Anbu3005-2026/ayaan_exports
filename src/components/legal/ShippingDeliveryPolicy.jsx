import React from 'react'
import { Truck } from 'lucide-react'
import LegalPageLayout from './LegalPageLayout'

const CONTACT = {
  email: 'sales@ayaanexports.co.in',
  phone: '+91 8883164760',
}

const sections = [
  {
    id: 'order-confirmation',
    heading: 'Order Confirmation',
    list: [
      'Shipping arrangements will normally be confirmed after the order, quotation and applicable payment terms have been agreed.',
      'The shipping method and delivery terms may vary depending on the product, destination and transaction requirements.',
    ],
  },
  {
    id: 'international-shipments',
    heading: 'International Shipments',
    list: [
      'For international shipments, delivery arrangements may involve freight forwarders, shipping lines, airlines, customs brokers and other logistics providers.',
      'The applicable Incoterm, shipping method and responsibilities will be specified in the quotation or sales agreement where applicable.',
    ],
  },
  {
    id: 'customs-and-import',
    heading: 'Customs and Import Requirements',
    list: [
      'International shipments may be subject to customs clearance, import duties, taxes, permits, inspections and other requirements in the destination country.',
      'Unless otherwise agreed in writing, the importer/buyer is responsible for complying with applicable destination-country import requirements and paying charges that are assigned to the buyer under the agreed transaction terms.',
    ],
  },
  {
    id: 'delivery-times',
    heading: 'Delivery Times',
    list: [
      'Delivery times provided by the Company are estimates unless expressly guaranteed in writing.',
      'Delays may occur due to customs clearance, transportation disruption, weather, government restrictions, documentation issues or other circumstances beyond our reasonable control.',
    ],
  },
  {
    id: 'shipping-documents',
    heading: 'Shipping Documents',
    paragraphs: [
      'Depending on the transaction, documents may include commercial invoices, packing lists, shipping documents, certificates or other applicable documentation. The documents provided will depend on the product, destination and agreed transaction terms.',
    ],
  },
  {
    id: 'damaged-or-missing-goods',
    heading: 'Damaged or Missing Goods',
    list: [
      'Customers should inspect shipments promptly upon delivery.',
      'Any visible damage, shortage or discrepancy should be reported to the Company and the relevant carrier as soon as reasonably possible.',
      'Supporting photographs and delivery documentation may be requested.',
    ],
  },
]

export default function ShippingDeliveryPolicy() {
  return (
    <LegalPageLayout
      icon={Truck}
      eyebrow="Legal · Ayaan Exports"
      title="Shipping & Delivery Policy"
      lastUpdated="13 August 2026"
      intro="This Shipping & Delivery Policy applies to products supplied by AYAAN EXPORTS through www.ayaanexports.co.in."
      sections={sections}
      contact={CONTACT}
    />
  )
}