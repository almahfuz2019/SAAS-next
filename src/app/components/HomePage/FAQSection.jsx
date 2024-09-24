import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Importing icons

const FaqSection = () => {
  return (
    <div className="lg:py-24 py-20 bg-gradient-to-b ">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left side: FAQ title and image */}
        <div className="flex-1" data-aos="fade-up">
          <h2 className="text-[32px] md:text-[40px] text-accent leading-[40px] md:leading-[50px] font-medium mb-4">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-[#676767] text-lg md:text-xl mb-6">
            Still have any questions? Contact our Team via{" "}
            <a href="#" className="text-[#1B8DD3]">
              Loremipsum.com
            </a>
          </p>

          {/* Example Image */}
          <div className="relative w-full h-auto mt-16 lg:mt-0">
            <Image
              src="/images/homePage/FAQSection/vactor.png"
              alt="FAQ Image"
              width={651}
              height={515}
              className=" object-contain "
            />
          </div>
        </div>

        {/* Right side: FAQ Accordion */}
        <div className="flex-1" data-aos="fade-up">
          <div className="join gap-4 join-vertical w-full">
            {/* FAQ Item 1 */}
            <div
              className="collapse collapse-arrow join-item border-base-300 border rounded-lg hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
            >
              <input
                type="radio"
                name="my-accordion-4"
                id="faq1"
                defaultChecked
              />
              <label
                htmlFor="faq1"
                className="collapse-title text-xl text-accent font-medium cursor-pointer flex justify-between items-center"
              >
                What is Condo Cloud?
              
              </label>
              <div className="collapse-content text-[#676767] border-t pt-4 text-lg md:text-xl">
                <p>
                  Condo Cloud is a cloud-based software solution designed to
                  simplify the management of condominium properties. Our
                  platform helps streamline communication, automate billing,
                  track maintenance requests, and improve overall efficiency for
                  property managers, board members, and residents.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div
              className="collapse collapse-arrow join-item border-base-300 border rounded-lg hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <input type="radio" name="my-accordion-4" id="faq2" />
              <label
                htmlFor="faq2"
                className="collapse-title text-xl text-accent font-medium cursor-pointer flex justify-between items-center"
              >
                Lorem ipsum dolor sit amet, consectetur?
              
              </label>
              <div className="collapse-content text-[#676767] border-t pt-4 text-lg md:text-xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div
              className="collapse collapse-arrow join-item border-base-300 border rounded-lg hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input type="radio" name="my-accordion-4" id="faq3" />
              <label
                htmlFor="faq3"
                className="collapse-title text-xl text-accent font-medium cursor-pointer flex justify-between items-center"
              >
                Lorem ipsum dolor sit amet, consectetur?
              
              </label>
              <div className="collapse-content text-[#676767] border-t pt-4 text-lg md:text-xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div
              className="collapse collapse-arrow join-item border-base-300 border rounded-lg hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <input type="radio" name="my-accordion-4" id="faq4" />
              <label
                htmlFor="faq4"
                className="collapse-title text-xl text-accent font-medium cursor-pointer flex justify-between items-center"
              >
                Lorem ipsum dolor sit amet, consectetur?
              
              </label>
              <div className="collapse-content text-[#676767] border-t pt-4 text-lg md:text-xl">
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
