import { chromium } from '@playwright/test';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const outputDir = '/opt/cursor/artifacts';

async function captureScreenshots() {
  const browser = await chromium.launch();
  
  try {
    await mkdir(outputDir, { recursive: true });

    // Homepage Desktop
    {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await page.goto('http://localhost:3000/demo/wasatch-deals', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      await page.screenshot({ 
        path: join(outputDir, 'wasatch-home-desktop.png'), 
        fullPage: true 
      });
      await page.close();
      console.log('✓ Homepage Desktop');
    }

    // Homepage Mobile
    {
      const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
      await page.goto('http://localhost:3000/demo/wasatch-deals', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      await page.screenshot({ 
        path: join(outputDir, 'wasatch-home-mobile.png'), 
        fullPage: true 
      });
      await page.close();
      console.log('✓ Homepage Mobile');
    }

    // Product Page Desktop
    {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await page.goto('http://localhost:3000/demo/wasatch-deals/p/power-glider-recliner', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      await page.screenshot({ 
        path: join(outputDir, 'wasatch-product-desktop.png'), 
        fullPage: true 
      });
      await page.close();
      console.log('✓ Product Page Desktop');
    }

    // Product Page Mobile
    {
      const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
      await page.goto('http://localhost:3000/demo/wasatch-deals/p/power-glider-recliner', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      await page.screenshot({ 
        path: join(outputDir, 'wasatch-product-mobile.png'), 
        fullPage: true 
      });
      await page.close();
      console.log('✓ Product Page Mobile');
    }

    // Cart Drawer Open (Desktop)
    {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await page.goto('http://localhost:3000/demo/wasatch-deals/p/power-glider-recliner', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      
      // Click "Add to Cart"
      await page.click('button:has-text("Add to Cart")');
      await page.waitForTimeout(500);
      
      // Wait for the checkout button to appear (indicating cart has items)
      await page.waitForSelector('button:has-text("Checkout")');
      
      await page.screenshot({ 
        path: join(outputDir, 'wasatch-cart-open.png'), 
        fullPage: false 
      });
      await page.close();
      console.log('✓ Cart Button Visible');
    }

    // Checkout Modal Open (Desktop)
    {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await page.goto('http://localhost:3000/demo/wasatch-deals/p/power-glider-recliner', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      
      // Click "Add to Cart"
      await page.click('button:has-text("Add to Cart")');
      await page.waitForTimeout(500);
      
      // Click "Checkout"
      await page.click('button:has-text("Checkout")');
      await page.waitForTimeout(500);
      
      // Wait for modal to appear
      await page.waitForSelector('text=This is a demo');
      
      await page.screenshot({ 
        path: join(outputDir, 'wasatch-checkout-modal.png'), 
        fullPage: false 
      });
      await page.close();
      console.log('✓ Checkout Modal');
    }

  } finally {
    await browser.close();
  }

  console.log('\nAll screenshots saved to:', outputDir);
}

captureScreenshots().catch(console.error);
