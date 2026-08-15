/* =========================================================================
   مدى التسهيل للتجارة — نافذة التحويل إلى واتساب
   -------------------------------------------------------------------------
   قبل أي انتقال إلى واتساب تظهر نافذة «جاري تحويلكم لرعاية خدمة العملاء»
   بأيقونة واتساب متحرّكة وعدّاد تنازلي 5 ثوانٍ، ثم يتم التوجيه تلقائيًا.

   الاستخدام من أي مكان:
       MTWA.go('https://wa.me/966...?text=...');

   وتُطبَّق تلقائيًا على كل رابط واتساب في الصفحة (الزر العائم، التذييل، …).
   ========================================================================= */
(function () {
  'use strict';

  var SECONDS = 5;
  var box = null, ring = null, num = null, skipBtn = null;
  var timer = null, tick = null, target = '';

  var WA_ICON =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.17 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z"/>' +
    '</svg>';

  function buildOverlay() {
    if (box) return;

    var ov = document.createElement('div');
    ov.className = 'mtwa-overlay';
    ov.id = 'mtwaOverlay';
    ov.innerHTML =
      '<div class="mtwa-box" role="dialog" aria-live="polite">' +
        '<div class="mtwa-ring">' +
          '<svg class="mtwa-ring-svg" viewBox="0 0 120 120" aria-hidden="true">' +
            '<circle class="mtwa-track" cx="60" cy="60" r="52"></circle>' +
            '<circle class="mtwa-fill" cx="60" cy="60" r="52"></circle>' +
          '</svg>' +
          '<span class="mtwa-icon">' + WA_ICON + '</span>' +
        '</div>' +
        '<h3 class="mtwa-title">جاري تحويلكم لرعاية خدمة العملاء</h3>' +
        '<p class="mtwa-sub">سيتم فتح واتساب تلقائيًا خلال لحظات لإكمال طلبك مع فريقنا.</p>' +
        '<div class="mtwa-count"><span class="mtwa-num">' + SECONDS + '</span><span class="mtwa-unit">ثانية</span></div>' +
        '<button type="button" class="mtwa-skip">التحويل الآن</button>' +
      '</div>';
    document.body.appendChild(ov);

    box = ov;
    ring = ov.querySelector('.mtwa-fill');
    num = ov.querySelector('.mtwa-num');
    skipBtn = ov.querySelector('.mtwa-skip');
    skipBtn.addEventListener('click', function () { finish(); });
  }

  function finish() {
    clearTimeout(timer);
    clearInterval(tick);
    if (target) {
      // فتح واتساب في تبويب جديد؛ وإن منعه المتصفح فبنفس التبويب
      var w = window.open(target, '_blank');
      if (!w) window.location.href = target;
    }
    close();
  }

  function close() {
    if (box) box.classList.remove('is-open');
    document.documentElement.classList.remove('mtwa-lock');
    target = '';
  }

  /* الواجهة العامة: يعرض النافذة ثم يحوّل بعد 5 ثوانٍ */
  function go(url) {
    if (!url) return;
    buildOverlay();
    target = url;

    var left = SECONDS;
    num.textContent = left;
    ring.style.transition = 'none';
    ring.style.strokeDashoffset = '327';
    // إعادة تدفّق حتى تبدأ الحركة من الصفر
    void ring.getBoundingClientRect();
    ring.style.transition = 'stroke-dashoffset ' + SECONDS + 's linear';
    ring.style.strokeDashoffset = '0';

    box.classList.add('is-open');
    document.documentElement.classList.add('mtwa-lock');

    clearInterval(tick);
    tick = setInterval(function () {
      left -= 1;
      if (left >= 0) num.textContent = left;
    }, 1000);

    clearTimeout(timer);
    timer = setTimeout(finish, SECONDS * 1000);
  }

  /* اعتراض كل روابط واتساب في الصفحة تلقائيًا */
  function interceptLinks() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href*="wa.me"],a[href*="api.whatsapp.com"]');
      if (!a) return;
      e.preventDefault();
      go(a.href);
    }, true);
  }

  window.MTWA = { go: go, close: close, seconds: SECONDS };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', interceptLinks);
  } else {
    interceptLinks();
  }
})();
