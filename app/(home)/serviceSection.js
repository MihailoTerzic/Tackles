import Image from 'next/image'
import React from 'react'

const Card = ({img,text}) => {
return (
    <div className='border-2 border-[#008000]  p-4 px-10 flex flex-col items-center justify-center  transition-transform duration-300 hover:scale-105 hover:shadow-lg '>
        <Image src={img} alt={text} width={200} height={200}/>
        <p className='text-xl font-bold'>{text}</p>
    </div>
)
}

export default function ServiceSection() {
  return (
    <div className='h-screen container mx-auto  flex flex-col gap-4 items-center justify-center'>
      <h1 className='text-3xl text-center mb-4 font-bold'>Popular services near <span className='text-[#008000]'>Your Area</span></h1>
      <div className="flex sm:grid sm:grid-cols-4 sm:grid-rows-2 gap-4 w-[80%] overflow-x-auto sm:overflow-visible">

<Card img='/services/plumbing.png' text='Plumbing'/>
<Card img='/services/painting.png' text='Painting'/>
<Card img='/services/plastering.png' text='Plastering'/>
<Card img='/services/floor-and-wall-tiling.png' text='Floor & Wall Tiling'/>
<Card img='/services/carpentry.png' text='Carpentry And Flooring'/>
<Card img='/services/air-conditioning.png' text='Air Conditioning'/>
<Card img='/services/cladding.png' text='Cladding'/>
<Card img='/services/air-filtration.png' text='Air Filtration'/>

</div>
    </div>
  )
}
