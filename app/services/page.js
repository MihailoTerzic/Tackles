import TopHero from '@/components/TopHero'
import Image from 'next/image'
import React from 'react'

const Card = ({ img, name, text }) => {
  return (
    <div className='border border-green-400 p-5 flex flex-col items-center justify-around '>
      <Image src={img} alt={name} width={200} height={200} />
      <h1 className='text-green-400 py-4 text-2xl'>{name}</h1>
      {text && <p className='text-xl'>{text}</p>}
    </div>
  )
}

export default function page() {
  return (
    <div className='bg-white text-black'>
      <TopHero name={'Services'} img={'/services/hero.jpg'} />
      <div className='flex flex-col container mx-auto text-center py-20 gap-5 bg-white text-black'>
        <p className='text-xl text-green-400'>All Services</p>
        <h1 className='text-4xl font-bold pb-20'>Our Services</h1>

        <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8'>
          <Card img={'/services/air-conditioning.png'} name={'Air Conditioning'} text={'Whether it is hot sunny day or cold winter night, Our air conditioning service will let you be at the best room temperature for you. Our AC system is budget friendly and durable.'} />
          <Card img={'/services/air-filtration.png'} name={'Air Filtration'} text={'Breathing dirty air will cause disease and death in worst case scenario. Don’t take any risks since we provide air filtration system which will filter air at best in adequate price.'} />
          <Card img={'/services/carpentry.png'} name={'Carpentry'} text={'We repair, design and install quality flooring at best prices. By hiring our services, you can transform the style of entire house. Simple floor can be replaced with attractive wood flooring.'} />
          <Card img={'/services/cladding.png'} name={'Cladding'} text={'Cladding Insulates the temperature of the building and provides a better appearance to the building. Don’t miss our professionals cladding work since they are the best..'} />
        <Card img={'/services/electrical-works.png'} name={'Electrical Works'} text={'Faulty wiring or outdated fixtures can be a major concern. Trust our certified electricians for all your electrical needs, ensuring safety and reliability whether its repairs, installations, or upgrades for your home or office.'}/> 
           <Card img={'/services/false-ceiling.png'} name={'False Ceiling'} text={'Hide unsightly wires and pipes while giving your room a modern upgrade. Our false ceiling installations provide a clean, sophisticated look, improve acoustics, and offer options for stylish integrated lighting solutions.'}/> 
          <Card img={'/services/floor-and-wall-tiling.png'} name={'Floor & Wall Tiling'} text={'Tiling is an effective way to add elegance & style to any room of your building. Whether it is toilet or kitchen, every room of your building is beautiful when we are hired.'} />
          <Card img={'/services/flooring.png'} name={'Flooring'} text={'Worn-out floors dragging down your home s look? We install, repair, and design stunning flooring solutions. From durable laminates to elegant hardwood, trust us to revamp your space from the ground up at competitive prices.'}/> 
          <Card img={'/services/light-partition.png'} name={'Light Partition'} text={'Need to create separate areas within a larger room? Our light partition service offers a quick and flexible way to divide your space, perfect for creating home offices, extra bedrooms, or defined zones without major construction.'}/>  
          <Card img={'/services/painting.png'} name={'Painting'} text={'If you’re looking for painting service, we offer expert consultation on colours, materials and budgets to make sure you get what you want. Our professionals are highly skilled and will deliver a satisfying painting experience.'} />
          <Card img={'/services/plastering.png'} name={'Plastering'} text={'We will take care of plaster work on both interior and exterior part of your house or apartment with full professionality. Whether it is a leaking celling or damaged floor/wall, our professionals will fix it with best result.'} />
          <Card img={'/services/plumbing.png'} name={'Plumbing'} text={'Rusty and Leaking pipes can be pain in the head. Our clients don’t need to worry about plumbing works since Tackles has group of professionals to get the work done.'} />
          <Card img={'/services/roofing.png'} name={'Roofing'} text={'Is your roof leaking or showing signs of age? Our professional roofing services ensure your home is protected from the elements. We handle repairs and installations with durable materials, giving you peace of mind under a secure roof.'}/> 
          <Card img={'/services/wallpaper-fixing.png'} name={'Wallpaper Fixing'} text={'Bad coloring or dirty wall decreases the beauty of your house, we got you covered with our attractive designs of wallpaper to make your house look new.'} />
        </div>
      </div>
    </div>
  )
}
