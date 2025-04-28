'use client'

import TopHero from '@/components/TopHero'
import Image from 'next/image'
import React from 'react'


const teamMembers = [
  {
    name: 'RAJU KHATRI',
    role: 'Founder',
    img: '/team1.jpg',
  },
  {
    name: 'Pritambar Ghimire',
    role: 'Electrician',
    img: '/team2.jpg',
  },
  {
    name: 'Gopak sinjali magar',
    role: 'Senior Electrician',
    img: '/team3.jpg',
  },
  {
    name: 'Dharma Thapa',
    role: 'Mason',
    img: '/team4.jpg',
  },
  {
    name: 'Rajendra',
    role: 'Tile/Mason',
    img: '/team5.jpg',
  },
  {
    name: 'Tom Lal Pamdey',
    role: 'Site Incharge',
    img: '/team6.jpg',
  },
  {
    name: 'Bishnu Pandey',
    role: 'Spray Painter',
    img: '/team7.jpg',
  },
  {
    name: 'Quiyman',
    role: 'Supervisor',
    img: '/team8.jpg',
  },
  {
    name: 'Sunil Kumar',
    role: 'Tile Mason',
    img: '/team9.jpg',
  },
]

export default function Team() {
  return (
    <>
     <TopHero img={'/services/hero.jpg'} name={'Our Team'} />
    <section className="w-[90%] mx-auto py-12 bg-white text-black">
      <h1 className="text-2xl font-bold text-center mb-8">Our Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="border border-green-400 rounded-lg p-4 flex flex-col items-center text-center">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
            <h2 className="font-bold">{member.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-500">
                <Image src={'/socials/facebook.png'} width={30} height={30}/>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-500">
              <Image src={'/socials/watsupp.png'} width={30} height={30}/>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-500">
              <Image src={'/socials/linkedin.png'} width={30} height={30}/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
