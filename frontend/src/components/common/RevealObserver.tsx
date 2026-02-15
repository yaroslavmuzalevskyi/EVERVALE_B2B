"use client";

import { useEffect } from "react";

interface RevealObserverProps {
  scopeId?: string;
}

const RevealObserver: React.FC<RevealObserverProps> = ({ scopeId = "b2b-page" }) => {
  useEffect(() => {
    const scope = document.getElementById(scopeId);
    if (!scope) return;

    const elements = Array.from(
      scope.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element, index) => {
      if (!element.style.getPropertyValue("--reveal-delay")) {
        element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          target.classList.add("is-visible");
          currentObserver.unobserve(target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [scopeId]);

  return null;
};

export default RevealObserver;
