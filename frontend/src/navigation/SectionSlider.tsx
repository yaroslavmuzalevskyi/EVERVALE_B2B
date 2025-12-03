"use client";

import { useState } from "react";
import { SectionTab } from "../types/navigation";

type Tab = {
  id: string;
  label: string;
};

type Props = {
  tabs: Tab[];
};

interface SectionSliderProps {
  tabs: SectionTab[];
  onChange?: (tab: SectionTab) => void;
}

export function SectionSlider({ tabs, onChange }: SectionSliderProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => t.id === activeId)
  );
  const tabCount = tabs.length || 1;

  const handleClick = (tab: SectionTab) => {
    setActiveId(tab.id);
    onChange?.(tab);
  };

  return (
    <div className=" mx-auto w-[490px] max-w-5xl">
      {/* TRACK */}
      <div className="relative flex h-[49px] items-stretch rounded-full bg-[#F2FFFD] overflow-hidden">
        {/* OUTER PILL: handles position & segment width */}
        <div
          className="absolute inset-y-0 left-0 flex items-center transition-transform duration-300 ease-out"
          style={{
            width: `${100 / tabCount}%`, // full segment width
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        >
          {/* INNER PILL: actual green highlight (smaller) */}
          <div
            className="
        mx-1 h-11 w-full rounded-full bg-[#13352D] shadow-lg
        transition-all duration-300 ease-out
      "
          />
        </div>

        {/* TABS */}
        <div className="relative z-10 flex w-full">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className="flex-1 cursor-pointer select-none px-4 text-center
                           text-lg font-medium transition-colors duration-200 ease-out"
              >
                <span className={isActive ? "text-white" : "text-[#13352D]"}>
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
