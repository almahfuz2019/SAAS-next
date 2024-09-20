import React from "react";

const PackagesSection = () => {
  return (
    <div className=" container mx-auto max-w-screen-xl px-4 py-16">
      <div className="">
        {/* Title Section */}
        <div className="text-center text-white mb-12 bg-primary px-20 pt-16 pb-60">
          <h2 className="text-4xl font-bold">
            Chose your <span className="text-yellow-400">Package</span> Which is
            perfect for your Condo
          </h2>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 -mt-60 px-40">
          {/* Basic Package */}
          <div className="bg-white rounded-2xl shadow-md  pb-6">
            <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
            <div className="px-6">
              <h3 className="text-xl font-semibold text-center mb-4">Basic</h3>
              <p className="text-gray-600 text-center mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor cididunt ut labore et
              </p>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="text-blue-600 font-semibold inline-flex items-center"
              >
                Details <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Customize Package */}
          <div className="bg-white rounded-2xl shadow-md  pb-6">
            <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
            <div className="px-6">
              <h3 className="text-xl font-semibold text-center mb-4">Basic</h3>
              <p className="text-gray-600 text-center mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor cididunt ut labore et
              </p>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="text-blue-600 font-semibold inline-flex items-center"
              >
                Details <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-white rounded-2xl shadow-md  pb-6">
            <div className="bg-[#FFB400] h-6 rounded-t-2xl mb-4"></div>
            <div className="px-6">
              <h3 className="text-xl font-semibold text-center mb-4">Basic</h3>
              <p className="text-gray-600 text-center mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor cididunt ut labore et
              </p>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="text-blue-600 font-semibold inline-flex items-center"
              >
                Details <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
