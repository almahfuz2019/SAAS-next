import React from "react";
import HeroSection from "./components/Home/HeroSection";
import ServicesSection from "./components/Home/ServicesSection";
import VideoSection from "./components/Home/VideoSection";
import PackagesSection from "./components/Home/PackagesSection";
import FaqSection from "./components/Home/FAQSection";
import FunFacts from "./components/Home/funFacts";
import SuccessStories from "./components/Home/SuccessStories";
import NavbarForSmallDevices from "./components/shared/NavbarForSmallDevices";
import TestimonialSlider from "./components/Home/TestimonialSlider";
import ContactSection from "./components/Home/ContactSection";
export default function page() {
  return (
    <div>
      <NavbarForSmallDevices />
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <PackagesSection />
      <FaqSection />
      <TestimonialSlider />
      <FunFacts />
      <SuccessStories />
      {/* <PartnerLogos /> */}
      <ContactSection />
    </div>
  );
}
