/* مدى التسهيل للتجارة - app.js */
(function(){
"use strict";
var WA_NUMBER="966556280382";
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
   sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
   moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
headphones:'<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2" y="13" width="5" height="7" rx="2"/><rect x="17" y="13" width="5" height="7" rx="2"/>',
accessory:'<path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0z"/><path d="M12 17v5"/>',
desktop:'<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>',
network:'<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2V12M12 12L6.4 17M12 12l5.6 5"/>',
magic:'<circle cx="10" cy="10" r="6"/><path d="M20 20l-5.5-5.5"/><path d="M10 7v1M10 12v1M7 10h1M12 10h1"/>',
verify:'<path d="M12 2l7 3v6c0 5-3 8-7 11-4-3-7-6-7-11V5z"/><path d="M9 12l2 2 4-4"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
phone:'<path d="M5 4h4l1.5 4.5L8 10.5a12 12 0 0 0 5.5 5.5l1.5-2.5L19.5 15V19a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z"/>',
whatsapp:'<path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/><path d="M8.4 7.6c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.9.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.4.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.3 0 .2 0 1-.4 1.5-.4.5-1.4 1-2.2 1-1.7 0-3.7-.8-5.3-2.2-1.7-1.5-2.8-3.2-3.1-4.4-.2-.7-.3-1.4.1-2z"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
user:'<circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/>',
location:'<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
tag:'<path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9z"/><circle cx="8" cy="8" r="1.3"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1 0 1.6-.6 1.6-1.4 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-1 0-.8.6-1.4 1.4-1.4H16a4 4 0 0 0 4-4c0-5-3.6-9-8-9z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="14" cy="7" r="1"/><circle cx="16.5" cy="10.5" r="1"/>',
ruler:'<path d="M4 15l5-5 10 10-5 5z"/><path d="M9 10l2 2M12 7l2 2M6 13l2 2"/>',
image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="10" r="1.8"/><path d="M21 16l-5-5-4 4-2-2-6 6"/>',
money:'<circle cx="12" cy="12" r="9"/><path d="M9 15s.5 1.5 3 1.5 3-1.2 3-2.3c0-2.4-6-1.1-6-3.5 0-1.1 1.2-2.2 3-2.2s3 1 3 1"/><path d="M12 7v1M12 16v1"/>'
};
function svgOf(name){return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||'')+'</svg>';}
function applyIcons(){
var els=document.querySelectorAll('[data-icon]');
for(var i=0;i<els.length;i++){els[i].innerHTML=svgOf(els[i].getAttribute('data-icon'));}
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
if(id==='eligibilityModal'){
var sec=document.getElementById('eligibility');
if(sec)sec.scrollIntoView({behavior:'smooth'});
}
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
var JOB_STATUSES=[
{v:'civil',l:'موظف مدني'},
{v:'military',l:'موظف عسكري'},
{v:'private',l:'موظف قطاع خاص'},
{v:'retired',l:'متقاعد'},
{v:'housewife',l:'ربة منزل'},
{v:'student',l:'طالب'},
{v:'none',l:'لا يوجد وظيفة'}
];
var JOB_WITH_TITLE=['civil','military','private'];
var INCOME_SOURCES=[
{v:'salary',l:'راتب'},
{v:'assets',l:'أصول واستثمارات'},
{v:'student_reward',l:'مكافأة طلاب'},
{v:'citizen_account',l:'حساب المواطن'},
{v:'social_security',l:'الضمان'}
];
var HOLD_TYPES=[
{v:'traffic',l:'مخالفات مرورية'},
{v:'financial',l:'مطالبات مالية'}
];
var PRODUCT_TYPES=[
{v:'phones',l:'جوالات'},
{v:'electronics',l:'منتجات إلكترونية'}
];
var SAUDI_REGIONS=[
'منطقة الرياض','منطقة مكة المكرمة','منطقة المدينة المنورة','المنطقة الشرقية','منطقة القصيم',
'منطقة عسير','منطقة تبوك','منطقة حائل','منطقة الحدود الشمالية','منطقة جازان',
'منطقة نجران','منطقة الباحة','منطقة الجوف'
];
/* elig.step = المصدر الوحيد للحقيقة (single source of truth) للمرحلة الحالية النشطة في المعالج.
   elig.completed = أعلى رقم مرحلة تم اجتيازها فعليًا عبر validateCurrentStage() (يُستخدم فقط لتحديد نقاط "مكتملة" في مسار التقدم،
   ولا يتأثر بالتنقل للخلف أو بالانتقال المباشر عبر أزرار "تعديل"). */
var elig={step:1,completed:0,
basic:{name:'',phone:'',city:'',age:''},
job:{status:'',title:'',sector:''},
fin:{sources:[],income:'',hasObligations:'',obligationsValue:'',hasExtraIncome:'',extraIncomeValue:'',extraIncomeSource:'',salaryDeposit:''},
gen:{hasHold:'',holdTypes:[],hadHold:'',hadTypes:[]},
prod:{value:'',type:''}
};
function resetElig(){
elig.step=1;
elig.completed=0;
elig.basic={name:'',phone:'',email:'',city:'',age:''};
elig.job={status:'',title:'',sector:''};
elig.fin={sources:[],income:'',hasObligations:'',obligationsValue:'',hasExtraIncome:'',extraIncomeValue:'',extraIncomeSource:'',salaryDeposit:''};
elig.gen={hasHold:'',holdTypes:[],hadHold:'',hadTypes:[]};
elig.prod={value:'',type:''};
}
/* showStage(n): الدالة الوحيدة المسؤولة عن تغيير المرحلة الحالية وإعادة الرسم. جميع أزرار التنقل
   (التالي/رجوع/تعديل/روابط "تعديل" في المراجعة) يجب أن تمر حصريًا عبر هذه الدالة بدل تعديل elig.step مباشرة. */
function showStage(n){
var target=clamp(parseInt(n,10),1,ELIG_STAGE_COUNT);
elig.step=target;
renderEligStage();
}
function escAttr(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
/* تنسيق قيمة مالية بصيغة الريال السعودي مع فواصل الآلاف - تُستخدم فقط لعرض قيمة المنتج */
function formatSAR(n){
var x=Math.round(Number(n)||0);
var neg=x<0;if(neg)x=-x;
var s=String(x).replace(/\B(?=(\d{3})+(?!\d))/g,',');
return (neg?'-':'')+s+' ريال سعودي';
}
/* أداة تنبيه صغيرة (Toast) لتحسين تجربة الإشعارات بدل alert() في بعض الحالات */
function showToast(msg){
var host=document.getElementById('appToastHost');
if(!host){host=document.createElement('div');host.id='appToastHost';host.className='toast-host';document.body.appendChild(host);}
var t=document.createElement('div');
t.className='toast-item';
t.textContent=msg;
host.appendChild(t);
setTimeout(function(){t.classList.add('hide');setTimeout(function(){t.remove();},350);},2400);
}
function val(id){var e=document.getElementById(id);return e?e.value.trim():'';}
function setFieldError(id,msg){
var el=document.getElementById(id);if(!el)return;
var grp=el.closest('.form-group');if(!grp)return;
grp.classList.add('field-error');
var m=grp.querySelector('.field-error-msg');if(m)m.textContent=msg;
}
function clearFieldError(id){
var el=document.getElementById(id);if(!el)return;
var grp=el.closest('.form-group');if(!grp)return;
grp.classList.remove('field-error');
var m=grp.querySelector('.field-error-msg');if(m)m.textContent='';
}
function clearAllFieldErrors(container){
var groups=container.querySelectorAll('.form-group.field-error');
for(var i=0;i<groups.length;i++){groups[i].classList.remove('field-error');var m=groups[i].querySelector('.field-error-msg');if(m)m.textContent='';}
}
var AGE_MIN=18,AGE_MAX=80;
function regionOpts(selected){
var o='<option value="">اختر المنطقة</option>';
for(var i=0;i<SAUDI_REGIONS.length;i++){o+='<option value="'+SAUDI_REGIONS[i]+'"'+(selected===SAUDI_REGIONS[i]?' selected':'')+'>'+SAUDI_REGIONS[i]+'</option>';}
return o;
}
function stage1Html(){
var b=elig.basic;
var ageVal=b.age?parseInt(b.age,10):AGE_MIN;
if(isNaN(ageVal))ageVal=AGE_MIN;
return ''
+'<div class="form-group"><label>الاسم كما هو في الهوية</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="user"></span><input type="text" id="elgName" value="'+escAttr(b.name)+'"></div><span class="field-error-msg"></span></div>'
+'<div class="form-group"><label>رقم الجوال</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="phone"></span><input type="tel" id="elgPhone" placeholder="05xxxxxxxx" value="'+escAttr(b.phone)+'"></div><span class="field-error-msg"></span></div>'
+'<div class="form-group"><label>المنطقة</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="location"></span><select id="elgCity">'+regionOpts(b.city)+'</select></div><span class="field-error-msg"></span></div>'
+'<div class="form-group"><label>العمر <span class="label-hint">(يشترط ألا يقل عن 18 سنة)</span></label>'
+'<div class="range-row age-range-row"><input type="range" id="elgAgeRange" min="'+AGE_MIN+'" max="'+AGE_MAX+'" step="1" value="'+ageVal+'"><input type="number" id="elgAge" class="age-number-input" min="'+AGE_MIN+'" max="'+AGE_MAX+'" value="'+ageVal+'"><span class="range-value-suffix">سنة</span></div>'
+'<div class="range-limits"><span>'+AGE_MIN+' سنة</span><span>'+AGE_MAX+' سنة</span></div>'
+'<span class="field-error-msg"></span></div>';
}
function stage2Html(){
var j=elig.job;
var opts='<option value="">اختر الحالة الوظيفية</option>';
for(var i=0;i<JOB_STATUSES.length;i++){
opts+='<option value="'+JOB_STATUSES[i].v+'"'+(j.status===JOB_STATUSES[i].v?' selected':'')+'>'+JOB_STATUSES[i].l+'</option>';
}
var showExtra=JOB_WITH_TITLE.indexOf(j.status)>=0;
return ''
+'<div class="form-group"><label>الحالة الوظيفية</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="business"></span><select id="elgJobStatus">'+opts+'</select></div><span class="field-error-msg"></span></div>'
+'<div class="cond-block'+(showExtra?' show':'')+'" id="jobExtra">'
+'<div class="form-group"><label>مسمى الوظيفة</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="tag"></span><input type="text" id="elgJobTitle" value="'+escAttr(j.title)+'"></div></div>'
+'<div class="form-group"><label>القطاع</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="company"></span><input type="text" id="elgJobSector" value="'+escAttr(j.sector)+'"></div></div>'
+'</div>';
}
function stage3Html(){
var f=elig.fin;
var srcHtml='';
for(var i=0;i<INCOME_SOURCES.length;i++){
var s=INCOME_SOURCES[i];
var sel=f.sources.indexOf(s.v)>=0;
srcHtml+='<button type="button" class="choice-chip'+(sel?' selected':'')+'" data-fin-source="'+s.v+'">'+s.l+'</button>';
}
var showObligVal=f.hasObligations==='yes';
var showExtraVal=f.hasExtraIncome==='yes';
var showSalaryDeposit=JOB_WITH_TITLE.indexOf(elig.job.status)>=0;
return ''
+'<div class="form-group"><label>مصدر الدخل (يمكن اختيار أكثر من مصدر)</label><div class="choice-group" id="finSources">'+srcHtml+'</div></div>'
+'<div class="form-group"><label>إجمالي الدخل الشهري</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="money"></span><input type="number" id="elgIncome" value="'+escAttr(f.income)+'"></div><span class="field-error-msg"></span></div>'
+'<div class="form-group"><label>هل توجد التزامات شهرية؟</label><div class="choice-group">'
+'<button type="button" class="choice-chip'+(f.hasObligations==='yes'?' selected':'')+'" data-yesno="hasObligations" data-val="yes">نعم</button>'
+'<button type="button" class="choice-chip'+(f.hasObligations==='no'?' selected':'')+'" data-yesno="hasObligations" data-val="no">لا</button>'
+'</div></div>'
+'<div class="cond-block'+(showObligVal?' show':'')+'" id="obligBlock"><div class="form-group"><label>قيمة الالتزامات الشهرية</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="money"></span><input type="number" id="elgObligValue" value="'+escAttr(f.obligationsValue)+'"></div></div></div>'
+'<div class="form-group"><label>هل يوجد دخل إضافي؟</label><div class="choice-group">'
+'<button type="button" class="choice-chip'+(f.hasExtraIncome==='yes'?' selected':'')+'" data-yesno="hasExtraIncome" data-val="yes">نعم</button>'
+'<button type="button" class="choice-chip'+(f.hasExtraIncome==='no'?' selected':'')+'" data-yesno="hasExtraIncome" data-val="no">لا</button>'
+'</div></div>'
+'<div class="cond-block'+(showExtraVal?' show':'')+'" id="extraBlock">'
+'<div class="form-group"><label>قيمة الدخل الإضافي</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="money"></span><input type="number" id="elgExtraValue" value="'+escAttr(f.extraIncomeValue)+'"></div></div>'
+'<div class="form-group"><label>مصدر الدخل الإضافي</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="tag"></span><input type="text" id="elgExtraSource" value="'+escAttr(f.extraIncomeSource)+'"></div></div>'
+'</div>'
+'<div class="cond-block'+(showSalaryDeposit?' show':'')+'" id="salaryDepositBlock"><div class="form-group"><label>قيمة الراتب المودع في الحساب البنكي</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="money"></span><input type="number" id="elgSalaryDeposit" value="'+escAttr(f.salaryDeposit)+'"></div></div></div>';
}

function stage4Html(){
var g=elig.gen;
var holdChips='';
for(var i=0;i<HOLD_TYPES.length;i++){
var h=HOLD_TYPES[i];
var sel=g.holdTypes.indexOf(h.v)>=0;
holdChips+='<button type="button" class="choice-chip'+(sel?' selected':'')+'" data-hold="'+h.v+'">'+h.l+'</button>';
}
var hadChips='';
for(var i2=0;i2<HOLD_TYPES.length;i2++){
var h2=HOLD_TYPES[i2];
var sel2=g.hadTypes.indexOf(h2.v)>=0;
hadChips+='<button type="button" class="choice-chip'+(sel2?' selected':'')+'" data-had="'+h2.v+'">'+h2.l+'</button>';
}
return ''
+'<div class="form-group"><label>هل يوجد إيقاف خدمات ساري؟</label><div class="choice-group">'
+'<button type="button" class="choice-chip'+(g.hasHold==='yes'?' selected':'')+'" data-yesno="hasHold" data-val="yes">نعم</button>'
+'<button type="button" class="choice-chip'+(g.hasHold==='no'?' selected':'')+'" data-yesno="hasHold" data-val="no">لا</button>'
+'</div></div>'
+'<div class="cond-block'+(g.hasHold==='yes'?' show':'')+'" id="holdTypeBlock"><div class="form-group"><label>نوع إيقاف الخدمات</label><div class="choice-group">'+holdChips+'</div></div></div>'
+'<div class="form-group"><label>هل سبق إيقاف خدماتكم؟</label><div class="choice-group">'
+'<button type="button" class="choice-chip'+(g.hadHold==='yes'?' selected':'')+'" data-yesno="hadHold" data-val="yes">نعم</button>'
+'<button type="button" class="choice-chip'+(g.hadHold==='no'?' selected':'')+'" data-yesno="hadHold" data-val="no">لا</button>'
+'</div></div>'
+'<div class="cond-block'+(g.hadHold==='yes'?' show':'')+'" id="hadTypeBlock"><div class="form-group"><label>نوع إيقاف الخدمات السابق</label><div class="choice-group">'+hadChips+'</div></div></div>';
}
var PROD_VALUE_MIN=500,PROD_VALUE_MAX=30000,PROD_VALUE_STEP=100;
function stage5Html(){
var p=elig.prod;
var v=p.value?p.value:3000;
var typeOpts='<option value="">اختر نوع المنتج</option>';
for(var i=0;i<PRODUCT_TYPES.length;i++){
typeOpts+='<option value="'+PRODUCT_TYPES[i].v+'"'+(p.type===PRODUCT_TYPES[i].v?' selected':'')+'>'+PRODUCT_TYPES[i].l+'</option>';
}
return ''
+'<div class="form-group"><label>نوع المنتج</label><div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="smartphone"></span><select id="elgProdType">'+typeOpts+'</select></div><span class="field-error-msg"></span></div>'
+'<div class="form-group"><label>قيمة المنتج <span class="label-hint">(من '+formatSAR(PROD_VALUE_MIN)+' إلى '+formatSAR(PROD_VALUE_MAX)+')</span></label>'
+'<div class="input-wrap"><span class="input-icon icon-3d gold" data-icon="money"></span><input type="number" id="elgProdValue" min="'+PROD_VALUE_MIN+'" max="'+PROD_VALUE_MAX+'" step="'+PROD_VALUE_STEP+'" value="'+v+'"></div>'
+'<span class="field-error-msg"></span></div>';
}
function jobStatusLabel(v){for(var i=0;i<JOB_STATUSES.length;i++){if(JOB_STATUSES[i].v===v)return JOB_STATUSES[i].l;}return '—';}
function incomeSourcesLabel(arr){
var out=[];
for(var i=0;i<arr.length;i++){for(var j=0;j<INCOME_SOURCES.length;j++){if(INCOME_SOURCES[j].v===arr[i])out.push(INCOME_SOURCES[j].l);}}
return out.length?out.join('، '):'—';
}
function holdTypesLabel(arr){
var out=[];
for(var i=0;i<arr.length;i++){for(var j=0;j<HOLD_TYPES.length;j++){if(HOLD_TYPES[j].v===arr[i])out.push(HOLD_TYPES[j].l);}}
return out.length?out.join('، '):'—';
}
function yesNoLabel(v){return v==='yes'?'نعم':(v==='no'?'لا':'—');}
function productTypeLabel(v){for(var i=0;i<PRODUCT_TYPES.length;i++){if(PRODUCT_TYPES[i].v===v)return PRODUCT_TYPES[i].l;}return '—';}
function reviewRow(label,v){return '<div class="review-row"><span>'+label+'</span><b>'+(v===''||v==null?'—':escAttr(v))+'</b></div>';}

function stage6Html(){
var b=elig.basic,j=elig.job,f=elig.fin,g=elig.gen,p=elig.prod;
var html='';
html+='<div class="review-block"><div class="review-block-head"><h4>المعلومات الأساسية</h4><button type="button" class="review-edit-btn" data-goto="1">تعديل</button></div>'
+reviewRow('الاسم',b.name)+reviewRow('رقم الجوال',b.phone)+reviewRow('المنطقة',b.city)+reviewRow('العمر',b.age?b.age+' سنة':'—')
+'</div>';
html+='<div class="review-block"><div class="review-block-head"><h4>المعلومات الوظيفية</h4><button type="button" class="review-edit-btn" data-goto="2">تعديل</button></div>'
+reviewRow('الحالة الوظيفية',jobStatusLabel(j.status));
if(JOB_WITH_TITLE.indexOf(j.status)>=0){html+=reviewRow('مسمى الوظيفة',j.title)+reviewRow('القطاع',j.sector);}
html+='</div>';
html+='<div class="review-block"><div class="review-block-head"><h4>المعلومات المالية</h4><button type="button" class="review-edit-btn" data-goto="3">تعديل</button></div>'
+reviewRow('مصدر الدخل',incomeSourcesLabel(f.sources))
+reviewRow('إجمالي الدخل الشهري',f.income)
+reviewRow('هل توجد التزامات شهرية؟',yesNoLabel(f.hasObligations));
if(f.hasObligations==='yes'){html+=reviewRow('قيمة الالتزامات الشهرية',f.obligationsValue);}
html+=reviewRow('هل يوجد دخل إضافي؟',yesNoLabel(f.hasExtraIncome));
if(f.hasExtraIncome==='yes'){html+=reviewRow('قيمة الدخل الإضافي',f.extraIncomeValue)+reviewRow('مصدر الدخل الإضافي',f.extraIncomeSource);}
if(JOB_WITH_TITLE.indexOf(j.status)>=0){html+=reviewRow('الراتب المودع بالحساب البنكي',f.salaryDeposit);}
html+='</div>';
html+='<div class="review-block"><div class="review-block-head"><h4>المعلومات العامة</h4><button type="button" class="review-edit-btn" data-goto="4">تعديل</button></div>'
+reviewRow('هل يوجد إيقاف خدمات ساري؟',yesNoLabel(g.hasHold));
if(g.hasHold==='yes'){html+=reviewRow('نوع إيقاف الخدمات',holdTypesLabel(g.holdTypes));}
html+=reviewRow('هل سبق إيقاف خدماتكم؟',yesNoLabel(g.hadHold));
if(g.hadHold==='yes'){html+=reviewRow('نوع إيقاف الخدمات السابق',holdTypesLabel(g.hadTypes));}
html+='</div>';
html+='<div class="review-block"><div class="review-block-head"><h4>معلومات المنتج</h4><button type="button" class="review-edit-btn" data-goto="5">تعديل</button></div>';
html+=reviewRow('نوع المنتج',productTypeLabel(p.type));
html+=reviewRow('قيمة المنتج المطلوبة',(p.value?formatSAR(p.value):'—'));
html+='</div>';
html+='<p class="elig-disclaimer">يرجى التأكد من صحة جميع البيانات المدخلة قبل إرسال الطلب.</p>';
return html;
}
/* مصدر واحد للحقيقة لعدد مراحل نموذج التحقق من الأهلية - أي تعديل هنا ينعكس تلقائيًا على مسار التقدم بالكامل */
var ELIG_STAGE_FNS=[stage1Html,stage2Html,stage3Html,stage4Html,stage5Html,stage6Html];
var ELIG_STAGE_LABELS=['المعلومات الأساسية','المعلومات الوظيفية','المعلومات المالية','المعلومات العامة','معلومات المنتج','مراجعة وإرسال'];
var ELIG_STAGE_DESCRIPTIONS=[
'أدخل بياناتك الشخصية الأساسية للتواصل معك.',
'أخبرنا عن حالتك الوظيفية الحالية.',
'بيانات دخلك الشهري والتزاماتك المالية.',
'بعض المعلومات العامة اللازمة لمراجعة طلبك.',
'اختر نوع المنتج وحدد قيمته المطلوبة.',
'راجع بياناتك جيدًا قبل إرسال الطلب.'
];
var ELIG_STAGE_COUNT=ELIG_STAGE_LABELS.length;
function renderEligProgress(){
var wrap=document.getElementById('eligProgress');if(!wrap)return;
var html='';
for(var i=1;i<=ELIG_STAGE_COUNT;i++){
var cls='stage-dot';
/* المرحلة المعروضة فعليًا (elig.step) لها الأولوية دائمًا في تحديد "current" حتى لو كانت قد اجتازت
   التحقق سابقًا (مثلاً بعد الرجوع لتعديلها) — بذلك لا يختلف أبدًا موضع المؤشر عن المرحلة المعروضة فعليًا.
   و"مكتملة" (done) فقط لمرحلة اجتازت validateCurrentStage() فعليًا (elig.completed) وليست هي المرحلة الحالية. */
if(i===elig.step)cls+=' current';
else if(i<=elig.completed)cls+=' done';
html+='<span class="'+cls+'" data-num="'+i+'"></span>';
}
wrap.innerHTML=html;
var label=document.getElementById('eligStageLabel');
if(label)label.textContent='الخطوة '+elig.step+' من '+ELIG_STAGE_COUNT+' — '+ELIG_STAGE_LABELS[elig.step-1];
var desc=document.getElementById('eligStageDesc');
if(desc)desc.textContent=ELIG_STAGE_DESCRIPTIONS[elig.step-1]||'';
}
function renderEligNav(){
var wrap=document.getElementById('eligNavActions');if(!wrap)return;
var html='<div class="elig-nav-main">';
if(elig.step>1){html+='<button type="button" class="btn btn-outline-navy" id="eligBackBtn">رجوع</button>';}
if(elig.step<ELIG_STAGE_COUNT){html+='<button type="button" class="btn btn-gold" id="eligNextBtn">التالي</button>';}
else{html+='<button type="button" class="btn btn-gold" id="eligSubmitBtn">إرسال الطلب</button><button type="button" class="btn btn-outline-navy" id="eligEditBtn">تعديل البيانات</button>';}
html+='</div>';
html+='<div class="elig-nav-secondary"><button type="button" class="btn-text" id="eligSaveDraftBtn">حفظ ومتابعة لاحقًا</button><button type="button" class="btn-text btn-text-muted" id="eligCancelBtn">إلغاء</button></div>';
wrap.innerHTML=html;
}

function renderEligStage(){
var content=document.getElementById('eligStageContent');if(!content)return;
var fn=ELIG_STAGE_FNS[elig.step-1];
content.innerHTML=fn();
content.classList.remove('stage-anim-in');
void content.offsetWidth;
content.classList.add('stage-anim-in');
applyIcons();
renderEligProgress();
renderEligNav();
bindEligStageEvents();
}
function setElgField(field,v){
if(field==='hasObligations')elig.fin.hasObligations=v;
else if(field==='hasExtraIncome')elig.fin.hasExtraIncome=v;
else if(field==='hasHold')elig.gen.hasHold=v;
else if(field==='hadHold')elig.gen.hadHold=v;
}
function updateConditionalBlocks(){
var oblig=document.getElementById('obligBlock');if(oblig){if(elig.fin.hasObligations==='yes')oblig.classList.add('show');else oblig.classList.remove('show');}
var extra=document.getElementById('extraBlock');if(extra){if(elig.fin.hasExtraIncome==='yes')extra.classList.add('show');else extra.classList.remove('show');}
var holdType=document.getElementById('holdTypeBlock');if(holdType){if(elig.gen.hasHold==='yes')holdType.classList.add('show');else holdType.classList.remove('show');}
var hadType=document.getElementById('hadTypeBlock');if(hadType){if(elig.gen.hadHold==='yes')hadType.classList.add('show');else hadType.classList.remove('show');}
}
function bindEligStageEvents(){
/* التنقل بالكامل يمر عبر showStage(n) — مصدر واحد للحقيقة لتحديد المرحلة المعروضة، بدل تفريق تعديل elig.step في كل مكان */
var back=document.getElementById('eligBackBtn');
if(back)back.addEventListener('click',function(){saveCurrentStage();showStage(elig.step-1);});
var next=document.getElementById('eligNextBtn');
if(next)next.addEventListener('click',function(){
if(validateCurrentStage()){
saveCurrentStage();
/* لا تُعتبر المرحلة "مكتملة" إلا بعد اجتيازها فعليًا لـ validateCurrentStage() أعلاه */
if(elig.step>elig.completed)elig.completed=elig.step;
showStage(elig.step+1);
showToast('تم حفظ بياناتك، أكمل الخطوة التالية.');
}
});
var submitBtn=document.getElementById('eligSubmitBtn');
if(submitBtn)submitBtn.addEventListener('click',function(){openEligConfirm();});
var editBtn=document.getElementById('eligEditBtn');
if(editBtn)editBtn.addEventListener('click',function(){showStage(1);});
var saveDraftBtn=document.getElementById('eligSaveDraftBtn');
if(saveDraftBtn)saveDraftBtn.addEventListener('click',function(){saveDraft();showToast('تم حفظ طلبك، يمكنك المتابعة لاحقًا من نفس الجهاز.');closeModal('eligibilityModal');});
var cancelBtn=document.getElementById('eligCancelBtn');
if(cancelBtn)cancelBtn.addEventListener('click',function(){
if(window.confirm('هل تريد إلغاء الطلب؟ سيتم حذف أي بيانات محفوظة.')){clearDraft();resetElig();closeModal('eligibilityModal');}
});
var editLinks=document.querySelectorAll('.review-edit-btn');
for(var i=0;i<editLinks.length;i++){
editLinks[i].addEventListener('click',function(){showStage(parseInt(this.getAttribute('data-goto'),10));});
}
var jobSel=document.getElementById('elgJobStatus');
if(jobSel)jobSel.addEventListener('change',function(){
elig.job.status=this.value;
var extra=document.getElementById('jobExtra');
if(extra){if(JOB_WITH_TITLE.indexOf(this.value)>=0){extra.classList.add('show');}else{extra.classList.remove('show');}}
});
var srcChips=document.querySelectorAll('[data-fin-source]');
for(var s=0;s<srcChips.length;s++){
srcChips[s].addEventListener('click',function(){
var v=this.getAttribute('data-fin-source');
var idx=elig.fin.sources.indexOf(v);
if(idx>=0){elig.fin.sources.splice(idx,1);this.classList.remove('selected');}
else{elig.fin.sources.push(v);this.classList.add('selected');}
});
}
var yn=document.querySelectorAll('[data-yesno]');
for(var y=0;y<yn.length;y++){
yn[y].addEventListener('click',function(){
var field=this.getAttribute('data-yesno');
var v=this.getAttribute('data-val');
setElgField(field,v);
var group=this.parentElement;
var btns=group.querySelectorAll('.choice-chip');
for(var k=0;k<btns.length;k++){btns[k].classList.remove('selected');}
this.classList.add('selected');
updateConditionalBlocks();
});
}
var holdChips=document.querySelectorAll('[data-hold]');
for(var h=0;h<holdChips.length;h++){
holdChips[h].addEventListener('click',function(){
var v=this.getAttribute('data-hold');
var idx=elig.gen.holdTypes.indexOf(v);
if(idx>=0){elig.gen.holdTypes.splice(idx,1);this.classList.remove('selected');}
else{elig.gen.holdTypes.push(v);this.classList.add('selected');}
});
}
var hadChips=document.querySelectorAll('[data-had]');
for(var hd=0;hd<hadChips.length;hd++){
hadChips[hd].addEventListener('click',function(){
var v=this.getAttribute('data-had');
var idx=elig.gen.hadTypes.indexOf(v);
if(idx>=0){elig.gen.hadTypes.splice(idx,1);this.classList.remove('selected');}
else{elig.gen.hadTypes.push(v);this.classList.add('selected');}
});
}
initProductPriceSlider();
var typeSel=document.getElementById('elgProdType');
if(typeSel)typeSel.addEventListener('change',function(){elig.prod.type=this.value;});
initAgeSlider();
}
/* ============================================================================
   مؤشر قيمة المنتج (productPriceSlider) — مستقل تمامًا عن مؤشر العمر:
   عناصره (elgProdValue/elgProdValueOut) ومتغيراته (PROD_VALUE_MIN/MAX/STEP) ومنطقه
   الخاص بالكامل، ولا يشترك في أي حالة أو دالة أو مستمع مع مؤشر العمر (ageSlider).
   يضمن وصول القيمة فعليًا لطرفي المدى (500 و30000) لأن (المدى/الخطوة) يقبل القسمة
   تمامًا (29500/100=295)، ويُبقي العرض النصي مطابقًا 100% لقيمة الشريط في كل لحظة. */
function initProductPriceSlider(){
var num=document.getElementById('elgProdValue');
if(!num)return;
function sync(){
if(num.value==='')return;
var v=clamp(parseInt(num.value,10),PROD_VALUE_MIN,PROD_VALUE_MAX);
elig.prod.value=String(v);
}
num.addEventListener('input',function(){if(this.value!=='')elig.prod.value=this.value;});
num.addEventListener('blur',function(){var v=clamp(parseInt(this.value,10)||PROD_VALUE_MIN,PROD_VALUE_MIN,PROD_VALUE_MAX);this.value=v;sync();});
sync();
}
/* ============================================================================
   مؤشر العمر (ageSlider) — مستقل تمامًا عن مؤشر قيمة المنتج:
   عناصره (elgAgeRange/elgAge) ومتغيراته (AGE_MIN/AGE_MAX) ومنطقه الخاص بالكامل،
   ولا يشترك في أي حالة أو دالة أو مستمع مع مؤشر السعر (productPriceSlider).
   الشريط نفسه (elgAgeRange) لا يمكن أن يخرج عن 18-80 لأن min/max مضبوطتان عليه مباشرة
   و(80-18=62) تقبل القسمة تمامًا على step=1، فطرفا المدى (18 و80) قابلان للوصول فعليًا دائمًا.
   حقل الرقم (elgAge) يسمح بالكتابة اليدوية، ويُزامَن الشريط معه أثناء الكتابة، ويُضبط (يُقفل)
   على القيمة الصحيحة بالكامل (clamp) عند إنهاء التحرير (blur) بحيث يتطابق العرض مع القيمة 100%. */
function initAgeSlider(){
var ageRange=document.getElementById('elgAgeRange');
var ageNum=document.getElementById('elgAge');
if(!ageRange||!ageNum)return;
function applyAgeError(n){
if(isNaN(n)){clearFieldError('elgAge');return;}
if(n<AGE_MIN){setFieldError('elgAge','نعتذر، يشترط ألا يقل العمر عن 18 سنة للاستفادة من هذه الخدمة.');}
else if(n>AGE_MAX){setFieldError('elgAge','يرجى إدخال عمر لا يتجاوز 80 سنة.');}
else{clearFieldError('elgAge');}
}
ageRange.addEventListener('input',function(){
/* الشريط نفسه محصور بـ min/max فلا يمكن أن يخرج قيمته عن 18-80 */
ageNum.value=this.value;
elig.basic.age=this.value;
clearFieldError('elgAge');
});
ageNum.addEventListener('input',function(){
/* لا نُقفل (clamp) قيمة حقل الرقم نفسه هنا عمدًا: لو كتب المستخدم رقمًا خارج 18-80 يجب أن تبقى رسالة
   الرفض ظاهرة عند محاولة المتابعة (validateCurrentStage)، بينما الشريط المرئي فقط يُثبَّت عند أقرب حد مسموح. */
var n=parseInt(this.value,10);
if(!isNaN(n)){ageRange.value=clamp(n,AGE_MIN,AGE_MAX);elig.basic.age=this.value;}
applyAgeError(n);
});
}
function clamp(n,min,max){if(isNaN(n))return min;return Math.min(max,Math.max(min,n));}
function saveCurrentStage(){
var step=elig.step;
if(step===1){
elig.basic.name=val('elgName');elig.basic.phone=val('elgPhone');elig.basic.city=val('elgCity');elig.basic.age=val('elgAge');
}else if(step===2){
elig.job.status=val('elgJobStatus');elig.job.title=val('elgJobTitle');elig.job.sector=val('elgJobSector');
}else if(step===3){
elig.fin.income=val('elgIncome');elig.fin.obligationsValue=val('elgObligValue');elig.fin.extraIncomeValue=val('elgExtraValue');elig.fin.extraIncomeSource=val('elgExtraSource');elig.fin.salaryDeposit=val('elgSalaryDeposit');
}else if(step===5){
elig.prod.value=val('elgProdValue')||elig.prod.value;elig.prod.type=val('elgProdType');
}
}
function validateCurrentStage(){
var step=elig.step;
var content=document.getElementById('eligStageContent');
clearAllFieldErrors(content);
var ok=true;
if(step===1){
var name=val('elgName'),phone=val('elgPhone'),city=val('elgCity'),age=val('elgAge');
if(!name){setFieldError('elgName','يرجى إدخال الاسم');ok=false;}
if(!/^05[0-9]{8}$/.test(phone)){setFieldError('elgPhone','رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام');ok=false;}
if(!city){setFieldError('elgCity','يرجى اختيار المنطقة');ok=false;}
var ageNumVal=parseInt(age,10);
if(!age||isNaN(ageNumVal)){setFieldError('elgAge','يرجى إدخال عمر صحيح');ok=false;}
else if(ageNumVal<AGE_MIN){setFieldError('elgAge','نعتذر، يشترط ألا يقل العمر عن 18 سنة للاستفادة من هذه الخدمة.');ok=false;}
else if(ageNumVal>AGE_MAX){setFieldError('elgAge','يرجى إدخال عمر لا يتجاوز 80 سنة.');ok=false;}
}else if(step===2){
var status=val('elgJobStatus');
if(!status){setFieldError('elgJobStatus','يرجى اختيار الحالة الوظيفية');ok=false;}
if(JOB_WITH_TITLE.indexOf(status)>=0){
if(!val('elgJobTitle')){setFieldError('elgJobTitle','يرجى إدخال مسمى الوظيفة');ok=false;}
if(!val('elgJobSector')){setFieldError('elgJobSector','يرجى إدخال القطاع');ok=false;}
}
}else if(step===3){
if(elig.fin.sources.length===0){ok=false;alert('يرجى اختيار مصدر دخل واحد على الأقل');}
if(!val('elgIncome')){setFieldError('elgIncome','يرجى إدخال إجمالي الدخل الشهري');ok=false;}
if(!elig.fin.hasObligations){ok=false;alert('يرجى تحديد وجود التزامات شهرية');}
if(elig.fin.hasObligations==='yes'&&!val('elgObligValue')){setFieldError('elgObligValue','يرجى إدخال قيمة الالتزامات');ok=false;}
if(!elig.fin.hasExtraIncome){ok=false;alert('يرجى تحديد وجود دخل إضافي');}
if(elig.fin.hasExtraIncome==='yes'){
if(!val('elgExtraValue')){setFieldError('elgExtraValue','يرجى إدخال قيمة الدخل الإضافي');ok=false;}
if(!val('elgExtraSource')){setFieldError('elgExtraSource','يرجى إدخال مصدر الدخل الإضافي');ok=false;}
}
}else if(step===4){
if(!elig.gen.hasHold){ok=false;alert('يرجى تحديد وجود إيقاف خدمات ساري');}
if(elig.gen.hasHold==='yes'&&elig.gen.holdTypes.length===0){ok=false;alert('يرجى تحديد نوع إيقاف الخدمات');}
if(!elig.gen.hadHold){ok=false;alert('يرجى تحديد إذا سبق إيقاف خدماتكم');}
if(elig.gen.hadHold==='yes'&&elig.gen.hadTypes.length===0){ok=false;alert('يرجى تحديد نوع إيقاف الخدمات السابق');}
}else if(step===5){
if(!val('elgProdType')){setFieldError('elgProdType','يرجى اختيار نوع المنتج');ok=false;}
var pv=parseInt(val('elgProdValue'),10);
if(isNaN(pv)||pv<PROD_VALUE_MIN||pv>PROD_VALUE_MAX){setFieldError('elgProdValue','يرجى اختيار قيمة منتج ضمن الحدود المسموحة');ok=false;}
}
return ok;
}

var ELIG_DRAFT_KEY='madaltashil_elig_draft_v1';
function saveDraft(){
saveCurrentStage();
try{localStorage.setItem(ELIG_DRAFT_KEY,JSON.stringify(elig));}catch(e){}
}
function loadDraft(){
try{var raw=localStorage.getItem(ELIG_DRAFT_KEY);return raw?JSON.parse(raw):null;}catch(e){return null;}
}
function clearDraft(){
try{localStorage.removeItem(ELIG_DRAFT_KEY);}catch(e){}
}
function openEligibility(){
var m=document.getElementById('eligibilityModal');
/* حماية من الفتح المزدوج/الحالة غير الصحيحة: إن كان المعالج مفتوحًا بالفعل (سواء فُتح تلقائيًا عند
   تحميل الصفحة أو يدويًا) فلا نُعيد التصفير (resetElig) ولا نعرض مربع حوار الاستكمال من جديد —
   فقط نُعيد التمرير إليه مع الحفاظ الكامل على تقدم المستخدم الحالي. */
if(m&&m.classList.contains('show')){
switchView('eligibilityModal','wizard');
m.scrollIntoView({behavior:'smooth',block:'start'});
return;
}
var draft=loadDraft();
if(draft&&draft.step){
var resume=window.confirm('لديك طلب محفوظ سابقًا، هل تريد المتابعة من حيث توقفت؟\nاضغط "موافق" للمتابعة، أو "إلغاء" لبدء طلب جديد.');
if(resume){
elig.step=draft.step;elig.completed=draft.completed||Math.max(0,draft.step-1);
elig.basic=draft.basic||elig.basic;elig.job=draft.job||elig.job;elig.fin=draft.fin||elig.fin;elig.gen=draft.gen||elig.gen;elig.prod=draft.prod||elig.prod;
}else{
clearDraft();resetElig();elig.step=1;
}
}else{
resetElig();
elig.step=1;
}
switchView('eligibilityModal','wizard');
renderEligStage();
if(m){m.classList.add('show');m.scrollIntoView({behavior:'smooth',block:'start'});}
}
/* autoOpenEligibility(): تُستدعى مرة واحدة فقط عند تحميل الصفحة (DOMContentLoaded) لفتح المعالج تلقائيًا
   دون أي نقرة من المستخدم. لا تعرض مربع حوار "استكمال الطلب المحفوظ" بشكل حاجب فور تحميل الصفحة (تجربة
   مستخدم أفضل)؛ بدل ذلك تستأنف أي مسودة محفوظة بصمت، أو تبدأ من المرحلة الأولى إن لم توجد مسودة. */
var __eligAutoOpened=false;
function autoOpenEligibility(){
if(__eligAutoOpened)return;
__eligAutoOpened=true;
var draft=loadDraft();
if(draft&&draft.step){
elig.step=draft.step;elig.completed=draft.completed||Math.max(0,draft.step-1);
elig.basic=draft.basic||elig.basic;elig.job=draft.job||elig.job;elig.fin=draft.fin||elig.fin;elig.gen=draft.gen||elig.gen;elig.prod=draft.prod||elig.prod;
}else{
resetElig();
elig.step=1;
}
switchView('eligibilityModal','wizard');
renderEligStage();
var m=document.getElementById('eligibilityModal');
if(m)m.classList.add('show');
}
function openEligConfirm(){
saveCurrentStage();
var txt=document.getElementById('eligConfirmText');
if(txt){
txt.textContent='هل أنت متأكد من إرسال طلب التحقق من الأهلية؟';
}
switchView('eligibilityModal','confirm');
}
/* buildWhatsAppMessage(): بناء نص الرسالة فقط (بدون أي منطق إرسال/تحقق) — بصيغة واتساب الأصلية:
   عناوين *عريضة* بنجمة واحدة (صيغة واتساب للـ bold)، فواصل أقسام ━━━، بدون أي وسوم HTML أو رموز
   غير مدعومة، وبدون أي من الحقول المحذوفة سابقًا (العلامة التجارية/اسم المنتج/المواصفات/اللون/الصور). */
function buildWhatsAppMessage(){
var b=elig.basic,j=elig.job,f=elig.fin,g=elig.gen,p=elig.prod;
var SEP='━━━━━━━━━━━━━━';
var lines=[];
lines.push('*طلب تحقق من الأهلية*');
lines.push('مدى التسهيل للتجارة');
lines.push(SEP);
lines.push('*أولاً: المعلومات الأساسية*');
lines.push('الاسم: '+b.name);
lines.push('رقم الجوال: '+b.phone);
lines.push('المنطقة: '+b.city);
lines.push('العمر: '+(b.age?b.age+' سنة':'—'));
lines.push(SEP);
lines.push('*ثانيًا: المعلومات الوظيفية*');
lines.push('الحالة الوظيفية: '+jobStatusLabel(j.status));
if(JOB_WITH_TITLE.indexOf(j.status)>=0){
lines.push('مسمى الوظيفة: '+j.title);
lines.push('القطاع: '+j.sector);
}
lines.push(SEP);
lines.push('*ثالثًا: المعلومات المالية*');
lines.push('مصدر الدخل: '+incomeSourcesLabel(f.sources));
lines.push('إجمالي الدخل الشهري: '+f.income);
lines.push('توجد التزامات شهرية: '+yesNoLabel(f.hasObligations));
if(f.hasObligations==='yes')lines.push('قيمة الالتزامات الشهرية: '+f.obligationsValue);
lines.push('يوجد دخل إضافي: '+yesNoLabel(f.hasExtraIncome));
if(f.hasExtraIncome==='yes'){
lines.push('قيمة الدخل الإضافي: '+f.extraIncomeValue);
lines.push('مصدر الدخل الإضافي: '+f.extraIncomeSource);
}
if(JOB_WITH_TITLE.indexOf(j.status)>=0){
lines.push('الراتب المودع بالحساب البنكي: '+f.salaryDeposit);
}
lines.push(SEP);
lines.push('*رابعًا: المعلومات العامة*');
lines.push('يوجد إيقاف خدمات ساري: '+yesNoLabel(g.hasHold));
if(g.hasHold==='yes')lines.push('نوع إيقاف الخدمات: '+holdTypesLabel(g.holdTypes));
lines.push('سبق إيقاف الخدمات: '+yesNoLabel(g.hadHold));
if(g.hadHold==='yes')lines.push('نوع إيقاف الخدمات السابق: '+holdTypesLabel(g.hadTypes));
lines.push(SEP);
lines.push('*خامسًا: معلومات المنتج*');
lines.push('نوع المنتج: '+productTypeLabel(p.type));
lines.push('قيمة المنتج المطلوبة: '+(p.value?formatSAR(p.value):'—'));
lines.push(SEP);
lines.push('*ملخص الطلب*');
lines.push('نوع الطلب: تحقق من الأهلية');
lines.push('حالة الطلب: بانتظار المراجعة');
return lines.join('\n');
}
/* sendToWhatsApp(): يتحقق من اكتمال البيانات الأساسية، ثم يبني الرسالة عبر buildWhatsAppMessage()
   فقط (بدون تكرار منطق البناء هنا)، ثم يُشفّرها عبر encodeURIComponent() (داخل waLink) ويفتح واتساب. */
function sendToWhatsApp(){
if(!elig.basic.name||!elig.basic.phone||!elig.basic.age){
showToast('يرجى استكمال بياناتك الأساسية قبل الإرسال.');
switchView('eligibilityModal','wizard');
showStage(1);
return;
}
switchView('eligibilityModal','sending');
var waWin=window.open('','_blank');
var msg=buildWhatsAppMessage();
var link=waLink(msg);
clearDraft();
setTimeout(function(){
if(waWin){waWin.location.href=link;}else{window.open(link,'_blank');}
closeModal('eligibilityModal');
},5000);
}
function initEligibilityFlow(){
var startBtn=document.getElementById('startEligibilityBtn');
if(startBtn)startBtn.addEventListener('click',function(){openEligibility();});
var confirmBtn=document.getElementById('eligConfirmBtn');
if(confirmBtn)confirmBtn.addEventListener('click',function(){sendToWhatsApp();});
var cancelBtn=document.getElementById('eligCancelConfirmBtn');
if(cancelBtn)cancelBtn.addEventListener('click',function(){switchView('eligibilityModal','wizard');});
}
function injectEligibilitySection(){
if(document.getElementById('eligibility'))return;
var html=''
+'<section class="section elig-section reveal" id="eligibility">'
+'<div class="container">'
+'<div class="section-head">'
+'<span class="eyebrow">هل أنت مؤهل؟</span>'
+'<h2 class="section-title">تحقق من أهليتك</h2>'
+'<p class="section-subtitle">إذا ودك نتحقق من أهليتك، حنا جاهزين. عبّئ البيانات المطلوبة، وحنا نستقبل طلبك ونراجعه، وبعدها نبلغك بالنتيجة.</p>'
+'</div>'
+'<h3>كيف تتم العملية؟</h3>'
+'<div class="elig-flow">'
+'<div class="elig-flow-card reveal"><span class="elig-flow-num">01</span><h4>عبّئ بياناتك</h4><p>أدخل المعلومات المطلوبة بكل سهولة.</p></div>'
+'<div class="elig-flow-card reveal"><span class="elig-flow-num">02</span><h4>نراجع طلبك</h4><p>يتم استلام بياناتك ومراجعتها.</p></div>'
+'<div class="elig-flow-card reveal"><span class="elig-flow-num">03</span><h4>نتحقق من أهليتك</h4><p>نراجع المعلومات وفق المتطلبات والمعايير المعتمدة للخدمة.</p></div>'
+'<div class="elig-flow-card reveal"><span class="elig-flow-num">04</span><h4>نبلغك بالنتيجة</h4><p>بعد الانتهاء من المراجعة، يتم إبلاغك بالنتيجة.</p></div>'
+'</div>'
+'<h3>ماذا تحتاج؟</h3>'
+'<div class="elig-need-list">'
+'<span class="elig-need-chip"><span class="icon-3d gold" data-icon="verify"></span>المعلومات الأساسية</span>'
+'<span class="elig-need-chip"><span class="icon-3d gold" data-icon="business"></span>المعلومات الوظيفية</span>'
+'<span class="elig-need-chip"><span class="icon-3d gold" data-icon="analytics"></span>المعلومات المالية</span>'
+'<span class="elig-need-chip"><span class="icon-3d gold" data-icon="target"></span>المعلومات العامة</span>'
+'<span class="elig-need-chip"><span class="icon-3d gold" data-icon="smartphone"></span>معلومات المنتج</span>'
+'</div>'
+'<div class="elig-cta">'
+'<h3>جاهز تعرف أهليتك؟</h3>'
+'<p class="elig-cta-note">النموذج مفتوح أدناه مباشرة — عبّئ بياناتك دون الحاجة لأي نقرة إضافية.</p>'
+'</div>'
+'<p class="elig-disclaimer">قد تختلف نتيجة الأهلية بحسب البيانات والمتطلبات والمعايير المعتمدة للخدمة، وتعبئة النموذج لا تعني الموافقة النهائية.</p>'
+'<div class="elig-inline-wizard" id="eligibilityModal">'
+'<div class="modal-header"><h3><span class="icon-3d gold" data-icon="verify"></span>تحقق من أهليتك</h3><button class="modal-close" data-close="eligibilityModal" type="button">×</button></div>'
+'<div class="modal-body">'
+'<div class="modal-view active" data-view="wizard">'
+'<div class="stage-progress" id="eligProgress"></div>'
+'<div class="stage-label" id="eligStageLabel"></div>'
+'<p class="stage-desc" id="eligStageDesc"></p>'
+'<div id="eligStageContent" class="stage-anim-in"></div>'
+'<div class="modal-actions" id="eligNavActions"></div>'
+'</div>'
+'<div class="modal-view" data-view="confirm"><div class="confirm-view">'
+'<p id="eligConfirmText">هل أنت متأكد من إرسال طلب التحقق من الأهلية؟</p>'
+'<div class="modal-actions"><button class="btn btn-gold" id="eligConfirmBtn" type="button">تأكيد الإرسال</button><button class="btn btn-outline-navy" id="eligCancelConfirmBtn" type="button">إلغاء</button></div>'
+'</div></div>'
+'<div class="modal-view" data-view="sending"><div class="sending-view">'
+'<img src="assets/logo.png" alt="مدى التسهيل"><h4>جاري إرسال التحقق من أهليتك...</h4><p>شكرًا لثقتك بنا، نجهز بياناتك الآن لنوصلك مباشرة بفريقنا عبر واتساب</p><div class="spinner"></div>'
+'</div></div>'
+'</div>'
+'</div>'
+'</div>'
+'</section>';
var introSec=document.getElementById('intro-video');
if(introSec&&introSec.parentNode){introSec.insertAdjacentHTML('afterend',html);}
else{var main=document.querySelector('main');if(main)main.insertAdjacentHTML('afterbegin',html);}
}
function injectModals(){
if(!document.getElementById('customRequestModal')){
var crHtml=''
+'<div class="modal-overlay" id="customRequestModal">'
+'<div class="modal-box">'
+'<div class="modal-header"><h3>طلب خاص</h3><button class="modal-close" data-close="customRequestModal" type="button">×</button></div>'
+'<div class="modal-body">'
+'<div class="modal-view active" data-view="form">'
+'<div class="form-group"><label>الاسم</label><input type="text" id="crName"></div>'
+'<div class="form-group"><label>رقم الجوال</label><input type="tel" id="crPhone" placeholder="05xxxxxxxx"></div>'
+'<div class="form-group"><label>البريد الإلكتروني</label><input type="email" id="crEmail"></div>'
+'<div class="form-group"><label>نوع المنتج</label><select id="crType"><option value="">اختر نوع المنتج</option><option value="phones">جوالات</option><option value="electronics">منتجات إلكترونية</option></select></div>'
+'<div class="form-group"><label>العلامة التجارية المطلوبة</label><input type="text" id="crBrand"></div>'
+'<div class="form-group"><label>الموديل المطلوب</label><input type="text" id="crModel"></div>'
+'<div class="form-group"><label>مواصفات المنتج</label><textarea id="crSpecs" class="textarea-lg"></textarea></div>'
+'<div class="form-group"><label>الكمية</label><input type="number" id="crQty" value="1" min="1"></div>'
+'<div class="form-group"><label>الميزانية التقريبية (اختياري)</label><input type="number" id="crBudget"></div>'
+'<div class="form-group"><label>ملاحظات</label><textarea id="crNotes"></textarea></div>'
+'<div class="modal-actions"><button class="btn btn-gold" id="crSubmit" type="button">إرسال الطلب</button></div>'
+'</div>'
+'<div class="modal-view" data-view="confirm"><div class="confirm-view">'
+'<p>هل أنت متأكد من إرسال طلبك الخاص؟</p>'
+'<div class="modal-actions"><button class="btn btn-gold" id="crConfirm" type="button">تأكيد الإرسال</button><button class="btn btn-outline-navy" id="crCancelConfirm" type="button">إلغاء</button></div>'
+'</div></div>'
+'<div class="modal-view" data-view="sending"><div class="sending-view">'
+'<img src="assets/logo.png" alt="مدى التسهيل"><h4>جاري إرسال طلبك...</h4><p>نجهز طلبك للتواصل عبر واتساب</p><div class="spinner"></div>'
+'</div></div>'
+'</div></div></div>';
document.body.insertAdjacentHTML('beforeend',crHtml);
}
if(!document.getElementById('chooserModal')){
var chHtml=''
+'<div class="modal-overlay" id="chooserModal">'
+'<div class="modal-box">'
+'<div class="modal-header"><h3>كيف نقدر نساعدك؟</h3><button class="modal-close" data-close="chooserModal" type="button">×</button></div>'
+'<div class="modal-body">'
+'<div class="chooser-list">'
+'<button type="button" class="chooser-btn" id="chooserEligBtn"><span class="icon-3d gold" data-icon="verify"></span><span class="chooser-btn-text"><span class="chooser-btn-title">تحقق من أهليتك</span><span class="chooser-btn-desc">اعرف إذا كنت مؤهلاً للخدمة خطوة بخطوة.</span></span></button>'
+'<button type="button" class="chooser-btn" id="chooserInquiryBtn"><span class="icon-3d gold" data-icon="message"></span><span class="chooser-btn-text"><span class="chooser-btn-title">استفسار عام</span><span class="chooser-btn-desc">تواصل معنا مباشرة عبر واتساب.</span></span></button>'
+'</div></div></div></div>';
document.body.insertAdjacentHTML('beforeend',chHtml);
}
applyIcons();
}

function openCustomRequest(){
document.getElementById('crName').value='';
document.getElementById('crPhone').value='';
document.getElementById('crEmail').value='';
document.getElementById('crType').value='';
document.getElementById('crBrand').value='';
document.getElementById('crModel').value='';
document.getElementById('crSpecs').value='';
document.getElementById('crQty').value='1';
document.getElementById('crBudget').value='';
document.getElementById('crNotes').value='';
switchView('customRequestModal','form');
openModal('customRequestModal');
}
function buildCustomRequestMessage(){
var name=document.getElementById('crName').value.trim();
var phone=document.getElementById('crPhone').value.trim();
var email=document.getElementById('crEmail').value.trim()||'—';
var type=productTypeLabel(document.getElementById('crType').value);
var brand=document.getElementById('crBrand').value.trim()||'—';
var model=document.getElementById('crModel').value.trim()||'—';
var specs=document.getElementById('crSpecs').value.trim()||'—';
var qty=document.getElementById('crQty').value.trim()||'1';
var budget=document.getElementById('crBudget').value.trim()||'غير محدد';
var notes=document.getElementById('crNotes').value.trim()||'لا يوجد';
var lines=[];
lines.push('طلب خاص - مدى التسهيل للتجارة');
lines.push('');
lines.push('الاسم: '+name);
lines.push('رقم الجوال: '+phone);
lines.push('البريد الإلكتروني: '+email);
lines.push('نوع المنتج: '+type);
lines.push('العلامة التجارية المطلوبة: '+brand);
lines.push('الموديل المطلوب: '+model);
lines.push('مواصفات المنتج: '+specs);
lines.push('الكمية: '+qty);
lines.push('الميزانية التقريبية: '+budget);
lines.push('ملاحظات: '+notes);
return lines.join('\n');
}
function initCustomRequestFlow(){
var submitBtn=document.getElementById('crSubmit');
if(submitBtn)submitBtn.addEventListener('click',function(){
var name=document.getElementById('crName').value.trim();
var phone=document.getElementById('crPhone').value.trim();
if(!name||!/^05[0-9]{8}$/.test(phone)){alert('يرجى تعبئة الاسم ورقم جوال صحيح يبدأ بـ 05');return;}
switchView('customRequestModal','confirm');
});
var confirmBtn=document.getElementById('crConfirm');
if(confirmBtn)confirmBtn.addEventListener('click',function(){
switchView('customRequestModal','sending');
var waWin=window.open('','_blank');
var msg=buildCustomRequestMessage();
setTimeout(function(){
if(waWin){waWin.location.href=waLink(msg);}else{window.open(waLink(msg),'_blank');}
closeModal('customRequestModal');
},5000);
});
var cancelBtn=document.getElementById('crCancelConfirm');
if(cancelBtn)cancelBtn.addEventListener('click',function(){switchView('customRequestModal','form');});
}
function openChooser(){
openModal('chooserModal');
}
function initChooserFlow(){
var fab=document.getElementById('fabWhatsapp');
if(fab){fab.removeAttribute('data-open-inquiry');fab.addEventListener('click',function(){openChooser();});}
var eb=document.getElementById('chooserEligBtn');
if(eb)eb.addEventListener('click',function(){closeModal('chooserModal');openEligibility();});
var ib=document.getElementById('chooserInquiryBtn');
if(ib)ib.addEventListener('click',function(){
closeModal('chooserModal');
document.getElementById('iName').value='';
document.getElementById('iPhone').value='';
document.getElementById('iSubject').value='';
document.getElementById('iMessage').value='';
switchView('inquiryModal','form');
openModal('inquiryModal');
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
/* قسم التحقق من الأهلية وفتحه التلقائي خاصان بالصفحة الرئيسية فقط (تحديد وجودها عبر #home) */
var isHomePage=!!document.getElementById('home');
applyIcons();
initSplash();
initSidebar();
if(isHomePage)injectEligibilitySection();
injectModals();
initReveal();
initStats();
initModalClosers();
initEligibilityFlow();
initCustomRequestFlow();
initChooserFlow();
initInquiryFlow();
initFabWhatsapp();
/* فتح معالج التحقق من الأهلية تلقائيًا وفوريًا عند تحميل الصفحة، دون أي نقرة من المستخدم */
if(isHomePage)autoOpenEligibility();
});
})();
