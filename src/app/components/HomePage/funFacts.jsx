import React from "react";

const FunFacts = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 bg-white max-w-screen-xl gap-10 mx-auto">
      {/* Stats Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Stat Card 1 */}
        <div
          className="bg-primary w-48 text-white rounded-2xl px-6 py-8 relative"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
          }}
        >
          <h2 className="text-7xl font-semibold text-[#FFB400]">4.5</h2>
          <p className="mt-2 text-2xl text-left">Customer Ratings</p>
        </div>

        {/* Stat Card 2 */}
        <div
          className="bg-primary w-48 text-white rounded-2xl px-6 py-8 relative"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
          }}
        >
          <h2 className="text-7xl font-semibold text-[#FFB400]">30+</h2>
          <p className="mt-2 text-2xl text-left">Legal Properties</p>
        </div>

        {/* Stat Card 3 */}
        <div
          className="bg-primary w-48 text-white rounded-2xl px-6 py-8 relative"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
          }}
        >
          <h2 className="text-7xl font-semibold text-[#FFB400]">10+</h2>
          <p className="mt-2 text-2xl text-left">Working Professionals</p>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h3 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[50px] font-semibold text-accent">
          Best choice for property management and services
        </h3>
        <p className="mt-4 text-lg md:text-xl text-[#676767]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
    </div>
  );
};

export default FunFacts;
