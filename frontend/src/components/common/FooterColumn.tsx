import React from "react";

type FooterLink = {
  label: string;
  href: string;
};

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  className,
}) => {
  return (
    <div
      className={`w-full flex flex-col gap-3 whitespace-nowrap ${className ?? ""}`}
    >
      <h2 className="text-ag-12 uppercase tracking-[0.12em] text-pr_y">
        {title}
      </h2>
      {links.map((link) => (
        <a
          key={`${title}-${link.label}`}
          href={link.href}
          className="text-ag-14 text-white/70 hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default FooterColumn;
