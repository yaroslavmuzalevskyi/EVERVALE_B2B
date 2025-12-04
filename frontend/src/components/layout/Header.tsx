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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-pr_dg/90 backdrop-blur">
      <div className="mx-auto flex h-[96px] w-full max-w-[1440px] flex-row items-center justify-between px-[130px]">
        <Logo />
        <SectionSlider
          tabs={tabs}
          onChange={(tab) => {
            console.log("Active tab:", tab.id);
          }}
        />
        <Button variant="header">Request Catalog</Button>
      </div>
    </header>
  );
};

export default Header;
