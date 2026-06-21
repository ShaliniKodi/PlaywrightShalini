import { test, expect } from '@playwright/test';

test('Search for mobile on Amazon and find all available links', async ({ page }) => {
  // Launch Amazon
  await page.goto('https://www.amazon.com');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  console.log('✓ Amazon launched successfully');
  
  // Search for mobile
  const searchBox = page.locator('input[id="twotabsearchtextbox"]');
  await searchBox.fill('mobile');
  
  // Press Enter to search
  await page.press('input[id="twotabsearchtextbox"]', 'Enter');
  
  // Wait for search results to load
  await page.waitForLoadState('networkidle');
  
  console.log('✓ Searched for "mobile" successfully');
  
  // Get all links on the page
  const allLinks = await page.locator('a').all();
  
  console.log(`\n📊 Total links found: ${allLinks.length}\n`);
  
  // Extract and log all link URLs and text
  const linksData: { url: string; text: string }[] = [];
  
  for (const link of allLinks) {
    const href = await link.getAttribute('href');
    const text = await link.textContent();
    
    if (href && text && text.trim()) {
      linksData.push({
        url: href,
        text: text.trim()
      });
    }
  }
  
  // Filter for product-related links
  const productLinks = linksData.filter(
    link => 
      link.url.includes('/dp/') || 
      link.url.includes('amazon.com/') ||
      link.text.toLowerCase().includes('mobile') ||
      link.text.toLowerCase().includes('phone') ||
      link.text.toLowerCase().includes('smartphone')
  );
  
  console.log('📱 PRODUCT LINKS:');
  console.log('================\n');
  
  productLinks.forEach((link, index) => {
    console.log(`${index + 1}. ${link.text}`);
    console.log(`   URL: ${link.url}\n`);
  });
  
  console.log('\n📋 ALL LINKS (excluding empty):');
  console.log('================================\n');
  
  linksData.slice(0, 30).forEach((link, index) => {
    console.log(`${index + 1}. ${link.text}`);
    console.log(`   URL: ${link.url}\n`);
  });
  
  // Save screenshot
  await page.screenshot({ path: 'Screenshots/amazon-search-results.png' });
  
  console.log('✓ Screenshot saved to Screenshots/amazon-search-results.png');
});
