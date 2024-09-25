import Image from "next/image";
import React from "react";

export default function OurStory_Mission_Vision_Section() {
  return (
    <div className="max-w-screen-xl mx-auto py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 align-top items-start">
        {/* Our Story Section */}
        <div className="bg-[#F5F8FF] p-8 rounded-lg ">
          <h3 className="text-[28px] sm:text-[32px] md:text-[40px] leading-tight font-semibold text-accent mb-6">
            Our Story
          </h3>{" "}
          <Image
            src="/images/aboutPage/OurStory_Mission_vission_Section/employeesImage1.png"
            height={501}
            width={553}
            alt="Employees working together"
            className="rounded-lg"
          />
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#676767]">
            Condo Cloud was born out of a desire to solve a common problem in
            condo living: the inefficiencies in managing and maintaining
            properties. As former property managers and residents ourselves, we
            experienced first-hand the frustrations that come with outdated
            systems, delayed communication, and disorganized management. We knew
            there had to be a better way. <br />
            <br /> In [Year of Founding], we set out to develop a cloud-based
            solution that would bridge the gap between management and residents,
            making daily operations smoother and more organized. Today, Condo
            Cloud is trusted by condo communities of all sizes to simplify their
            management processes and improve the quality of living for everyone
            involved.
          </p>
        </div>

        {/* Our Mission & Vision Section */}
        <div className="bg-[#F5F8FF] p-8 rounded-lg ">
          <h3 className="text-[28px] sm:text-[32px] md:text-[40px] leading-tight font-semibold text-accent">
            Our Mission & Vision
          </h3>
          <p className="mt-4 mb-6 text-base sm:text-lg md:text-xl text-[#676767]">
            Our mission is to simplify condo management through cutting-edge
            technology. We aim to provide property managers and residents with
            an intuitive platform that enhances communication, increases
            transparency, and automates routine tasks, allowing for a better
            living experience. <br />
            <br /> We envision a world where condo communities operate
            seamlessly, with management and residents connected effortlessly
            through technology. By continuously innovating and improving our
            platform, we strive to set the standard for condo management
            software and become the leading solution for condo communities
            worldwide.
          </p>
          <Image
            src="/images/aboutPage/OurStory_Mission_vission_Section/employeesImage2.png"
            height={501}
            width={553}
            alt="Team working on condo management software"
            className="rounded-lg mt-6"
          />
        </div>
      </div>
    </div>
  );
}
