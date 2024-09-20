import React from "react";
import Navbar from "./components/shared/Navbar";
import HeroSection from "./components/HomePage/HeroSection";
import ServicesSection from "./components/HomePage/ServicesSection";
import VideoSection from "./components/HomePage/VideoSection";
import PackagesSection from "./components/HomePage/PackagesSection";
import FaqSection from "./components/HomePage/FAQSection";
import TestimonialSection from "./components/HomePage/TestimonialSection";
import FunFacts from "./components/HomePage/funFacts";
import SuccessStories from "./components/HomePage/SuccessStories";
import PartnerLogos from "./components/HomePage/PartnerLogos";
import Footer from "./components/shared/Footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <VideoSection/>
      <PackagesSection/>
      <FaqSection/>
      {/* <TestimonialSection/> */}
      <FunFacts/>
      <SuccessStories/>
      <PartnerLogos/>
      <Footer/>
    </div>
  );
}
