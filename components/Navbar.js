'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = isTop
    ? 'text-white bg-transparent'
    : 'bg-white text-black shadow-md'

  const linkClasses = `transition-all duration-300 transform hover:scale-110 ${
    isTop ? 'text-white hover:font-bold' : 'text-black hover:font-bold'
  } font-medium`

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-6  border-0 transition-all duration-300 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl font-bold ${isTop ? 'text-white' : 'text-black'}`}
        >
          Tackles
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
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
          <Link href="/gallery" className={linkClasses}>
            Gallery
          </Link>
          <Link
            className={`bg-[#008000] transition-all duration-300 transform hover:scale-110 hover:bg-green-700 text-white rounded-lg font-semibold p-2 px-4 text-lg`}
            href="/booking">
            
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none ${isTop ? 'text-white' : 'text-black'}`}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
    {isOpen && (
  <div className="md:hidden py-4  pt-2 space-y-2 text-center backdrop-blur-sm">
    <Link href="/" className={`${linkClasses} block`} onClick={() => setIsOpen(false)}>
      Home
    </Link>
    <Link href="/about" className={`${linkClasses} block`} onClick={() => setIsOpen(false)}>
      About
    </Link>
    <Link href="/services" className={`${linkClasses} block`} onClick={() => setIsOpen(false)}>
      Services
    </Link>
    <Link href="/contact" className={`${linkClasses} block`} onClick={() => setIsOpen(false)}>
      Contact
    </Link>
    <Link href="/gallery" className={`${linkClasses} block`} onClick={() => setIsOpen(false)}>
      Gallery
    </Link>
    <button
      className="w-48 mx-auto bg-[#008000] hover:bg-green-700 text-white rounded-lg font-semibold py-2 text-lg"
    >
      Book Now
    </button>
  </div>
)}
    </nav>
  )
}
