import React from "react";
import InfoContainer from "../common/InfoContainer";
import Card from "../common/Card";
import Button from "../ui/Button";
import Image from "next/image";
import facebookIcon from "../../../public/icons/facebook-logo.svg";
import twitterIcon from "../../../public/icons/twitter-logo.svg";
import instagramIcon from "../../../public/icons/instagram-logo.svg";

const ContactSection = () => {
  return (
    <section className="w-full mb-52">
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

        <div className="flex justify-between">
          <div className="flex flex-col justify-between text-pr_w">
            <div>
              <p className="text-sm uppercase text-white/60">Email</p>
              <p className="mt-1 text-2xl font-medium text-pr_y">
                contact@evervale.com
              </p>
            </div>
            <div>
              <p className="text-sm uppercase text-white/60">Phone Number</p>
              <p className="mt-1 text-2xl font-medium text-pr_y">
                +352 662 345 456
              </p>
            </div>
            <div>
              <p className="text-sm uppercase text-white/60">Social Media</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex h-12 w-[130px] items-center gap-2 rounded-full border border-pr_y/70 px-4 text-pr_y transition hover:bg-pr_y/10"
                >
                  <Image
                    src={facebookIcon}
                    alt="Facebook"
                    width={10}
                    height={10}
                    className="invert"
                  />
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-[130px] items-center gap-2 rounded-full border border-pr_y/70 px-4 text-pr_y transition hover:bg-pr_y/10"
                >
                  <Image
                    src={twitterIcon}
                    alt="Twitter"
                    width={18}
                    height={18}
                    className="invert"
                  />
                  <span className="text-sm">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-[130px] items-center gap-2 rounded-full border border-pr_y/70 px-4 text-pr_y transition hover:bg-pr_y/10"
                >
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={18}
                    height={18}
                    className="invert"
                  />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <Card width="680px" className="bg-[#F2FFFD] text-pr_dg">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-pr_dg">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Michael Alfredo"
                  className="h-12 rounded-xl border border-pr_dg/30 bg-transparent px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-pr_dg">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Example Co."
                  className="h-12 rounded-xl border border-pr_dg/30 bg-transparent px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-pr_dg">
                  Company Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 rounded-xl border border-pr_dg/30 bg-transparent px-4 text-pr_dg outline-none transition focus:border-pr_dg focus:ring-2 focus:ring-pr_lg/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-pr_dg">
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
    </section>
  );
};

export default ContactSection;
