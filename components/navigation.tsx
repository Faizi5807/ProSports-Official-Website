'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">PS</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">ProSports</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 md:top-0 bg-background md:bg-transparent border-b md:border-0 border-border p-4 md:p-0`}>
            <div className="flex flex-col md:flex-row gap-8">
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors">Process</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <button className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  )
}
