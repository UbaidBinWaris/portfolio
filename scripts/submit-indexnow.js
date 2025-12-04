#!/usr/bin/env node

/**
 * IndexNow Submission Script
 * Submits sitemap URLs to IndexNow after build
 */

const https = require('https');

const INDEXNOW_KEY = '34010ce9592af026867e6c742c168f94';
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';

async function submitToIndexNow() {
  const host = DOMAIN.replace('https://', '').replace('http://', '');
  const keyLocation = `${DOMAIN}/${INDEXNOW_KEY}.txt`;

  // Get sitemap URLs
  const sitemapUrl = `${DOMAIN}/sitemap.xml`;
  
  console.log('📡 Fetching sitemap from:', sitemapUrl);

  try {
    const sitemapXml = await fetchUrl(sitemapUrl);
    const urlMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g);

    if (!urlMatches) {
      console.log('⚠️  No URLs found in sitemap');
      return;
    }

    const urls = urlMatches.map(match =>
      match.replace('<loc>', '').replace('</loc>', '')
    );

    console.log(`✅ Found ${urls.length} URLs in sitemap`);
    console.log('📤 Submitting to IndexNow...');

    const payload = JSON.stringify({
      host: host,
      key: INDEXNOW_KEY,
      keyLocation: keyLocation,
      urlList: urls,
    });

    const result = await postToIndexNow(payload);
    
    if (result.success) {
      console.log(`🎉 Successfully submitted ${urls.length} URLs to IndexNow!`);
      console.log('✨ Status:', result.status, result.status === 202 ? '(Accepted)' : '(OK)');
      console.log('📋 Submitted URLs:');
      urls.forEach(url => console.log(`   → ${url}`));
    } else {
      console.log('❌ Failed to submit to IndexNow');
      console.log('Status:', result.status);
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function postToIndexNow(payload) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.indexnow.org',
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // 200 = OK, 202 = Accepted (both are success)
        const isSuccess = res.statusCode === 200 || res.statusCode === 202;
        resolve({
          success: isSuccess,
          status: res.statusCode,
          error: !isSuccess ? data : null,
        });
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// Run the script
submitToIndexNow();
