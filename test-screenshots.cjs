const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  await p.setViewportSize({ width: 390, height: 844 });
  await p.goto('http://localhost:5177/');
  await p.waitForTimeout(1500);

  // Closed state
  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/shot-closed.png' });

  // Open drawer
  await p.$('button.lg\\:hidden').then(h => h.click());
  await p.waitForTimeout(800);
  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/shot-open.png' });

  // Close via overlay click
  await p.click('#mob-menu', { position: { x: -20, y: 400 }, force: true }).catch(() => {});
  // Use evaluate to close
  await p.evaluate(() => {
    const menu = document.getElementById('mob-menu');
    if (menu) menu.classList.remove('open');
  });
  await p.waitForTimeout(800);
  await p.screenshot({ path: 'C:/Users/Admin/AppData/Local/Temp/shot-closed2.png' });

  await b.close();
  console.log('done');
})().catch(e => console.error(e.message));
