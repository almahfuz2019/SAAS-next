"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom arrows for the slider
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white p-2 rounded-full shadow-lg absolute top-1/2 transform -translate-y-1/2 right-4 z-10"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white p-2 rounded-full shadow-lg absolute top-1/2 transform -translate-y-1/2 left-4 z-10"
  >
    <FaArrowLeft />
  </button>
);

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-10">
          Reliable Software Inspired By Real Feedback
        </h2>

        {/* Slider */}
        <Slider {...settings} className="relative">
          {/* Testimonial 1 */}
          <div className="px-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Condo Control is by far the best system for HOA management that
                I have worked with in my 14 years of managing. Easy to learn,
                easy to use...
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Leanne Ardilla"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">Leanne Ardilla</h3>
                  <p className="text-gray-500 text-sm">
                    Community Manager <br />
                    JD Richardson Co
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="px-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Condo Control has transformed our HOA operations. The software
                is intuitive, easy to navigate, and has drastically improved our
                workflow...
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Leanne Ardilla"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">Leanne Ardilla</h3>
                  <p className="text-gray-500 text-sm">
                    Community Manager <br />
                    JD Richardson Co
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="px-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We've been using Condo Control for over a year now, and the
                difference it has made is night and day. The customer support is
                top-notch!
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Leanne Ardilla"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">Leanne Ardilla</h3>
                  <p className="text-gray-500 text-sm">
                    Community Manager <br />
                    JD Richardson Co
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
