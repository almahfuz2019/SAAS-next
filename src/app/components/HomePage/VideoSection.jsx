"use client";
import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { CiPlay1 } from "react-icons/ci";

const VideoSection = () => {
  // State to manage if the video is playing or not
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle click on the play button
  const handlePlayClick = () => {
    setIsPlaying(true); // Show the video when play is clicked
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side: Text content */}
        <div className="flex-1 text-left mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            A Comprehensive Support System For Every User
          </h2>
          <p className="text-gray-700 mb-6">
            Reputable industry leaders and advisors recognize Condo Control for
            our outstanding solutions and exceptional customer support. Our team
            is always happy to answer questions or make tailored recommendations
            so that you get the most out of Condo Control. We also have
            dedicated onboarding specialists, helpful user guides, and tutorials
            just for residents.
          </p>
          <a href="#" className="text-blue-600 font-semibold">
            Learn More
          </a>
        </div>

        {/* Right side: Video or banner with play button */}
        <div className="flex-1">
          {/* If the video is playing, show the ReactPlayer */}
          {isPlaying ? (
            <div className="relative w-full h-auto aspect-video">
              <ReactPlayer
                url="/videos/support_system.mp4"
                controls
                playing
                width="100%"
                height="100%"
                className="rounded-lg"
              />
            </div>
          ) : (
            // Otherwise, show the play button over the placeholder banner
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
                <CiPlay1 className="text-white text-6xl bg-white p-3 rounded-full shadow-lg" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
