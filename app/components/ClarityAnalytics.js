"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "ugh4m36u47";

export default function ClarityAnalytics() {
  useEffect(() => {
    // Initialize Clarity only on client side
    if (typeof window !== "undefined" && CLARITY_PROJECT_ID) {
      Clarity.init(CLARITY_PROJECT_ID);
      
      // Set custom tags for environment
      Clarity.setTag("environment", process.env.NODE_ENV || "production");
      Clarity.setTag("deployment", "vercel");
      
      console.log("✅ Microsoft Clarity initialized:", CLARITY_PROJECT_ID);
    }
  }, []);

  return null; // This component doesn't render anything
}
