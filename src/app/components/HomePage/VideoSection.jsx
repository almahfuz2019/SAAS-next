"use client";
import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false); // State to handle video loading errors

  const handlePlayClick = () => {
    setIsPlaying(true);
    setVideoError(false); // Reset error on new play click
  };

  const handleVideoError = () => {
    setVideoError(true); // Set error if video fails to load
  };

  return (
    <div className="bg-[#F5F8FF] py-24">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left side: Text content */}
        <div className="flex-1 text-left mb-10 md:mb-0">
          <h2 className="font-medium mb-6 md:mb-10 text-accent text-[32px] md:text-[40px] leading-[40px] md:leading-[50px]">
            A Comprehensive Support System For Every User
          </h2>
          <p className="text-[#676767] text-lg md:text-xl mb-6">
            Reputable industry leaders and advisors recognize Condo Control for
            our outstanding solutions and exceptional customer support. Our team
            is always happy to answer questions or make tailored recommendations
            so that you get the most out of Condo Control. We also have
            dedicated onboarding specialists, helpful user guides, and tutorials
            just for residents.
          </p>
          <a
            href="#"
            className="text-[#1B8DD3] text-lg md:text-xl font-semibold underline underline-offset-4"
          >
            Learn More
          </a>
        </div>

        {/* Right side: Video or banner with play button */}
        <div className="flex-1">
          {isPlaying ? (
            <div className="relative w-full h-auto aspect-video">
              <ReactPlayer
                url="/videos/support_system.mp4"
                controls
                playing
                width="100%"
                height="100%"
                className="rounded-lg"
                onError={handleVideoError} // Handle video errors
              />
              {/* Fallback text for video errors */}
              {videoError && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center">
                  <p>Sorry, the video could not be loaded. Please try again later.</p>
                </div>
              )}
            </div>
          ) : (
            // Show a placeholder image with a play button
            <div
              className="relative cursor-pointer w-full h-auto aspect-video rounded-lg overflow-hidden"
              onClick={handlePlayClick}
            >
              <Image
                src="https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Video Placeholder"
                fill
                className="object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <Image
                  height={64}
                  width={64}
                  src="/images/homePage/supportSection/playIcon.png"
                  className="hover:scale-110 transition-transform duration-300"
                  alt="play Icon"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
