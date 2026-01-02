import React from "react";
import HeroSection from "../sections/HeroSection";
import ExplanationSection from "../sections/AboutSection";
import WhyWeSection from "../sections/WhyWeSection";
import SupplySection from "../sections/SupplySection";
import ContactSection from "../sections/ContactSection";

const B2B = () => {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 lg:gap-40 xl:gap-52 px-4 xl:px-32 lg:px-6 md:px-6 sm:px-4">
      <section
        id="hero"
        className="scroll-mt-[50px] sm:scroll-mt-[80px] lg:scroll-mt-[96px]"
      >
        <HeroSection />
      </section>
      <section
        id="about"
        className="scroll-mt-[70px] sm:scroll-mt-[80px] lg:scroll-mt-[96px]"
      >
        <ExplanationSection />
      </section>
      <section
        id="why"
        className="scroll-mt-[70px] sm:scroll-mt-[80px] lg:scroll-mt-[96px]"
      >
        <WhyWeSection />
      </section>
      <section
        id="supply"
        className="scroll-mt-[70px] sm:scroll-mt-[80px] lg:scroll-mt-[96px]"
      >
        <SupplySection />
      </section>
      <section
        id="contact"
        className="scroll-mt-[70px] sm:scroll-mt-[80px] lg:scroll-mt-[96px]"
      >
        <ContactSection />
      </section>
    </div>
  );
};

export default B2B;
