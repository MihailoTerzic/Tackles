import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 ">
        <Image
          src={'/homepage/hero.png'}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-[.55]"
        />
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center items-center gap-8 text-white text-center z-10 relative px-4">
        {/* Logo + Name */}
        <div className="flex flex-row items-center gap-10">
          <Image src="/logo.png" alt="Tackles Logo" width={160} height={160} />
          <h1 className="text-5xl font-bold mt-2">Tackles</h1>
        </div>

        {/* Tagline */}
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-2xl">
          Find Qualified Contractors Near You
        </h2>

        {/* Search form */}
        <form className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-4 ">
        <input
  type="text"
  placeholder="What service do you need? Plumbing, Wall Paper fixing, Plaster, Painting..."
  className="w-full sm:w-[70%] p-4 rounded-xl text-black bg-white/80 text-sm border-none outline-none placeholder-gray-600"
/>

          <button
            type="submit"
            className="bg-[#008000] hover:scale-105 transition-transform duration-200 ease-in text-white px-6 py-4 rounded-xl font-semibold"
          >
            Let's go !
          </button>
        </form>

        {/* Links */}
        <div className="flex gap-6  font-medium pt-4 text-xl">
          <Link href="#">Articles</Link>
          <span className="hidden sm:inline">-</span>
          <Link href="#">Hometips</Link>
          <span className="hidden sm:inline">-</span>
          <Link href="#">All Categories</Link>
        </div>
      </div>
    </section>
  )
}
