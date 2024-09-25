import Image from "next/image";
import React from "react";

export default function Breadcrumb() {
  return (
    <div className="bg-gradient-to-r from-[#1A7DC1] via-[#1A7DC1] to-[#333A9A] relative text-center overflow-hidden">
      {/* Decorative Left Image */}
      <Image
        className="absolute top-0 left-0"
        src="/images/aboutPage/Breadcrumb/ring1.png"
        height={263}
        width={263}
        alt="decorative ring"
        aria-hidden="true"
      />

      {/* Breadcrumb Text Section */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-white font-medium text-[32px] sm:text-[40px]">
          Blogs
        </h1>
        <p className="text-[#FFB400] mt-2 text-base sm:text-lg">Home / Blogs</p>
      </div>

      {/* Decorative Right Image */}
      <Image
        className="absolute bottom-0 right-0"
        src="/images/aboutPage/Breadcrumb/ring2.png"
        height={263}
        width={263}
        alt="decorative ring"
        aria-hidden="true"
      />
    </div>
  );
}
