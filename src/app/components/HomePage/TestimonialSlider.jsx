"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Leanne Ardilla",
    title: "Community Manager",
    review:
      "Condo Cloud is by far the best system for HOA management that I have worked with in my 14 years of managing. Easy to learn, easy to use...",
    image:
      "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5,
  },
  {
    name: "William Joe",
    title: "Property Manager",
    review:
      "Easy to track information already gathered. Organize and quick. Always up to date. Very customizable to the needs of the user regarding the condo/building...",
    image:
      "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5,
  },
  {
    name: "Amelia Black",
    title: "Condo Owner",
    review:
      "Contact my building property manager directly to solve the problem without transferring information in between. I like everything. No complaints at all...",
    image:
      "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5,
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 25,
    },
    breakpoints: {
      "(max-width: 1220px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(max-width: 500px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="bg-[#F5F8FF] py-20 lg:py-24 px-4">
      <div data-aos="fade-up" className="w-full max-w-screen-2xl mx-auto ">
        <h1 className="text-[32px] md:text-[40px] text-accent leading-[40px] md:leading-[50px] font-medium mb-16 lg:text-center">
          Reliable Software Inspired By Real Feedback
        </h1>

        <div ref={sliderRef} className="keen-slider ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`keen-slider__slide flex flex-col gap-4 justify-between px-6 py-8 rounded-lg border border-[#E4E4E4] shadow-lg ${
                currentSlide === index ? "current-slide bg-white" : ""
              }`}
            >
              <div className="flex justify-start gap-1">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Image
                    key={i}
                    src="/images/homePage/TestimonialSection/star.png"
                    height="30"
                    width="30"
                    alt="Star"
                    className="rounded-full cursor-pointer"
                  />
                ))}
              </div>
              <p className="text-base lg:text-lg text-justify font-normal text-gray-700 border-b border-gray-300 py-4 lg:py-5">
                {testimonial.review}
              </p>
              <div className="flex items-center justify-start gap-3">
                <Image
                  src={testimonial.image}
                  height={64}
                  width={64}
                  alt={testimonial.name}
                  className="rounded-full h-16 object-cover w-16"
                />
                <div>
                  <p className="text-sm lg:text-base font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-500">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loaded && (
          <div className="flex justify-center mt-8 items-center gap-2 md:gap-4">
            <Image
              onClick={() => instanceRef.current.prev()}
              src="/images/homePage/TestimonialSection/rightArrow.png"
              height="40"
              width="40"
              alt="Previous"
              className="cursor-pointer rounded-full transition-transform transform hover:scale-110 rotate-180"
            />
            <span className="text-lg lg:text-xl">
              {currentSlide + 1} / {testimonials.length}
            </span>
            <Image
              onClick={() => instanceRef.current.next()}
              src="/images/homePage/TestimonialSection/rightArrow.png"
              height="40"
              width="40"
              alt="Next"
              className="cursor-pointer rounded-full transition-transform transform hover:scale-110"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;
