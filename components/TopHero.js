import Image from 'next/image'
import React from 'react'



export default function TopHero({img,name}) {
  return (
    <section className="relative h-[50vh] bg-cover bg-center flex items-end " style={{ backgroundImage: `url(${img})` }}>
    <div className="w-full px-20 mx-auto  text-white pb-20 bg-gradient-to-t from-black/60 to-transparent">
      <h1 className="text-6xl font-bold">{name}</h1>
      <div className="text-sm mt-2 text-end">
        <a href="/" className="">Home</a> <span className="mx-2">/</span> {name}
      </div>
    </div>

    
  </section>
  )
}
