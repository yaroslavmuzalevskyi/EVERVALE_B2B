import React from "react";
import InfoContainer from "../common/InfoContainer";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

interface HeroSectionProps {
  contentWidthClass?: string;
  className?: string;
  sectionId?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  contentWidthClass = "max-w-4xl",
  className,
  sectionId,
}) => {
  return (
    <section
      id={sectionId}
      className={cn(
        "flex w-full justify-center mt-24 sm:mt-32 md:mt-40 lg:mt-54",
        className
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col items-center gap-6 text-center",
          contentWidthClass
        )}
      >
        <InfoContainer
          title="Where Nature Meets Precision."
          textAlign="center"
          titleClassName="display-xxl text-gy-gradient"
          contentClassName="display-md_thin text-pr_w"
          containerGap="gap-3"
        >
          Professional-grade cannabis genetics for licensed businesses.
          <br />
          Certified. Compliant. Consistent.
        </InfoContainer>
        <Button variant="primary" className="mt-2">
          Request product catalog
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
