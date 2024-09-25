import Image from "next/image";
import React from "react";

export default function FAQSection() {
  const faqs = [
    {
      id: "faq1",
      question: "What is Condo Cloud?",
      answer:
        "Condo Cloud is a cloud-based software solution designed to simplify the management of condominium properties. Our platform helps streamline communication, automate billing, track maintenance requests, and improve overall efficiency for property managers, board members, and residents.",
    },
    {
      id: "faq2",
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq3",
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq4",
      question: "Lorem ipsum dolor sit amet, consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="lg:mx-20 ">
      <div className="max-w-screen-xl mx-auto  py-20 lg:py-24 bg-primary  sm:px-6 lg:px-8 px-4  lg:rounded-3xl relative">
        <Image
          className="absolute top-0 left-0 animate-pulse"
          src="/images/aboutPage/FAQSection/ring.png"
          height={263}
          width={263}
          alt="Decorative ring"
          aria-hidden="true"
        />
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-[32px] md:text-[40px] leading-tight font-semibold text-white">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-lg md:text-xl text-[#F5F8FF]">
            Still have any questions? Contact our Team via Loremipsum.com
          </p>
        </div>
        <div data-aos="fade-up">
          <div className="join gap-4 join-vertical w-full">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="collapse collapse-arrow join-item border-base-300 border rounded-lg hover:shadow-md transition-shadow duration-300 bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <input
                  type="radio"
                  name="faq-accordion"
                  id={faq.id}
                  defaultChecked={index === 0}
                />
                <label
                  htmlFor={faq.id}
                  className="collapse-title text-xl text-accent font-medium cursor-pointer flex justify-between items-center"
                >
                  {faq.question}
                </label>
                <div className="collapse-content text-[#676767] border-t pt-4 text-lg md:text-xl">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
