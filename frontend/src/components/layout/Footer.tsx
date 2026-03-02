import React from "react";
import FooterColumn from "../common/FooterColumn";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/20 bg-transparent">
      <div className="flex w-full flex-col items-center justify-between gap-12 px-4 py-14 sm:px-6 md:px-8 lg:px-[130px]">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="flex w-full flex-col gap-5 text-center items-center md:items-start md:text-left lg:max-w-sm">
            <Logo />
            <div className="space-y-1 text-white/80">
              <p>+352 662 345 456</p>
              <p>contact@evervale.com</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-8 text-center sm:flex-row sm:justify-center sm:gap-10 md:w-auto md:items-start md:justify-start md:gap-12">
            <FooterColumn
              title="B2C"
              links={[
                { label: "Home", href: "#hero" },
                { label: "Seeds", href: "#supply" },
                { label: "My Info", href: "#contact" },
              ]}
              className="text-center sm:text-center md:text-left lg:text-left"
            />
            <FooterColumn
              title="B2B"
              links={[
                { label: "Home", href: "#hero" },
                { label: "About Us", href: "#about" },
                { label: "Why Us", href: "#why" },
                { label: "Our Supplier", href: "#supply" },
                { label: "Contact Us", href: "#contact" },
              ]}
              className="text-center sm:text-center md:text-left lg:text-left"
            />
            <FooterColumn
              title="Legal"
              links={[{ label: "Privacy", href: "/privacy" }]}
              className="text-center sm:text-center md:text-left lg:text-left"
            />
          </div>
        </div>
        <p className="text-ag-14 text-white/60 text-center">
          ©2025 EVERVALE. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
