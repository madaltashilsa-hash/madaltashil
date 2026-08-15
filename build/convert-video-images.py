#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# =========================================================================
#  مدى التسهيل للتجارة — محوّل صور الفيديو التعريفي إلى WebP 16:9
#
#  هذا هو السكربت الذي أنتج الصور الموجودة في assets/video/.
#  استخدمه كلما أردت إضافة صورة جديدة أو استبدال صورة موجودة.
#
#  ماذا يفعل؟
#    يضع الصورة كاملة داخل إطار 1920×1080 (16:9) بلا أي اقتصاص،
#    ويملأ الفراغ الجانبي بنسخة مكبّرة ضبابية من الصورة نفسها،
#    فلا يُفقد أي نص أو شعار عند حواف الصورة.
#    ثم يُخرج نسختين بصيغة WebP:
#      assets/video/<الاسم>.webp     1920×1080  → للشاشات الكبيرة
#      assets/video/<الاسم>-m.webp    960×540   → مقاس الجوال (أخف وأسرع)
#
#  التشغيل:
#    pip install pillow
#
#    # صورة واحدة باسم محدد:
#    python3 build/convert-video-images.py my-image.png iphone-17-pro
#
#    # مجلد كامل (يستخدم أسماء الملفات كما هي):
#    python3 build/convert-video-images.py ./new-images/
# =========================================================================

import os
import sys
from PIL import Image, ImageFilter

OUT_DIR = os.path.join('assets', 'video')
WIDTH, HEIGHT = 1920, 1080
MOBILE = (960, 540)                 # مقاس الجوال
MAX_KB = 300                        # حد حجم نسخة الشاشات الكبيرة
MOBILE_MAX_KB = 120                 # حد حجم نسخة الجوال
BLUR_RADIUS = 48
QUALITIES = (90, 85, 80, 75, 70, 65, 60, 55, 50)
MOBILE_QUALITIES = (88, 82, 76, 70)


def frame_16x9(im):
    """يضع الصورة كاملة داخل إطار 16:9 مع ملء الجوانب بنسخة ضبابية."""
    im = im.convert('RGB')

    # الخلفية: تكبير يغطي الإطار بالكامل ثم تمويه
    scale = max(WIDTH / im.width, HEIGHT / im.height)
    bg = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = (bg.width - WIDTH) // 2
    top = (bg.height - HEIGHT) // 2
    bg = bg.crop((left, top, left + WIDTH, top + HEIGHT))
    bg = bg.filter(ImageFilter.GaussianBlur(BLUR_RADIUS))

    # المقدمة: الصورة كاملة داخل الإطار بلا اقتصاص
    fit = min(WIDTH / im.width, HEIGHT / im.height)
    fg = im.resize((round(im.width * fit), round(im.height * fit)), Image.LANCZOS)
    bg.paste(fg, ((WIDTH - fg.width) // 2, (HEIGHT - fg.height) // 2))
    return bg


def save_capped(img, out, qualities, max_kb):
    """يحفظ WebP بأعلى جودة ممكنة دون تجاوز الحد المسموح."""
    for quality in qualities:
        img.save(out, 'WEBP', quality=quality, method=6)
        size = os.path.getsize(out)
        if size <= max_kb * 1024:
            break
    return quality, size


def convert(src_path, name):
    """يحوّل صورة واحدة إلى نسختي WebP (شاشات كبيرة + جوال)."""
    os.makedirs(OUT_DIR, exist_ok=True)
    img = frame_16x9(Image.open(src_path))

    out = os.path.join(OUT_DIR, f'{name}.webp')
    q, size = save_capped(img, out, QUALITIES, MAX_KB)

    out_m = os.path.join(OUT_DIR, f'{name}-m.webp')
    small = img.resize(MOBILE, Image.LANCZOS)
    qm, size_m = save_capped(small, out_m, MOBILE_QUALITIES, MOBILE_MAX_KB)

    before = os.path.getsize(src_path)
    print(f'  ✓ {name}.webp    {WIDTH}×{HEIGHT}  {size // 1024:>3} ك.ب  (جودة {q})')
    print(f'  ✓ {name}-m.webp  {MOBILE[0]}×{MOBILE[1]}   {size_m // 1024:>3} ك.ب  (جودة {qm})')
    return before, size + size_m


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)

    target = args[0]
    exts = ('.png', '.jpg', '.jpeg', '.webp')
    jobs = []

    if os.path.isdir(target):
        for f in sorted(os.listdir(target)):
            if f.lower().endswith(exts):
                jobs.append((os.path.join(target, f), os.path.splitext(f)[0]))
        if not jobs:
            print(f'لا توجد صور داخل المجلد: {target}')
            sys.exit(1)
    else:
        if not os.path.exists(target):
            print(f'الملف غير موجود: {target}')
            sys.exit(1)
        name = args[1] if len(args) > 1 else os.path.splitext(os.path.basename(target))[0]
        jobs.append((target, name))

    total_before = total_after = 0
    for src, name in jobs:
        b, a = convert(src, name)
        total_before += b
        total_after += a

    print(f'\n{"=" * 52}')
    print(f'تم تحويل {len(jobs)} صورة ({len(jobs) * 2} ملف)')
    print(f'الإجمالي: {total_before // 1024 // 1024} ميجابايت  →  '
          f'{total_after // 1024} كيلوبايت')
    print(f'المخرجات في: {OUT_DIR}/')


if __name__ == '__main__':
    main()
