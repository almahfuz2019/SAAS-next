import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const PackagesSection = () => {
  return (
    <div className="bg-[#F5F8FF]">
      <div className=" container mx-auto max-w-screen-xl  ">
        <div className="">
          {/* Title Section */}
          <div className=" text-white mb-16 bg-primary rounded-3xl px-20 pt-16 pb-60">
            <h2 className="text-[40px] leading-[50px] font-medium">
              Chose your <span className="text-[#FFB400]">Package</span> Which{" "}
              <br /> is perfect for your Condo
            </h2>
            <p className="text-xl mt-4 font-normal">
              From a few listings to many, Condo Cloud adapts to the scale and
              complexity of your operations. <br /> Condo Cloud has affordable
              packages to fit your community’s management and communication
              needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3 -mt-60 px-40">
            {/* Basic Package */}
            <div className="bg-white rounded-2xl shadow-md  pb-6">
              <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
              <div className="px-6">
                <h3 className="text-3xl font-semibold text-center mb-4">
                  Basic
                </h3>
                <p className="text[#676767] text-center mb-6 px-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor cididunt ut labore et
                </p>
              </div>

              <div className="text-center">
                <a
                  href="#"
                  className="text-primary font-semibold inline-flex items-center"
                >
                  Details{" "}
                  <span className="ml-2">
                    {" "}
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>

            {/* Customize Package */}
            <div className="bg-white rounded-2xl shadow-md  pb-6">
              <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
              <div className="px-6">
                <h3 className="text-3xl font-semibold text-center mb-4">
                  Basic
                </h3>
                <p className="text[#676767] text-center mb-6 px-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor cididunt ut labore et
                </p>
              </div>

              <div className="text-center">
                <a
                  href="#"
                  className="text-primary font-semibold inline-flex items-center"
                >
                  Details{" "}
                  <span className="ml-2">
                    {" "}
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-2xl shadow-md  pb-6">
              <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
              <div className="px-6">
                <h3 className="text-3xl font-semibold text-center mb-4">
                  Basic
                </h3>
                <p className="text[#676767] text-center mb-6 px-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor cididunt ut labore et
                </p>
              </div>

              <div className="text-center">
                <a
                  href="#"
                  className="text-primary font-semibold inline-flex items-center"
                >
                  Details{" "}
                  <span className="ml-2">
                    {" "}
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
