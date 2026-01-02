import React from "react";
import FooterColumn from "../common/FooterColumn";
import Logo from "../ui/Logo";
import Image from "next/image";
import facebook from "@/public/icons/facebook-logo.svg";
import twitter from "@/public/icons/twitter-logo.svg";
import wtf from "@/public/icons/wtf-logo.svg";
import instagram from "@/public/icons/instagram-logo.svg";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/30 bg-transparent">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-16 px-4 py-12 sm:px-4 md:px-6 lg:px-6 xl:px-32">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-4 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12">
          <div className="flex w-full flex-col gap-6 text-center items-center md:items-start md:text-left lg:max-w-sm">
            <Logo />
            <div className="space-y-1 text-white/80">
              <p>+352 662 345 456</p>
              <p>contact@evervale.com</p>
            </div>
            <div className="mt-3 flex gap-6">
              <a
                href="#"
                className="flex items-center justify-center"
                aria-label="Facebook"
              >
                <Image
                  src={facebook}
                  alt="Facebook"
                  width={10}
                  height={10}
                  className="filter brightness-0 invert"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center"
                aria-label="Twitter"
              >
                <Image
                  src={twitter}
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="filter brightness-0 invert"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center"
                aria-label="Instagram"
              >
                <Image
                  src={instagram}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="filter brightness-0 invert"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center"
                aria-label="WTF"
              >
                <Image
                  src={wtf}
                  alt="WTF"
                  width={20}
                  height={20}
                  className="filter brightness-0 invert"
                />
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-10 text-center sm:flex-row sm:justify-center sm:gap-10 md:w-auto md:items-start md:justify-start md:gap-12">
            <FooterColumn
              title="B2C"
              link1={"Support"}
              href1={""}
              link2={"Community"}
              href2={""}
              link3={"Help"}
              href3={""}
              link4={"My Info"}
              href4={""}
              className="text-center sm:text-center md:text-left lg:text-left"
            />
            <FooterColumn
              title="B2B"
              link1={"About Us"}
              href1={""}
              link2={"Welcome"}
              href2={""}
              link3={"Our Suplier"}
              href3={""}
              link4={"Contact Us"}
              href4={""}
              className="text-center sm:text-center md:text-left lg:text-left"
            />
            <FooterColumn
              title="Legal"
              link1={"Partners"}
              href1={""}
              link2={"About Us"}
              href2={""}
              link3={"Customers"}
              href3={""}
              link4={"Contact Us"}
              href4={""}
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
