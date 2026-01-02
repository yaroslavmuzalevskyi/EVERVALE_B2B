import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "header" | "contact";
}

const variants = {
  primary:
    "btn-text w-auto h-[52px] bg-pr_y text-pr_dg rounded-4xl px-6 py-3 cursor-pointer transition-transform duration-200 ease-out hover:scale-105",
  header:
    "btn-text w-auto h-[48px] bg-pr_y text-pr_dg rounded-4xl px-6 py-3 cursor-pointer transition-transform duration-200 ease-out hover:scale-105",
  contact:
    "btn-text w-full h-[56px] rounded-2xl bg-pr_dg text-pr_w font-medium transition-colors transition-transform duration-200 ease-out hover:bg-[#021f15] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pr_y",
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
