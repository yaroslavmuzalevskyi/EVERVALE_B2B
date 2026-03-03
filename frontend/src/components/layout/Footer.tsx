import React from "react";
import FooterColumn from "../common/FooterColumn";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="w-full border-t border-pr_w/20 bg-transparent">
      <div className="flex w-full flex-col gap-10 px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-[130px]">
        <div className="flex w-full flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col items-center gap-6 lg:items-start">
            <Logo />
            <div className="space-y-1 text-ag-16 text-pr_w/80">
              <p>+352 662 345 456</p>
              <p>contact@evervale.com</p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:ml-auto lg:flex lg:w-auto lg:justify-end lg:gap-16 xl:gap-20">
            <FooterColumn
              title="B2C"
              links={[
                { label: "Home", href: "#hero" },
                { label: "Seeds", href: "#supply" },
                { label: "My Info", href: "#contact" },
              ]}
              className="w-full lg:w-[170px]"
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
              className="w-full lg:w-[170px]"
            />
            <FooterColumn
              title="Legal"
              links={[{ label: "Privacy", href: "/privacy" }]}
              className="w-full sm:col-span-2 lg:w-auto"
            />
          </div>
        </div>
        <p className="mt-8 text-ag-14 text-center text-pr_w/60">
          ©2025 EVERVALE. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
