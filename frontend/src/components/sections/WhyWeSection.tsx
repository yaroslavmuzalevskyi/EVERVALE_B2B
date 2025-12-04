import React from "react";
import Image from "next/image";
import InfoContainer from "../common/InfoContainer";
import Button from "../ui/Button";
import Card from "../common/Card";
import protectionCardIcon from "../../../public/icons/about_protection_card_icon.svg";
import growCardIcon from "../../../public/icons/about_grow_card_icon.svg";
import dnaCardIcon from "../../../public/icons/about_dna_card_icon.svg";
import chainCardIcon from "../../../public/icons/about_chain_card_icon.svg";
import protectionIcon from "../../../public/icons/protection.svg";
import growIcon from "../../../public/icons/grow.svg";
import dnaIcon from "../../../public/icons/dna.svg";
import chainIcon from "../../../public/icons/chain.svg";

const cards = [
  {
    title: "Certified Quality",
    description:
      "GACP-, GMP-, and ISO-aligned production ensures consistent, lab-verified seed quality.",
    badgeIcon: protectionCardIcon,
    background: protectionIcon,
  },
  {
    title: "High-Yield Genetics",
    description:
      "Stable and repeatable performance with tested yields, resilience, and predictable results.",
    badgeIcon: growCardIcon,
    background: growIcon,
  },
  {
    title: "Custom Breeding",
    description:
      "Tailored phenotype development designed to match your market, climate, and production goals.",
    badgeIcon: dnaCardIcon,
    background: dnaIcon,
  },
  {
    title: "Full Traceability",
    description:
      "Complete seed-to-shipment documentation, including origin, lab tests, and batch passports.",
    badgeIcon: chainCardIcon,
    background: chainIcon,
  },
];

const WhyWeSection = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className=" w-full flex justify-between">
        <InfoContainer
          title="Why we?"
          titleClassName="display-xl text-pr_w"
          contentClassName="display-md_thin text-pr_w"
          containerGap="gap-3"
        >
          Evervale is a new generation of cannabis genetics <br /> provider
          built on transparency and precision.
        </InfoContainer>
        <Button>Request product catalog</Button>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <Card
            key={card.title}
            width="580px"
            height="420px"
            className="relative h-full overflow-hidden"
          >
            <Image
              src={card.background}
              alt={`${card.title} background icon`}
              className="pointer-events-none absolute -right-6 top-0 h-[300px] w-[300px] opacity-50"
            />
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#032D1F]">
                <Image
                  src={card.badgeIcon}
                  alt={`${card.title} icon`}
                  width={48}
                  height={48}
                />
              </div>
              <InfoContainer
                title={card.title}
                textAlign="left"
                titleClassName="display-md_bold text-pr_dg"
                contentClassName="display-sm text-pr_dg"
                containerGap="gap-2"
              >
                {card.description}
              </InfoContainer>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyWeSection;
