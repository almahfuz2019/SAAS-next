import Image from "next/image";
import React from "react";
export default function ContactSection() {
  return (
    <div className="mx-auto px-4 md:px-8 lg:mt-40 bg-primary ">
      <div className="max-w-screen-xl container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 justify-between">
          {/* Text Section with AOS Animation */}
          <div
            className="py-20 md:pt-24 text-white"
            data-aos="fade-up" // AOS animation for text
          >
            <p className="text-2xl md:text-3xl">
              Transform How You Manage, Streamline, Simplify, Organize
            </p>
            <h3 className="text-[32px] md:text-[40px] font-medium mt-3 mb-6 md:mb-10">
              Join Us Today
            </h3>
            <button
              className="bg-white rounded-[32px] text-primary px-5 md:px-7 py-3 hover:bg-gray-100 transition duration-300 text-base md:text-lg font-medium"
              aria-label="See more success stories"
              data-aos="fade-up" // AOS animation for the button
              data-aos-delay="100" // Delay animation by 300ms
            >
              Contact Us
            </button>
          </div>

          {/* Image Section with AOS Animation */}
          <div
            className="flex justify-center md:justify-end -mt-20 md:-mt-36"
            data-aos="fade-up" // AOS animation for the image
          >
            <Image
              src="/images/homePage/ContactSection/laptop.png"
              height={628}
              width={677}
              alt="Laptop Image"
              className="md:w-auto" // Ensures the image scales on smaller screens
            />
          </div>
        </div>
      </div>
    </div>
  );
}
