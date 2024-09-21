import React from "react";
const FunFacts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between  px-4 bg-white max-w-screen-xl gap-10 mx-auto pt-20 lg:pt-24">
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 lg:gap-8 md:grid-cols-3 items-center justify-center">
        {/* Stat Cards */}
        {[
          { value: "4.5", label: "Customer Ratings" },
          { value: "30+", label: "Legal Properties" },
          { value: "10+", label: "Working Professionals" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-primary md:w-48 text-white rounded-2xl px-6 py-8 relative"
            style={{
              clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
            }}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Stagger the animations
          >
            <h2 className="text-6xl md:text-7xl font-semibold text-[#FFB400]">
              {stat.value}
            </h2>
            <p className="mt-2 text-2xl text-left">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="mt-8 md:mt-0 md:ml-8" data-aos="fade-up">
        <h3 className="text-[32px] md:text-[40px] leading-tight font-semibold text-accent">
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
