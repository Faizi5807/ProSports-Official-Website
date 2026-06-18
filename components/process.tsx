'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Design & Planning',
    description: 'Collaborate with our team to define specifications, materials, and design requirements for your order.'
  },
  {
    number: '02',
    title: 'Material Selection',
    description: 'Choose from premium leather, synthetic, or custom materials. All sourced from certified suppliers.'
  },
  {
    number: '03',
    title: 'Precision Manufacturing',
    description: 'State-of-the-art equipment ensures consistent quality and precise panel stitching on every unit.'
  },
  {
    number: '04',
    title: 'Quality Assurance',
    description: 'Rigorous testing protocols verify durability, pressure, dimensions, and overall performance standards.'
  },
  {
    number: '05',
    title: 'Custom Branding',
    description: 'Professional embossing and printing services for logos, team names, and custom designs.'
  },
  {
    number: '06',
    title: 'Packaging & Shipping',
    description: 'Secure packaging and global logistics ensure your products arrive in perfect condition, on time.'
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Manufacturing Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six essential steps ensuring excellence from concept to delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-4 font-mono">{step.number}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
