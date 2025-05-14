'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer({ image }) {
  const year = new Date().getFullYear()

  return (
        <footer className="relative w-full text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 bg-[#006600]">
        {/**
         * 
        <Image
          src={image}
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-[.4]" // darken the image
        />
         */}
      </div>

      <div className="w-[80%] mx-auto py-20 flex flex-col gap-12">
        {/* Header & Button */}
        <div className="text-center flex flex-col items-center gap-6">
          <p className="text-lg">Don't Know What To Start With?</p>
          <h2 className="text-4xl font-bold leading-tight">Get A Solutions For All <br /> Handyman Services</h2>
          <button className="bg-[#008000] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 text-lg">
            <Image src={'/reach.png'} alt='reach btn' width={20} height={20}/>
             Reach Us
          </button>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm ">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-2">Tackles</h3>
            <p>
              Tackles is a leading A-grade handyman providing company. Any repair or
              decoration work, whether it be Plumbing, Painting, Air-conditioning,
              Floor and Wall fixing, and so on, Tackles is there for you.
            </p>
          </div>

          {/* Column 2 */}
          <div className='text-center mx-auto'>
            <h3 className="font-bold text-lg mb-2">Browse More</h3>
            <ul className="space-y-1 text-start">
              <li><Link href="/booking">Booking</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/FAQ">FAQs</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms Of Service</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className=' mx-auto'>
            <h3 className="font-bold text-lg mb-2">Services</h3>
            <ul className="space-y-1 text-start">
              <li>Air Conditioning</li>
              <li>Air Filtration</li>
              <li>Electrotechnical Equipment</li>
              <li>Carpentry and Flooring</li>
              <li>Engraving and Ornamentation</li>
              <li>Plaster and Cladding</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-6 border-t border-white/30">
          <p>© 2018 - {year} Tackles Technical LLC. All Rights Reserved</p>
          <p>Technology Partner : Sriyog Consulting Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
