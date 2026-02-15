import React from "react";

interface FooterColumnProps {
  title: string;
  link1: string;
  href1: string;
  link2: string;
  href2: string;
  link3: string;
  href3: string;
  link4: string;
  href4: string;
  className?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  link1,
  href1,
  link2,
  href2,
  link3,
  href3,
  link4,
  href4,
  className,
}) => {
  return (
    <div
      className={`w-full flex flex-col gap-3 whitespace-nowrap ${className ?? ""}`}
    >
      <h2 className="text-ag-12 uppercase tracking-[0.12em] text-pr_y">
        {title}
      </h2>
      <a href={href1} className="text-ag-14 text-white/70 hover:text-white">
        {link1}
      </a>
      <a href={href2} className="text-ag-14 text-white/70 hover:text-white">
        {link2}
      </a>
      <a href={href3} className="text-ag-14 text-white/70 hover:text-white">
        {link3}
      </a>
      <a href={href4} className="text-ag-14 text-white/70 hover:text-white">
        {link4}
      </a>
    </div>
  );
};

export default FooterColumn;
