'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-pretty">
              Premium Football Manufacturing at Scale
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Global leader in professional football production. Serving retailers, distributors, and teams worldwide with uncompromising quality and competitive pricing.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition-colors">
                Request Quote
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded font-semibold hover:bg-muted transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96"
          >
            <Image
              src="/images/factory-production-floor.png"
              alt="Modern football manufacturing facility"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10M+</div>
            <div className="text-muted-foreground">Units Annually</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
