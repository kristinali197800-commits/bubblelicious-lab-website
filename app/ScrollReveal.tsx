"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".protocol .section-heading",
  ".steps article",
  ".protocol-note",
  ".menu .section-heading",
  ".menu-card",
  ".menu-banner",
  ".visit-photo",
  ".visit-copy",
  ".review-topics .eyebrow",
  ".review-topics span",
  ".site-footer > *",
].join(",");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal-target");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
    });

    document.documentElement.classList.add("scroll-motion");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-motion");
      targets.forEach((target) => {
        target.classList.remove("scroll-reveal-target", "reveal-visible");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
