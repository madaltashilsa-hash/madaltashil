/* =========================================================================
   مدى التسهيل للتجارة — MT Hero Slider
   14 شريحة (التصاميم الرسمية) موزّعة على 4 مجموعات: 4 + 3 + 4 + 3
   الاستخدام:  <div class="mt-slider" data-slider="a"></div>
   ========================================================================= */
(function () {
  'use strict';

  var BASE = 'assets/slides/';
  var LINK = '#eligibility';   // وجهة الضغط على الشريحة

  /* ---------------------------------------------------------------------
     كل شريحة مستقلة — لا تتكرر أي صورة، والتصاميم المتشابهة مفصولة
     بين مجموعات مختلفة حتى لا تظهر متتابعة.
     ar  = نسبة العرض إلى الارتفاع للتصميم (تُستخدم لضبط إطار العرض)
     alt = نص بديل لمحركات البحث وقارئات الشاشة
     --------------------------------------------------------------------- */
  var GROUPS = {

    /* ===== المجموعة 1 — بعد الفيديو مباشرة (4 شرائح) ===== */
    a: [
      { img: 'a1', ar: 1.50, alt: 'كل منتجات Apple بين يديك — أحدث الإصدارات بأفضل الأسعار من مدى التسهيل للتجارة' },
      { img: 'a2', ar: 1.82, alt: 'جميع فئات آيفون 17 — أداء وابتكار بأقساط تبدأ من 150 ريال' },
      { img: 'a3', ar: 1.50, alt: 'سهّلها على نفسك — آيبادات أحدث إصدار بخيارات سداد مرنة' },
      { img: 'a4', ar: 1.78, alt: 'تبى تقسّط؟ خلّها علينا — تقسيط iPhone 17 حتى 60 شهر مع الشركاء' }
    ],

    /* ===== المجموعة 2 — بعد القسم الرئيسي (3 شرائح) ===== */
    b: [
      { img: 'b1', ar: 1.50, alt: 'أقساط تبدأ من 150 ريال — آيفون وآيباد وسماعات وساعات أبل' },
      { img: 'b2', ar: 1.50, alt: 'أقساط تبدأ من 150 ريال — جميع إصدارات iPad الأخيرة' },
      { img: 'b3', ar: 1.78, alt: 'تبى تقسّط؟ خلّها علينا — تقسيط حتى 60 شهر لجميع الأجهزة' }
    ],

    /* ===== المجموعة 3 — بعد قسم الأهلية (4 شرائح) ===== */
    c: [
      { img: 'c1', ar: 1.78, alt: 'جميع فئات آيفون 17 — اختر ما يناسبك بأقساط تبدأ من 150 ريال' },
      { img: 'c2', ar: 1.50, alt: 'أقساط تبدأ من 150 ريال — أحدث أجهزة أبل بضمان معتمد' },
      { img: 'c3', ar: 1.50, alt: 'منتجات Apple — كل الابتكار الآن بين يديك بالتقسيط' },
      { img: 'c4', ar: 1.78, alt: 'ودك تعرف إذا أنت مؤهل؟ خلّها علينا — مع أحدث إصدارات iPad' }
    ],

    /* ===== المجموعة 4 — بعد قسم تعرف علينا (3 شرائح) ===== */
    d: [
      { img: 'd1', ar: 1.78, alt: 'ودك تعرف إذا أنت مؤهل؟ تحقق من أهليتك خلال دقائق' },
      { img: 'd2', ar: 1.78, alt: 'ودك تعرف إذا أنت مؤهل؟ — آيفون 17 بجميع الفئات' },
      { img: 'd3', ar: 1.78, alt: 'ودك تعرف إذا أنت مؤهل؟ — آيفون وآيباد وسماعات وساعات أبل' }
    ]
  };

  var AUTOPLAY = 6200;                 // مدة عرض الشريحة
  var SWAP = 900;                      // مدة تأثير الدخول/الخروج (مطابقة للـ CSS)
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mqM = window.matchMedia('(max-width: 768px)');

  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function src(id) { return BASE + id + (mqM.matches ? '-m' : '') + '.webp'; }

  function build(root) {
    var key = root.getAttribute('data-slider');
    var data = GROUPS[key];
    if (!data || !data.length) return;

    root.setAttribute('aria-roledescription', 'carousel');
    root.setAttribute('aria-label', 'عروض مدى التسهيل للتجارة');

    /* --- الخلفية السينمائية: نسخة مموّهة من كل تصميم --- */
    var ambs = data.map(function (s, i) {
      return '<img class="mts-amb' + (i === 0 ? ' is-active' : '') + '" src="' + src(s.img) +
        '" alt="" aria-hidden="true" data-id="' + s.img + '"' + (i ? ' loading="lazy"' : '') + '>';
    }).join('');

    /* --- الشرائح --- */
    var slides = data.map(function (s, i) {
      var lazy = i ? ' loading="lazy"' : '';
      return '<a class="mts-slide' + (i === 0 ? ' is-active' : '') + '" href="' + LINK + '"' +
        ' role="group" aria-roledescription="شريحة" aria-label="' + esc(s.alt) + '">' +
        '<img class="mts-fill" src="' + src(s.img) + '" alt="" aria-hidden="true"' +
        ' data-id="' + s.img + '"' + lazy + '>' +
        '<img class="mts-img" src="' + src(s.img) + '" alt="' + esc(s.alt) + '"' +
        ' data-id="' + s.img + '"' + lazy + '></a>';
    }).join('');

    /* --- النقاط: النقطة النشطة نفسها شريط تقدّم --- */
    var dots = data.map(function (_, i) {
      return '<button class="mts-dot' + (i === 0 ? ' is-active' : '') +
        '" type="button" aria-label="الشريحة ' + (i + 1) + '"><i></i></button>';
    }).join('');

    root.innerHTML =
      '<div class="mts-bglayer" aria-hidden="true">' + ambs +
        '<span class="mts-veil"></span><span class="mts-grain"></span></div>' +
      '<div class="mts-frame">' +
        '<div class="mts-stage"><div class="mts-viewport">' + slides + '</div></div>' +
        '<button class="mts-arrow prev" type="button" aria-label="الشريحة السابقة">' +
          '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>' +
        '<button class="mts-arrow next" type="button" aria-label="الشريحة التالية">' +
          '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>' +
      '</div>' +
      '<div class="mts-dots">' + dots + '</div>';

    var slideEls = [].slice.call(root.querySelectorAll('.mts-slide'));
    var ambEls = [].slice.call(root.querySelectorAll('.mts-amb'));
    var dotEls = [].slice.call(root.querySelectorAll('.mts-dot'));
    var fills = dotEls.map(function (d) { return d.querySelector('i'); });
    var idx = 0, raf = null, t0 = 0, paused = false, visible = false, busy = null;

    /* تبديل مصدر الصور عند تغيّر المقاس (نسخة الجوال أخف) */
    function swapSources() {
      [].slice.call(root.querySelectorAll('img[data-id]')).forEach(function (im) {
        var u = src(im.getAttribute('data-id'));
        if (im.getAttribute('src') !== u) im.setAttribute('src', u);
      });
    }
    (mqM.addEventListener ? mqM.addEventListener('change', swapSources) : mqM.addListener(swapSources));

    function go(n, dir) {
      n = (n + slideEls.length) % slideEls.length;
      if (n === idx) return;
      if (dir === undefined) dir = n > idx ? 1 : -1;
      root.setAttribute('data-dir', dir > 0 ? 'next' : 'prev');

      var out = slideEls[idx];
      out.classList.remove('is-active');
      out.classList.add('is-leaving');
      ambEls[idx].classList.remove('is-active');

      clearTimeout(busy);
      busy = setTimeout(function () { out.classList.remove('is-leaving'); }, SWAP);

      idx = n;
      slideEls[idx].classList.add('is-active');
      ambEls[idx].classList.add('is-active');
      dotEls.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
      fills.forEach(function (f) { f.style.width = '0%'; });
      restart();
    }
    function next() { go(idx + 1, 1); }
    function prev() { go(idx - 1, -1); }

    function restart() { t0 = performance.now(); }
    function tick() {
      if (paused || !visible) { t0 = performance.now(); raf = requestAnimationFrame(tick); return; }
      var p = Math.min(1, (performance.now() - t0) / AUTOPLAY);
      if (fills[idx]) fills[idx].style.width = (p * 100) + '%';
      if (p >= 1) next();
      raf = requestAnimationFrame(tick);
    }
    function start() {
      if (reduce || slideEls.length < 2 || raf) return;
      restart(); raf = requestAnimationFrame(tick);
    }

    root.addEventListener('mouseenter', function () { paused = true; });
    root.addEventListener('mouseleave', function () { paused = false; });
    root.addEventListener('focusin', function () { paused = true; });
    root.addEventListener('focusout', function () { paused = false; });
    document.addEventListener('visibilitychange', function () { paused = document.hidden; });

    /* ظهور القسم عند التمرير + تشغيل تلقائي عند الظهور فقط */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          visible = e.isIntersecting;
          if (visible) { root.classList.add('is-in'); start(); }
        });
      }, { threshold: 0.18 }).observe(root);
    } else { visible = true; root.classList.add('is-in'); start(); }

    root.querySelector('.mts-arrow.next').addEventListener('click', function (e) { e.preventDefault(); next(); });
    root.querySelector('.mts-arrow.prev').addEventListener('click', function (e) { e.preventDefault(); prev(); });
    dotEls.forEach(function (d, i) {
      d.addEventListener('click', function (e) { e.preventDefault(); go(i); });
    });

    root.setAttribute('tabindex', '0');
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); next(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); prev(); }
    });

    /* السحب باللمس والماوس (مع منع فتح الرابط أثناء السحب) */
    var sx = 0, sy = 0, drag = false, lock = false, moved = false;
    function down(x, y) { sx = x; sy = y; drag = true; lock = false; moved = false; paused = true; }
    function move(x, y, e) {
      if (!drag) return;
      var dx = x - sx, dy = y - sy;
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) moved = true;
      if (!lock && Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy) * 1.3) lock = true;
      if (lock && e && e.cancelable) e.preventDefault();
    }
    function up(x) {
      if (!drag) return;
      var dx = x - sx; drag = false; paused = false; t0 = performance.now();
      if (lock && Math.abs(dx) > 45) { dx < 0 ? next() : prev(); }
    }
    root.addEventListener('touchstart', function (e) { down(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    root.addEventListener('touchmove', function (e) { move(e.touches[0].clientX, e.touches[0].clientY, e); }, { passive: false });
    root.addEventListener('touchend', function (e) { up((e.changedTouches[0] || {}).clientX || sx); });
    root.addEventListener('mousedown', function (e) { if (e.button === 0) down(e.clientX, e.clientY); });
    window.addEventListener('mousemove', function (e) { move(e.clientX, e.clientY); });
    window.addEventListener('mouseup', function (e) { up(e.clientX); });
    root.addEventListener('click', function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
    root.addEventListener('dragstart', function (e) { e.preventDefault(); });

    if (reduce && fills[0]) fills[0].style.width = '100%';
  }

  function init() {
    [].slice.call(document.querySelectorAll('.mt-slider[data-slider]')).forEach(build);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
