// Ensure this component runs on the client side
import Image from "next/image";
import React from "react";
import vactor from "../../../../public/images/homePage/heroSection/mainImage.png";

const HeroSection = () => {
  return (
    <div className="bg-white relative h-screen lg:h-[90vh] 2xl:h-[80vh] flex items-center justify-start">
      <div className="container mx-auto max-w-screen-xl py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-between">
        {/* Text Section */}
        <div
          className="flex-1 px-4 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold lg:leading-[50px] text-accent mb-6">
            Your <span className="text-primary">Condo</span>, your{" "}
            <span className="text-primary">control</span>
            <br className="hidden md:block" /> and we make it happen
          </h1>
          <p className="text-[#676767] text-lg sm:text-xl mb-8">
            Eliminate manual tasks and administrative headaches while
            streamlining and automating day-to-day processes. Our solutions make
            life easier for property managers, boards, developers, and
            residents.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-primary rounded-full text-white px-6 py-3 hover:bg-[#3B43B2] transition duration-300 text-lg font-medium">
              Get Started
            </button>
            <button className="bg-[#333A9A1A] rounded-full text-primary px-6 py-3 hover:bg-primary hover:text-white transition duration-300 text-lg font-medium">
              Request a Demo
            </button>
          </div>
        </div>

        {/* Right Side Image Section */}
        <div
          className="flex-1 lg:w-[50vw] relative ml-4 lg:ml-0 lg:top-10 lg:absolute right-0 bottom-0 items-end"
          data-aos="fade-left"
        >
          {/* Image */}
          <div className="relative w-full">
            <Image
              width={941}
              height={660}
              src={vactor} // Your uploaded image
              alt="Condo Cloud Graphic"
              className="object-contain transition-transform duration-500 hover:scale-105" // Add hover effect
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
