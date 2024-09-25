import Image from "next/image";
import React from "react";

export default function Overview() {
  return (
    <div className="max-w-screen-xl mx-auto pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="" data-aos="fade-up">
          <h3 className="text-[28px] sm:text-[32px] md:text-[40px] leading-tight font-semibold text-accent">
            About Condo Cloud
          </h3>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#676767]">
            At Condo Cloud, we are dedicated to revolutionizing condo management
            through innovative technology. Our platform is designed to empower
            property managers, board members, and residents by providing them
            with the tools they need to streamline operations, enhance
            communication, and create a harmonious living environment. With a
            deep understanding of the unique challenges faced by condo
            communities, we are committed to simplifying the management process,
            making it more efficient and transparent.
          </p>
        </div>
        <Image
          src="/images/aboutPage/OverviewSection/image.png"
          height={501}
          width={553}
          alt="Illustration of property management services"
          priority
        />
      </div>
    </div>
  );
}
