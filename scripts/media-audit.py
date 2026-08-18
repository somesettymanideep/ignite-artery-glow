import { chromium } from 'playwright';

const BASE_URL = 'https://ignitevascularcenter.com';
const PAGES = [
  '/',
  '/about',
  '/contact',
  '/gallery',
  '/case-studies',
  '/second-opinion',
  '/treatments',
  '/admin'
];

async function auditPage(browser: any, path: string) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 1800 }
  });
  const page = await context.newPage();
  const url = `${BASE_URL}${path}`;
  console.log(`\nAuditing: ${url}`);
  
  const brokenAssets: string[] = [];
  
  // Listen for failed requests
  page.on('requestfailed', (request: any) => {
    const resourceType = request.resourceType();
    if (['image', 'media', 'video'].includes(resourceType)) {
      console.error(`❌ Request Failed: ${request.url()} (${request.failure()?.errorText || 'Unknown error'})`);
      brokenAssets.push(request.url());
    }
  });

  // Listen for 404s and other error statuses
  page.on('response', (response: any) => {
    const status = response.status();
    const resourceType = response.request().resourceType();
    if (status >= 400 && ['image', 'media', 'video'].includes(resourceType)) {
      console.error(`❌ HTTP ${status}: ${response.url()}`);
      brokenAssets.push(response.url());
    }
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    
    // Check for images in the DOM that might not have triggered a network error yet (e.g. broken src)
    const images = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        complete: img.complete,
        naturalWidth: img.naturalWidth
      }));
    });

    for (const img of images) {
      if (img.src && (!img.complete || img.naturalWidth === 0)) {
        if (!brokenAssets.includes(img.src) && !img.src.startsWith('data:')) {
          console.error(`❌ Broken Image (DOM check): ${img.src}`);
          brokenAssets.push(img.src);
        }
      }
    }

    // Check for videos
    const videos = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('video')).map(video => ({
        src: video.src || video.querySelector('source')?.src,
        error: video.error
      }));
    });

    for (const video of videos) {
      if (video.src && video.error) {
        if (!brokenAssets.includes(video.src)) {
          console.error(`❌ Broken Video (DOM check): ${video.src}`);
          brokenAssets.push(video.src);
        }
      }
    }

  } catch (error) {
    console.error(`Failed to load page ${url}:`, error);
  } finally {
    await context.close();
  }

  return Array.from(new Set(brokenAssets));
}

async function runAudit() {
  console.log('🚀 Starting Media Audit for Ignite Vascular Center...');
  const browser = await chromium.launch({ headless: true });
  
  const allBrokenAssets: Record<string, string[]> = {};
  let totalBroken = 0;

  try {
    for (const path of PAGES) {
      const broken = await auditPage(browser, path);
      if (broken.length > 0) {
        allBrokenAssets[path] = broken;
        totalBroken += broken.length;
      }
    }
  } finally {
    await browser.close();
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 AUDIT SUMMARY');
  console.log('='.repeat(50));
  
  if (totalBroken === 0) {
    console.log('✅ No broken media assets found! All images and videos loaded successfully.');
  } else {
    console.log(`❌ Found ${totalBroken} broken media assets across ${Object.keys(allBrokenAssets).length} pages:`);
    for (const [path, assets] of Object.entries(allBrokenAssets)) {
      console.log(`\nPage: ${path}`);
      assets.forEach(asset => console.log(`  - ${asset}`));
    }
  }
  console.log('='.repeat(50));
}

runAudit().catch(console.error);
