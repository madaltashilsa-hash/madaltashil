#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
مولّد صفحات مدى التسهيل الجديدة (faq.html + eligibility-info.html)
يأخذ الهيدر والقائمة الجانبية والفوتر من about.html حتى تبقى الصفحات متطابقة.
التشغيل:  python3 build/gen-pages.py
"""
import re, html

# ------------------------------------------------------------------ الأسئلة
FAQ = [
 ("verify",  "وش تقدمون؟",
  "نقدم حلولًا متكاملة لاقتناء الجوالات والأجهزة الإلكترونية والأجهزة الكهربائية وأجهزة الألعاب، من خلال خدمات التقسيط والدفع لاحقًا، وتوفير الطلبات الخاصة، وذلك بالتعاون مع شركائنا."),
 ("user",    "كيف أعرف إذا كنت مؤهلًا للتقسيط؟",
  "يمكنك التحقق من أهليتك خلال دقائق من خلال خدمة التحقق من الأهلية."),
 ("money",   "كم تبدأ أقساط التقسيط؟",
  "تبدأ الأقساط من 150 ريالًا، حسب المنتج والأهلية."),
 ("calendar","كم تصل مدة التقسيط؟",
  "تصل مدة التقسيط إلى 60 شهرًا، حسب الأهلية والمنتج والشريك."),
 ("tag",     "هل توفرون خدمة اشترِ الآن وادفع لاحقًا؟",
  "نعم، نوفر خدمة اشترِ الآن وادفع لاحقًا مع شركائنا، بفترات تصل إلى 24 شهرًا."),
 ("smartphone","ما المنتجات التي يمكن تقسيطها؟",
  "نوفر خدمة التقسيط على الجوالات والأجهزة الإلكترونية والأجهزة الكهربائية وأجهزة الألعاب، حسب المنتجات المتاحة لدى شركائنا."),
 ("search",  "هل يمكنني طلب منتج غير متوفر؟",
  "نعم، يمكنك تقديم طلب خاص، وسنعمل على توفير المنتج لك من خلال شركائنا."),
 ("target",  "هل التحقق من الأهلية يعني الموافقة النهائية؟",
  "لا، التحقق يعطيك مؤشرًا أوليًا على أهليتك، أما الموافقة النهائية فتخضع للشروط والإجراءات المعتمدة."),
 ("network", "هل التقسيط متاح لجميع العملاء؟",
  "تختلف الأهلية من عميل لآخر وفقًا للبيانات والشروط المعتمدة لدى الشريك."),
 ("watch",   "كم يستغرق التحقق من الأهلية؟",
  "يتم التحقق خلال دقائق في حال اكتمال البيانات المطلوبة."),
 ("rocket",  "كيف أبدأ طلب التقسيط؟",
  "ابدأ بالتحقق من أهليتك، وبعد معرفة وضعك يمكنك استكمال إجراءات الطلب حسب الخدمة والمنتج المناسب لك."),
 ("analytics","هل أستطيع معرفة القسط قبل إتمام الطلب؟",
  "نعم، يتم توضيح تفاصيل القسط والمدة والتكلفة وفقًا للمنتج والأهلية قبل إتمام العملية."),
 ("company", "هل خدمات التقسيط تتم مباشرة من مدى التسهيل؟",
  "يتم توفير خدمات التقسيط والدفع لاحقًا مع شركائنا وفقًا للشروط والأحكام المعتمدة لكل خدمة."),
 ("location","هل تتوفر خدمة شحن المنتجات؟",
  "نعم، تتوفر خدمة شحن المنتجات إلى العميل، وقد تكون برسوم إضافية حسب الطلب وموقع الشحن، كما قد تتوفر عروض شحن مجانية في بعض الحالات."),
 ("star",    "هل المنتجات عليها ضمان؟",
  "نعم، المنتجات تكون مشمولة بضمان الوكيل أو الشركة المصنعة، وتخضع مدة الضمان وشروطه لسياسة الوكيل أو الشركة المصنعة."),
 ("magic",   "هل الاستبدال والاسترجاع متاح؟",
  "نعم، تتوفر خدمة الاستبدال والاسترجاع، وتختلف الشروط والأحكام حسب نوع المنتج وسياسة الوكيل أو الشركة الموردة."),
]

def faq_item(i, icon, q, a):
    n = str(i + 1).zfill(2)
    return (
      '<div class="faq-item reveal" data-faq>'
      '<button class="faq-q" type="button" aria-expanded="false">'
      f'<span class="faq-num">{n}</span>'
      f'<span class="faq-ic icon-3d gold" data-icon="{icon}"></span>'
      f'<span class="faq-qt">{html.escape(q)}</span>'
      '<span class="faq-arrow" aria-hidden="true">'
      '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>'
      '</button>'
      f'<div class="faq-a"><div class="faq-a-in"><p>{html.escape(a)}</p></div></div>'
      '</div>'
    )

# ------------------------------------------------------------------ الشروط
COND = [
 ("verify", "أولًا: الشروط العامة", [
    "سعودي الجنسية أو مقيم في المملكة العربية السعودية.",
    "العمر 18 عامًا فأكثر.",
    "وجود سجل ائتماني مقبول."]),
 ("business", "ثانيًا: الشروط الخاصة بشركات التمويل", [
    "أن يكون المتقدم موظفًا في القطاع الحكومي أو الخاص.",
    "ألا يقل الراتب الشهري عن 4,000 ريال.",
    "استيفاء متطلبات وشروط شركة التمويل المعتمدة."]),
 ("tag", "ثالثًا: الشروط الخاصة بخدمة «اشترِ الآن وادفع لاحقًا»", [
    "ألا يكون على العميل دفعات متأخرة.",
    "ألا توجد عليه متعثرات لدى الشركة.",
    "استيفاء متطلبات وشروط الشريك المقدم للخدمة."]),
]

FLOW = [
 ("01", "user",    "عبّئ بياناتك",    "أدخل المعلومات المطلوبة بكل سهولة."),
 ("02", "search",  "نراجع طلبك",      "يتم استلام بياناتك ومراجعتها."),
 ("03", "verify",  "نتحقق من أهليتك", "نراجع المعلومات وفق المتطلبات والمعايير المعتمدة للخدمة."),
 ("04", "message", "نبلغك بالنتيجة",  "بعد الانتهاء من المراجعة، يتم إبلاغك بالنتيجة."),
]

NEEDS = [
 ("verify",     "المعلومات الأساسية", "الاسم ورقم الجوال والمنطقة."),
 ("business",   "المعلومات الوظيفية", "الحالة الوظيفية والمسمى والقطاع."),
 ("analytics",  "المعلومات المالية",  "الدخل الشهري والالتزامات الحالية."),
 ("target",     "المعلومات العامة",   "بيانات إضافية تساعدنا في تقييم طلبك."),
 ("smartphone", "معلومات المنتج",     "نوع المنتج وقيمته التقريبية."),
]

# ------------------------------------------------------------------ القالب
head = open('build/_shell_head.html', encoding='utf-8').read()
tail = open('build/_shell_tail.html', encoding='utf-8').read()

NAV_EXTRA = (
 '<li class="nav-item"><a class="nav-link" href="eligibility-info.html">'
 '<span class="icon-3d" data-icon="target"></span><span>شروط الأهلية</span></a></li>'
 '<li class="nav-item"><a class="nav-link" href="faq.html">'
 '<span class="icon-3d" data-icon="message"></span><span>الأسئلة الشائعة</span></a></li>'
)

def page(fname, title, desc, body, active=None):
    h = head
    h = re.sub(r'<title>.*?</title>', '<title>' + title + '</title>', h, flags=re.S)
    h = re.sub(r'(<meta name="description" content=")[^"]*(")', r'\g<1>' + desc + r'\g<2>', h)
    h = re.sub(r'(<meta property="og:title" content=")[^"]*(")', r'\g<1>' + title + r'\g<2>', h)
    h = re.sub(r'(<meta property="og:description" content=")[^"]*(")', r'\g<1>' + desc + r'\g<2>', h)
    h = re.sub(r'(<link rel="canonical" href="[^"]*?)about\.html(")', r'\g<1>' + fname + r'\g<2>', h)
    h = h.replace('<link rel="stylesheet" href="style.css">',
                  '<link rel="stylesheet" href="style.css">\n<link rel="stylesheet" href="pages.css">')
    h = h.replace('</ul>\n</nav>', NAV_EXTRA + '\n</ul>\n</nav>')
    if active:
        h = h.replace('href="' + active + '"', 'href="' + active + '" aria-current="page"')
    t = tail.replace('<script src="app.js"></script>',
                     '<script src="app.js"></script>\n<script src="pages.js"></script>')
    out = h + '\n<main>\n' + body + '\n</main>\n' + t
    open(fname, 'w', encoding='utf-8').write(out)
    print('OK', fname, len(out) // 1024, 'KB')

# ------------------------------------------------------------------ صفحة الأسئلة
faq_body = '''
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">الأسئلة الشائعة</span>
    <h1 class="page-hero-title">كل اللي في بالك.. <span>تلقى جوابه هنا</span></h1>
    <p class="page-hero-text">تعرف على خدماتنا، التقسيط، الأهلية، الشحن، الضمان والاستبدال والاسترجاع بكل وضوح.</p>
    <div class="page-hero-stats">
      <span class="phs"><b>__N__</b> سؤال وجواب</span>
      <span class="phs"><b>دقائق</b> للتحقق من أهليتك</span>
    </div>
  </div>
</section>

<section class="section faq-section">
  <div class="container">
    <div class="faq-grid">__ITEMS__</div>

    <div class="page-cta reveal">
      <span class="icon-3d gold" data-icon="verify"></span>
      <h3>ما لقيت جوابك؟</h3>
      <p>فريق خدمة العملاء جاهز يجاوبك ويساعدك خطوة بخطوة.</p>
      <div class="page-cta-actions">
        <button class="btn btn-gold" data-open-inquiry type="button">تواصل معنا</button>
        <a href="index.html#eligibility" class="btn btn-outline-navy">تحقق من أهليتك</a>
      </div>
    </div>
  </div>
</section>
'''
faq_body = faq_body.replace('__N__', str(len(FAQ))).replace(
    '__ITEMS__', ''.join(faq_item(i, ic, q, a) for i, (ic, q, a) in enumerate(FAQ)))

page('faq.html',
     'الأسئلة الشائعة | مدى التسهيل للتجارة',
     'إجابات واضحة عن التقسيط والأهلية والشحن والضمان والاستبدال والاسترجاع في مدى التسهيل للتجارة.',
     faq_body, active='faq.html')

# ------------------------------------------------------------------ صفحة الأهلية
flow_html = ''.join(
  '<div class="ei-step reveal">'
  f'<span class="ei-step-num">{n}</span>'
  f'<span class="ei-step-ic icon-3d gold" data-icon="{ic}"></span>'
  f'<h4>{html.escape(t)}</h4><p>{html.escape(d)}</p></div>'
  for n, ic, t, d in FLOW)

needs_html = ''.join(
  '<div class="ei-need reveal">'
  f'<span class="ei-need-ic icon-3d gold" data-icon="{ic}"></span>'
  f'<div><h4>{html.escape(t)}</h4><p>{html.escape(d)}</p></div></div>'
  for ic, t, d in NEEDS)

cond_html = ''.join(
  '<div class="ei-cond reveal">'
  '<div class="ei-cond-head">'
  f'<span class="ei-cond-ic icon-3d gold" data-icon="{ic}"></span>'
  f'<h4>{html.escape(t)}</h4></div><ul>'
  + ''.join('<li><span class="ei-tick" aria-hidden="true">'
            '<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span>'
            + html.escape(x) + '</li>' for x in items)
  + '</ul></div>'
  for ic, t, items in COND)

ei_body = '''
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">هل أنت مؤهل؟</span>
    <h1 class="page-hero-title">تفاصيل <span>التحقق من الأهلية</span></h1>
    <p class="page-hero-text">كل ما تحتاج معرفته عن خطوات التحقق، والبيانات المطلوبة، وشروط الأهلية — بكل وضوح.</p>
    <div class="page-hero-stats">
      <span class="phs"><b>دقائق</b> مدة التحقق</span>
      <span class="phs"><b>4</b> خطوات فقط</span>
    </div>
  </div>
</section>

<section class="section ei-section">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">الخطوات</span>
      <h2 class="section-title">كيف تتم عملية التحقق من الأهلية؟</h2>
      <p class="section-subtitle">أربع خطوات واضحة من تعبئة البيانات حتى إبلاغك بالنتيجة.</p>
    </div>
    <div class="ei-steps">__FLOW__</div>
  </div>
</section>

<section class="section section-alt ei-section">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">قبل ما تبدأ</span>
      <h2 class="section-title">ماذا تحتاج؟</h2>
      <p class="section-subtitle">جهّز هذه المعلومات ليكتمل طلبك من أول مرة.</p>
    </div>
    <div class="ei-needs">__NEEDS__</div>
  </div>
</section>

<section class="section ei-section">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">المتطلبات</span>
      <h2 class="section-title">شروط الأهلية</h2>
      <p class="section-subtitle">تختلف الشروط حسب الخدمة والشريك — وهذه هي الأسس المعتمدة.</p>
    </div>
    <div class="ei-conds">__COND__</div>

    <div class="ei-note reveal">
      <span class="icon-3d gold" data-icon="message"></span>
      <p><b>ملاحظة:</b> تختلف شروط الأهلية والموافقة النهائية حسب الخدمة والشريك والبيانات المقدمة،
      ولا يُعد استيفاء الشروط العامة ضمانًا للموافقة النهائية.</p>
    </div>

    <div class="page-cta reveal">
      <span class="icon-3d gold" data-icon="rocket"></span>
      <h3>جاهز تعرف أهليتك؟</h3>
      <p>عبّئ النموذج خلال دقائق، وحنا نراجع طلبك ونبلغك بالنتيجة.</p>
      <div class="page-cta-actions">
        <a href="index.html#eligibility" class="btn btn-gold">ابدأ التحقق الآن</a>
        <a href="faq.html" class="btn btn-outline-navy">الأسئلة الشائعة</a>
      </div>
    </div>
  </div>
</section>
'''
ei_body = (ei_body.replace('__FLOW__', flow_html)
                  .replace('__NEEDS__', needs_html)
                  .replace('__COND__', cond_html))

page('eligibility-info.html',
     'شروط الأهلية والتحقق | مدى التسهيل للتجارة',
     'خطوات التحقق من الأهلية، البيانات المطلوبة، وشروط الأهلية للتقسيط وخدمة اشترِ الآن وادفع لاحقًا.',
     ei_body, active='eligibility-info.html')

# ------------------------------------------------------------------ مقتطف الأسئلة للرئيسية
home_faq = (
 '\n<!-- ===== الأسئلة الشائعة (أول 4 أسئلة) ===== -->\n'
 '<section class="section faq-section" id="faq">\n'
 '<div class="container">\n'
 '<div class="section-head reveal">\n'
 '<span class="eyebrow">الأسئلة الشائعة</span>\n'
 '<h2 class="section-title">كل اللي في بالك.. تلقى جوابه هنا</h2>\n'
 '<p class="section-subtitle">تعرف على خدماتنا، التقسيط، الأهلية، الشحن، الضمان والاستبدال والاسترجاع بكل وضوح.</p>\n'
 '</div>\n'
 '<div class="faq-grid">\n'
 + ''.join(faq_item(i, ic, q, a) for i, (ic, q, a) in enumerate(FAQ[:4])) +
 '\n</div>\n'
 '<div class="faq-more reveal">\n'
 '<a href="faq.html" class="btn btn-gold">للمزيد من التفاصيل اضغط هنا'
 '<span class="faq-more-ar" aria-hidden="true">‹</span></a>\n'
 '<span class="faq-more-note">' + str(len(FAQ) - 4) + ' أسئلة إضافية بانتظارك</span>\n'
 '</div>\n'
 '</div>\n</section>\n'
)
open('build/_home_faq.html', 'w', encoding='utf-8').write(home_faq)
print('OK build/_home_faq.html')
