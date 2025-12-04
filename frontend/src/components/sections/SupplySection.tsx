import React from "react";
import Image from "next/image";
import Card from "../common/Card";
import InfoContainer from "../common/InfoContainer";
import badge from "../../../public/icons/badge.svg";

const SupplySection = () => {
  return (
    <section>
      <Card
        width="1180px"
        height="640px"
        className=" flex flex-col justify-center items-center gap-7"
      >
        <Image
          src={badge}
          alt="badge icon"
          className="mb-6"
          width={180}
          height={180}
        />
        <InfoContainer
          title="Our Supplier."
          textAlign="center"
          titleClassName="display-xl text-pr_dg"
          contentClassName="display-md_thin text-pr_dg"
          containerGap="gap-3"
        >
          We work exclusively with Green Future - a Thailand-based
          <br /> cultivator licensed under GACP, GMP, & ISO standards, ensuring
          <br />
          full compliance and traceability from seed to shipment.
        </InfoContainer>
      </Card>
    </section>
  );
};

export default SupplySection;
