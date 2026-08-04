"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If opening page without a specific anchor hash, enforce top scroll
      if (!window.location.hash) {
        const resetScroll = () => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        };

        resetScroll();

        // Delay to override browser layout restore or GSAP initial pin calculations
        const timer1 = setTimeout(resetScroll, 50);
        const timer2 = setTimeout(resetScroll, 200);

        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    }
  }, []);

  return null;
}
