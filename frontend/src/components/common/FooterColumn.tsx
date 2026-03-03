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
      className={`flex w-full flex-col items-center gap-3 text-center lg:items-start lg:text-left ${className ?? ""}`}
    >
      <h2 className="text-ag-14 font-semibold text-pr_w/90">{title}</h2>
      <div className="flex flex-col items-center gap-2 lg:items-start">
        {links.map((link) => (
          <a
            key={`${title}-${link.label}`}
            href={link.href}
            className="text-ag-14 font-normal text-pr_w/70 transition-colors duration-200 hover:text-pr_w/90"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
