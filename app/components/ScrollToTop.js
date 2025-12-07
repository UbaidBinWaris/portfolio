"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    if (typeof window !== "undefined") {
      // Use both methods to ensure it works across browsers
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Disable scroll restoration
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }
  }, []);

  return null;
}
