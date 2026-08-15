/* =========================================================================
   مدى التسهيل للتجارة — مشغّل الفيديوهات التعريفية
   -------------------------------------------------------------------------
   • 4 فيديوهات موزّعة على الصفحة، بلا أي تكرار لصورة بين فيديو وآخر
   • كل فيديو: افتتاحية شعار 10 ثوانٍ + مشاهد 8 ثوانٍ لكل مشهد + ختامية 10 ثوانٍ
   • إعادة تلقائية بلا توقّف، وانتقال سلس بالتلاشي المتقاطع
   • يتوقّف تلقائيًا خارج الشاشة (توفير للبطارية) ويستأنف عند الظهور
   • الصور بنسبة 16:9 داخل مسرح 16:9 مع contain — لا اقتصاص ولا فراغ إطلاقًا
   ========================================================================= */
(function () {
  'use strict';

  var SCENE_MS = 8000;    // مدة المشهد العادي
  var LOGO_MS = 10000;    // مدة الافتتاحية والختامية
  var DIR = 'assets/video/';
  var LOGO = 'assets/icon-white.png';
  var BRAND = 'مدى التسهيل للتجارة';

  /* ---------------------------------------------------------------------
     بيانات الفيديوهات — 28 صورة موزّعة بلا تكرار
     --------------------------------------------------------------------- */
  var VIDEOS = {
    /* ===== 1) بعد الهيدر مباشرة — نظرة عامة على العلامة ===== */
    brand: {
      eyebrow: 'فيديو تعريفي',
      title: 'مدى التسهيل للتجارة',
      sub: 'تسهيل اليوم .. نجاح الغد — جولة سريعة في ما نقدّمه لك.',
      intro: 'تسهيل اليوم .. نجاح الغد',
      outro: 'تسهيل اليوم .. نجاح الغد',
      scenes: [
        ['brand-showcase-grid', 'تشكيلة متكاملة من أحدث الأجهزة التقنية'],
        ['devices-variety-grid', 'جوالات · لابتوبات · أجهزة لوحية · ساعات · صوتيات'],
        ['services-grid', 'تسوّق آمن وخطط دفع مرنة بنسبة 0%'],
        ['installment-leave-it-to-us', 'خلِّ التسهيل علينا — تقسيط ودفع لاحقًا'],
        ['installment-60-months', 'قسّطها على راحتك حتى 60 شهرًا'],
        ['brand-overview-grid', 'كل ما تحتاجه من التقنية في مكان واحد']
      ]
    },

    /* ===== 2) بعد الأسئلة الشائعة — الجوالات ===== */
    phones: {
      eyebrow: 'أحدث الجوالات',
      title: 'آيفون 17 — الجيل الجديد بين يديك',
      sub: 'تشكيلة iPhone 17 كاملة، بأقساط تبدأ من 150 ريالًا.',
      intro: 'أحدث ما وصل .. بين يديك',
      outro: 'جهازك اليوم .. وسدادك لاحقًا',
      scenes: [
        ['iphone-17', 'iPhone 17 — شاشة 6.3 بوصة ورقاقة A19 Bionic'],
        ['iphone-17-air', 'iPhone 17 Air — سماكة 5.5 ملم فقط'],
        ['iphone-17-pro', 'iPhone 17 Pro — رقاقة A19 Pro وتبريد بخاري'],
        ['iphone-17-pro-max', 'iPhone 17 Pro Max — 6.9 بوصة وأطول عمر بطارية'],
        ['iphone-17-installment-grid', 'أحدث أجهزة iPhone 17 بتقسيط أسهل'],
        ['installment-from-150', 'أقساط تبدأ من 150 ريالًا شهريًا'],
        ['installment-closer', 'تقنيتك أقرب لك — تقسيط يصل إلى 60 شهرًا']
      ]
    },

    /* ===== 3) بعد قسم «تعرف علينا» — الأجهزة اللوحية ===== */
    tablets: {
      eyebrow: 'الأجهزة اللوحية',
      title: 'تشكيلة آيباد الكاملة',
      sub: 'من iPad mini إلى iPad Pro 13 بوصة — اختر ما يناسب استخدامك.',
      intro: 'شاشة أوسع .. إنجاز أسرع',
      outro: 'أداء أقوى .. تصميم أرقى',
      scenes: [
        ['ipad-pro-13-m5', 'iPad Pro 13 بوصة — رقاقة Apple M5'],
        ['ipad-pro-11-m5', 'iPad Pro 11 بوصة — رقاقة Apple M5'],
        ['ipad-air-13-m4', 'iPad Air 13 بوصة — رقاقة Apple M4'],
        ['ipad-air-11-m4-alt', 'iPad Air 11 بوصة — رقاقة Apple M4'],
        ['ipad-mini-a17-pro', 'iPad mini — رقاقة A17 Pro بحجم يناسب اليد'],
        ['ipad-a16', 'iPad — رقاقة A16 وشاشة 11 بوصة'],
        ['ipad-lineup-grid', 'تشكيلة آيباد كاملة أمامك'],
        ['ipad-collection-grid', 'قارن المواصفات واختر ما يناسبك']
      ]
    },

    /* ===== 4) بعد آراء العملاء — الساعات والصوتيات ===== */
    wearables: {
      eyebrow: 'الساعات والصوتيات',
      title: 'أحدث تجربة Apple الصوتية والذكية',
      sub: 'Apple Watch و AirPods بكل إصداراتها، مع خيارات تقسيط مرنة.',
      intro: 'تفاصيل صغيرة .. فرق كبير',
      outro: 'اشترِ الآن .. وادفع لاحقًا',
      scenes: [
        ['apple-watch-lineup', 'Apple Watch — Series 11 · SE 3 · Ultra 3'],
        ['airpods-lineup', 'AirPods 4 · AirPods Pro 3 · AirPods Max 2'],
        ['audio-watch-showcase', 'تجربة صوت نقية وساعات ذكية بتصميم أنيق'],
        ['audio-watch-grid', 'المواصفات الكاملة بين يديك'],
        ['airpods-watch-grid', 'اختر ما يناسب أسلوبك وميزانيتك'],
        ['installment-buy-now-pay-later', 'اشترِ الآن وادفع لاحقًا — حتى 24 شهرًا'],
        ['installment-dont-wait', 'تبي جهازك؟ لا تنتظر — خيارات تقسيط مرنة']
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

  function imageScene(name, caption) {
    var s = el('div', 'mtv-scene');
    var media = el('div', 'mtv-media', s);

    var img = el('img', 'mtv-img', media);
    // مقاس مخصّص للجوال (960 بكسل) وآخر للشاشات الكبيرة (1920 بكسل)
    img.srcset = DIR + name + '-m.webp 960w, ' + DIR + name + '.webp 1920w';
    img.sizes = '(max-width:768px) 100vw, min(1120px,calc(100vw - 40px))';
    img.src = DIR + name + '.webp';
    img.alt = caption;
    img.loading = 'lazy';
    img.decoding = 'async';

    el('div', 'mtv-caption', s).textContent = caption;
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
    var scenes = [];
    var durations = [];

    stage.appendChild(logoScene(cfg.intro));
    durations.push(LOGO_MS);

    cfg.scenes.forEach(function (row) {
      stage.appendChild(imageScene(row[0], row[1]));
      durations.push(SCENE_MS);
    });

    stage.appendChild(logoScene(cfg.outro));
    durations.push(LOGO_MS);

    scenes = Array.prototype.slice.call(stage.children);

    var progress = el('div', 'mtv-progress', frame);
    var bar = el('div', 'mtv-bar', progress);

    var dots = el('div', 'mtv-dots', wrap);
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
    var visible = false;

    function paint() {
      var pct = Math.min(100, (performance.now() - started) / durations[index] * 100);
      bar.style.width = pct + '%';
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

      // تحميل مسبق للمشهد التالي حتى يكون الانتقال سلسًا
      var nxt = scenes[(index + 1) % scenes.length].querySelector('.mtv-img');
      if (nxt && !nxt.dataset.warm) { nxt.dataset.warm = '1'; nxt.loading = 'eager'; }

      started = performance.now();
      bar.style.width = '0%';
      schedule();
    }

    function schedule() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        go((index + 1) % scenes.length);   // إعادة تلقائية بلا نهاية
      }, durations[index]);
    }

    function play() {
      if (visible) return;
      visible = true;
      if (index < 0) go(0);
      else { started = performance.now(); schedule(); }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(paint);
    }

    function pause() {
      visible = false;
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries[0].isIntersecting ? play() : pause();
      }, { threshold: 0.25 }).observe(mount);
    } else {
      play();
    }

    document.addEventListener('visibilitychange', function () {
      document.hidden ? pause() : (isOnScreen(mount) && play());
    });

    function isOnScreen(node) {
      var r = node.getBoundingClientRect();
      return r.bottom > 0 && r.top < innerHeight;
    }
  }

  function init() {
    document.querySelectorAll('[data-mtv]').forEach(function (mount) {
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
