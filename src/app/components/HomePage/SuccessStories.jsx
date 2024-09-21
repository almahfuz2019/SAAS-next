import React from "react";
import Image from "next/image";

const SuccessStories = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Title and Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[50px] font-semibold text-accent mb-4 md:mb-0">
            Our Success Stories
          </h2>
          <button
            className="bg-primary rounded-[32px] text-white px-6 md:px-7 py-3 hover:bg-blue-700 transition duration-300 text-lg font-medium"
            aria-label="See more success stories"
          >
            See More
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div className="bg-[#F5F8FF] rounded-2xl p-5" data-aos="fade-up">
            <div className="relative w-full h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 1"
                layout="responsive"
                width={700}
                height={400}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-accent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-lg md:text-xl text-[#676767] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-lg md:text-xl text-primary font-medium underline underline-offset-2"
                aria-label="Read more about story 1"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Story 2 */}
          <div
            className="bg-[#F5F8FF] rounded-2xl p-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative w-full h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 2"
                layout="responsive"
                width={700}
                height={400}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-accent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-lg md:text-xl text-[#676767] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-lg md:text-xl text-primary font-medium underline underline-offset-2"
                aria-label="Read more about story 2"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Story 3 */}
          <div
            className="bg-[#F5F8FF] rounded-2xl p-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative w-full h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 3"
                layout="responsive"
                width={700}
                height={400}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-accent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-lg md:text-xl text-[#676767] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-lg md:text-xl text-primary font-medium underline underline-offset-2"
                aria-label="Read more about story 3"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
