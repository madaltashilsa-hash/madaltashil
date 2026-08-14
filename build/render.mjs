/* =========================================================================
   مدى التسهيل للتجارة — مُنتِج صور الشرائح
   يفتح build/art.html في متصفح Chromium، يلتقط كل شريحة بدقة 2×،
   ثم يحوّلها إلى WebP داخل assets/slides/

   ⚠️  تنبيه مهم
   هذا السكربت يُنتج تصاميم مُولّدة بالكود (Vector) — وليس تصاميمك الجاهزة.
   تشغيله سيستبدل الصور الموجودة حاليًا في assets/slides/
   لا تشغّله إلا إذا كنت تريد العودة للتصاميم المُولّدة.

   التشغيل:
     npm install playwright sharp
     npx playwright install chromium
     node build/render.mjs
   ========================================================================= */

import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OUT = path.resolve('assets/slides');
const TMP = path.resolve('build/_png');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

const browser = await chromium.launch({
  args: ['--force-color-profile=srgb', '--font-render-hinting=none']
});

const page = await browser.newPage({
  viewport: { width: 2040, height: 1100 },   // أوسع من الشريحة (1920) حتى لا تُقتطع اللقطة
  deviceScaleFactor: 2                       // دقة 2× للشاشات عالية الكثافة
});

await page.goto('file://' + path.resolve('build/art.html'), { waitUntil: 'networkidle' });
await page.waitForFunction(() => window.__READY__ === true);
await page.waitForTimeout(400);

const ids = await page.evaluate(() => window.__IDS__);
let n = 0;

for (const id of ids) {
  for (const mode of ['d', 'm']) {
    const suffix = mode === 'd' ? 'desktop' : 'mobile';
    const png = path.join(TMP, `${id}-${suffix}.png`);
    const webp = path.join(OUT, `${id}-${suffix}.webp`);

    await page.locator(`#${id}-${mode}`).screenshot({ path: png });
    await sharp(png).webp({ quality: 90, effort: 6 }).toFile(webp);

    n++;
    console.log('✓', path.basename(webp));
  }
}

await browser.close();
fs.rmSync(TMP, { recursive: true, force: true });
console.log(`\nتم إنتاج ${n} صورة في ${OUT}`);
