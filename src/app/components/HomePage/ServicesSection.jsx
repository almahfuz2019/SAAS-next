"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles, can be customized

const ServicesSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A7DC1] to-primary py-16">
      <div className="container mx-auto  px-4">
        {/* Tabs Centered at the Top */}
        <div className="flex justify-center mb-8 ">
          <Tabs>
            <TabList className="flex justify-between mb-16 space-x-4 text-lg font-semibold bg-[#333A9A] rounded-[80px] px-4 py-3  max-w-screen-xl mx-auto">
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
              <div className="flex flex-col md:flex-row items-start justify-between">
                {/* Left Side Image */}
                <div className="flex-1 mb-10 md:mb-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/homePage/tabSection/main.png" // Ensure this image path is correct
                      alt="Dashboard Graphic"
                      width={600}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-white md:pl-8">
                  <h2 className="text-3xl font-bold mb-4">
                    See the small details and the big picture
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
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
                      src="/images/homePage/tabSection/main.png"
                      alt="Dashboard Graphic"
                      width={600}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-white md:pl-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Store Your Data Safely
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
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
                      src="/images/homePage/tabSection/main.png"
                      alt="Dashboard Graphic"
                      width={600}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-white md:pl-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Communicate Seamlessly
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
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
                      src="/images/homePage/tabSection/main.png"
                      alt="Dashboard Graphic"
                      width={600}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex-1 text-white md:pl-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Ensure Control and Security
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
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
    </div>
  );
};

export default ServicesSection;
