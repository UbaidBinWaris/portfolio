/**
 * Microsoft Clarity Data Export API Utility
 * Fetch analytics data from Clarity API
 * 
 * API Documentation: https://www.clarity.ms/export-data/api/v1/project-live-insights
 * Rate Limit: 10 calls per project per day
 */

const CLARITY_API_BASE = "https://www.clarity.ms/export-data/api/v1";
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "ugh4m36u47";
const CLARITY_API_TOKEN = process.env.CLARITY_API_TOKEN;

/**
 * Fetch live insights from Clarity
 * @returns {Promise<Object>} Clarity insights data
 */
export async function getClarityInsights() {
  if (!CLARITY_API_TOKEN) {
    console.warn("⚠️ CLARITY_API_TOKEN not configured");
    return null;
  }

  try {
    const response = await fetch(
      `${CLARITY_API_BASE}/project-live-insights?projectId=${CLARITY_PROJECT_ID}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${CLARITY_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Always fetch fresh data
      }
    );

    if (!response.ok) {
      throw new Error(`Clarity API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Failed to fetch Clarity insights:", error);
    return null;
  }
}

/**
 * Get formatted analytics summary
 * @returns {Promise<Object>} Formatted analytics data
 */
export async function getClarityStats() {
  const insights = await getClarityInsights();
  
  if (!insights) {
    return {
      error: true,
      message: "Unable to fetch analytics data",
    };
  }

  // Format the data for easy consumption
  return {
    sessions: insights.totalSessions || 0,
    users: insights.totalUsers || 0,
    pageViews: insights.totalPageViews || 0,
    avgSessionDuration: insights.avgSessionDuration || 0,
    bounceRate: insights.bounceRate || 0,
    topPages: insights.topPages || [],
    topCountries: insights.topCountries || [],
    devices: {
      desktop: insights.desktopPercentage || 0,
      mobile: insights.mobilePercentage || 0,
      tablet: insights.tabletPercentage || 0,
    },
    lastUpdated: new Date().toISOString(),
  };
}

/**
 * Export Clarity data for external use
 * @param {string} dataType - Type of data to export (sessions, heatmaps, etc.)
 * @returns {Promise<Object>} Exported data
 */
export async function exportClarityData(dataType = "sessions") {
  if (!CLARITY_API_TOKEN) {
    throw new Error("CLARITY_API_TOKEN not configured");
  }

  try {
    const response = await fetch(
      `${CLARITY_API_BASE}/export/${dataType}?projectId=${CLARITY_PROJECT_ID}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${CLARITY_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Export failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Clarity export failed:", error);
    throw error;
  }
}

export default {
  getClarityInsights,
  getClarityStats,
  exportClarityData,
};
