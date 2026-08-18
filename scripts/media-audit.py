import asyncio
import json
import sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE_URL = 'https://ignitevascularcenter.com'
PAGES = [
    '/',
    '/about',
    '/contact',
    '/gallery',
    '/case-studies',
    '/second-opinion',
    '/treatments',
    '/admin'
]

async def audit_page(browser, path):
    context = await browser.new_context(viewport={"width": 1280, "height": 1800})
    page = await context.new_page()
    url = f"{BASE_URL}{path}"
    print(f"\nAuditing: {url}")
    
    broken_assets = set()
    
    # Listen for failed requests
    def on_request_failed(request):
        resource_type = request.resource_type
        if resource_type in ['image', 'media', 'video']:
            error_text = request.failure.error_text if request.failure else 'Unknown error'
            print(f"❌ Request Failed: {request.url} ({error_text})")
            broken_assets.add(request.url)

    # Listen for 404s and other error statuses
    def on_response(response):
        status = response.status
        resource_type = response.request.resource_type
        if status >= 400 and resource_type in ['image', 'media', 'video']:
            print(f"❌ HTTP {status}: {response.url}")
            broken_assets.add(response.url)

    page.on('requestfailed', on_request_failed)
    page.on('response', on_response)

    try:
        await page.goto(url, wait_until='networkidle', timeout=60000)
        
        # Check for images in the DOM
        images = await page.evaluate("""() => {
            return Array.from(document.querySelectorAll('img')).map(img => ({
                src: img.src,
                complete: img.complete,
                naturalWidth: img.naturalWidth
            }));
        }""")

        for img in images:
            if img['src'] and (not img['complete'] or img['naturalWidth'] == 0):
                if not img['src'].startswith('data:'):
                    print(f"❌ Broken Image (DOM check): {img['src']}")
                    broken_assets.add(img['src'])

        # Check for videos
        videos = await page.evaluate("""() => {
            return Array.from(document.querySelectorAll('video')).map(video => ({
                src: video.src || (video.querySelector('source') ? video.querySelector('source').src : null),
                error: video.error
            }));
        }""")

        for video in videos:
            if video['src'] and video['error']:
                print(f"❌ Broken Video (DOM check): {video['src']}")
                broken_assets.add(video['src'])

    except Exception as e:
        print(f"Failed to load page {url}: {e}")
    finally:
        await context.close()

    return list(broken_assets)

async def main():
    print('🚀 Starting Media Audit for Ignite Vascular Center...')
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        
        all_broken_assets = {}
        total_broken = 0

        for path in PAGES:
            broken = await audit_page(browser, path)
            if broken:
                all_broken_assets[path] = broken
                total_broken += len(broken)

        await browser.close()

        print('\n' + '='*50)
        print('📊 AUDIT SUMMARY')
        print('='*50)
        
        if total_broken == 0:
            print('✅ No broken media assets found! All images and videos loaded successfully.')
        else:
            print(f"❌ Found {total_broken} broken media assets across {len(all_broken_assets)} pages:")
            for path, assets in all_broken_assets.items():
                print(f"\nPage: {path}")
                for asset in assets:
                    print(f"  - {asset}")
            print('='*50)
            sys.exit(1)
        print('='*50)

if __name__ == "__main__":
    asyncio.run(main())
