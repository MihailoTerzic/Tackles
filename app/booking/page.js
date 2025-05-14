'use client'

import TopHero from '@/components/TopHero'
import React from 'react'

export default function BookAppointment() {
  return (
    <>
      <TopHero img={'/services/hero.jpg'} name={'Book An Appointment'} />
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <div className="w-[80%] bg-white text-black p-8 min-h-screen">
          <h2 className="text-3xl font-bold mb-20 text-center">Book An Appointment</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10">
            {/* Left Column */}
            <div className="flex flex-col gap-6 gap-y-10">
              <input 
                type="text" 
                placeholder="Full Name " 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]"
              />

              <input 
                type="email" 
                placeholder="Email " 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]"
              />

              <input 
                type="date" 
                placeholder="Preferred Date " 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000] text-gray-400"
              />

              <input 
                type="text" 
                placeholder="Budget " 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]"
              />

              <input 
                type="text" 
                placeholder="Location " 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 gap-y-10 justify-between">
              <input 
                type="tel" 
                placeholder="Phone Number " 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]"
              />

              <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]">
                <option value="">Select a service </option>
                <option value="Cleaning">Cleaning</option>
                <option value="Maintenance">Maintenance</option>
                {/* Add actual services here */}
              </select>

              <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]">
                <option value="">Shifts </option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
              </select>

              <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]">
                <option value="">Priority </option>
                <option value="Urgent">Urgent</option>
                <option value="Standard">Standard</option>
              </select>

              <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000]">
                <option value="">Emirates </option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                {/* Add more emirates as needed */}
              </select>
            </div>

            {/* Description - Full Width */}
            <div className="md:col-span-2">
              <textarea 
                placeholder="Description"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008000] min-h-[100px]"
              />
            </div>

            {/* Submit Button - Full Width */}
            <div className="md:col-span-2 ">
              <button 
                type="submit"
                className="container lg:w-lg bg-[#008000] hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-all"
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
