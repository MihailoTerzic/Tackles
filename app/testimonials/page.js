'use client'

import TopHero from '@/components/TopHero'
import Image from 'next/image';
import React from 'react'

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
        text: 'The quality of work from TACKLES on our home’s interior painting was outstanding. They were clean, efficient, and the results were exactly what we hoped for. I highly recommend their painting services.'
      },

      {
        name: 'Marya',
        role: 'Plaster & Cladding',
        img: '/testimonials/11.png',
        text: 'TACKLES did a superb job on our plaster and cladding. Their attention to detail and quality craftsmanship really enhanced the look of our property. We’re very pleased with the outcome!'
      },

      {
        name: 'Luigi',
        role: 'Wall Paper Fixing',
        img: '/testimonials/12.png',
        text: 'The wallpaper fixing by TACKLES was flawless. They handled all the details with care and precision. Our walls look fantastic, and we couldn’t be happier with the results!'
      },
  ]

export default function TestimonialCard() {
    return (
        <>
          <TopHero img={'/testimonials/hero.jpg'} name={'Testimonials'} />
    
          <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white text-black">
            {members.map((member, index) => (
              <div key={index} className="max-w-md w-full bg-white border border-green-400 rounded-lg p-6 shadow-md">
                {/* Top Section: Name + Role + Image */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold">{member.name}</h2>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <Image
                  src={member.img}
                  width={50}
                  height={50}
                    alt={member.name}
                    className="w-16 h-16 object-cover rounded-full "
                  />
                </div>
    
                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm">
                  "{member.text}"
                </p>
              </div>
            ))}
          </div>
        </>
      );
}
