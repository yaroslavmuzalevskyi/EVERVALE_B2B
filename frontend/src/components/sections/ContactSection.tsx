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
    <section id={sectionId} className={cn("w-full", className)}>
      <div className="flex flex-col gap-12">
        <InfoContainer
          title="Get in Touch."
          titleClassName="text-[clamp(2rem,3.4vw,3.2rem)] leading-[1.08] font-extrabold text-pr_w"
          contentClassName="display-md_thin text-pr_w/70"
          containerGap="gap-4"
          textAlign="left"
          reveal
          revealDelay={40}
        >
          Feel free to contact us, let us know how we can help!
        </InfoContainer>

        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,640px)] lg:items-stretch">
          <div className="flex h-full flex-col justify-between gap-8 text-pr_w">
            <div
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-ag-12 uppercase tracking-[0.12em] text-white/60">
                Email
              </p>
              <p className="mt-2 display-md text-pr_y">contact@evervale.com</p>
            </div>
            <div
              data-reveal
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              <p className="text-ag-12 uppercase tracking-[0.12em] text-white/60">
                Phone Number
              </p>
              <p className="mt-2 display-md text-pr_y">+352 662 345 456</p>
            </div>
            <div
              data-reveal
              style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
            >
              <p className="text-ag-12 uppercase tracking-[0.12em] text-white/60">
                Social Media
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="flex h-10 w-14 items-center justify-center rounded-full border border-pr_y text-white transition-all duration-200 ease-out hover:bg-white/10 hover:border-white/90"
                >
                  <Image
                    src={facebookIcon}
                    alt="Facebook"
                    width={10}
                    height={10}
                    className="brightness-0 invert"
                  />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-14 items-center justify-center rounded-full border border-pr_y text-white transition-all duration-200 ease-out hover:bg-white/10 hover:border-white/90"
                >
                  <Image
                    src={twitterIcon}
                    alt="Twitter"
                    width={18}
                    height={18}
                    className="brightness-0 invert"
                  />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-14 items-center justify-center rounded-full border border-pr_y text-white transition-all duration-200 ease-out hover:bg-white/10 hover:border-white/90"
                >
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={18}
                    height={18}
                    className="brightness-0 invert"
                  />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:ml-auto lg:max-w-[640px] lg:h-full">
            <Card width="100%" className="h-full text-pr_dg" data-reveal>
              <form className="flex h-full min-h-[640px] flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-ag-14 font-medium text-pr_dg">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Michael Alfredo"
                    className="h-11 rounded-lg border border-pr_dg/40 bg-[color:var(--surface)] px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-ag-14 font-medium text-pr_dg">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Example Co."
                    className="h-11 rounded-lg border border-pr_dg/40 bg-[color:var(--surface)] px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-ag-14 font-medium text-pr_dg">
                    Company Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-lg border border-pr_dg/40 bg-[color:var(--surface)] px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label className="text-ag-14 font-medium text-pr_dg">
                    Message
                  </label>
                  <textarea
                    placeholder="Let us know how we can help"
                    className="h-full min-h-[160px] rounded-lg border border-pr_dg/40 bg-[color:var(--surface)] px-4 py-3 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                  />
                </div>
                <Button variant="contact" className="mt-auto">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
