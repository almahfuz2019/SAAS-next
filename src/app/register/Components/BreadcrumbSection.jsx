import Image from "next/image";
import React from "react";

export default function Breadcrumb() {
  return (
    <div class="bg-gradient-to-r  from-[#1A7DC1] via-[#1A7DC1] to-[#333A9A] relative text-center">
      <Image
        className="absolute top-0 left-0 w-32 animate-pulse md:w-40 lg:w-auto"
        src="/images/aboutPage/Breadcrumb/ring1.png"
        height={263}
        width={263}
        alt="ring"
      />
      <div className="md:py-10 py-5 relative z-50">
        <h1 className="text-white font-medium text-[32px] lg:text-[40px] ">
          Registration
        </h1>
        <p className="text-[#FFB400] mt-2">Home / Registration</p>
      </div>
      <Image
        className="absolute bottom-0 right-0 w-32 animate-pulse md:w-40 lg:w-auto"
        src="/images/aboutPage/Breadcrumb/ring2.png"
        height={263}
        width={263}
        alt="ring"
      />
    </div>
  );
}
