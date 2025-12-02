import React from "react";
import Image from "next/image";
import EvervaleLogo from "@/public/logo.svg";

const Logo = () => {
  return (
    <Image src={EvervaleLogo} alt="Evervale Logo" width={150} height={50} />
  );
};

export default Logo;
