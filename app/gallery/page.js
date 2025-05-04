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
  '/gallery/gallery7.png',
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
  const [selectedImg, setSelectedImg] = useState(null)

  const handleClose = () => setSelectedImg(null)

  return (
    <>
      <TopHero img={'/gallery/hero.jpg'} name={'Gallery'} />
      
      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="relative w-[90vw] h-[90vh] max-w-4xl">
            <Image
              src={selectedImg}
              alt="Full screen"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className='w-[90%] mx-auto py-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {galleryImages.map((img, index) => (
          <div 
            key={index}
            className='relative aspect-square overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer'
            onClick={() => setSelectedImg(img)}
          >
            <Image
              src={img}
              fill
              alt={`Gallery image ${index + 1}`}
              className='object-cover hover:scale-105 transition-transform duration-500'
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
