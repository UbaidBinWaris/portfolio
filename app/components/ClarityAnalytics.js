"use client";

import { useEffect } from "react";

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "ugh4m36u47";

export default function ClarityAnalytics() {
  useEffect(() => {
    // Defer Clarity initialization to improve initial page load
    const timer = setTimeout(async () => {
      if (typeof window !== "undefined" && CLARITY_PROJECT_ID) {
        const { default: Clarity } = await import("@microsoft/clarity");
        Clarity.init(CLARITY_PROJECT_ID);
        
        // Set custom tags for environment
        Clarity.setTag("environment", process.env.NODE_ENV || "production");
        Clarity.setTag("deployment", "vercel");
      }
    }, 2000); // Delay initialization by 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
}
