'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const standards = [
  'ISO 9001:2015 Certification',
  'FIFA Approval',
  'International Quality Standards',
  'Pressure & Durability Testing',
  'Material Compliance Verification',
  'Performance Analysis',
]

export function Quality() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-96"
          >
            <Image
              src="/images/quality-control-testing.png"
              alt="Quality control and testing facility"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Uncompromising Quality Assurance
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every football undergoes rigorous testing to ensure durability, performance, and compliance with international standards. Our commitment to excellence has made us the trusted partner for professional teams and retailers worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {standards.map((standard, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{standard}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
