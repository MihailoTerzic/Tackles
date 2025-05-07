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
      <TopHero img="/contact/contact.jpg" name="Contact" />

      {/* Contact Info and Form */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 justify-between items-center">
          {/* Info Block */}
          <div className="space-y-10 w-full lg:w-1/2 bg-gray-200 p-5 rounded-2xl">
            <div>
              <p className="text-[#008000] font-semibold mb-2">Get In Touch</p>
              <h2 className="text-3xl font-bold">Get Closer Now</h2>
            </div>

            <div className="space-y-8">
             

              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <Image src="/contact/phone.png" width={32} height={32} alt="phone" />
                  <p className="text-[#008000] font-medium">Phone</p>
                </div>
                <p className="text-lg text-gray-800 pl-10">+971-55-8155029</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <Image src="/contact/oui_email.png" width={32} height={32} alt="email" />
                  <p className="text-[#008000] font-medium">Email</p>
                </div>
                <p className="text-lg text-gray-800 pl-10">info@tackles.ae</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <Image src="/contact/location.png" width={32} height={32} alt="location" />
                  <p className="text-[#008000] font-medium">Location</p>
                </div>
                <p className="text-lg text-gray-800 pl-10">01 Ontario Tower Business Bay</p>
              </div>

              <div className="pt-4">
  <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.527030694837!2d55.2618246!3d25.185443299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d103361679%3A0x13f2d0058a5050cf!2sOntario%20Tower%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2srs!4v1746631852764!5m2!1sen!2srs"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-xl"
  ></iframe>
</div>

            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full lg:w-1/2 max-w-lg bg-gray-50 p-8 rounded-lg shadow-md space-y-6 mt-10 lg:mt-0">
            <h3 className="text-xl font-bold mb-2">Leave A Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
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
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-[#008000] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
