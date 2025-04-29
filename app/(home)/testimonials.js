'use client'

import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'

const members = [
  {
    name: 'Sameer',
    role: 'Painting',
    img: '/testimonials/1.png',
    text: 'TACKLES did an exceptional job with the painting in our office. The finish was flawless, and they completed the work ahead of schedule. Highly recommended for any painting needs!'
  },
  {
    name: 'Jaxon',
    role: 'Air Conditioning & Filtration',
    img: '/testimonials/2.png',
    text: 'The team at TACKLES provided outstanding service for our air conditioning and filtration systems. Their expertise and prompt service ensured our system is running efficiently. Fantastic job!'
  },
  {
    name: 'João',
    role: 'Plaster',
    img: '/testimonials/3.png',
    text: 'I’m very pleased with the plaster and cladding work done by TACKLES. The attention to detail and quality of materials used were top-notch. Our home looks fantastic!'
  },
  {
    name: 'Wen',
    role: 'Wall Paper Fixing',
    img: '/testimonials/4.png',
    text: 'TACKLES transformed our space with their wallpaper fixing service. The installers were professional, and the final result exceeded our expectations. Definitely a company you can trust for wallpaper projects!'
  },
  {
    name: 'Haron',
    role: 'Floor & Wall Tiling',
    img: '/testimonials/5.png',
    text: 'The floor and wall tiling completed by TACKLES was impressive. The tilers were meticulous and made sure every tile was perfectly placed. Our new tiles look amazing!'
  },
  {
    name: 'Samuel',
    role: 'Carpentry',
    img: '/testimonials/6.png',
    text: 'I was very satisfied with the carpentry work provided by TACKLES. They crafted beautiful custom furniture for us, and their craftsmanship was impeccable. Highly skilled team!'
  },
  {
    name: 'Jeannie',
    role: 'Flooring',
    img: '/testimonials/7.png',
    text: 'TACKLES did a wonderful job on our new flooring. They were efficient, respectful of our space, and the end result is beautiful. I’d definitely use them again for future projects.'
  },
  {
    name: 'Nikias',
    role: 'Air Conditioning',
    img: '/testimonials/8.png',
    text: 'TACKLES handled our air conditioning installation smoothly. Their technicians were knowledgeable and took the time to explain everything. We’re very happy with the performance of our new system.'
  },
  {
    name: 'Marcus',
    role: 'Air Filtration',
    img: '/testimonials/9.png',
    text: 'The air filtration system installed by TACKLES has made a noticeable difference in our indoor air quality. Their expertise and professionalism were evident throughout the process. Excellent service!'
  },
  {
    name: 'Maximillia',
    role: 'Painting',
    img: '/testimonials/10.png',
    text: 'The quality of work from TACKLES on our homes interior painting was outstanding. They were clean, efficient, and the results were exactly what we hoped for. I highly recommend their painting services.'
  },
  {
    name: 'Marya',
    role: 'Plaster & Cladding',
    img: '/testimonials/11.png',
    text: 'TACKLES did a superb job on our plaster and cladding. Their attention to detail and quality craftsmanship really enhanced the look of our property. We are very pleased with the outcome!'
  },
  {
    name: 'Luigi',
    role: 'Wall Paper Fixing',
    img: '/testimonials/12.png',
    text: 'The wallpaper fixing by TACKLES was flawless. They handled all the details with care and precision. Our walls look fantastic, and we could be happier with the results!'
  },
]

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)

  // Handle responsive card count
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width >= 1024) setVisibleCount(3)
      else if (width >= 768) setVisibleCount(2)
      else setVisibleCount(1)
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  // Calculate visible members and total slides
  const totalSlides = Math.ceil(members.length / visibleCount)
  const visibleMembers = members.slice(
    activeIndex * visibleCount,
    (activeIndex + 1) * visibleCount
  )

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goNext()    // Swipe left
    if (touchStart - touchEnd < -50) goPrev()   // Swipe right
  }

  // Navigation functions
  const goPrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : totalSlides - 1))
  }

  const goNext = () => {
    setActiveIndex(prev => (prev < totalSlides - 1 ? prev + 1 : 0))
  }

  return (
    <section className="py-16 bg-white w-[90%] mx-auto max-w-7xl relative">
      <h3 className="text-center text-lg text-gray-600 mb-2">What People Say?</h3>
      <h2 className="text-center text-4xl mb-8">Testimonials</h2>

      {/* Carousel Container */}
      <div 
        className="overflow-hidden relative"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows */}
        <button 
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Cards Container */}
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="px-3 flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="bg-white border border-green-400 rounded-lg p-6 shadow-md h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold">{member.name}</h2>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <Image
                    src={member.img}
                    width={64}
                    height={64}
                    alt={member.name}
                    className="w-16 h-16 object-cover rounded-full border-2 border-green-200"
                  />
                </div>
                <p className="text-gray-600 text-sm">"{member.text}"</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-green-600 w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}