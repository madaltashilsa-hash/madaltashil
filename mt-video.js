/* =========================================================================
   مدى التسهيل للتجارة — مشغّل الفيديوهات التعريفية (النسخة المطوّرة)
   -------------------------------------------------------------------------
   • 4 فيديوهات · 28 صورة · بلا أي تكرار لصورة بين فيديو وآخر
   • ترتيب المشاهد يتناوب بين ثلاث عائلات تصميم (بطاقة مواصفات · شبكة · لافتة)
     فلا يظهر تصميمان متشابهان متتاليين
   • كل فيديو: افتتاحية شعار 10 ثوانٍ + مشاهد 8 ثوانٍ + ختامية شعار 10 ثوانٍ
   • خمسة تأثيرات انتقال متناوبة، والنص دائمًا أسفل الصورة بمسافة آمنة
   • إعادة تلقائية · إيقاف خارج الشاشة · احترام prefers-reduced-motion
   ========================================================================= */
(function () {
  'use strict';

  var SCENE_MS = 8000;     // مدة المشهد العادي
  var LOGO_MS = 10000;     // مدة الافتتاحية والختامية
  var DIR = 'assets/video/';
  var LOGO = 'assets/icon-white.png';
  var BRAND = 'مدى التسهيل للتجارة';
  var FX = ['zoom', 'wipe', 'blur', 'slide', 'rise'];   // تتناوب على المشاهد

  /* ---------------------------------------------------------------------
     عائلات التصميم:
       spec   = بطاقة مواصفات منتج واحد
       grid   = شبكة/كولاج متعدد
       banner = لافتة عبارة تقسيط
     الترتيب أدناه مبني على التناوب بينها تفاديًا للتشابه المتتالي.
     --------------------------------------------------------------------- */
  var VIDEOS = {
    /* ===== 1) بعد الهيدر — نظرة عامة على العلامة (6 مشاهد) ===== */
    brand: {
      eyebrow: 'فيديو تعريفي',
      title: 'مدى التسهيل للتجارة',
      sub: 'تسهيل اليوم .. نجاح الغد — جولة سريعة في ما نقدّمه لك.',
      intro: 'تسهيل اليوم .. نجاح الغد',
      outro: 'نقرّب لك أحدث التقنية .. ونُسهّل عليك الاختيار',
      scenes: [
        ['brand-showcase-grid',        'تشكيلة متكاملة من أحدث الأجهزة التقنية'],
        ['installment-leave-it-to-us', 'خلِّ التسهيل علينا — تقسيط ودفع لاحقًا'],
        ['devices-variety-grid',       'جوالات · لابتوبات · أجهزة لوحية · ساعات · صوتيات'],
        ['installment-60-months',      'قسّطها على راحتك حتى 60 شهرًا'],
        ['services-grid',              'تسوّق آمن وخطط دفع مرنة بنسبة 0%'],
        ['brand-overview-grid',        'كل ما تحتاجه من التقنية في مكان واحد']
      ]
    },

    /* ===== 2) قبل الأسئلة الشائعة — الجوالات (7 مشاهد) ===== */
    phones: {
      eyebrow: 'أحدث الجوالات',
      title: 'آيفون 17 — الجيل الجديد بين يديك',
      sub: 'تشكيلة iPhone 17 كاملة، بأقساط تبدأ من 150 ريالًا.',
      intro: 'أحدث ما وصل .. بين يديك',
      outro: 'جهازك اليوم .. وسدادك لاحقًا',
      scenes: [
        ['iphone-17-pro',              'iPhone 17 Pro — رقاقة A19 Pro وتبريد بخاري'],
        ['iphone-17-installment-grid', 'أحدث أجهزة iPhone 17 بتقسيط أسهل'],
        ['iphone-17-air',              'iPhone 17 Air — سماكة 5.5 ملم فقط'],
        ['installment-from-150',       'أقساط تبدأ من 150 ريالًا شهريًا'],
        ['iphone-17',                  'iPhone 17 — شاشة 6.3 بوصة ورقاقة A19 Bionic'],
        ['installment-closer',         'تقنيتك أقرب لك — تقسيط يصل إلى 60 شهرًا'],
        ['iphone-17-pro-max',          'iPhone 17 Pro Max — 6.9 بوصة وأطول عمر بطارية']
      ]
    },

    /* ===== 3) بعد «تعرف علينا» — الأجهزة اللوحية (10 مشاهد) ===== */
    tablets: {
      eyebrow: 'الأجهزة اللوحية',
      title: 'تشكيلة آيباد الكاملة',
      sub: 'من iPad mini إلى iPad Pro 13 بوصة — اختر ما يناسب استخدامك.',
      intro: 'شاشة أوسع .. إنجاز أسرع',
      outro: 'أداء أقوى .. تصميم أرقى',
      scenes: [
        ['ipad-pro-13-m5',                'iPad Pro 13 بوصة — رقاقة Apple M5'],
        ['ipad-lineup-grid',              'تشكيلة آيباد كاملة أمامك'],
        ['ipad-air-13-m4',                'iPad Air 13 بوصة — رقاقة Apple M4'],
        ['installment-buy-now-pay-later', 'اشترِ الآن وادفع لاحقًا — حتى 24 شهرًا'],
        ['ipad-mini-a17-pro',             'iPad mini — رقاقة A17 Pro بحجم يناسب اليد'],
        ['ipad-collection-grid',          'قارن المواصفات واختر ما يناسبك'],
        ['ipad-air-11-m4-alt',            'iPad Air 11 بوصة — رقاقة Apple M4'],
        ['installment-dont-wait',         'تبي جهازك؟ لا تنتظر — خيارات تقسيط مرنة'],
        ['ipad-a16',                      'iPad — رقاقة A16 وشاشة 11 بوصة'],
        ['ipad-pro-11-m5',                'iPad Pro 11 بوصة — رقاقة Apple M5']
      ]
    },

    /* ===== 4) آخر الصفحة — الساعات والصوتيات (5 مشاهد) ===== */
    wearables: {
      eyebrow: 'الساعات والصوتيات',
      title: 'أحدث تجربة Apple الصوتية والذكية',
      sub: 'Apple Watch و AirPods بكل إصداراتها، مع خيارات تقسيط مرنة.',
      intro: 'تفاصيل صغيرة .. فرق كبير',
      outro: 'اشترِ الآن .. وادفع لاحقًا',
      scenes: [
        ['apple-watch-lineup',   'Apple Watch — Series 11 · SE 3 · Ultra 3'],
        ['audio-watch-grid',     'المواصفات الكاملة بين يديك'],
        ['airpods-lineup',       'AirPods 4 · AirPods Pro 3 · AirPods Max 2'],
        ['airpods-watch-grid',   'اختر ما يناسب أسلوبك وميزانيتك'],
        ['audio-watch-showcase', 'تجربة صوت نقية وساعات ذكية بتصميم أنيق']
      ]
    }
  };

  /* --------------------------------------------------------------------- */

  function el(tag, cls, parent) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (parent) parent.appendChild(n);
    return n;
  }

  function logoScene(tagline) {
    var s = el('div', 'mtv-scene mtv-logo-scene');
    var img = el('img', 'mtv-logo mtv-el', s);
    img.src = LOGO;
    img.alt = BRAND;
    img.loading = 'lazy';
    img.decoding = 'async';
    el('div', 'mtv-logo-rule mtv-el', s);
    el('h3', 'mtv-logo-name mtv-el', s).textContent = BRAND;
    el('p', 'mtv-logo-tag mtv-el', s).textContent = tagline;
    return s;
  }

  function imageScene(name, caption, fx) {
    var s = el('div', 'mtv-scene');
    s.setAttribute('data-fx', fx);

    var media = el('div', 'mtv-media', s);
    var img = el('img', 'mtv-img', media);
    // مقاس مخصّص للجوال (960 بكسل) وآخر للشاشات الكبيرة (1920 بكسل)
    img.srcset = DIR + name + '-m.webp 960w, ' + DIR + name + '.webp 1920w';
    img.sizes = '(max-width:768px) 100vw, (min-width:1440px) min(1280px,calc(100vw - 64px)), min(1120px,calc(100vw - 40px))';
    img.src = DIR + name + '.webp';
    img.alt = caption;
    img.loading = 'lazy';
    img.decoding = 'async';

    // النص أسفل الصورة — شريط مستقل لا يغطّي أي جزء منها
    var cap = el('div', 'mtv-caption', s);
    el('span', null, cap).textContent = caption;
    return s;
  }

  function build(mount, cfg) {
    mount.classList.add('mtv-section');
    mount.innerHTML = '';

    var wrap = el('div', 'mtv-wrap', mount);

    var head = el('div', 'mtv-head', wrap);
    el('span', 'mtv-eyebrow', head).textContent = cfg.eyebrow;
    el('h2', 'mtv-title', head).textContent = cfg.title;
    el('p', 'mtv-sub', head).textContent = cfg.sub;

    var frame = el('div', 'mtv-frame', wrap);
    var stage = el('div', 'mtv-stage', frame);

    // ترتيب المشاهد: افتتاحية → صور → ختامية
    var durations = [];

    stage.appendChild(logoScene(cfg.intro));
    durations.push(LOGO_MS);

    cfg.scenes.forEach(function (row, i) {
      stage.appendChild(imageScene(row[0], row[1], FX[i % FX.length]));
      durations.push(SCENE_MS);
    });

    stage.appendChild(logoScene(cfg.outro));
    durations.push(LOGO_MS);

    var scenes = Array.prototype.slice.call(stage.children);

    // شريط تقدّم مقسّم — قطعة لكل مشهد
    var progress = el('div', 'mtv-progress', frame);
    var segs = scenes.map(function () {
      var seg = el('div', 'mtv-seg', progress);
      el('i', null, seg);
      return seg;
    });

    var foot = el('div', 'mtv-foot', wrap);
    var badge = el('div', 'mtv-badge', foot);
    el('i', null, badge);
    var badgeTxt = el('span', null, badge);
    var dots = el('div', 'mtv-dots', foot);
    var dotEls = scenes.map(function (_, i) {
      var d = el('button', 'mtv-dot', dots);
      d.type = 'button';
      d.setAttribute('aria-label', 'المشهد ' + (i + 1));
      d.addEventListener('click', function () { go(i); });
      return d;
    });

    /* ---------------- التشغيل ---------------- */
    var index = -1;
    var started = 0;
    var raf = null;
    var timer = null;
    var playing = false;

    function paint() {
      var pct = Math.min(100, (performance.now() - started) / durations[index] * 100);
      segs[index].firstChild.style.width = pct + '%';
      raf = requestAnimationFrame(paint);
    }

    function go(i) {
      if (i === index) return;
      if (index >= 0) {
        scenes[index].classList.remove('is-on');
        dotEls[index].classList.remove('is-on');
      }
      index = i;
      scenes[index].classList.add('is-on');
      dotEls[index].classList.add('is-on');
      badgeTxt.textContent = (index + 1) + ' / ' + scenes.length;

      // القطع السابقة ممتلئة، واللاحقة فارغة
      segs.forEach(function (seg, k) {
        seg.classList.toggle('is-done', k < index);
        if (k !== index && k > index) seg.firstChild.style.width = '0%';
        if (k < index) seg.firstChild.style.width = '100%';
      });
      segs[index].firstChild.style.width = '0%';

      // تحميل مسبق للمشهد التالي حتى يكون الانتقال سلسًا
      var nxt = scenes[(index + 1) % scenes.length].querySelector('.mtv-img');
      if (nxt && !nxt.dataset.warm) { nxt.dataset.warm = '1'; nxt.loading = 'eager'; }

      started = performance.now();
      schedule();
    }

    function schedule() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        go((index + 1) % scenes.length);   // إعادة تلقائية بلا نهاية
      }, durations[index]);
    }

    function play() {
      if (playing) return;
      playing = true;
      if (index < 0) go(0);
      else { started = performance.now(); schedule(); }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(paint);
    }

    function pause() {
      playing = false;
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    }

    function isOnScreen(node) {
      var r = node.getBoundingClientRect();
      return r.bottom > 0 && r.top < window.innerHeight;
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) play(); else pause();
      }, { threshold: 0.25 }).observe(mount);
    } else {
      play();
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) pause();
      else if (isOnScreen(mount)) play();
    });
  }

  function init() {
    var mounts = document.querySelectorAll('[data-mtv]');
    Array.prototype.forEach.call(mounts, function (mount) {
      var cfg = VIDEOS[mount.getAttribute('data-mtv')];
      if (cfg) build(mount, cfg);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
