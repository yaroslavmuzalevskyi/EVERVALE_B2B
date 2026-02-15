"use client";

import React from "react";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

interface HeroSectionProps {
  contentWidthClass?: string;
  className?: string;
  sectionId?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  contentWidthClass = "w-full",
  className,
  sectionId,
}) => {
  const handleCatalogClick = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("open-catalog-modal"));
  };

  return (
    <section
      id={sectionId}
      className={cn("mt-8 w-full sm:mt-10 md:mt-12 lg:mt-0", className)}
    >
      <div
        className={cn(
          "flex w-full flex-col items-center gap-5 text-center mx-auto",
          contentWidthClass,
        )}
      >
        <h1
          className="w-full text-[clamp(3rem,7.9vw,8.2rem)] leading-[0.97] font-extrabold tracking-[-0.02em] animated-gradient-text"
          data-reveal
          style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
        >
          Where Nature Meets Precision.
        </h1>
        <p
          className="display-md_thin max-w-3xl text-pr_w/75"
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
        >
          Professional-grade cannabis genetics for licensed businesses.
          <br className="hidden sm:block" />
          Certified. Compliant. Consistent.
        </p>
        <Button
          variant="primary"
          onClick={handleCatalogClick}
          data-reveal
          style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
        >
          Request product catalog
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
