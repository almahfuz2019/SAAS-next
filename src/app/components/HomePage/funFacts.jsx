import React from "react";

const FunFacts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4 bg-white max-w-screen-xl mx-auto">
      <div className="flex items-center space-x-8">
        {/* Stat Card 1 */}
        <div
          className="bg-indigo-800 text-white rounded-lg px-6 py-8 text-center relative"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
          }}
        >
          <h2 className="text-4xl font-bold text-yellow-400">4.5</h2>
          <p className="mt-2 text-lg">Customer Ratings</p>
        </div>

        {/* Stat Card 2 */}
        <div
          className="bg-indigo-800 text-white rounded-lg px-6 py-8 text-center relative"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
          }}
        >
          <h2 className="text-4xl font-bold text-yellow-400">30+</h2>
          <p className="mt-2 text-lg">Legal Properties</p>
        </div>

        {/* Stat Card 3 */}
        <div
          className="bg-indigo-800 text-white rounded-lg px-6 py-8 text-center relative"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
          }}
        >
          <h2 className="text-4xl font-bold text-yellow-400">10+</h2>
          <p className="mt-2 text-lg">Working Professionals</p>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-8 md:mt-0 md:ml-8 max-w-md">
        <h3 className="text-3xl font-bold text-gray-900">
          Best choice for property management and services
        </h3>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
    </div>
  );
};

export default FunFacts;
