import React from 'react'

export default function StatsSection() {
  return (
    <section className="w-full bg-[#008000] text-white py-16">
  <div className="w-[80%] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Side: Text */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">One Stop Handyman Service</h2>
      <p className="text-base text-xl text-white/90">
        Tackles can be your one stop shop for all things related to residential remodeling, installation and repairs.
      </p>
    </div>

    {/* Right Side: Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 text-center">
      <div>
        <p className="text-5xl font-bold">10+</p>
        <p className="text-xl font-bold text-white/80">Years Business</p>
      </div>
      <div>
        <p className="text-5xl font-bold">5150</p>
        <p className="text-xl font-bold text-white/80">Projects Finished</p>
      </div>
      <div>
        <p className="text-5xl font-bold">4K</p>
        <p className="text-xl font-bold text-white/80">Valuable Customers</p>
      </div>
      <div>
        <p className="text-5xl font-bold">14+</p>
        <p className="text-xl font-bold text-white/80">Services Provided</p>
      </div>
    </div>
  </div>
</section>

  )
}
