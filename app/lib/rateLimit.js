/**
 * Simple in-memory rate limiter
 * For production, consider using Redis or a dedicated service
 */

const rateLimitMap = new Map();

/**
 * Rate limit configuration
 */
const RATE_LIMITS = {
  clarity: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 10, // 10 requests per minute
  },
  indexnow: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 5, // 5 requests per minute
  },
};

/**
 * Check if request should be rate limited
 * @param {string} identifier - IP address or user identifier
 * @param {string} endpoint - API endpoint name
 * @returns {Object} - { limited: boolean, resetTime: number }
 */
export function checkRateLimit(identifier, endpoint = 'default') {
  const config = RATE_LIMITS[endpoint] || { windowMs: 60000, maxRequests: 10 };
  const now = Date.now();
  const key = `${endpoint}:${identifier}`;

  // Get or initialize rate limit data
  let rateLimitData = rateLimitMap.get(key);

  if (!rateLimitData || now - rateLimitData.resetTime > config.windowMs) {
    // Create new rate limit window
    rateLimitData = {
      count: 0,
      resetTime: now + config.windowMs,
    };
  }

  // Increment request count
  rateLimitData.count++;
  rateLimitMap.set(key, rateLimitData);

  // Check if limit exceeded
  const limited = rateLimitData.count > config.maxRequests;

  return {
    limited,
    resetTime: rateLimitData.resetTime,
    remaining: Math.max(0, config.maxRequests - rateLimitData.count),
  };
}

/**
 * Clean up old entries periodically
 */
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of rateLimitMap.entries()) {
    if (now > data.resetTime + 60000) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000); // Clean every 5 minutes

/**
 * Get client identifier from request
 * @param {Request} request - Next.js request object
 * @returns {string} - Client identifier
 */
export function getClientIdentifier(request) {
  // Try to get real IP from headers (works with most proxies/CDNs)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
  
  return cfConnectingIp || realIp || forwarded?.split(',')[0].trim() || 'unknown';
}
