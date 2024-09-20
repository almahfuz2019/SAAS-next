import React from "react";
import Image from "next/image";

const PartnerLogos = () => {
  return (
    <div className="bg-white pb-24">
      <div className="container flex gap-10 justify-between max-w-screen-xl mx-auto  px-4">
        {/* Title */}
        <h2 className="text-[40px] text-accent font-medium">
          Proud to partner with
        </h2>

        {/* Partner Logos */}
        <div className="flex justify-center items-center space-x-8">
          {/* Logo 1 */}
          <div className="w-32">
            <Image
              src="/images/homePage/partnersLogos/logo1.png" // Make sure you replace with the actual image path
              alt="Capterra"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="w-32">
            <Image
              src="/images/homePage/partnersLogos/logo2.png" // Make sure you replace with the actual image path
              alt="Easiest to Use"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div className="w-32">
            <Image
              src="/images/homePage/partnersLogos/logo3.png" // Make sure you replace with the actual image path
              alt="GetApp"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div className="w-32">
            <Image
              src="/images/homePage/partnersLogos/logo4.png" // Make sure you replace with the actual image path
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
