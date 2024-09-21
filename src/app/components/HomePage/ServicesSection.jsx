"use client"; // Ensure this component runs on the client side
import { useEffect } from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Default styles, can be customized
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

const ServicesSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#1A7DC1] to-primary py-20 lg:pt-24 relative">
      <div className="container mx-auto relative z-20 px-4">
        {/* Tabs Centered at the Top */}
        <div className="flex justify-center">
          <Tabs>
            <TabList className="grid grid-cols-2 lg:grid-cols-4 max-w-screen-xl 2xl:mx-auto lg:mx-12 justify-between mb-16 space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-4 text-base lg:text-lg font-semibold bg-[#333A9A] rounded-2xl lg:rounded-[40px] px-2 py-6 lg:px-4 lg:py-3">
              <Tab
                className="cursor-pointer px-3 lg:px-4 py-2 hover:bg-[#3B43B2] rounded-[20px] lg:rounded-[60px] text-sm sm:text-lg lg:text-xl text-white font-normal text-center flex items-center justify-center"
                selectedClassName="bg-[#3B43B2] font-medium"
              >
                Property Management
              </Tab>
              <Tab
                className="cursor-pointer px-3 lg:px-4 py-2 hover:bg-[#3B43B2] rounded-[20px] lg:rounded-[60px] text-sm sm:text-lg lg:text-xl text-white font-normal text-center flex items-center justify-center"
                selectedClassName="bg-[#3B43B2] font-medium"
              >
                Store Data
              </Tab>
              <Tab
                className="cursor-pointer px-3 lg:px-4 py-2 hover:bg-[#3B43B2] rounded-[20px] lg:rounded-[60px] text-sm sm:text-lg lg:text-xl text-white font-normal text-center flex items-center justify-center"
                selectedClassName="bg-[#3B43B2] font-medium"
              >
                Seamless Communication
              </Tab>
              <Tab
                className="cursor-pointer px-3 lg:px-4 py-2 hover:bg-[#3B43B2] rounded-[20px] lg:rounded-[60px] text-sm sm:text-lg lg:text-xl text-white font-normal text-center flex items-center justify-center"
                selectedClassName="bg-[#3B43B2] font-medium"
              >
                Control Security
              </Tab>
            </TabList>

            {/* Tab Panels */}
            <TabPanel>
              <div className="flex flex-col md:gap-16 gap-10 lg:gap-16 md:flex-col xl:flex-row items-start justify-between max-w-screen-2xl mx-auto">
                {/* Left Side Image */}
                <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
                  <div className="relative w-full">
                    <Image
                      src="/images/homePage/servicesSection/main.png" // Correct image path
                      alt="Property Management"
                      width={800}
                      height={532}
                      objectFit="contain"
                      priority
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div
                  className="flex-1 text-white lg:pl-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium mb-6">
                    See the small details and the big picture
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#E6E6E6]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:gap-16 gap-10 lg:gap-16 md:flex-col xl:flex-row items-start justify-between max-w-screen-2xl mx-auto">
                {/* Left Side Image */}
                <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
                  <div className="relative w-full">
                    <Image
                      src="/images/homePage/servicesSection/main.png" // Correct image path
                      alt="Store Data"
                      width={800}
                      height={532}
                      objectFit="contain"
                      priority
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div
                  className="flex-1 text-white lg:pl-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium mb-6">
                    Store Your Data Securely
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#E6E6E6]">
                    Our secure data storage solutions ensure that your
                    information is safe and accessible whenever you need it.
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:gap-16 gap-10 lg:gap-16 md:flex-col xl:flex-row items-start justify-between max-w-screen-2xl mx-auto">
                {/* Left Side Image */}
                <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
                  <div className="relative w-full">
                    <Image
                      src="/images/homePage/servicesSection/main.png" // Correct image path
                      alt="Communication"
                      width={800}
                      height={532}
                      objectFit="contain"
                      priority
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div
                  className="flex-1 text-white lg:pl-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium mb-6">
                    Seamless Communication
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#E6E6E6]">
                    Enjoy uninterrupted communication with our integrated
                    messaging system for residents and management.
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:gap-16 gap-10 lg:gap-16 md:flex-col xl:flex-row items-start justify-between max-w-screen-2xl mx-auto">
                {/* Left Side Image */}
                <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
                  <div className="relative w-full">
                    <Image
                      src="/images/homePage/servicesSection/main.png" // Correct image path
                      alt="Control Security"
                      width={800}
                      height={532}
                      objectFit="contain"
                      priority
                      className="rounded-lg"
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div
                  className="flex-1 text-white lg:pl-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium mb-6">
                    Control Security
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#E6E6E6]">
                    Enhance your security with our comprehensive control systems
                    that ensure safety for all residents.
                  </p>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      {/* Decorative Image Element */}
      <div className="absolute left-0 top-0">
        <Image
          width={568}
          height={447}
          src="/images/homePage/servicesSection/ring.png" // Correct image path
          alt="Decorative Ring"
          className="w-96 animate-pulse"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
