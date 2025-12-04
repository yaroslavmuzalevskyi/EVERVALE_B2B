import React from "react";
import InfoContainer from "../common/InfoContainer";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

interface HeroSectionProps {
  contentWidthClass?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  contentWidthClass = "max-w-4xl",
}) => {
  return (
    <section className="flex w-full justify-center mt-52">
      <div
        className={cn(
          "flex w-full flex-col items-center gap-6 text-center px-4",
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
