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

// Сколько “живёт” защита от фликера после клика по табу
const PROGRAMMATIC_SCROLL_LOCK_MS = 1200;

// Доп. линия под хедером, где считаем “активной” секцию (чуть ниже хедера)
const ACTIVE_LINE_EXTRA_PX = 12;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

  // защита от “скачков” active tab во время smooth scroll по клику
  const programmaticScrollUntilRef = useRef(0);
  const programmaticTargetRef = useRef<string | null>(null);

  // IntersectionObserver bookkeeping
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
      // сразу подсветим нужный таб
      setActiveSection((prev) => (prev === tab.id ? prev : tab.id));
      lastSetActiveRef.current = tab.id;

      // lock от авто-переключений на время smooth scroll
      programmaticTargetRef.current = tab.id;
      programmaticScrollUntilRef.current =
        Date.now() + PROGRAMMATIC_SCROLL_LOCK_MS;

      scrollToSection(tab.id);
      setMobileMenuOpen(false);
    },
    [scrollToSection],
  );

  const handleCatalogOpen = useCallback(() => setIsCatalogModalOpen(true), []);

  // lock scroll when modal open
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

  // custom event support
  useEffect(() => {
    if (typeof window === "undefined") return;
    const openCatalogModal = () => setIsCatalogModalOpen(true);
    window.addEventListener("open-catalog-modal", openCatalogModal);
    return () => {
      window.removeEventListener("open-catalog-modal", openCatalogModal);
    };
  }, []);

  /**
   * ✅ Главный фикс: IntersectionObserver вместо offsetTop
   * Логика:
   * - считаем “viewport” так, будто верх экрана начинается НЕ с 0, а под хедером
   * - выбираем активной секцию с наибольшей intersectionRatio
   * - если nearBottom -> активируем последнюю секцию
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionEls = tabs
      .map((t) => document.getElementById(t.id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionEls.length) return;

    // thresholds: чем больше, тем точнее, но тяжелее (это нормальный компромисс)
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    // “срезаем” верх viewport на высоту fixed header,
    // чтобы секция считалась видимой, когда попала под хедер
    const rootMarginTop = -(HEADER_OFFSET + ACTIVE_LINE_EXTRA_PX);
    const rootMargin = `${rootMarginTop}px 0px -55% 0px`;
    // снизу -55% делает переключение более “серединным” и убирает ранние перескоки вверх

    const pickActiveFromRatios = () => {
      // near bottom -> всегда последняя секция
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

      // Во время programmatic scroll — не даём IO “перебивать” активный таб
      if (lockActive && lockedTarget) {
        if (lastSetActiveRef.current !== lockedTarget) {
          lastSetActiveRef.current = lockedTarget;
          setActiveSection(lockedTarget);
        }
        return;
      } else if (!lockActive) {
        programmaticTargetRef.current = null;
      }

      // выбираем секцию с максимальным ratio
      let bestId: string | null = null;
      let bestRatio = -1;

      for (const t of tabs) {
        const r = visibleRatiosRef.current[t.id] ?? 0;
        if (r > bestRatio) {
          bestRatio = r;
          bestId = t.id;
        }
      }

      // Если ratios все нулевые (бывает на границах), fallback:
      // активируем ближайшую секцию к “линии” под хедером.
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

    // init ratios to 0
    visibleRatiosRef.current = {};
    for (const t of tabs) visibleRatiosRef.current[t.id] = 0;

    for (const el of sectionEls) observer.observe(el);

    // initial sync
    pickActiveFromRatios();

    // на resize/изменения высоты — пересчёт ощущается лучше
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
          {/* Desktop (1024px+) */}
          <div className="hidden lg:flex h-[80px] lg:h-[88px] items-center justify-between gap-8">
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

          {/* Burger navigation (<= 1024px) */}
          <div className="flex h-[72px] sm:h-[80px] md:h-[88px] items-center justify-between lg:hidden">
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

      {/* Catalog Modal */}
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
