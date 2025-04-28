import Image from 'next/image';
import React from 'react';

const Card = ({ img, text, description, className = "" }) => {
  return (
    <div className={`border-2 border-green-400 p-6 flex flex-col items-center justify-around gap-5 w-full md:w-[45%] lg:w-[22%] ${className}`}>
      <Image src={img} alt={text} width={50} height={50} className='object-contain' />
      <p className='text-2xl font-semibold text-center'>{text}</p>
      {description && <p className='text-center'>{description}</p>}
    </div>
  );
};

export default function WhyChoose() {
  return (
    <>
      {/* Why Choose Section */}
      <div className='flex flex-col justify-center gap-8 items-center py-20 pt-25 container mx-auto text-center px-4'>
        <h1 className='text-5xl font-bold'><span className='text-green-400'>Why Choose</span> Tackles</h1>
        <p className='text-xl max-w-3xl'>
          With so many painting contractors to choose from, why would you choose us? First, if you ever worked with us before, you know why — but for those who have not, allow us to explain.
        </p>

        <div className='flex flex-wrap justify-center gap-6'>
          <Card img='/homepage/fast service icon.png' text='Fast Services' description='We respond to any inquiry within two hours; we are available for consultation as soon as the next day' />
          <Card img='/homepage/paint icon.png' text='Quality Work' description='We use top quality painting products from the market only. Moreover, painting requires skill and expertise' />
          <Card img='/homepage/smile-beam icon.png' text='Customer Satisfaction' description='We are a painting company who is not happy until you are happy. Therefore, our team will talk you through the process' />
        </div>
      </div>

      {/* How We Work Section */}
      <div className='flex flex-col justify-center gap-8 items-center py-20 container mx-auto text-center px-4'>
        <h1 className='text-5xl font-bold'><span className='text-green-400'>How We</span> Work</h1>
        <p className='text-xl max-w-3xl'>
          Planning administration with one of our nearby groups is simple. We are your one-call answer for all your home improvement and business upkeep needs!
        </p>

        <div className='flex flex-wrap justify-center gap-6'>
          <Card img='/checkmark.png' text='Drop an inquiry' />
          <Card img='/fa-solid_pencil-ruler.png' text='Inspection & Quotation' />
          <Card img='/mdi_like.png' text='Scope Matrix & Timeline' />
          <Card img='/handshake.png' text='Handover Work To Client' />
        </div>
      </div>
    </>
  );
}
