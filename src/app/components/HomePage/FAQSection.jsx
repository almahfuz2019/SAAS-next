import Image from "next/image";
import React from "react";

const FaqSection = () => {
  return (
    <div className="bg-[#F5F8FF] py-24">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left side: FAQ title and image */}
        <div className="flex-1">
          <h2 className="text-[40px] text-accent leading-[50px] font-medium  mb-4">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-[#676767] text-xl mb-6">
            Still you have any questions? Contact our Team <br /> via{" "}
            <a href="#" className="text-[#1B8DD3]">
              Loremipsum.com
            </a>
          </p>

          {/* Example Image */}
          <div className="relative">
            <Image
              src="/images/homePage/FAQSection/vactor.png"
              alt="FAQ Image"
              width={651}
              height={515}
            />
          </div>
        </div>

        {/* Right side: FAQ Accordion */}
        <div className="flex-1 ">
          <div className="join gap-4 join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl text-accent font-medium">
                What is Condo Cloud ?
              </div>
              <div className="collapse-content text-[#676767]  border-t border-b-0 border-x-0 border pt-4 text-xl ">
                <p>
                  Condo cloud is a cloud-based software solution designed to
                  simplify the management of condominium properties. Our
                  platform helps streamline communication, automate billing,
                  track maintenance requests, and improve overall efficiency for
                  property managers, board members, and residents.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl text-accent font-medium ">
                Lorem ipsum dolor sit amet, consectetur ?
              </div>
              <div className="collapse-content text-[#676767]  border-t border-b-0 border-x-0 border pt-4 text-xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl text-accent font-medium ">
                Lorem ipsum dolor sit amet, consectetur ?
              </div>
              <div className="collapse-content text-[#676767]  border-t border-b-0 border-x-0 border pt-4 text-xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl text-accent font-medium ">
                Lorem ipsum dolor sit amet, consectetur ?
              </div>
              <div className="collapse-content text-[#676767]  border-t border-b-0 border-x-0 border pt-4 text-xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
