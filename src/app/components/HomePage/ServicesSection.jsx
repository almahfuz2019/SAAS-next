"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles, can be customized

const ServicesSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A7DC1] to-primary pt-24 relative">
      <div className="container max-w-screen-xl mx-auto relative z-20  px-4">
        {/* Tabs Centered at the Top */}
        <div className="flex justify-center  ">
          <Tabs>
            <TabList className="flex justify-between mb-16 space-x-4 text-lg font-semibold bg-[#333A9A] rounded-[80px] px-4 py-3   mx-auto">
              <Tab
                className="cursor-pointer px-4 py-2  hover:bg-[#3B43B2] rounded-[60px]   text-2xl  text-white font-normal"
                selectedClassName="bg-[#3B43B2] font-medium"
              >
                Property Management
              </Tab>
              <Tab
                className="cursor-pointer px-4 py-2  hover:bg-[#3B43B2] rounded-[60px]   text-2xl  text-white font-normal"
                selectedClassName="bg-[#3B43B2] font-medium"
              >
                Store Data
              </Tab>
              <Tab
                className="cursor-pointer px-4 py-2  hover:bg-[#3B43B2] rounded-[60px]  text-2xl  text-white font-normal"
                selectedClassName="bg-[#3B43B2] font-medium"
              >
                Seamless Communication
              </Tab>
              <Tab
                className="cursor-pointer px-4 py-2  hover:bg-[#3B43B2] rounded-[60px]   text-2xl  text-white font-normal"
                selectedClassName="bg-[#3B43B2] font-medium"
              >
                Control Security
              </Tab>
            </TabList>

            {/* Tab Panels */}
            <TabPanel>
              <div className="flex flex-col gap-16 md:flex-row items-start justify-between">
                {/* Left Side Image */}
                <div className="flex-1 mb-10 md:mb-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/homePage/servicesSection/main.png" // Ensure this image path is correct
                      alt="Dashboard Graphic"
                      width={800}
                      height={532}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-white md:pl-8">
                  <h2 className="text-[40px] leading-[50px] font-medium  mb-6">
                    See the small details and the big picture
                  </h2>
                  <p className="text-lg leading-relaxed text-[#E6E6E6]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row items-start justify-between">
                {/* Left Side Image */}
                <div className="flex-1 mb-10 md:mb-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/homePage/servicesSection/main.png" // Ensure this image path is correct
                      alt="Dashboard Graphic"
                      width={800}
                      height={532}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-white md:pl-8">
                  <h2 className="text-[40px] leading-[50px] font-medium  mb-6">
                    Store Your Data Safely
                  </h2>
                  <p className="text-lg leading-relaxed text-[#E6E6E6]">
                    Store all your data securely in the cloud with easy access
                    and safe retrieval. Our solutions guarantee security and
                    availability for your team anytime, anywhere.
                  </p>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row items-start justify-between">
                {/* Left Side Image */}
                <div className="flex-1 mb-10 md:mb-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/homePage/servicesSection/main.png" // Ensure this image path is correct
                      alt="Dashboard Graphic"
                      width={800}
                      height={532}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-white md:pl-8">
                  <h2 className="text-[40px] leading-[50px] font-medium  mb-6">
                    Communicate Seamlessly
                  </h2>
                  <p className="text-lg leading-relaxed text-[#E6E6E6]">
                    Seamless communication channels integrated into the platform
                    for effective collaboration among team members, property
                    managers, and residents.
                  </p>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col md:flex-row items-start justify-between">
                {/* Left Side Image */}
                <div className="flex-1 mb-10 md:mb-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/homePage/servicesSection/main.png" // Ensure this image path is correct
                      alt="Dashboard Graphic"
                      width={800}
                      height={532}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-white md:pl-8">
                  <h2 className="text-[40px] leading-[50px] font-medium  mb-6">
                    Ensure Control and Security
                  </h2>
                  <p className="text-lg leading-relaxed text-[#E6E6E6]">
                    Control and monitor the security of your property and data
                    with cutting-edge security features built into the platform
                    for 24/7 monitoring.
                  </p>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="absolute left-0 top-0 ">
        <Image
          width={568}
          height={447}
          src="/images/homePage/servicesSection/ring.png" // Your uploaded image
          alt="Condo Cloud Graphic"
          className="w-80 animate-pulse "
        />
      </div>
    </div>
  );
};

export default ServicesSection;
