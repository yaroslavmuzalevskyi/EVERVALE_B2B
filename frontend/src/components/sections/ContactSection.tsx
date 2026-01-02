import React from "react";
import InfoContainer from "../common/InfoContainer";
import Card from "../common/Card";
import Button from "../ui/Button";
import Image from "next/image";
import facebookIcon from "../../../public/icons/facebook-logo.svg";
import twitterIcon from "../../../public/icons/twitter-logo.svg";
import instagramIcon from "../../../public/icons/instagram-logo.svg";
import { cn } from "../../lib/utils";

interface ContactSectionProps {
  className?: string;
  sectionId?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  className,
  sectionId,
}) => {
  return (
    <section id={sectionId} className={cn("w-full mb-52 ", className)}>
      <div className="flex flex-col gap-14">
        <InfoContainer
          title="Get in Touch."
          titleClassName="display-xl text-pr_w"
          contentClassName="display-md_thin text-pr_w"
          containerGap="gap-3"
          textAlign="left"
        >
          Feel free to contact us, let us know how we can help!
        </InfoContainer>

        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-8 text-pr_w md:justify-between">
            <div>
              <p className="text-ag-12 uppercase tracking-[0.08em] text-white/60">
                Email
              </p>
              <p className="mt-1 display-md text-pr_y">contact@evervale.com</p>
            </div>
            <div>
              <p className="text-ag-12 uppercase tracking-[0.08em] text-white/60">
                Phone Number
              </p>
              <p className="mt-1 display-md text-pr_y">+352 662 345 456</p>
            </div>
            <div>
              <p className="text-ag-12 uppercase tracking-[0.08em] text-white/60">
                Social Media
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex h-12 w-[130px] items-center gap-2 rounded-full border border-pr_y/70 px-4 text-pr_y transition-all duration-300 ease-out hover:bg-pr_y/10 hover:rounded-bl-none"
                >
                  <Image
                    src={facebookIcon}
                    alt="Facebook"
                    width={10}
                    height={10}
                    className="invert"
                  />
                  <span className="text-ag-14">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-[130px] items-center gap-2 rounded-full border border-pr_y/70 px-4 text-pr_y transition-all duration-300 ease-out hover:bg-pr_y/10 hover:rounded-bl-none"
                >
                  <Image
                    src={twitterIcon}
                    alt="Twitter"
                    width={18}
                    height={18}
                    className="invert"
                  />
                  <span className="text-ag-14">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-[130px] items-center gap-2 rounded-full border border-pr_y/70 px-4 text-pr_y transition-all duration-300 ease-out hover:bg-pr_y/10 hover:rounded-bl-none"
                >
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={18}
                    height={18}
                    className="invert"
                  />
                  <span className="text-ag-14">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:ml-auto md:max-w-[680px]">
            <Card width="100%" className="bg-[#F2FFFD] text-pr_dg">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-ag-14 font-medium text-pr_dg">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Michael Alfredo"
                    className="h-12 rounded-xl border border-pr_dg/30 bg-transparent px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-ag-14 font-medium text-pr_dg">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Example Co."
                    className="h-12 rounded-xl border border-pr_dg/30 bg-transparent px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-ag-14 font-medium text-pr_dg">
                    Company Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-xl border border-pr_dg/30 bg-transparent px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-ag-14 font-medium text-pr_dg">
                    Message
                  </label>
                  <textarea
                    placeholder="Let us know how we can help"
                    className="min-h-[120px] rounded-xl border border-pr_dg/30 bg-transparent px-4 py-3 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                  />
                </div>
                <Button variant="contact">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
