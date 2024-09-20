import React from "react";
import Image from "next/image";

const SuccessStories = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Title */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[40px] leading-[50px] font-semibold text-accent">
            Our Success Stories
          </h2>
          <button className="bg-primary rounded-[32px]  text-white px-7  py-3 hover:bg-blue-700 transition duration-300 text-lg font-medium">
            Get Started
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div>
            <div className="relative h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 1"
                layout="fill"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-accent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-xl text-[#676767] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-xl text-primary  font-medium underline underline-offset-2"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Story 2 */}
          <div>
            <div className="relative h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 2"
                layout="fill"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-accent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-xl text-[#676767] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-xl text-primary  font-medium underline underline-offset-2"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Story 3 */}
          <div>
            <div className="relative h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 3"
                layout="fill"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="py-6">
              <h3 className="text-2xl font-semibold text-accent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-xl text-[#676767] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-xl text-primary  font-medium underline underline-offset-2"
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
