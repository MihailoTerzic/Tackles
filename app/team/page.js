'use client'

import TopHero from '@/components/TopHero'
import Image from 'next/image'
import React from 'react'


const teamMembers = [
  {
    name: 'RAJU KHATRI',
    role: 'Founder',
    img: '/team/team1.png',
  },
  {
    name: 'Pritambar Ghimire',
    role: 'Electrician',
    img: '/team/team2.png',
  },
  {
    name: 'Gopak sinjali magar',
    role: 'Senior Electrician',
    img: '/team/team3.png',
  },
  {
    name: 'Dharma Thapa',
    role: 'Mason',
    img: '/team/team4.png',
  },
  {
    name: 'Rajendra',
    role: 'Tile/Mason',
    img: '/team/team5.png',
  },
  {
    name: 'Tom Lal Pamdey',
    role: 'Site Incharge',
    img: '/team/team6.png',
  },
  {
    name: 'Bishnu Pandey',
    role: 'Spray Painter',
    img: '/team/team7.png',
  },
  {
    name: 'Quiyman',
    role: 'Supervisor',
    img: '/team/team8.png',
  },
  {
    name: 'Sunil Kumar',
    role: 'Tile Mason',
    img: '/team/team9.png',
  },
]

export default function Team() {
  return (
    <>
     <TopHero img={'/team/hero.jpg'} name={'Our Team'} />
    <section className="w-[80%] mx-auto py-12 bg-white text-black">
      <h1 className="text-2xl font-bold text-center mb-8">Our Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="border border-[#008000] max-w-xs rounded-2xl p-4 flex flex-col items-center text-center">
            <Image src={member.img} alt={member.name} width={200} height={200} className=" rounded-full object-cover mb-4" />
            <h2 className=" text-xl">{member.name}</h2>
            <p className="text-lg text-gray-600 pt-4">{member.role}</p>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-[#008000]">
                <Image src={'/socials/facebook.png'} width={30} height={30} alt={'socials'}/>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#008000]">
              <Image src={'/socials/watsupp.png'} width={30} height={30} alt={'socials'}/>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#008000]">
              <Image src={'/socials/linkedin.png'} width={30} height={30} alt={'socials'}/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
