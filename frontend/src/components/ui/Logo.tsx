import React from "react";
import Image from "next/image";
import EvervaleLogo from "@/public/logo.svg";

const Logo = () => {
  return (
    <Image src={EvervaleLogo} alt="Evervale Logo" width={130} height={40} />
  );
};

export default Logo;
