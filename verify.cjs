const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  await p.setViewportSize({ width: 1280, height: 900 });
  await p.goto('http://localhost:5177/');
  await p.waitForTimeout(2000);
  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/home-hero.png' });

  // Scroll down to see about section animations
  await p.evaluate(() => window.scrollBy(0, 900));
  await p.waitForTimeout(1000);
  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/home-about.png' });

  // Mobile view + sidebar
  await p.setViewportSize({ width: 390, height: 844 });
  await p.goto('http://localhost:5177/');
  await p.waitForTimeout(1500);
  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/mobile-closed.png' });

  await p.$('button.lg\\:hidden').then(h => h.click());
  await p.waitForTimeout(900);
  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/mobile-open.png' });

  await b.close();
  console.log('done');
})().catch(e => console.error(e.message));
