/* مدى التسهيل للتجارة - app.js */
(function(){
  "use strict";
  var WA_NUMBER="966573623150";
  function waLink(text){return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(text);}
  var ICONS={
    home:'<path d="M4 11L12 4l8 7"/><path d="M6 10v9h5v-5h2v5h5v-9"/>',
    business:'<rect x="3" y="8" width="18" height="11" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
    company:'<rect x="4" y="3" width="9" height="18"/><rect x="13" y="9" width="7" height="12"/><path d="M7 7h2M7 11h2M7 15h2M16 13h2M16 17h2"/>',
    star:'<path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.1 1.4-6.3-4.8-4.3 6.4-.6z"/>',
    message:'<path d="M4 5h16v11H8l-4 4z"/>',
    vision:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2"/>',
    rocket:'<path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 17l-2 4M15 17l2 4"/>',
    analytics:'<path d="M4 20V11"/><path d="M10 20V5"/><path d="M16 20v-8"/><path d="M2 20h20"/>',
    smartphone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    laptop:'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M2 19h20"/>',
    tablet:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    gamepad:'<rect x="2" y="8" width="20" height="10" rx="5"/><path d="M7 11v4M5 13h4"/><circle cx="16" cy="11.5" r="1"/><circle cx="18.5" cy="14" r="1"/>',
    watch:'<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 3h6l-.5 4h-5zM9 21h6l-.5-4h-5z"/>',
    headphones:'<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2" y="13" width="5" height="7" rx="2"/><rect x="17" y="13" width="5" height="7" rx="2"/>',
    accessory:'<path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0z"/><path d="M12 17v5"/>',
    desktop:'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>',
    network:'<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2V12M12 12L6.4 17M12 12l5.6 5"/>',
    magic:'<circle cx="10" cy="10" r="6"/><path d="M20 20l-5.5-5.5"/><path d="M10 7v1M10 12v1M7 10h1M12 10h1"/>',
    verify:'<path d="M12 2l7 3v6c0 5-3 8-7 11-4-3-7-6-7-11V5z"/><path d="M9 12l2 2 4-4"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
    phone:'<path d="M5 4h4l1.5 4.5L8 10.5a12 12 0 0 0 5.5 5.5l1.5-2.5L19.5 15V19a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z"/>',
    whatsapp:'<path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/><path d="M8.4 7.6c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.9.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.4.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.3 0 .2 0 1-.4 1.5-.4.5-1.4 1-2.2 1-1.7 0-3.7-.8-5.3-2.2-1.7-1.5-2.8-3.2-3.1-4.4-.2-.7-.3-1.4.1-2z"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'
  };
  function svgOf(name){return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||'')+'</svg>';}
  function applyIcons(){
    var els=document.querySelectorAll('[data-icon]');
    for(var i=0;i<els.length;i++){els[i].innerHTML=svgOf(els[i].getAttribute('data-icon'));}
  }
  var PRODUCTS=[
    {id:'iphone-17',brand:'Apple',name:'iPhone 17',model:'iPhone 17',category:'phones',icon:'smartphone',year:2025,price:3799,desc:'أداء قوي بشريحة A19 وكاميرا Fusion مزدوجة 48 ميجابكسل، بشاشة ProMotion وتصميم متين من الألومنيوم ودرع سيراميك 2.',specs:{
      'الشاشة':'6.3 إنش Super Retina XDR OLED، دقة 2622×1206 بكثافة 460ppi، ProMotion حتى 120Hz، Always-On، Dynamic Island',
      'المعالج':'شريحة Apple A19',
      'الكاميرات':'نظام Fusion مزدوج 48MP (رئيسية + واسعة للغاية)، تقريب بصري حتى 2x، تقريب رقمي حتى 10x، أمامية 18MP Center Stage',
      'الذاكرة والتخزين':'256GB / 512GB',
      'البطارية':'تشغيل فيديو حتى 30 ساعة',
      'الشحن':'USB-C، شحن لاسلكي MagSafe / Qi2 حتى 25 واط',
      'نظام التشغيل':'iOS 26',
      'الاتصال':'5G، Wi-Fi 7، Bluetooth 6',
      'الحماية':'Ceramic Shield 2 أمامي، مقاومة IP68 للماء والغبار',
      'الأمان':'Face ID',
      'SIM/eSIM':'شريحتان إلكترونيتان (eSIM)',
      'الأبعاد والوزن':'149.6×71.5×7.95 مم، 177 غم',
      'الألوان':'ليلكي ناعم، أخضر رمادي، أزرق ضبابي، أبيض، أسود'
    }},
    {id:'iphone-air',brand:'Apple',name:'iPhone Air',model:'iPhone Air',category:'phones',icon:'smartphone',year:2025,price:4699,desc:'أنحف آيفون على الإطلاق بإطار من التيتانيوم وشريحة A19 Pro، بتصميم رفيع وأداء استثنائي.',specs:{
      'الشاشة':'6.5 إنش Super Retina XDR OLED، دقة 2736×1260 بكثافة 460ppi، ProMotion حتى 120Hz، Always-On، Dynamic Island',
      'المعالج':'شريحة Apple A19 Pro',
      'الكاميرات':'كاميرا Fusion رئيسية واحدة 48MP، تقريب بصري 1x/2x، أمامية 18MP Center Stage',
      'الذاكرة والتخزين':'256GB / 512GB / 1TB',
      'البطارية':'تشغيل فيديو حتى 27 ساعة',
      'الشحن':'USB-C، شحن لاسلكي MagSafe / Qi2',
      'نظام التشغيل':'iOS 26',
      'الاتصال':'5G، Wi-Fi 7، Bluetooth 6',
      'الحماية':'Ceramic Shield 2 أمامي وخلفي، مقاومة IP68 للماء والغبار',
      'الأمان':'Face ID',
      'SIM/eSIM':'شريحتان إلكترونيتان (eSIM)',
      'الأبعاد والوزن':'156.2×74.7×5.64 مم، 165 غم (إطار تيتانيوم)',
      'الألوان':'أزرق سماوي، ذهبي فاتح، أبيض سحابي، أسود فلكي'
    }},
    {id:'iphone-17-pro',brand:'Apple',name:'iPhone 17 Pro',model:'iPhone 17 Pro',category:'phones',icon:'smartphone',year:2025,price:5199,desc:'تصميم احترافي من الألومنيوم بشريحة A19 Pro ونظام كاميرات Pro Fusion ثلاثي 48 ميجابكسل وأداء استثنائي.',specs:{
      'الشاشة':'6.3 إنش Super Retina XDR OLED، دقة 2622×1206 بكثافة 460ppi، ProMotion حتى 120Hz، Always-On، Dynamic Island',
      'المعالج':'شريحة Apple A19 Pro',
      'الكاميرات':'نظام Pro Fusion ثلاثي 48MP (رئيسية + واسعة للغاية + تليفوتو)، تقريب بصري 1x/2x/4x/8x، أمامية 18MP Center Stage',
      'الذاكرة والتخزين':'256GB / 512GB / 1TB',
      'البطارية':'تشغيل فيديو حتى 39 ساعة',
      'الشحن':'USB-C (USB 3)، شحن لاسلكي MagSafe / Qi2',
      'نظام التشغيل':'iOS 26',
      'الاتصال':'5G، Wi-Fi 7، Bluetooth 6',
      'الحماية':'Ceramic Shield 2 أمامي وخلفي، مقاومة IP68 للماء والغبار',
      'الأمان':'Face ID',
      'SIM/eSIM':'شريحتان إلكترونيتان (eSIM)',
      'الأبعاد والوزن':'150.0×71.9×8.75 مم، 206 غم (هيكل ألومنيوم)',
      'الألوان':'فضي، برتقالي كوني، نيلي عميق'
    }},
    {id:'iphone-17-pro-max',brand:'Apple',name:'iPhone 17 Pro Max',model:'iPhone 17 Pro Max',category:'phones',icon:'smartphone',year:2025,price:5699,desc:'أكبر شاشة وأطول عمر بطارية في تشكيلة آيفون، مع نظام كاميرات Pro Fusion ثلاثي وأداء احترافي بشريحة A19 Pro.',specs:{
      'الشاشة':'6.9 إنش Super Retina XDR OLED، دقة 2868×1320 بكثافة 460ppi، ProMotion حتى 120Hz، Always-On، Dynamic Island',
      'المعالج':'شريحة Apple A19 Pro',
      'الكاميرات':'نظام Pro Fusion ثلاثي 48MP (رئيسية + واسعة للغاية + تليفوتو)، تقريب بصري 1x/2x/4x/8x، أمامية 18MP Center Stage',
      'الذاكرة والتخزين':'256GB / 512GB / 1TB / 2TB',
      'البطارية':'أطول عمر بطارية في تشكيلة iPhone',
      'الشحن':'USB-C (USB 3)، شحن لاسلكي MagSafe / Qi2',
      'نظام التشغيل':'iOS 26',
      'الاتصال':'5G، Wi-Fi 7، Bluetooth 6',
      'الحماية':'Ceramic Shield 2 أمامي وخلفي، مقاومة IP68 للماء والغبار',
      'الأمان':'Face ID',
      'SIM/eSIM':'شريحتان إلكترونيتان (eSIM)',
      'الأبعاد والوزن':'163.4×78.0×8.75 مم، 233 غم (هيكل ألومنيوم)',
      'الألوان':'فضي، برتقالي كوني، نيلي عميق'
    }},
    {id:'iphone-17e',brand:'Apple',name:'iPhone 17e',model:'iPhone 17e',category:'phones',icon:'smartphone',year:2025,price:2799,desc:'مزايا آيفون الأساسية بسعر في متناول اليد، بشريحة A19 وكاميرا Fusion 48 ميجابكسل.',specs:{
      'الشاشة':'6.1 إنش Super Retina XDR OLED، دقة 2532×1170 بكثافة 460ppi (بدون ProMotion وبدون Dynamic Island)',
      'المعالج':'شريحة Apple A19',
      'الكاميرات':'كاميرا Fusion رئيسية 48MP مع تقريب 2x بجودة 12MP، أمامية 12MP TrueDepth',
      'الذاكرة والتخزين':'256GB / 512GB',
      'البطارية':'تشغيل فيديو حتى 26 ساعة',
      'الشحن':'USB-C',
      'نظام التشغيل':'iOS 26',
      'الاتصال':'5G، Wi-Fi، Bluetooth',
      'الحماية':'Ceramic Shield 2 أمامي، زجاج خلفي، مقاومة IP68 للماء والغبار',
      'الأمان':'Face ID',
      'SIM/eSIM':'شريحة إلكترونية (eSIM)',
      'الأبعاد والوزن':'146.7×71.5×7.80 مم، 169 غم',
      'الألوان':'زهري ناعم، أبيض، أسود'
    }}
    ];
  var CATEGORY_META={
    phones:{label:'الجوالات',icon:'smartphone'},
    laptops:{label:'اللابتوبات',icon:'laptop'},
    tablets:{label:'الأجهزة اللوحية',icon:'tablet'},
    gaming:{label:'أجهزة الألعاب',icon:'gamepad'},
    wearables:{label:'الساعات والأجهزة القابلة للارتداء',icon:'watch'},
    audio:{label:'الصوتيات',icon:'headphones'},
    accessories:{label:'الإكسسوارات',icon:'accessory'},
    computers:{label:'أجهزة الكمبيوتر',icon:'desktop'},
    networking:{label:'أجهزة الشبكات',icon:'network'}
  };
  var BRANDS_BY_CATEGORY={
    phones:['Apple','Samsung','Huawei','OnePlus','Xiaomi','OPPO']
  };
  var state={category:'all',brand:'all'};
  function fmtPrice(n){return n.toLocaleString('en-US');}
  function buildProductCard(p){
    var specKeys=Object.keys(p.specs).slice(0,3);
    var specHtml='';
    for(var i=0;i<specKeys.length;i++){specHtml+='<span><b>'+specKeys[i]+':</b> '+p.specs[specKeys[i]]+'</span>';}
    var priceHtml=p.price?('ابتداءً من '+fmtPrice(p.price)+' ريال'):'السعر عند الطلب';
    return ''+
      '<div class="product-card reveal">'+
      '<div class="product-visual"><span class="icon-3d gold" data-icon="'+p.icon+'"></span></div>'+
      '<div class="product-card-body">'+
      '<div class="product-card-head"><span class="brand-badge">'+p.brand+'</span><h3 class="product-name">'+p.name+'</h3></div>'+
      '<div class="product-meta"><span><b>العلامة:</b> '+p.brand+'</span><span><b>النوع:</b> جوال ذكي</span><span><b>الفئة:</b> '+CATEGORY_META[p.category].label+'</span><span><b>الإصدار:</b> '+p.year+'</span></div>'+
      '<p class="product-desc">'+p.desc+'</p>'+
      '<div class="spec-preview">'+specHtml+'</div>'+
      '<button class="btn-specs" data-details="'+p.id+'">عرض جميع المواصفات</button>'+
      '<div class="product-footer"><span class="product-price">'+priceHtml+'</span>'+
      '<button class="btn-quote" data-quote="'+p.id+'"><span data-icon="whatsapp" style="width:16px;height:16px;display:inline-flex"></span> اطلب تسعيرة</button>'+
      '</div></div></div>';
  }
  function emptyState(text){
    return '<div class="empty-state"><span class="icon-3d" data-icon="magic"></span><p>'+text+'</p></div>';
  }
  function renderBrandFilter(){
    var wrap=document.getElementById('brandFilter');
    if(!wrap)return;
    var brands=BRANDS_BY_CATEGORY[state.category];
    if(!brands||state.category==='all'){wrap.innerHTML='';wrap.style.display='none';return;}
    wrap.style.display='flex';
    var html='<button class="brand-chip'+(state.brand==='all'?' active':'')+'" data-brand="all">الكل</button>';
    for(var i=0;i<brands.length;i++){
      html+='<button class="brand-chip'+(state.brand===brands[i]?' active':'')+'" data-brand="'+brands[i]+'">'+brands[i]+'</button>';
    }
    wrap.innerHTML=html;
  }
  function renderProducts(){
    var grid=document.getElementById('productsGrid');
    if(!grid)return;
    var list=PRODUCTS.filter(function(p){
      if(state.category!=='all'&&p.category!==state.category)return false;
      if(state.category==='phones'&&state.brand!=='all'&&p.brand!==state.brand)return false;
      return true;
    });
    if(state.category!=='all'&&state.category!=='phones'){
      grid.innerHTML=emptyState('سيتم إضافة منتجات هذا القسم قريباً ضمن تحديثات مدى التسهيل.');
      applyIcons();
      return;
    }
    if(state.category==='phones'&&state.brand!=='all'&&list.length===0){
      grid.innerHTML=emptyState('سيتم إضافة منتجات هذه العلامة التجارية قريباً.');
      applyIcons();
      return;
    }
    if(list.length===0){grid.innerHTML=emptyState('لا توجد منتجات متاحة حالياً.');applyIcons();return;}
    var html='';
    for(var i=0;i<list.length;i++){html+=buildProductCard(list[i]);}
    grid.innerHTML=html;
    applyIcons();
    initReveal();
  }
  function initCatalog(){
    renderBrandFilter();
    renderProducts();
    var tabs=document.querySelectorAll('.category-tab');
    for(var i=0;i<tabs.length;i++){
      tabs[i].addEventListener('click',function(){
        for(var j=0;j<tabs.length;j++){tabs[j].classList.remove('active');}
        this.classList.add('active');
        state.category=this.getAttribute('data-cat');
        state.brand='all';
        renderBrandFilter();
        renderProducts();
        bindBrandChips();
      });
    }
    bindBrandChips();
    bindProductActions();
  }
  function bindBrandChips(){
    var chips=document.querySelectorAll('.brand-chip');
    for(var i=0;i<chips.length;i++){
      chips[i].addEventListener('click',function(){
        var all=document.querySelectorAll('.brand-chip');
        for(var j=0;j<all.length;j++){all[j].classList.remove('active');}
        this.classList.add('active');
        state.brand=this.getAttribute('data-brand');
        renderProducts();
        bindProductActions();
      });
    }
  }
  function bindProductActions(){
    var specsBtns=document.querySelectorAll('[data-details]');
    for(var i=0;i<specsBtns.length;i++){
      specsBtns[i].addEventListener('click',function(){openDetails(this.getAttribute('data-details'));});
    }
    var quoteBtns=document.querySelectorAll('[data-quote]');
    for(var i=0;i<quoteBtns.length;i++){
      quoteBtns[i].addEventListener('click',function(){openQuote(this.getAttribute('data-quote'));});
    }
  }
  function findProduct(id){
    for(var i=0;i<PRODUCTS.length;i++){if(PRODUCTS[i].id===id)return PRODUCTS[i];}
    return null;
  }
  function initSearch(){
    var input=document.getElementById('searchInput');
    var results=document.getElementById('searchResults');
    if(!input||!results)return;
    input.addEventListener('input',function(){
      var q=input.value.trim().toLowerCase();
      if(q.length===0){results.classList.remove('show');results.innerHTML='';return;}
      var found=PRODUCTS.filter(function(p){
        return p.name.toLowerCase().indexOf(q)>-1||p.brand.toLowerCase().indexOf(q)>-1||p.model.toLowerCase().indexOf(q)>-1;
      });
      if(found.length===0){
        results.innerHTML='<div class="search-empty">لا توجد نتائج مطابقة</div>';
      }else{
        var html='';
        for(var i=0;i<found.length;i++){
          var p=found[i];
          html+='<div class="search-item">'+
            '<span class="icon-3d search-item-icon" data-icon="'+p.icon+'"></span>'+
            '<div class="search-item-info"><div class="search-item-name">'+p.name+'</div><div class="search-item-brand">'+p.brand+' - '+p.model+'</div></div>'+
            '<button class="search-item-btn" data-searchgo="'+p.id+'">عرض المنتج</button>'+
            '</div>';
        }
        results.innerHTML=html;
        applyIcons();
        var btns=results.querySelectorAll('[data-searchgo]');
        for(var j=0;j<btns.length;j++){
          btns[j].addEventListener('click',function(){
            var id=this.getAttribute('data-searchgo');
            results.classList.remove('show');
            input.value='';
            goToProducts(id);
          });
        }
      }
      results.classList.add('show');
    });
    document.addEventListener('click',function(e){
      if(!results.contains(e.target)&&e.target!==input){results.classList.remove('show');}
    });
  }
  function goToProducts(id){
    var p=findProduct(id);
    document.getElementById('products').scrollIntoView({behavior:'smooth'});
    if(p){
      var tabs=document.querySelectorAll('.category-tab');
      for(var i=0;i<tabs.length;i++){tabs[i].classList.remove('active');if(tabs[i].getAttribute('data-cat')==='all')tabs[i].classList.add('active');}
      state.category='all';state.brand='all';
      renderBrandFilter();renderProducts();bindBrandChips();bindProductActions();
      setTimeout(function(){openDetails(id);},600);
    }
  }
  function initSidebar(){
    var toggle=document.getElementById('menuToggle');
    var sidebar=document.getElementById('sidebar');
    var overlay=document.getElementById('sidebarOverlay');
    var closeBtn=document.getElementById('sidebarClose');
    function openSidebar(){
      sidebar.classList.add('show');overlay.classList.add('show');toggle.classList.add('open');
      document.body.classList.add('lock-scroll');
    }
    function closeSidebar(){
      sidebar.classList.remove('show');overlay.classList.remove('show');toggle.classList.remove('open');
      document.body.classList.remove('lock-scroll');
    }
    if(toggle)toggle.addEventListener('click',function(){
      if(sidebar.classList.contains('show')){closeSidebar();}else{openSidebar();}
    });
    if(overlay)overlay.addEventListener('click',closeSidebar);
    if(closeBtn)closeBtn.addEventListener('click',closeSidebar);
    var items=document.querySelectorAll('.nav-item.has-children > .nav-link');
    for(var i=0;i<items.length;i++){
      items[i].addEventListener('click',function(e){
        e.preventDefault();
        var parent=this.parentElement;
        var wasOpen=parent.classList.contains('open');
        var siblings=document.querySelectorAll('.nav-item.has-children');
        for(var k=0;k<siblings.length;k++){siblings[k].classList.remove('open');}
        if(!wasOpen)parent.classList.add('open');
      });
    }
    var links=document.querySelectorAll('.nav-link[href^="#"], .nav-child-link[href^="#"]');
    for(var j=0;j<links.length;j++){
      links[j].addEventListener('click',function(e){
        var href=this.getAttribute('href');
        if(!href||href==='#')return;
        var target=document.querySelector(href);
        if(!target)return;
        e.preventDefault();
        createRipple(this,e);
        setTimeout(function(){
          closeSidebar();
          target.scrollIntoView({behavior:'smooth'});
        },250);
      });
    }
  }
  function createRipple(el,e){
    var r=document.createElement('span');
    r.className='ripple';
    var rect=el.getBoundingClientRect();
    var size=Math.max(rect.width,rect.height);
    r.style.width=r.style.height=size+'px';
    r.style.left=((e.clientX||rect.left+rect.width/2)-rect.left-size/2)+'px';
    r.style.top=((e.clientY||rect.top+rect.height/2)-rect.top-size/2)+'px';
    el.style.position='relative';
    el.appendChild(r);
    setTimeout(function(){r.remove();},650);
  }
  function initReveal(){
    if(!('IntersectionObserver' in window)){
      var els=document.querySelectorAll('.reveal');
      for(var i=0;i<els.length;i++){els[i].classList.add('in-view');}
      return;
    }
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){en.target.classList.add('in-view');obs.unobserve(en.target);}
      });
    },{threshold:0.15});
    var targets=document.querySelectorAll('.reveal:not(.in-view)');
    for(var j=0;j<targets.length;j++){obs.observe(targets[j]);}
  }
  function initStats(){
    var cards=document.querySelectorAll('[data-count]');
    if(cards.length===0)return;
    var done=false;
    function run(){
      if(done)return;done=true;
      for(var i=0;i<cards.length;i++){
        (function(el){
          var target=parseFloat(el.getAttribute('data-count'));
          var suffix=el.getAttribute('data-suffix')||'';
          var isDecimal=target%1!==0;
          var start=0;var steps=50;var cur=0;
          var timer=setInterval(function(){
            cur++;
            var val=start+((target-start)*(cur/steps));
            el.textContent=(isDecimal?val.toFixed(2):Math.round(val))+suffix;
            if(cur>=steps){clearInterval(timer);el.textContent=(isDecimal?target.toFixed(2):target)+suffix;}
          },30);
        })(cards[i]);
      }
    }
    if(!('IntersectionObserver' in window)){run();return;}
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){run();obs.disconnect();}});
    },{threshold:0.3});
    obs.observe(document.getElementById('stats'));
  }
  function openModal(id){
    var m=document.getElementById(id);
    if(!m)return;
    m.classList.add('show');
    document.body.classList.add('lock-scroll');
  }
  function closeModal(id){
    var m=document.getElementById(id);
    if(!m)return;
    m.classList.remove('show');
    document.body.classList.remove('lock-scroll');
  }
  function switchView(modalId,viewName){
    var m=document.getElementById(modalId);
    if(!m)return;
    var views=m.querySelectorAll('.modal-view');
    for(var i=0;i<views.length;i++){views[i].classList.remove('active');}
    var target=m.querySelector('[data-view="'+viewName+'"]');
    if(target)target.classList.add('active');
  }
  function initModalClosers(){
    var closers=document.querySelectorAll('[data-close]');
    for(var i=0;i<closers.length;i++){
      closers[i].addEventListener('click',function(){closeModal(this.getAttribute('data-close'));});
    }
    var overlays=document.querySelectorAll('.modal-overlay');
    for(var j=0;j<overlays.length;j++){
      overlays[j].addEventListener('click',function(e){if(e.target===this){closeModal(this.id);}});
    }
  }
  function openDetails(id){
    var p=findProduct(id);
    if(!p)return;
    document.getElementById('detailsTitle').textContent=p.name;
    var rows='';
    var keys=Object.keys(p.specs);
    for(var i=0;i<keys.length;i++){
      rows+='<div class="details-spec-row"><b>'+keys[i]+'</b><span>'+p.specs[keys[i]]+'</span></div>';
    }
    document.getElementById('detailsBody').innerHTML='<p class="product-desc">'+p.desc+'</p><div class="details-specs">'+rows+'</div>';
    var btn=document.getElementById('detailsQuoteBtn');
    btn.setAttribute('data-quote',p.id);
    btn.onclick=function(){closeModal('detailsModal');openQuote(this.getAttribute('data-quote'));};
    openModal('detailsModal');
  }
  function openQuote(id){
    var p=findProduct(id);
    if(!p)return;
    var priceTxt=p.price?(fmtPrice(p.price)+' ريال'):'عند الطلب';
    document.getElementById('quoteSummary').innerHTML='<span><b>الشركة:</b> '+p.brand+'</span><span><b>اسم المنتج:</b> '+p.name+'</span><span><b>الموديل:</b> '+p.model+'</span><span><b>نوع المنتج:</b> جوال ذكي</span><span><b>السعر:</b> '+priceTxt+'</span>';
    document.getElementById('quoteModal').setAttribute('data-product',p.id);
    document.getElementById('qName').value='';
    document.getElementById('qPhone').value='';
    document.getElementById('qQty').value='1';
    document.getElementById('qNotes').value='';
    switchView('quoteModal','form');
    openModal('quoteModal');
  }
  function initQuoteFlow(){
    var submitBtn=document.getElementById('qSubmit');
    var confirmBtn=document.getElementById('qConfirm');
    var cancelConfirmBtn=document.getElementById('qCancelConfirm');
    if(submitBtn)submitBtn.addEventListener('click',function(){
      var name=document.getElementById('qName').value.trim();
      var phone=document.getElementById('qPhone').value.trim();
      if(!name||!phone){alert('يرجى تعبئة الاسم ورقم الجوال');return;}
      switchView('quoteModal','confirm');
    });
    if(cancelConfirmBtn)cancelConfirmBtn.addEventListener('click',function(){switchView('quoteModal','form');});
    if(confirmBtn)confirmBtn.addEventListener('click',function(){
      switchView('quoteModal','sending');var waWin=window.open('','_blank');
      var id=document.getElementById('quoteModal').getAttribute('data-product');
      var p=findProduct(id);
      var name=document.getElementById('qName').value.trim();
      var phone=document.getElementById('qPhone').value.trim();
      var qty=document.getElementById('qQty').value.trim()||'1';
      var notes=document.getElementById('qNotes').value.trim()||'لا يوجد';
      var priceTxt=p&&p.price?(fmtPrice(p.price)+' ريال'):'عند الطلب';
      var msg='طلب تسعيرة منتج - مدى التسهيل للتجارة\n'+
        'الشركة: '+(p?p.brand:'')+'\n'+
        'المنتج: '+(p?p.name:'')+'\n'+
        'الموديل: '+(p?p.model:'')+'\n'+
        'السعر: '+priceTxt+'\n'+
        'الكمية: '+qty+'\n'+
        'اسم العميل: '+name+'\n'+
        'رقم الجوال: '+phone+'\n'+
        'ملاحظات: '+notes;
      setTimeout(function(){
        if(waWin){waWin.location.href=waLink(msg);}else{window.open(waLink(msg),'_blank');}
        closeModal('quoteModal');
      },5000);
    });
  }
  function initInquiryFlow(){
    var openBtns=document.querySelectorAll('[data-open-inquiry]');
    for(var i=0;i<openBtns.length;i++){
      openBtns[i].addEventListener('click',function(){
        document.getElementById('iName').value='';
        document.getElementById('iPhone').value='';
        document.getElementById('iSubject').value='';
        document.getElementById('iMessage').value='';
        switchView('inquiryModal','form');
        openModal('inquiryModal');
      });
    }
    var submitBtn=document.getElementById('iSubmit');
    var confirmBtn=document.getElementById('iConfirm');
    var cancelConfirmBtn=document.getElementById('iCancelConfirm');
    if(submitBtn)submitBtn.addEventListener('click',function(){
      var name=document.getElementById('iName').value.trim();
      var phone=document.getElementById('iPhone').value.trim();
      if(!name||!phone){alert('يرجى تعبئة الاسم ورقم الجوال');return;}
      switchView('inquiryModal','confirm');
    });
    if(cancelConfirmBtn)cancelConfirmBtn.addEventListener('click',function(){switchView('inquiryModal','form');});
    if(confirmBtn)confirmBtn.addEventListener('click',function(){
      switchView('inquiryModal','sending');var waWin=window.open('','_blank');
      var name=document.getElementById('iName').value.trim();
      var phone=document.getElementById('iPhone').value.trim();
      var subject=document.getElementById('iSubject').value.trim()||'استفسار عام';
      var message=document.getElementById('iMessage').value.trim()||'لا يوجد';
      var msg='استفسار عام - مدى التسهيل للتجارة\n'+
        'الاسم: '+name+'\n'+
        'رقم الجوال: '+phone+'\n'+
        'موضوع الاستفسار: '+subject+'\n'+
        'الاستفسار: '+message;
      setTimeout(function(){
        if(waWin){waWin.location.href=waLink(msg);}else{window.open(waLink(msg),'_blank');}
        closeModal('inquiryModal');
      },5000);
    });
  }
  function initSplash(){
    var splash=document.getElementById('splash-screen');
    if(!splash)return;
    setTimeout(function(){splash.classList.add('hide');},5000);
  }
  function initFabWhatsapp(){
    var fab=document.getElementById('fabWhatsapp');
    if(fab)applyIcons();
  }
  document.addEventListener('DOMContentLoaded',function(){
    applyIcons();
    initSplash();
    initSidebar();
    initSearch();
    initCatalog();
    initReveal();
    initStats();
    initModalClosers();
    initQuoteFlow();
    initInquiryFlow();
    initFabWhatsapp();
  });
})();
