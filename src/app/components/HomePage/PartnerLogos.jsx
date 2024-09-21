import React from "react";
import Image from "next/image";

const PartnerLogos = () => {
  return (
    <div className="bg-white pb-20 lg:pb-24 ">
      <div className="container flex flex-col lg:flex-row gap-2 lg:gap-20 justify-between max-w-screen-xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-[32px] md:text-[40px] text-accent font-medium mb-10 text-center lg:text-left">
          Proud to partner with
        </h2>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 md:gap-8">
          {/* Logo 1 */}
          <div className="w-24 sm:w-32" data-aos="fade-up">
            <Image
              src="/images/homePage/partnersLogos/logo1.png" // Ensure the image path is correct
              alt="Capterra"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="w-24 sm:w-32" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/images/homePage/partnersLogos/logo2.png" // Ensure the image path is correct
              alt="Easiest to Use"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div className="w-24 sm:w-32" data-aos="fade-up" data-aos-delay="200">
            <Image
              src="/images/homePage/partnersLogos/logo3.png" // Ensure the image path is correct
              alt="GetApp"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div className="w-24 sm:w-32" data-aos="fade-up" data-aos-delay="300">
            <Image
              src="/images/homePage/partnersLogos/logo4.png" // Ensure the image path is correct
              alt="SourceForge"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
