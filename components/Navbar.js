'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 100) // adjust this value based on hero height
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = isTop
    ? ' text-white bg-transparent'
    : 'bg-white text-black shadow-md'

  const linkClasses = isTop ? 'hover:font-bold text-white' : 'hover:font-bold text-black'

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 backdrop-blur-sm border-0 transition-all duration-300 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold ${isTop ? 'text-white' : 'text-black'}`}>
          Tackles
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className={linkClasses}>
            Home
          </Link>
          <Link href="/about" className={linkClasses}>
            About
          </Link>
          <Link href="/services" className={linkClasses}>
            Services
          </Link>
          <Link href="/contact" className={linkClasses}>
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none ${isTop ? 'text-white' : 'text-black'}`}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 space-y-2">
          <Link href="/" className={`${linkClasses} block`}>
            Home
          </Link>
          <Link href="/about" className={`${linkClasses} block`}>
            About
          </Link>
          <Link href="/services" className={`${linkClasses} block`}>
            Services
          </Link>
          <Link href="/contact" className={`${linkClasses} block`}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
