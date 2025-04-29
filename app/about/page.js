import TopHero from '@/components/TopHero'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
      <TopHero name="About" img="/about/hero.jpg" />

      <div className="bg-white text-black flex flex-col items-center  justify-between gap-20">
        {/* Main About Text Section */}
        <div className="w-[80%] mx-auto text-center py-16 space-y-6">
          <p className="text-xl text-[#008000] font-medium">All About Us</p>
          <h1 className="text-4xl font-bold pb-10">About Tackles</h1>
          <p className="text-xl md:text-xl text-gray-800  leading-relaxed text-justify">
            Tackles Technical LLC, located in the vibrant city of Dubai, is a leading provider of comprehensive technical services for residential, commercial, and industrial properties. We specialize in a wide range of maintenance and repair solutions, including expert painting, plumbing, plastering, wallpaper fixing, floor and wall tiling, and carpentry. Our skilled team also handles air conditioning repairs, air filtration system maintenance, and professional cladding services.
            <br /><br />
            With a focus on delivering quality craftsmanship and timely solutions, Tackles Technical LLC is committed to enhancing the comfort, functionality, and aesthetics of properties across Dubai. Our dedication to excellence, reliability, and customer satisfaction makes us a trusted partner for all technical and maintenance needs.
          </p>
        </div>

        {/* Image + Mission/Goals Section */}
        <div className="w-[80%] mx-auto flex flex-col xl:flex-row items-center justify-between gap-16 py-20">
          {/* Image */}
          <div className="w-full xl:w-1/2">
            <Image
              src="/about/paint.jpg"
              alt="Paint roller"
              width={1000}
              height={700}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>

          {/* Mission and Goals */}
          <div className="w-full xl:w-1/2 flex flex-col gap-12 text-left">
            <div>
              <h2 className="text-3xl text-center mb-3"><span className='text-[#008000]'>Our</span> Mission</h2>
              <p className="text-xl md:text-xl text-gray-700 leading-relaxed text-justify">
                We want to provide every repair or decoration and design service so that you don’t need to go through the problem of searching different places for different services.
              </p>
            </div>
            <div>
            <h2 className="text-3xl text-center mb-3"><span className='text-[#008000]'>Our</span> Goals</h2>
              <p className="text-xl md:text-xl text-gray-700 leading-relaxed text-justify">
                Tackles focuses on providing our clients the best service anyone can provide and making your lives convenient and comfortable. Any work related to either plumbing, painting, plastering, or equipment installation like AC and purifiers is our problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
