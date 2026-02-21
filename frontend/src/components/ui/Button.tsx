import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "header" | "contact";
}

const motionClass =
  "cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-0";

const variants = {
  primary: `btn-text w-auto h-[44px] bg-pr_y text-pr_dg rounded-full px-5 py-2 shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(0,0,0,0.22)] ${motionClass}`,
  header: `btn-text !text-[0.8rem] sm:!text-[0.82rem] !font-normal w-auto h-[32px] bg-pr_y text-pr_dg rounded-full px-4 py-1 shadow-[0_8px_16px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(0,0,0,0.2)] ${motionClass}`,
  contact: `btn-text w-full h-[48px] rounded-2xl bg-pr_dg text-pr_w font-medium shadow-[0_9px_18px_rgba(0,0,0,0.18)] hover:bg-[#021f15] hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(0,0,0,0.22)] focus:outline-none focus:ring-2 focus:ring-pr_y ${motionClass}`,
};

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
