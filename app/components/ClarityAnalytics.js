"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "ugh4m36u47";

export default function ClarityAnalytics() {
  useEffect(() => {
    // Initialize Clarity only on client side
    if (typeof window !== "undefined") {
      Clarity.init(CLARITY_PROJECT_ID);
      
      // Optional: Set custom tags or identify users
      // Clarity.setTag("environment", process.env.NODE_ENV);
      
      console.log("✅ Microsoft Clarity initialized");
    }
  }, []);

  return null; // This component doesn't render anything
}
