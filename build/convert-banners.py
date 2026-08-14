#!/usr/bin/env python3
# =========================================================================
#  مدى التسهيل للتجارة — محوّل تصاميم البانرات إلى WebP
#
#  هذا هو السكربت الذي أنتج الصور المستخدمة حاليًا في الموقع.
#  استخدمه كلما أردت إضافة تصميم جديد أو استبدال تصميم موجود.
#
#  ماذا يفعل؟
#    يأخذ صورة التصميم (PNG/JPG) وينتج نسختين:
#      slides/<الاسم>.webp     عرض 1600 بكسل  → للديسكتوب
#      slides/<الاسم>-m.webp   عرض  800 بكسل  → للجوال (أخف وأسرع)
#    مع ضغط WebP بجودة 88 — يقلّل الحجم ~90% بلا فرق ملحوظ.
#
#  التشغيل:
#    pip install pillow
#
#    # تحويل صورة واحدة إلى اسم شريحة محدد:
#    python3 build/convert-banners.py my-banner.png a2
#
#    # تحويل مجلد كامل (يستخدم أسماء الملفات كما هي):
#    python3 build/convert-banners.py ./new-banners/
#
#  أسماء الشرائح المعتمدة (كما في hero-slider.js):
#    المجموعة A : a1 a2 a3 a4
#    المجموعة B : b1 b2 b3
#    المجموعة C : c1 c2 c3 c4
#    المجموعة D : d1 d2 d3
# =========================================================================

import os
import sys
from PIL import Image

OUT_DIR = os.path.join('assets', 'slides')
SIZES = [('', 1600), ('-m', 800)]   # (لاحقة الاسم, العرض بالبكسل)
QUALITY = 88


def convert(src_path, name):
    """يحوّل صورة واحدة إلى نسختي WebP (ديسكتوب + جوال)."""
    os.makedirs(OUT_DIR, exist_ok=True)
    im = Image.open(src_path).convert('RGB')

    print(f'\n{name}  ←  {os.path.basename(src_path)}')
    print(f'  المقاس الأصلي : {im.width}×{im.height}  (نسبة {im.width / im.height:.2f})')

    before = os.path.getsize(src_path)
    after = 0

    for suffix, width in SIZES:
        height = round(width * im.height / im.width)
        out = os.path.join(OUT_DIR, f'{name}{suffix}.webp')
        im.resize((width, height), Image.LANCZOS).save(
            out, 'WEBP', quality=QUALITY, method=6
        )
        size = os.path.getsize(out)
        after += size
        print(f'  ✓ {name}{suffix}.webp  {width}×{height}  {size // 1024} كيلوبايت')

    saved = 100 - (after * 100 // before) if before else 0
    print(f'  الحجم: {before // 1024} ك.ب  →  {after // 1024} ك.ب  (توفير {saved}%)')
    return before, after


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)

    target = args[0]
    exts = ('.png', '.jpg', '.jpeg', '.webp', '.PNG', '.JPG', '.JPEG')
    jobs = []

    if os.path.isdir(target):
        for f in sorted(os.listdir(target)):
            if f.endswith(exts):
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
    print(f'تم تحويل {len(jobs)} تصميم')
    print(f'الإجمالي: {total_before // 1024 // 1024} ميجابايت  →  '
          f'{total_after // 1024} كيلوبايت')
    print(f'المخرجات في: {OUT_DIR}/')


if __name__ == '__main__':
    main()
