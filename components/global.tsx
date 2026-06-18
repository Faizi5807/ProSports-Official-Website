'use client'

import { motion } from 'framer-motion'

const regions = [
  { name: 'North America', markets: 'USA, Canada, Mexico' },
  { name: 'Europe', markets: '28+ European Countries' },
  { name: 'Asia Pacific', markets: 'Australia, Japan, China, India' },
  { name: 'Middle East', markets: 'UAE, Saudi Arabia, Qatar' },
  { name: 'South America', markets: 'Brazil, Argentina, Colombia' },
  { name: 'Africa', markets: '15+ African Nations' },
]

export function Global() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Global Export Network</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted supply partner serving 50+ countries with reliable logistics and local support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{region.name}</h3>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-muted-foreground">{region.markets}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Logistics & Support</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-lg font-semibold text-primary mb-2">Fast Shipping</div>
              <p className="text-muted-foreground">Express and economy options available for all destinations</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary mb-2">Local Warehouses</div>
              <p className="text-muted-foreground">Regional distribution centers for quick fulfillment</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary mb-2">24/7 Support</div>
              <p className="text-muted-foreground">Dedicated customer service in your time zone</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
