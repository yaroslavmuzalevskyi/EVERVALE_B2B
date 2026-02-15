"use client";

import { SectionTab } from "../types/navigation";

interface SectionSliderProps {
  tabs: SectionTab[];
  activeId: string;
  onChange?: (tab: SectionTab) => void;
}

export function SectionSlider({
  tabs,
  activeId,
  onChange,
}: SectionSliderProps) {
  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => t.id === activeId)
  );
  const tabCount = tabs.length || 1;

  const handleClick = (tab: SectionTab) => {
    if (typeof window === "undefined") return;
    const section = document.getElementById(tab.id);
    if (section) {
      const headerOffset = 140;
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    onChange?.(tab);
  };

  return (
    <div className="mx-auto lg:mx-0 w-full min-w-0 lg:max-w-[480px] lg:flex-1">
      {/* TRACK */}
      <div className="relative flex h-[30px] sm:h-[34px] md:h-[38px] items-stretch rounded-full border border-black/10 bg-[color:var(--surface)] shadow-[0_8px_18px_rgba(0,0,0,0.18)] overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 flex items-center transition-transform duration-300 ease-out"
          style={{
            width: `${100 / tabCount}%`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        >
          {/* INNER PILL: actual green highlight (smaller) */}
          <div className="mx-1 h-[22px] sm:h-[26px] md:h-[30px] w-full rounded-full bg-[#0d3326] shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out" />
        </div>

        {/* TABS */}
        <div className="relative z-10 flex w-full">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleClick(tab)}
                className="nav-text flex-1 cursor-pointer select-none px-2 sm:px-3 md:px-4 text-center transition-colors duration-200 ease-out"
                aria-selected={isActive}
                aria-label={`Go to ${tab.label} section`}
              >
                <span
                  className={isActive ? "text-white" : "text-[#0d3326]"}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
