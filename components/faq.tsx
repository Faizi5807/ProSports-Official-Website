'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is your minimum order quantity?',
    answer: 'We offer flexible MOQ starting from 500 units for standard products. Custom orders may have a 1000-unit minimum. We can discuss specific requirements based on your needs.'
  },
  {
    question: 'What are the lead times for production?',
    answer: 'Standard orders typically require 4-6 weeks production time. Rush options are available for an additional fee. Exact timelines depend on product specifications and current capacity.'
  },
  {
    question: 'Do you offer custom branding and designs?',
    answer: 'Yes, we offer comprehensive customization including embossing, screen printing, and custom panel designs. Most custom orders require 1000+ units and have a 2-week additional lead time.'
  },
  {
    question: 'What certifications and standards do you comply with?',
    answer: 'We hold ISO 9001:2015 certification and FIFA approval for professional footballs. All products undergo rigorous quality testing and comply with international performance standards.'
  },
  {
    question: 'What are your shipping options and costs?',
    answer: 'We offer multiple shipping options including DHL, FedEx, and ocean freight. Shipping costs vary by destination and order size. Full quotes are provided after order specifications are confirmed.'
  },
  {
    question: 'Do you provide wholesale or distributor pricing?',
    answer: 'Yes, we offer competitive wholesale pricing based on order volume. Registered distributors receive additional benefits including extended payment terms and dedicated account support.'
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Common questions about our products and services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 bg-card hover:bg-muted/50 transition-colors flex items-center justify-between text-left"
              >
                <h3 className="font-semibold text-lg text-foreground">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
