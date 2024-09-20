import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-screen-xl py-16 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your <span className="text-primary">Condo</span>, your{" "}
            <span className="text-primary">control</span>
            <br /> and we make it happen
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            Eliminate manual tasks and administrative headaches while
            streamlining and automating day-to-day processes. Our solutions make
            life easier for property managers, boards, developers, and
            residents.
          </p>
          <div className="space-x-4">
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
              Request a Demo
            </button>
          </div>
        </div>

        {/* Right Side Image Section */}
        <div className="flex-1 relative">
          {/* Image */}
          <div className="relative w-full">
            <Image
              width={941}
              height={660}
              src="/images/HomePage/HeroSection/mainImage.png" // Your uploaded image
              alt="Condo Cloud Graphic"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
