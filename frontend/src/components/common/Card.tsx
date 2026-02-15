import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({
  width = "360px",
  height = "fit-content",
  className,
  style,
  children,
  ...rest
}) => {
  const computedStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: width,
    ...style,
  };

  if (height && height !== "fit-content" && height !== "auto") {
    computedStyle.minHeight = height;
  }

  return (
    <div
      className={cn(
        "rounded-tr-3xl rounded-bl-3xl bg-[color:var(--surface)] p-6 sm:p-7 md:p-8 text-pr_dg border border-[color:var(--surface-border)] shadow-[0_18px_50px_rgba(0,0,0,0.18)]",
        className
      )}
      style={computedStyle}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
