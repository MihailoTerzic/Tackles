import Image from "next/image";
import React from "react";

export default function Happiness() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between bg-[#008000] text-white">
      {/* Left (Text Section) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 p-8 text-center md:text-left">
        <h1 className="text-4xl font-bold">Your Happiness,<br />Guaranteed</h1>
        <p className="text-lg md:text-xl max-w-md">
          Your happiness is our goal. If you're not, we'll work to make it right.
          Our friendly customer service agents are available 24/7. The Handy Happiness
          Guarantee only applies when you book and pay for a service directly
          through the Handy platform. Learn More.
        </p>
      </div>

      {/* Right (Image Section) */}
      <div className="w-full md:w-1/2 relative h-72 md:h-[500px]">
        <Image
          src="/homepage/happiness.png"
          alt="Happiness image"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
