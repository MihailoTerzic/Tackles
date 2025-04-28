'use client'

import TopHero from '@/components/TopHero'
import React from 'react'

export default function BookAppointment() {
  return ( <>
  
    <TopHero img={'/services/hero.jpg'} name={'Terms & Conditions'} />
   <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Book An Appointment</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <input 
              type="text" 
              placeholder="Full Name*" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input 
              type="email" 
              placeholder="Email*" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input 
              type="date" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-400"
            />

            <input 
              type="text" 
              placeholder="Budget*" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input 
              type="text" 
              placeholder="Location*" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <input 
              type="tel" 
              placeholder="Phone Number*" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input 
              type="date" 
              placeholder="Required End Date*" 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-400"
            />

            <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Type*</option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
            </select>

            <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Priority*</option>
              <option value="Urgent">Urgent</option>
              <option value="Standard">Standard</option>
            </select>

            <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Estimated Time*</option>
              <option value="1 Week">1 Week</option>
              <option value="2 Weeks">2 Weeks</option>
              <option value="1 Month">1 Month</option>
            </select>
          </div>

          {/* Description - Full Width */}
          <div className="md:col-span-2">
            <textarea 
              placeholder="Description"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[100px]"
            />
          </div>

          {/* Submit Button - Full Width */}
          <div className="md:col-span-2">
            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
