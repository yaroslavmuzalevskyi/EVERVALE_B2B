import React from "react";

type SectionSliderItemProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const SectionSliderItem: React.FC<SectionSliderItemProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="nav-text flex-1 cursor-pointer py-3 text-center transition-colors"
    >
      <span className={isActive ? "text-white" : "text-emerald-950"}>
        {label}
      </span>
    </button>
  );
};
