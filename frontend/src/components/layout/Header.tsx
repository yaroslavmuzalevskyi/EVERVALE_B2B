"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { SectionSlider } from "@/navigation/SectionSlider";
import { SectionTab } from "@/types/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const tabs: SectionTab[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "why", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

const HEADER_OFFSET = 110;
const PROGRAMMATIC_SCROLL_LOCK_MS = 1200;
const ACTIVE_LINE_EXTRA_PX = 12;
const CATALOG_API_URL = "https://backend.evervale.org/forms/request-catalog";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

  const [catalogEmail, setCatalogEmail] = useState("");
  const [catalogError, setCatalogError] = useState("");
  const [catalogSuccess, setCatalogSuccess] = useState("");
  const [isCatalogSubmitting, setIsCatalogSubmitting] = useState(false);

  const programmaticScrollUntilRef = useRef(0);
  const programmaticTargetRef = useRef<string | null>(null);
  const visibleRatiosRef = useRef<Record<string, number>>({});
  const lastSetActiveRef = useRef<string>("hero");

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const top =
      section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const handleTabClick = useCallback(
    (tab: SectionTab) => {
      setActiveSection((prev) => (prev === tab.id ? prev : tab.id));
      lastSetActiveRef.current = tab.id;

      programmaticTargetRef.current = tab.id;
      programmaticScrollUntilRef.current =
        Date.now() + PROGRAMMATIC_SCROLL_LOCK_MS;

      scrollToSection(tab.id);
      setMobileMenuOpen(false);
    },
    [scrollToSection],
  );

  const resetCatalogForm = useCallback(() => {
    setCatalogEmail("");
    setCatalogError("");
    setCatalogSuccess("");
    setIsCatalogSubmitting(false);
  }, []);

  const handleCatalogOpen = useCallback(() => {
    setCatalogError("");
    setCatalogSuccess("");
    setIsCatalogModalOpen(true);
  }, []);

  const handleCatalogClose = useCallback(() => {
    setIsCatalogModalOpen(false);
    setCatalogError("");
    setCatalogSuccess("");
  }, []);

  const handleCatalogSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isCatalogSubmitting) return;

      const email = catalogEmail.trim().toLowerCase();

      setCatalogError("");
      setCatalogSuccess("");

      if (!email) {
        setCatalogError("Company email is required.");
        return;
      }

      if (email.length > 255) {
        setCatalogError("Company email must be at most 255 characters.");
        return;
      }

      if (!EMAIL_REGEX.test(email)) {
        setCatalogError("Enter a valid email address.");
        return;
      }

      setIsCatalogSubmitting(true);

      try {
        const response = await fetch(CATALOG_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const contentType = response.headers.get("content-type");
        const isJson = contentType?.includes("application/json");
        const data = isJson ? await response.json() : null;

        if (!response.ok) {
          throw new Error(data?.message || "Failed to request catalog.");
        }

        setCatalogSuccess("Catalog request sent successfully.");
        setCatalogEmail("");
      } catch (error) {
        setCatalogError(
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        );
      } finally {
        setIsCatalogSubmitting(false);
      }
    },
    [catalogEmail, isCatalogSubmitting],
  );

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
    const openCatalogModal = () => handleCatalogOpen();
    window.addEventListener("open-catalog-modal", openCatalogModal);
    return () => {
      window.removeEventListener("open-catalog-modal", openCatalogModal);
    };
  }, [handleCatalogOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionEls = tabs
      .map((t) => document.getElementById(t.id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionEls.length) return;

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const rootMarginTop = -(HEADER_OFFSET + ACTIVE_LINE_EXTRA_PX);
    const rootMargin = `${rootMarginTop}px 0px -55% 0px`;

    const pickActiveFromRatios = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (nearBottom) {
        const lastId = tabs[tabs.length - 1]?.id;
        if (lastId && lastSetActiveRef.current !== lastId) {
          lastSetActiveRef.current = lastId;
          setActiveSection(lastId);
        }
        return;
      }

      const now = Date.now();
      const lockActive = now < programmaticScrollUntilRef.current;
      const lockedTarget = programmaticTargetRef.current;

      if (lockActive && lockedTarget) {
        if (lastSetActiveRef.current !== lockedTarget) {
          lastSetActiveRef.current = lockedTarget;
          setActiveSection(lockedTarget);
        }
        return;
      } else if (!lockActive) {
        programmaticTargetRef.current = null;
      }

      let bestId: string | null = null;
      let bestRatio = -1;

      for (const t of tabs) {
        const r = visibleRatiosRef.current[t.id] ?? 0;
        if (r > bestRatio) {
          bestRatio = r;
          bestId = t.id;
        }
      }

      if (!bestId || bestRatio <= 0.001) {
        const activeLineY = HEADER_OFFSET + ACTIVE_LINE_EXTRA_PX;
        let closestId = tabs[0].id;
        let closestDist = Number.POSITIVE_INFINITY;

        for (const t of tabs) {
          const el = document.getElementById(t.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - activeLineY);
          if (dist < closestDist) {
            closestDist = dist;
            closestId = t.id;
          }
        }
        bestId = closestId;
      }

      if (bestId && lastSetActiveRef.current !== bestId) {
        lastSetActiveRef.current = bestId;
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          visibleRatiosRef.current[id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        }
        pickActiveFromRatios();
      },
      {
        root: null,
        threshold: thresholds,
        rootMargin,
      },
    );

    visibleRatiosRef.current = {};
    for (const t of tabs) visibleRatiosRef.current[t.id] = 0;

    for (const el of sectionEls) observer.observe(el);

    pickActiveFromRatios();

    const onResize = () => pickActiveFromRatios();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-pr_dg/95 lg:bg-pr_dg/90 lg:backdrop-blur">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[130px]">
          <div className="hidden h-[80px] items-center justify-between gap-8 lg:flex lg:h-[88px]">
            <Logo />
            <SectionSlider
              tabs={tabs}
              activeId={activeSection}
              onChange={handleTabClick}
            />
            <Button variant="header" onClick={handleCatalogOpen}>
              Request Catalog
            </Button>
          </div>

          <div className="flex h-[72px] items-center justify-between sm:h-[80px] md:h-[88px] lg:hidden">
            <Logo />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="relative rounded-lg p-2 transition-colors hover:bg-white/10"
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

      {mobileMenuMounted && (
        <div
          className={cn(
            "fixed inset-x-0 top-[72px] z-40 border-b border-white/10 bg-pr_dg/95 sm:top-[80px] md:top-[88px] lg:hidden",
            mobileMenuOpen ? "mobile-menu-enter" : "mobile-menu-exit",
          )}
          onAnimationEnd={() => {
            if (!mobileMenuOpen) setMobileMenuMounted(false);
          }}
        >
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[130px]">
            <div className="border-b border-white/10 py-4">
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
          onClick={handleCatalogClose}
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

            <form className="mt-6 flex flex-col gap-4" onSubmit={handleCatalogSubmit} noValidate>
              <label className="text-ag-14 font-medium text-pr_dg" htmlFor="catalog-email">
                Company Email
              </label>
              <input
                id="catalog-email"
                name="email"
                type="email"
                required
                maxLength={255}
                autoComplete="email"
                inputMode="email"
                value={catalogEmail}
                onChange={(e) => {
                  setCatalogEmail(e.target.value);
                  if (catalogError) setCatalogError("");
                  if (catalogSuccess) setCatalogSuccess("");
                }}
                placeholder="you@company.com"
                aria-invalid={Boolean(catalogError)}
                aria-describedby={catalogError ? "catalog-email-error" : undefined}
                className="h-12 w-full rounded-2xl border border-pr_dg/20 px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/40"
              />

              {catalogError && (
                <p id="catalog-email-error" className="text-sm text-red-600">
                  {catalogError}
                </p>
              )}

              {catalogSuccess && (
                <div
                  className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                  role="status"
                >
                  {catalogSuccess}
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  type="submit"
                  variant="contact"
                  className="h-12 flex-1 rounded-2xl"
                  disabled={isCatalogSubmitting}
                >
                  {isCatalogSubmitting ? "Sending..." : "Send"}
                </Button>

                <button
                  type="button"
                  onClick={() => {
                    handleCatalogClose();
                    resetCatalogForm();
                  }}
                  className="h-12 rounded-2xl border border-pr_dg/20 px-4 text-pr_dg transition hover:bg-pr_dg/5"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;