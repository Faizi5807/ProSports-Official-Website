'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const images = [
  {
    id: 1,
    title: 'Production Floor',
    image: '/images/factory-production-floor.png',
    category: 'Facility'
  },
  {
    id: 2,
    title: 'Quality Testing',
    image: '/images/quality-control-testing.png',
    category: 'Testing'
  },
  {
    id: 3,
    title: 'Warehouse & Export',
    image: '/images/warehouse-storage-export.png',
    category: 'Logistics'
  },
  {
    id: 4,
    title: 'Craftsmanship',
    image: '/images/craftsmanship-detail.png',
    category: 'Craftsmanship'
  },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Manufacturing Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our state-of-the-art facilities and commitment to quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelected(img.id)}
              className="relative h-64 cursor-pointer group rounded-lg overflow-hidden"
            >
              <Image
                src={img.image}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-white/70">{img.category}</p>
                  <h3 className="text-xl font-bold text-white">{img.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-96 md:h-[600px] cursor-default"
            >
              <Image
                src={images.find(img => img.id === selected)?.image || ''}
                alt="Full view"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
