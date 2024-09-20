import Image from "next/image";
import React from "react";
import vactor from "../../../../public/images/homePage/heroSection/mainImage.png";
const HeroSection = () => {
  return (
    <div className="bg-white relative h-[80vh] flex items-center justify-start ">
      <div className="container mx-auto max-w-screen-xl py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-[40px] font-bold leading-[50px] text-accent mb-4">
            Your <span className="text-primary">Condo</span>, your{" "}
            <span className="text-primary">control</span>
            <br /> and we make it happen
          </h1>
          <p className="text-[#676767] text-lg mb-10">
            Eliminate manual tasks and administrative headaches while
            streamlining and automating day-to-day processes. Our solutions make
            life easier for property managers, boards, developers, and
            residents.
          </p>
          <div className="space-x-4">
            <button className="bg-primary rounded-[32px]  text-white px-7  py-3 hover:bg-blue-700 transition duration-300 text-lg font-medium">
              Get Started
            </button>
            <button className="bg-[#333A9A1A] rounded-[32px]  text-primary px-7  py-3 hover:bg-blue-700 transition duration-300 text-lg font-medium">
              Request a Demo
            </button>
          </div>
        </div>

        {/* Right Side Image Section */}
        <div className="flex-1 relative lg:absolute right-0 bottom-0">
          {/* Image */}
          <div className="relative w-full">
            <Image
              width={941}
              height={660}
              src={vactor} // Your uploaded image
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
