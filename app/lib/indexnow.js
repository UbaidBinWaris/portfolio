/**
 * IndexNow Utility Functions
 * Submit URLs to IndexNow API for real-time search engine indexing
 */

const INDEXNOW_KEY = '34010ce9592af026867e6c742c168f94';
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';

/**
 * Submit a single URL to IndexNow
 * @param {string} url - The URL to submit
 * @returns {Promise<object>} Response from IndexNow API
 */
export async function submitUrlToIndexNow(url) {
  return submitUrlsToIndexNow([url]);
}

/**
 * Submit multiple URLs to IndexNow
 * @param {string[]} urls - Array of URLs to submit
 * @returns {Promise<object>} Response from IndexNow API
 */
export async function submitUrlsToIndexNow(urls) {
  if (!urls || urls.length === 0) {
    throw new Error('No URLs provided');
  }

  const host = DOMAIN.replace('https://', '').replace('http://', '');
  const keyLocation = `${DOMAIN}/${INDEXNOW_KEY}.txt`;

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: host,
        key: INDEXNOW_KEY,
        keyLocation: keyLocation,
        urlList: urls,
      }),
    });

    // 200 = OK, 202 = Accepted (both are success)
    const isSuccess = response.status === 200 || response.status === 202;

    const result = {
      success: isSuccess,
      status: response.status,
      urls: urls,
      count: urls.length,
    };

    if (!isSuccess) {
      const errorText = await response.text();
      result.error = errorText;
    }

    return result;
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return {
      success: false,
      error: error.message,
      urls: urls,
      count: urls.length,
    };
  }
}

/**
 * Submit all sitemap URLs to IndexNow
 * @returns {Promise<object>} Response from IndexNow API
 */
export async function submitSitemapToIndexNow() {
  try {
    // Fetch the sitemap
    const sitemapUrl = `${DOMAIN}/sitemap.xml`;
    const response = await fetch(sitemapUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.statusText}`);
    }

    const sitemapXml = await response.text();
    
    // Extract URLs from sitemap
    const urlMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g);
    
    if (!urlMatches) {
      throw new Error('No URLs found in sitemap');
    }

    const urls = urlMatches.map(match => 
      match.replace('<loc>', '').replace('</loc>', '')
    );

    console.log(`Found ${urls.length} URLs in sitemap`);
    
    // Submit to IndexNow
    return await submitUrlsToIndexNow(urls);
  } catch (error) {
    console.error('Error submitting sitemap to IndexNow:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Submit URLs via the internal API route
 * @param {string[]} urls - Array of URLs to submit
 * @returns {Promise<object>} Response from API
 */
export async function submitViaAPI(urls) {
  try {
    const response = await fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ urls }),
    });

    return await response.json();
  } catch (error) {
    console.error('API submission error:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}
