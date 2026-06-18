import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { Process } from '@/components/process'
import { Quality } from '@/components/quality'
import { Gallery } from '@/components/gallery'
import { Global } from '@/components/global'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Products />
      <Process />
      <Quality />
      <Gallery />
      <Global />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
