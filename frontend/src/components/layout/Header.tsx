"use client";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { SectionSlider } from "@/src/navigation/SectionSlider";
import { SectionTab } from "@/src/types/navigation";

const tabs: SectionTab[] = [
  { id: "one", label: "Секция" },
  { id: "two", label: "Секция" },
  { id: "three", label: "Секция" },
  { id: "four", label: "Секция" },
];

const Header = () => {
  return (
    <div className=" w-full h-auto flex flex-row items-center justify-between">
      <Logo />
      <SectionSlider
        tabs={tabs}
        onChange={(tab) => {
          console.log("Active tab:", tab.id);
        }}
      />
      <Button text="Request Catalog" />
    </div>
  );
};

export default Header;
