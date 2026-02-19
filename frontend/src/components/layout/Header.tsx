"use client";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const sectionPositionsRef = useRef<Array<{ id: string; top: number }>>([]);
  const scrollFrameRef = useRef<number | null>(null);
  const scrollTickingRef = useRef(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 110;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const handleTabClick = useCallback(
    (tab: SectionTab) => {
      setActiveSection((prev) => (prev === tab.id ? prev : tab.id));
      scrollToSection(tab.id);
      setMobileMenuOpen(false);
    },
    [scrollToSection],
  );

  const handleCatalogOpen = useCallback(() => setIsCatalogModalOpen(true), []);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const openCatalogModal = () => setIsCatalogModalOpen(true);
    window.addEventListener("open-catalog-modal", openCatalogModal);
    return () => {
      window.removeEventListener("open-catalog-modal", openCatalogModal);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const recalculateSectionPositions = () => {
      sectionPositionsRef.current = tabs
        .map((tab) => ({
          id: tab.id,
          element: document.getElementById(tab.id),
        }))
        .filter(
          (entry): entry is { id: string; element: HTMLElement } => entry.element !== null,
        )
        .map((entry) => ({
          id: entry.id,
          top: entry.element.offsetTop,
        }));
    };

    const syncActiveSectionFromScroll = () => {
      if (!sectionPositionsRef.current.length) {
        recalculateSectionPositions();
      }
      if (!sectionPositionsRef.current.length) return;

      const scrollAnchor = window.scrollY + 180;
      let nextActiveId = sectionPositionsRef.current[0].id;

      for (const entry of sectionPositionsRef.current) {
        if (entry.top > scrollAnchor) break;
        nextActiveId = entry.id;
      }
      setActiveSection((prev) => (prev === nextActiveId ? prev : nextActiveId));
    };

    const scheduleActiveSectionSync = () => {
      if (scrollTickingRef.current) return;
      scrollTickingRef.current = true;
      scrollFrameRef.current = window.requestAnimationFrame(() => {
        scrollTickingRef.current = false;
        scrollFrameRef.current = null;
        syncActiveSectionFromScroll();
      });
    };

    const handleLayoutChange = () => {
      recalculateSectionPositions();
      scheduleActiveSectionSync();
    };

    recalculateSectionPositions();
    syncActiveSectionFromScroll();
    window.addEventListener("scroll", scheduleActiveSectionSync, { passive: true });
    window.addEventListener("resize", handleLayoutChange);
    window.addEventListener("load", handleLayoutChange);

    return () => {
      window.removeEventListener("scroll", scheduleActiveSectionSync);
      window.removeEventListener("resize", handleLayoutChange);
      window.removeEventListener("load", handleLayoutChange);
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-pr_dg/95 lg:bg-pr_dg/90 lg:backdrop-blur">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[130px]">
          {/* Desktop (1024px+) */}
          <div className="hidden lg:flex h-[80px] lg:h-[88px] items-center justify-between gap-8">
            <Logo />
            <SectionSlider
              tabs={tabs}
              activeId={activeSection}
              onChange={handleTabClick}
            />
            <Button
              variant="header"
              onClick={handleCatalogOpen}
            >
              Request Catalog
            </Button>
          </div>

          {/* Burger navigation (<= 1024px) */}
          <div className="flex h-[72px] sm:h-[80px] md:h-[88px] items-center justify-between lg:hidden">
            <Logo />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
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
                        : "opacity-100 rotate-0 scale-100",
                    )}
                  />
                  <X
                    size={24}
                    className={cn(
                      "absolute inset-0 text-white transition-all duration-200 ease-out",
                      mobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75",
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
            "fixed inset-x-0 top-[72px] z-40 border-b border-white/10 bg-pr_dg/95 lg:hidden sm:top-[80px] md:top-[88px]",
            mobileMenuOpen ? "mobile-menu-enter" : "mobile-menu-exit",
          )}
          onAnimationEnd={() => {
            if (!mobileMenuOpen) setMobileMenuMounted(false);
          }}
        >
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[130px]">
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
                  handleCatalogOpen();
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
