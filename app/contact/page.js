
'use client'

import TopHero from '@/components/TopHero'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    email: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="text-black">
      {/* Hero Section */}
   <TopHero img={'/contact/contact.jpg'} name={'Contact'}/>

      {/* Contact Info and Form */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Block */}
          <div>
            <p className="text-green-600 font-bold mb-2">Get In Touch</p>
            <h2 className="text-3xl font-bold mb-6">Get Closer Now</h2>

            <div className="space-y-6">
              <div>
              <div className='inline-flex gap-4 flex items-center'>

                <Image src={'/contact/location.png'} width={40} height={40} alt='loaction'></Image>
                <p className="text-green-600 font-medium"> Location</p>
                </div>
                <p className="text-lg">01 Ontario Tower Business Bay</p>
              </div>
              <div>
              <div className='inline-flex gap-4 flex items-center'>

<Image src={'/contact/phone.png'} width={40} height={40} alt='phone'></Image>
<p className="text-green-600 font-medium"> Phone</p>
</div>
                <p className="text-lg">+971-55-8155029</p>
              </div>
              <div>
                <div className='inline-flex gap-4 flex items-center'>

                <Image src={'/contact/oui_email.png'} width={40} height={40} alt='email'></Image>
                <p className="text-green-600 font-medium"> Email</p>
                </div>
                <p className="text-lg">info@tackles.ae</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className=" p-8  space-y-6 max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">Leave A Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            >
              <option value="">Service</option>
              <option value="installation">Installation</option>
              <option value="repair">Repair</option>
              <option value="maintenance">Maintenance</option>
            </select>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg"
            />
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer 
      <footer className="bg-green-700 text-white text-center py-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>© 2018 – 2024 Tackles Technical LLC. All Rights Reserved</p>
          <p>Technology Partner: SirYogs Consulting Pvt.Ltd.</p>
        </div>
      </footer>
          */}
    </div>
  )
}
