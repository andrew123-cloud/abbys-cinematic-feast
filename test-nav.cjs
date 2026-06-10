const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  await p.setViewportSize({ width: 390, height: 844 });
  await p.goto('http://localhost:5177/');
  await p.waitForTimeout(1500);

  const before = await p.evaluate(() => {
    const el = document.getElementById('mob-menu');
    if (!el) return 'not found';
    const cs = window.getComputedStyle(el);
    return { transform: cs.transform, classes: el.className };
  });
  console.log('Before click:', JSON.stringify(before));

  const ham = await p.$('button.lg\\:hidden');
  if (ham) { await ham.click(); console.log('Clicked hamburger'); }
  else {
    const allBtns = await p.evaluate(() =>
      Array.from(document.querySelectorAll('button')).map(b => b.getAttribute('aria-label') + ' | ' + b.className)
    );
    console.log('No hamburger .lg:hidden found, all buttons:', JSON.stringify(allBtns));
  }
  await p.waitForTimeout(900);

  const after = await p.evaluate(() => {
    const el = document.getElementById('mob-menu');
    if (!el) return 'not found';
    const cs = window.getComputedStyle(el);
    return { transform: cs.transform, classes: el.className };
  });
  console.log('After click:', JSON.stringify(after));
  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/nav-debug.png' });
  await b.close();
})().catch(e => console.error(e.message));
