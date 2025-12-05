/**
 * Input validation utilities
 */

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid
 */
export function isValidUrl(url) {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Validate array of URLs
 * @param {Array} urls - Array of URLs to validate
 * @param {number} maxCount - Maximum allowed URLs
 * @returns {Object} - { valid: boolean, error: string }
 */
export function validateUrlArray(urls, maxCount = 100) {
  if (!Array.isArray(urls)) {
    return { valid: false, error: 'URLs must be an array' };
  }

  if (urls.length === 0) {
    return { valid: false, error: 'URLs array cannot be empty' };
  }

  if (urls.length > maxCount) {
    return { valid: false, error: `Too many URLs. Maximum allowed: ${maxCount}` };
  }

  // Validate each URL
  for (const url of urls) {
    if (typeof url !== 'string') {
      return { valid: false, error: 'All URLs must be strings' };
    }

    if (!isValidUrl(url)) {
      return { valid: false, error: `Invalid URL format: ${url}` };
    }

    // Check URL length
    if (url.length > 2048) {
      return { valid: false, error: 'URL too long (max 2048 characters)' };
    }
  }

  return { valid: true };
}

/**
 * Sanitize error messages for production
 * @param {Error} error - Error object
 * @param {boolean} isDevelopment - Development mode flag
 * @returns {string} - Safe error message
 */
export function sanitizeError(error, isDevelopment = false) {
  if (isDevelopment) {
    return error.message || 'An error occurred';
  }
  
  // In production, return generic messages
  return 'An unexpected error occurred. Please try again later.';
}

/**
 * Validate origin for CORS
 * @param {string} origin - Request origin
 * @returns {boolean} - True if allowed
 */
export function isAllowedOrigin(origin) {
  const allowedOrigins = [
    'https://uabidbinwaris.dev',
    'https://www.uabidbinwaris.dev',
    process.env.NEXT_PUBLIC_DOMAIN_URL,
  ].filter(Boolean);

  // In development, allow localhost
  if (process.env.NODE_ENV === 'development') {
    allowedOrigins.push('http://localhost:3000', 'http://localhost:3001');
  }

  return allowedOrigins.includes(origin);
}
