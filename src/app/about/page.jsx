import React from "react";
import Breadcrumb from "../components/About/BreadcrumbSection";
import Overview from "../components/About/Overview";
import OurStory_Mission_Vission_Section from "../components/About/OurStory_Mission_Vission_Section";
import FAQSection from "../components/About/FAQSection";
import OurTeamSection from "../components/About/OurTeamSection";
import TestimonialSlider from "../components/Home/TestimonialSlider";

export default function page() {
  return (
    <div>
      <Breadcrumb />
      <Overview />
      <OurStory_Mission_Vission_Section />
      <FAQSection />
      <OurTeamSection/>
      <TestimonialSlider/>
    </div>
  );
}
