/*
  مدى التسهيل للتجارة - app.js
  ملاحظة للعميل: عدّل بيانات المنتجات في المصفوفة PRODUCTS أدناه فقط.
  كل منتج يحتوي: name (الاسم), category (الفئة), icon (الرمز/الصورة), price (السعر), available (متوفر أو لا), desc (وصف قصير)
  الفئات المتاحة: phones, laptops, accessories, electronics
*/

const PRODUCTS = [
  { id: 1, name: 'سماعة لاسلكية', category: 'accessories', icon: '🎧', price: 149, available: true, desc: 'تجربة صوتية لاسلكية مريحة وعملية للاستخدام اليومي.' },
  { id: 2, name: 'ساعة ذكية', category: 'accessories', icon: '⌚', price: 229, available: true, desc: 'تتبع لياقتك وإشعاراتك بتصميم أنيق وبطارية تدوم طويلاً.' },
  { id: 3, name: 'جوال ذكي', category: 'phones', icon: '📱', price: 1399, available: true, desc: 'أداء قوي وكاميرا متطورة لتجربة استخدام يومية سلسة.' },
  { id: 4, name: 'جوال اقتصادي', category: 'phones', icon: '📲', price: 699, available: false, desc: 'خيار عملي بمواصفات جيدة وسعر مناسب لجميع الاستخدامات.' },
  { id: 5, name: 'حاسب محمول', category: 'laptops', icon: '💻', price: 2599, available: true, desc: 'أداء عالٍ يناسب العمل والدراسة والتصميم بخفة وزن ممتازة.' },
  { id: 6, name: 'ماوس لاسلكي', category: 'laptops', icon: '🖱️', price: 59, available: true, desc: 'دقة عالية وتصميم مريح يناسب الاستخدام الطويل.' },
  { id: 7, name: 'مكبر صوت ذكي', category: 'electronics', icon: '🔊', price: 189, available: true, desc: 'صوت نقي وتصميم عصري يناسب المنزل والمكتب.' },
  { id: 8, name: 'كاميرا مراقبة منزلية', category: 'electronics', icon: '📷', price: 249, available: false, desc: 'مراقبة ذكية عن بعد بجودة عالية ووضوح تام.' }
];

const WHATSAPP_NUMBER = '966573623150';

function buildWhatsAppUrl(message) {
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
}

function genericMessage() {
  return 'السلام عليكم، أرغب في الاستفسار عن منتجاتكم.';
}

function productMessage(product, qty) {
  return 'السلام عليكم، أرغب في طلب المنتج التالي:' + '\n\n' +
    'المنتج: ' + product.name + '\n' +
    'السعر: ' + product.price + ' ريال' + '\n' +
    'الكمية: ' + qty + '\n\n' +
    'أرجو إفادتي بالتوفر وطريقة إتمام الطلب.';
}

document.addEventListener('DOMContentLoaded', function () {
  initSplash();
  initHeaderScroll();
  initSidebar();
  initGenericWhatsappLinks();
  renderProducts('all');
  initTabs();
  initModal();
  initRevealObserver();
  initSmoothAnchors();
  initHeroParallax();
  initRippleButtons();
});

function initSplash() {
  document.body.classList.add('splash-active');
  window.setTimeout(function () {
    document.body.classList.remove('splash-active');
    document.body.classList.add('splash-done');
  }, 1800);
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initSidebar() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('sidebarClose');
  const links = sidebar.querySelectorAll('a');

  function openSidebar() {
    document.body.classList.add('sidebar-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeSidebar() {
    document.body.classList.remove('sidebar-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  hamburger.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
  links.forEach(function (link) {
    link.addEventListener('click', closeSidebar);
  });
}

function initGenericWhatsappLinks() {
  const ids = ['headerWhatsapp', 'sidebarWhatsapp', 'heroWhatsapp', 'ctaWhatsapp', 'footerWhatsapp', 'floatWhatsapp'];
  ids.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) { el.href = buildWhatsAppUrl(genericMessage()); }
  });
}

function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(function (p) { return p.category === filter; });
  list.forEach(function (product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    const badgeClass = product.available ? 'badge' : 'badge unavailable';
    const badgeText = product.available ? 'متوفر' : 'غير متوفر';
    card.innerHTML =
      '<div class="product-visual">' + product.icon + '<span class="' + badgeClass + '">' + badgeText + '</span></div>' +
      '<div class="product-body">' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<p class="product-desc">' + product.desc + '</p>' +
        '<div class="product-price-row"><span class="product-price">' + product.price + ' ريال</span></div>' +
        '<button type="button" class="btn btn-whatsapp product-cta">💬 اطلب عبر واتساب</button>' +
      '</div>';
    grid.appendChild(card);

    card.addEventListener('click', function (e) {
      if (e.target.closest('.product-cta')) {
        e.stopPropagation();
        window.open(buildWhatsAppUrl(productMessage(product, 1)), '_blank', 'noopener');
        return;
      }
      openModal(product);
    });

    window.setTimeout(function () {
      card.classList.add('show');
    }, index * 90);
  });
}

function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderProducts(btn.getAttribute('data-filter'));
    });
  });
}

let currentProduct = null;
let currentQty = 1;

function initModal() {
  const overlay = document.getElementById('productModal');
  const closeBtn = document.getElementById('modalClose');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const qtyValue = document.getElementById('qtyValue');
  const modalWhatsapp = document.getElementById('modalWhatsapp');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) { closeModal(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeModal(); }
  });
  qtyMinus.addEventListener('click', function () {
    if (currentQty > 1) { currentQty -= 1; qtyValue.textContent = currentQty; }
  });
  qtyPlus.addEventListener('click', function () {
    currentQty += 1; qtyValue.textContent = currentQty;
  });
  modalWhatsapp.addEventListener('click', function (e) {
    e.preventDefault();
    if (!currentProduct) return;
    window.open(buildWhatsAppUrl(productMessage(currentProduct, currentQty)), '_blank', 'noopener');
  });
}

function openModal(product) {
  currentProduct = product;
  currentQty = 1;
  document.getElementById('qtyValue').textContent = '1';
  document.getElementById('modalImage').textContent = product.icon;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = product.price + ' ريال';
  const badge = document.getElementById('modalBadge');
  badge.textContent = product.available ? 'متوفر' : 'غير متوفر';
  badge.className = product.available ? 'badge' : 'badge unavailable';
  const overlay = document.getElementById('productModal');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('productModal');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initRevealObserver() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = Array.prototype.slice.call(el.parentElement ? el.parentElement.querySelectorAll('.reveal') : []);
        const idx = siblings.indexOf(el);
        const delay = idx > -1 ? idx * 110 : 0;
        window.setTimeout(function () {
          el.classList.add('bounce');
          el.classList.add('in-view');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  items.forEach(function (el) { observer.observe(el); });
}

function initSmoothAnchors() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
  const sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === id);
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(function (sec) { navObserver.observe(sec); });
  }
}

function initHeroParallax() {
  const visual = document.getElementById('heroVisual');
  if (!visual) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;
  window.addEventListener('mousemove', function (e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 16;
    const y = (e.clientY / window.innerHeight - 0.5) * 16;
    visual.style.transform = 'translate(' + x + 'px,' + y + 'px)';
  });
}

function initRippleButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
      const dot = document.createElement('span');
      dot.className = 'ripple-dot';
      const size = Math.max(rect.width, rect.height);
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      dot.style.left = (e.clientX - rect.left - size / 2) + 'px';
      dot.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(dot);
      window.setTimeout(function () { dot.remove(); }, 650);
    });
  });
}
