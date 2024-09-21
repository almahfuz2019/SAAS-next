import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const PackagesSection = () => {
  return (
    <div className="lg:pt-24 pt-20 lg:pb-6 pb-4  bg-primary sm:bg-white">
      <div className="container mx-auto max-w-screen-xl">
        {" "}
        <div>
          {/* Title Section */}
          <div className="relative text-white mb-16 lg:mx-4 bg-primary lg:rounded-3xl px-4 lg:px-20 pt-16 pb-40 md:pb-60">
            <h2
              data-aos="fade-up"
              className="text-[32px] md:text-[40px] leading-[40px] md:leading-[50px] font-medium z-10 relative"
            >
              Choose your <span className="text-[#FFB400]">Package</span> Which{" "}
              <br className="md:block hidden" /> is perfect for your Condo
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg md:text-xl mt-4 font-normal z-10 relative"
            >
              From a few listings to many, Condo Cloud adapts to the scale and
              complexity of your operations. <br className="hidden lg:block" />{" "}
              Condo Cloud has affordable packages to fit your community’s
              management and communication needs.
            </p>
            <div className="absolute right-0 top-0 ">
              <Image
                src="/images/homePage/Packagers/ring.png" // Ensure this image path is correct
                alt="Dashboard Graphic"
                width={600}
                height={600}
                className="w-72  lg:w-96 animate-pulse"
              />
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-6 lg:gap-8 md:grid-cols-3 -mt-40 md:-mt-60 px-6 lg:px-12 z-10 relative lg:mx-28">
            {/* Basic Package */}
            <div
              className="bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 pb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
              <div className="px-2 lg:px-6">
                <h3 className="text-3xl font-semibold text-center mb-4">
                  Basic
                </h3>
                <p className="text-[#676767] text-center mb-6 px-6">
                  Get essential features to manage your condo with ease and
                  efficiency.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="text-primary font-semibold inline-flex items-center transition-colors duration-300 hover:text-[#FFB400]"
                >
                  Details{" "}
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>

            {/* Custom Package */}
            <div
              className="bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 pb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
              <div className="px-2 lg:px-6">
                <h3 className="text-3xl font-semibold text-center mb-4">
                  Custom
                </h3>
                <p className="text-[#676767] text-center mb-6 px-6">
                  Tailor the package to your specific needs with advanced
                  features and customization options.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="text-primary font-semibold inline-flex items-center transition-colors duration-300 hover:text-[#FFB400]"
                >
                  Details{" "}
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>

            {/* Premium Package */}
            <div
              className="bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 pb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
              <div className="px-2 lg:px-6">
                <h3 className="text-3xl font-semibold text-center mb-4">
                  Premium
                </h3>
                <p className="text-[#676767] text-center mb-6 px-6">
                  Unlock all features for ultimate control and management of
                  your condo community.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="text-primary font-semibold inline-flex items-center transition-colors duration-300 hover:text-[#FFB400]"
                >
                  Details{" "}
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
