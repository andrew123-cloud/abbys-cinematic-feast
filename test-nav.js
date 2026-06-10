const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  await p.setViewportSize({ width: 390, height: 844 });
  await p.goto('http://localhost:5177/');
  await p.waitForTimeout(1500);

  // Check mob-menu initial state
  const before = await p.evaluate(() => {
    const el = document.getElementById('mob-menu');
    if (!el) return 'not found';
    const cs = window.getComputedStyle(el);
    return { transform: cs.transform, zIndex: cs.zIndex, classes: el.className };
  });
  console.log('Before click:', JSON.stringify(before));

  // Click hamburger (visible on mobile)
  const ham = await p.$('button.lg\\:hidden');
  if (ham) {
    await ham.click();
    console.log('Clicked hamburger');
  } else {
    console.log('Hamburger not found');
    const all = await p.evaluate(() => Array.from(document.querySelectorAll('button')).map(b => b.getAttribute('aria-label') + ' | ' + b.className));
    console.log('All buttons:', JSON.stringify(all));
  }

  await p.waitForTimeout(900);

  const after = await p.evaluate(() => {
    const el = document.getElementById('mob-menu');
    if (!el) return 'not found';
    const cs = window.getComputedStyle(el);
    return { transform: cs.transform, zIndex: cs.zIndex, classes: el.className };
  });
  console.log('After click:', JSON.stringify(after));

  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/nav-debug.png' });
  await b.close();
})().catch(e => console.error(e.message));
