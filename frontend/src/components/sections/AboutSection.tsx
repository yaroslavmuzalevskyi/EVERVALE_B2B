import React from "react";
import Card from "../common/Card";
import InfoContainer from "../common/InfoContainer";
import Image from "next/image";
import cannabis1 from "../../../public/images/ExplanationSectionImages/cannabis1.png";
import cannabis2 from "../../../public/images/ExplanationSectionImages/cannabis2.png";
import { cn } from "../../lib/utils";

interface ExplanationSectionProps {
  className?: string;
  sectionId?: string;
}

const ExplanationSection: React.FC<ExplanationSectionProps> = ({
  className,
  sectionId,
}) => {
  return (
    <section id={sectionId} className={cn("w-full", className)}>
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-20">
        <div className="max-w-full md:max-w-[680px]">
          <InfoContainer
            title="Rooted in Science. Growing with Trust."
            textAlign="left"
            titleClassName="display-lg text-pr_w"
            contentClassName="display-md_thin text-pr_w"
            containerGap="gap-3"
          >
            Evervale is a new generation of cannabis genetics provider built on
            transparency and precision.
          </InfoContainer>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8 md:justify-center">
          <Card
            width="100%"
            height="auto"
            className="md:flex-1 md:max-w-[calc(50%-8px)] transition-all duration-300 ease-out hover:rounded-bl-[12px] hover:rounded-tr-[12px] hover:rounded-br-3xl hover:rounded-tl-3xl lg:w-auto lg:max-w-[580px] lg:h-[420px] md:h-[360px]"
          >
            <Image
              src={cannabis1}
              alt="cannabis"
              className="mb-4 md:mb-5 lg:mb-6 w-full h-auto rounded"
            />
            <InfoContainer
              title="Продажа семян оптом"
              textAlign="left"
              titleClassName="display-md_bold text-pr_dg"
              contentClassName="display-sm text-pr_dg"
              containerGap="gap-2"
            >
              We promote responsible sourcing & environmentally
              <br className="hidden md:block" /> conscious production.
            </InfoContainer>
          </Card>
          <Card
            width="100%"
            height="auto"
            className="md:flex-1 md:max-w-[calc(50%-8px)] transition-all duration-300 ease-out hover:rounded-bl-[12px] hover:rounded-tr-[12px] hover:rounded-br-3xl hover:rounded-tl-3xl lg:w-auto lg:max-w-[580px] lg:h-[420px] md:h-[360px]"
          >
            <Image
              src={cannabis2}
              alt="cannabis"
              className="mb-4 md:mb-5 lg:mb-6 w-full h-auto rounded"
            />
            <InfoContainer
              title="Селекция под заказ"
              textAlign="left"
              titleClassName="display-md_bold text-pr_dg"
              contentClassName="display-sm text-pr_dg"
              containerGap="gap-2"
            >
              Constantly improving our genetics through science
              <br className="hidden md:block" /> and collaboration.
            </InfoContainer>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExplanationSection;
