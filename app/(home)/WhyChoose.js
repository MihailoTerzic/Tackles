import Image from 'next/image';
import React from 'react';

const Card = ({ img, text, description, className = "" }) => {
  return (
    <div className={`border-2 border-[#008000] p-8 px-10 flex flex-col  items-center justify-between gap-5 w-full md:w-[45%]  ${className}`}>
      <Image src={img} alt={text} width={50} height={50} className='object-contain' />
      <p className='text-2xl  text-center'>{text}</p>
      {description && <p className=' text-justify'>{description}</p>}
    </div>
  );
};

export default function WhyChoose() {
  return (
    <>
      {/* Why Choose Section */}
      <div className='flex flex-col justify-center gap-8 items-center py-20 pt-25 container mx-auto text-center px-4'>
        <h1 className='text-6xl '><span className='text-[#008000]'>Why Choose</span> Tackles</h1>
        <p className='text-xl pb-10'>
        With so many painting contractors to choose from, why would you choose us? First, if you ever worked with us before, you know why, but for those who have not, allow us to explain.
        </p>

        <div className='flex flex-wrap justify-center gap-16'>
          <Card className='lg:w-[30%]' img='/homepage/fast service icon.png' text='Fast Services' description='We respond to any inquiry within two hours and we are available for consultation as soon as the next day' />
          <Card className='lg:w-[30%]' img='/homepage/paint icon.png' text='Quality Work' description='We use top quality painting products from the market only. Moreover, painting requires skill and expertise' />
          <Card className='lg:w-[30%]' img='/homepage/smile-beam icon.png' text='Customer Satisfaction' description='We are a painting company who is not happy until you are happy. Therefore, our team will talk you through the process' />
        </div>
      </div>
{/**We respond to any inquiry within two hours and we are available for consultation as soon as the next day */}
{/**We use top quality painting products from the market only. Moreover, painting requires skill and expertise */}

      {/* How We Work Section */}
      <div className='flex flex-col justify-center gap-8 items-center py-20 container mx-auto text-center px-4'>
        <h1 className='text-6xl'><span className='text-[#008000]'>How We</span> Work</h1>
        <p className='text-xl pb-10'>
        Planning administration with one of our nearby groups is simple. We are your one-call answer for all your home improvement and business upkeep needs! You can likewise start the planning system through our internet based assistance booking framework. At the point when you work with us, you can have confidence to outwit our support administrations.
        </p>

        <div className='flex flex-wrap justify-between gap-6'>
          <Card className='lg:w-[20%]' img='/homepage/checkmark.png' text='Drop an inquiry' />
          <Card className='lg:w-[20%]' img='/homepage/fa-solid_pencil-ruler.png' text='Inspection & Quotation' />
          <Card className='lg:w-[20%]' img='/homepage/mdi_like.png' text='Scope Matrix & Timeline' />
          <Card className='lg:w-[20%]' img='/homepage/handshake.png' text='Handover Work To Client' />
        </div>
      </div>
    </>
  );
}
