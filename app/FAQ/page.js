'use client'
import TopHero from '@/components/TopHero';
import React, { useState } from 'react';

const faqs = [
  {
    question: "Q: What services do you offer?",
    answer: "We offer a wide range of home improvement services, including painting, plumbing, electrical, and more.",
  },
  {
    question: "Q: How do I get started with my renovation project?",
    answer: "You can book a service through our website or mobile app using the online booking system.",
  },
  {
    question: "Q: What sets Tackles apart from other companies?",
    answer: "Yes, all of our contractors are fully licensed, vetted, and insured professionals.",
  },
  {
    question: "Q: How long does a typical renovation project take?",
    answer: "In most cases, we offer same-day or next-day service depending on availability.",
  },
  {
    question: "Q: Do you handle all aspects of the renovation process?",
    answer: "Payment is made directly through the platform via secure online payment methods.",
  },
  {
    question: "Q: Is it safe to use chemical drain cleaners?",
    answer: "Yes, you can cancel or reschedule up to 24 hours before your appointment without penalty.",
  },
  {
    question: "Q: How are Quotations provided?",
    answer: "We offer a satisfaction guarantee and will work with you to resolve any issues.",
  },
  {
    question: "Q: Do I need to pay for a Quotation?",
    answer: "Yes, our professionals come fully equipped with all the necessary tools and materials.",
  },
  {
    question: "Q: How long are your Quotations valid for?",
    answer: "Absolutely! Our customer service is available 24/7 to assist you with any concerns.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    
     <TopHero img={'/services/hero.jpg'} name={'Frequently Asked Questions'} />
    <div className="container mx-auto w-[80%] py-20 flex flex-col gap-8">
     

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
          onClick={() => toggle(index)}
            key={index}
            className="border border-gray-300 rounded-lg p-5   shadow-sm transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium"
              
            >
              <span className='font-bold'>{faq.question}</span>
              <span className="text-2xl font-bold">
                {openIndex === index ? '–' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
