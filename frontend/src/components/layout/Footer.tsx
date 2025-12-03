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
      <div className="px-[130px] flex flex-col gap-16 justify-between items-center py-16 mx-auto w-full">
        <div className="w-full flex flex-row gap-4 justify-center">
          <div className="w-full flex flex-col gap-8">
            <Logo />
            <div>
              <p className="text-white/80">+352 662 345 456</p>
              <p className="text-white/80 ">contact@evervale.com</p>
            </div>
            <div className="flex gap-8 mt-3">
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
          <div className="flex gap-32">
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
              className="text-left min-w-max"
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
              className="text-left min-w-max"
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
              className="text-left min-w-max"
            />
          </div>
        </div>
        <p className="text-white/60 text-sm">
          ©2025 EVERVALE. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
