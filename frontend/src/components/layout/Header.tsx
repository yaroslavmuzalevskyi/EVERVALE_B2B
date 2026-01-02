"use client";
import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { SectionSlider } from "@/src/navigation/SectionSlider";
import { SectionTab } from "@/src/types/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const tabs: SectionTab[] = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "why", label: "Why We" },
  { id: "supply", label: "Supply" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

  // Simple click handler that both scrolls AND updates the slider
  const handleTabClick = (tab: SectionTab) => {
    setActiveSection(tab.id);

    const section = document.getElementById(tab.id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isCatalogModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCatalogModalOpen]);

  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuMounted(true);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-pr_dg/90 backdrop-blur">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[130px]">
          {/* Desktop (1024px+) */}
          <div className="hidden lg:flex h-[80px] lg:h-[96px] items-center justify-between gap-10">
            <Logo />
            <SectionSlider
              tabs={tabs}
              activeId={activeSection}
              onChange={handleTabClick}
            />
            <Button
              variant="header"
              onClick={() => setIsCatalogModalOpen(true)}
            >
              Request Catalog
            </Button>
          </div>

          {/* Burger navigation (<= 1024px) */}
          <div className="flex h-[70px] sm:h-[80px] md:h-[96px] items-center justify-between lg:hidden">
            <Logo />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="relative block h-6 w-6">
                  <Menu
                    size={24}
                    className={cn(
                      "absolute inset-0 text-white transition-all duration-200 ease-out",
                      mobileMenuOpen
                        ? "opacity-0 rotate-90 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    )}
                  />
                  <X
                    size={24}
                    className={cn(
                      "absolute inset-0 text-white transition-all duration-200 ease-out",
                      mobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75"
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuMounted && (
        <div
          className={cn(
            "fixed inset-x-0 top-[70px] z-40 border-b border-white/10 bg-pr_dg/95 backdrop-blur lg:hidden sm:top-[80px] md:top-[96px]",
            mobileMenuOpen ? "mobile-menu-enter" : "mobile-menu-exit"
          )}
          onAnimationEnd={() => {
            if (!mobileMenuOpen) setMobileMenuMounted(false);
          }}
        >
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6">
            <div className="py-4 border-b border-white/10">
              <SectionSlider
                tabs={tabs}
                activeId={activeSection}
                onChange={handleTabClick}
              />
            </div>
            <div className="py-4">
              <Button
                variant="header"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCatalogModalOpen(true);
                }}
              >
                Request Catalog
              </Button>
            </div>
          </div>
        </div>
      )}
      {isCatalogModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setIsCatalogModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 text-pr_dg shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="display-md_bold">Request Product Catalog</h3>
            <p className="mt-2 display-sm text-pr_dg/70">
              Leave your business email and we will share the latest catalog
              with you.
            </p>
            <form className="mt-6 flex flex-col gap-4">
              <label className="text-ag-14 font-medium text-pr_dg">
                Company Email
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 h-12 w-full rounded-2xl border border-pr_dg/20 px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/40"
                />
              </label>
              <Button variant="contact" className="h-12 rounded-2xl">
                Send
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
