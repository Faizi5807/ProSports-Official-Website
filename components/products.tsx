'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Premium Leather',
    description: 'Professional-grade leather footballs for competitive play and tournaments',
    image: '/images/football-premium-leather.png',
    specs: ['Genuine leather', 'Tournament certified', 'Bulk discounts available'],
  },
  {
    id: 2,
    name: 'Synthetic Training',
    description: 'Durable synthetic material for training and recreational use',
    image: '/images/football-synthetic-training.png',
    specs: ['Weather resistant', 'Enhanced durability', 'Cost effective'],
  },
  {
    id: 3,
    name: 'Official Competition',
    description: 'Tournament-approved balls meeting international standards',
    image: '/images/football-competition-official.png',
    specs: ['FIFA certified', 'Precision engineered', 'Professional grade'],
  },
  {
    id: 4,
    name: 'Youth Training',
    description: 'Optimized size and weight for youth players and training programs',
    image: '/images/football-youth-kids.png',
    specs: ['Youth sized', 'Safety certified', 'Educational programs'],
  },
  {
    id: 5,
    name: 'Custom Branded',
    description: 'Fully customizable footballs with your logo and design',
    image: '/images/football-customizable-white.png',
    specs: ['Custom branding', 'Minimum order 1000', 'Fast turnaround'],
  },
  {
    id: 6,
    name: 'Vintage Classic',
    description: 'Traditional American football design with heritage appeal',
    image: '/images/football-vintage-classic.png',
    specs: ['Classic design', 'Premium leather', 'Collector quality'],
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six carefully designed football solutions for every market segment and requirement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
