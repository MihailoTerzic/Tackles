import Image from "next/image";
import Hero from "./Hero";
import ServiceSection from "./serviceSection";
import Happiness from "./Happiness";
import WhyChoose from "./WhyChoose";
import FAQ from "./FAQ";
import TestimonialsCarousel from "./testimonials"

export default function Home() {
  return (
  <>
  <Hero/>
  <div className="bg-white text-black">

  <ServiceSection/>
  <Happiness/>
  <WhyChoose/>
  <TestimonialsCarousel/>
  <FAQ/>
  </div>
  </>
  );
}
