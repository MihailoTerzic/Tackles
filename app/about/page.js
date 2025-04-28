import TopHero from '@/components/TopHero'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      <TopHero name={'About'} img={'/about/hero.jpg'}/>

      <div className='flex flex-col container mx-auto h-[70vh] text-center py-20 gap-5'>
        <p className='text-xl text-green-400'>All About Us</p>
    <h1 className='text-4xl font-bold pb-20'>About Tackles</h1>
    <p className='text-xl text-start'>Tackles Technical LLC, located in the vibrant city of Dubai, is a leading provider of comprehensive technical services for residential, commercial, and industrial properties. We specialize in a wide range of maintenance and repair solutions, including expert painting, plumbing, plastering, wallpaper fixing, floor and wall tiling, and carpentry. Our skilled team also handles air conditioning repairs, air filtration system maintenance, and professional cladding services.
<br/><br/>
With a focus on delivering quality craftsmanship and timely solutions, Tackles Technical LLC is committed to enhancing the comfort, functionality, and aesthetics of properties across Dubai. Our dedication to excellence, reliability, and customer satisfaction makes us a trusted partner for all technical and maintenance needs.</p>
      </div>


      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center  gap-8">
      {/* Left - Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/about/paint.jpg"
          alt="paint"
          width={800}
          height={600}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full lg:w-1/2  px-10 flex flex-col gap-10 xl:gap-20 ">
        <div>
          <h1 className="text-2xl font-bold text-green-500 mb-2">Our Mission</h1>
          <p className="text-xl text-gray-700">
            We want to provide every repair or decoration and design services so that you don't need to go through the problem of searching different places for different services.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-green-500 mb-2">Our Goals</h1>
          <p className="text-xl text-gray-700">
            Tackles focuses on providing our clients the best service anyone can provide and make your lives convenient and comfortable. Any work related to either plumbing, painting, plastering, or equipment installation like AC and Purifier is our problem.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
