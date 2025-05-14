'use client'

import TopHero from '@/components/TopHero'
import Image from 'next/image'
import React, { useState } from 'react'

const galleryImages = [
  '/gallery/gallery1.jpg',
  '/gallery/gallery2.jpg',
  '/gallery/gallery3.jpg',
  '/gallery/gallery4.jpg',
  '/gallery/gallery5.jpg',
  '/gallery/gallery6.jpg',
  '/gallery/gallery7.jpg',
  '/gallery/gallery8.jpg',
  '/gallery/gallery9.jpg',
  '/gallery/gallery10.jpg',
  '/gallery/gallery11.jpg',
  '/gallery/gallery12.jpg',
  '/gallery/gallery13.jpg',
  '/gallery/gallery14.jpg',
  '/gallery/gallery15.jpg',
  '/gallery/gallery16.jpg',
]

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [touchStartX, setTouchStartX] = useState(null)

  const handleClose = () => setSelectedIndex(null)

  const showPrev = (e) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const showNext = (e) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex < galleryImages.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null || selectedIndex === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX
    if (deltaX > 50 && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    } else if (deltaX < -50 && selectedIndex < galleryImages.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
    setTouchStartX(null)
  }

  return (
    <>
      <TopHero img="/gallery/hero.jpg" name="Gallery" />

      {/* Modal Viewer */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-[90vw] h-[90vh] max-w-4xl overflow-hidden">
            <div
              key={selectedIndex}
              className="absolute inset-0 animate-slide-in transition-all duration-300"
            >
              <Image
                src={galleryImages[selectedIndex]}
                alt="Full screen"
                fill
                className="object-contain rounded-xl"
              />
            </div>

            {/* Navigation Arrows */}
            {selectedIndex > 0 && (
              <button
                onClick={showPrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200 transition"
              >
                ‹
              </button>
            )}
            {selectedIndex < galleryImages.length - 1 && (
              <button
                onClick={showNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200 transition"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}

      {/* Image Grid */}
      <div className="w-[90%] mx-auto py-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={img}
              fill
              alt={`Gallery image ${index + 1}`}
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 768px) 50vw,
                     (max-width: 1024px) 33vw,
                     25vw"
              quality={85}
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </>
  )
}
