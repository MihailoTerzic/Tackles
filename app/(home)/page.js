import Image from "next/image";
import Hero from "./Hero";
import ServiceSection from "./serviceSection";
import Happiness from "./Happiness";
import WhyChoose from "./WhyChoose";
import FAQ from "./FAQ";

export default function Home() {
  return (
  <>
  <Hero/>
  <ServiceSection/>
  <Happiness/>
  <WhyChoose/>
  <FAQ/>
  </>
  );
}
