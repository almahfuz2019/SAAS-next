import Image from "next/image";
import React from "react";

const FaqSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left side: FAQ title and image */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 mb-6">
            Still you have any questions? Contact our Team via{" "}
            <a href="#" className="text-blue-600">
              Loremipsum.com
            </a>
          </p>

          {/* Example Image */}
          <div className="relative">
            <Image
              src="/images/homePage/FAQSection/vactor.png"
              alt="FAQ Image"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right side: FAQ Accordion */}
        <div className="flex-1">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Lorem ipsum dolor sit amet, consectetur ?
              </div>
              <div className="collapse-content">
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
              <div className="collapse-title text-xl font-medium">
                Lorem ipsum dolor sit amet, consectetur ?
              </div>
              <div className="collapse-content">
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
              <div className="collapse-title text-xl font-medium">
                Lorem ipsum dolor sit amet, consectetur ?
              </div>
              <div className="collapse-content">
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
              <div className="collapse-title text-xl font-medium">
                Lorem ipsum dolor sit amet, consectetur ?
              </div>
              <div className="collapse-content">
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
