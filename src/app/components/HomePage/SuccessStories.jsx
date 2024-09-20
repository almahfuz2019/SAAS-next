import React from "react";
import Image from "next/image";

const SuccessStories = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Title */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Success Stories
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            See More
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Story 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 1"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 2"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Story 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-56">
              <Image
                src="https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg"
                alt="Success Story 3"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-semibold"
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
