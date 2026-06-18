'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "ProSports has been our manufacturing partner for 8 years. Their quality consistency and professional service are unmatched in the industry.",
    author: "Michael Chen",
    role: "Purchasing Director, Global Sports Retail",
    rating: 5
  },
  {
    quote: "The custom branding options and bulk pricing make them the perfect partner for our expanding distribution network across Asia.",
    author: "Sarah Williams",
    role: "VP Operations, Asia Pacific Sports",
    rating: 5
  },
  {
    quote: "Their team&apos;s responsiveness to our requirements and commitment to on-time delivery is exceptional. Highly recommended.",
    author: "David Rodriguez",
    role: "CEO, Championship Sports Equipment",
    rating: 5
  },
  {
    quote: "We were impressed by their ISO certification and quality testing protocols. They deliver products that exceed our specifications.",
    author: "Jennifer Lee",
    role: "Quality Manager, Premium Equipment Co.",
    rating: 5
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trusted by Leading Brands</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What our partners say about working with ProSports Global
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
