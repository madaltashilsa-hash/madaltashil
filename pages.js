/* =========================================================================
   مدى التسهيل للتجارة — تفاعلات الصفحات الجديدة
   أكورديون الأسئلة الشائعة + ظهور العناصر عند التمرير
   ========================================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     الأسئلة الشائعة: فتح وإغلاق مع سهم دوّار
     - سؤال واحد مفتوح داخل كل شبكة (يمكن تغييرها من ONE_AT_A_TIME)
     - دعم لوحة المفاتيح تلقائيًا لأن العنصر <button>
     --------------------------------------------------------------------- */
  var ONE_AT_A_TIME = true;

  function initFaq() {
    var items = [].slice.call(document.querySelectorAll('[data-faq]'));
    if (!items.length) return;

    items.forEach(function (item) {
      var btn = item.querySelector('.faq-q');
      if (!btn) return;

      btn.addEventListener('click', function () {
        var open = item.classList.contains('is-open');

        if (ONE_AT_A_TIME && !open) {
          var grid = item.closest('.faq-grid') || document;
          [].slice.call(grid.querySelectorAll('[data-faq].is-open')).forEach(function (other) {
            if (other === item) return;
            other.classList.remove('is-open');
            var b = other.querySelector('.faq-q');
            if (b) b.setAttribute('aria-expanded', 'false');
          });
        }

        item.classList.toggle('is-open', !open);
        btn.setAttribute('aria-expanded', String(!open));
      });
    });
  }

  /* ---------------------------------------------------------------------
     ظهور العناصر عند التمرير
     app.js يتكفّل بهذا في الصفحة الرئيسية، وهنا نضمنه للصفحات الجديدة
     مع تأخير متتابع يعطي إحساس الدخول المتدرّج
     --------------------------------------------------------------------- */
  function initReveal() {
    var els = [].slice.call(document.querySelectorAll('.reveal:not(.in-view)'));
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        // ترتيب العنصر داخل مجموعته يحدّد تأخير ظهوره
        var sibs = el.parentNode ? [].slice.call(el.parentNode.children) : [];
        var i = Math.min(sibs.indexOf(el), 7);
        el.style.transitionDelay = (i > 0 ? i * 0.07 : 0) + 's';
        el.classList.add('in-view');
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { obs.observe(el); });
  }

  function init() { initFaq(); initReveal(); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
