import TopHero from '@/components/TopHero'
import Image from 'next/image'
import React from 'react'

const galleryImages = []

export default function page() {
  return (
    <>
     <TopHero img={'/gallery/hero.jpg'} name={'Gallery'} />
    <div className='W-[80%] mx-auto py-20'>
      {galleryImages.map((img,index)=>(
        <Image
        src={img}
        width={600}
        height={800}
        alt='image'
        className=' rounded-xl border border-green-600'
        />
        
      )  )}
    </div>
        </>
  )
}
