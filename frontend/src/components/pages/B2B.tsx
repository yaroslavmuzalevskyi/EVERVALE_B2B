import React from "react";
import HeroSection from "../sections/HeroSection";
import ExplanationSection from "../sections/AboutSection";
import WhyWeSection from "../sections/WhyWeSection";
import SupplySection from "../sections/SupplySection";
import ContactSection from "../sections/ContactSection";

const B2B = () => {
  return (
    <div className="flex flex-col gap-52 px-[130px]">
      <HeroSection />
      <ExplanationSection />
      <WhyWeSection />
      <SupplySection />
      <ContactSection />
    </div>
  );
};

export default B2B;
