import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import puppeteer from 'puppeteer-core';

const projects = [
  { url: 'https://your-pattern.vercel.app/', out: 'yourpattern.png' },
  { url: 'https://hack-1-pute.onrender.com/', out: 'secureshield.png' },
  { url: 'https://effulgent-kashata-d11f9d.netlify.app/', out: 'mindfulme.png' },
];

function findBrowserExecutable() {
  const candidates = [
    // Chrome
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    // Edge
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    // Brave
    'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
    'C:/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe',
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) return p;
    } catch {}
  }
  return null;
}

async function capture() {
  const execPath = findBrowserExecutable();
  if (!execPath) {
    console.error('Could not find a local Chrome/Edge/Brave executable. Please install one.');
    process.exit(1);
  }

  const outDir = path.resolve(process.cwd(), 'public', 'projects');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: execPath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--hide-scrollbars',
      '--window-size=1440,900',
    ],
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      isMobile: false,
    },
  });

  const page = await browser.newPage();

  for (const p of projects) {
    const outPath = path.join(outDir, p.out);
    try {
      console.log('Capturing', p.url);
      await page.goto(p.url, { waitUntil: 'load', timeout: 60000 });
      // extra wait for client-side hydration/animations (Puppeteer v22: no waitForTimeout)
      await new Promise(r => setTimeout(r, 2500));
      // try to dismiss cookie banners if any
      try {
        await page.evaluate(() => {
          const texts = ['accept', 'agree', 'allow'];
          const btns = Array.from(document.querySelectorAll('button, [role="button"], a'));
          const cand = btns.find(b => texts.some(t => (b.textContent||'').toLowerCase().includes(t)));
          if (cand) cand.click();
        });
      } catch {}
      await page.screenshot({ path: outPath, fullPage: false, type: 'png' });
      console.log('Saved', outPath);
    } catch (err) {
      console.error('Failed to capture', p.url, err?.message || err);
    }
  }

  await browser.close();
}

capture().catch(err => { console.error(err); process.exit(1); });
