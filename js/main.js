(function(){
  'use strict';
  const BUSINESS_CONFIG={email:'heerconsultancy35@gmail.com',whatsapp:'918160083842',phone:'+918160083842',formEndpoint:'',googleBusinessUrl:'#'};
  const CONFIG=window.BUSINESS_CONFIG=BUSINESS_CONFIG;
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  function whatsapp(message){return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;}
  window.HeerBusiness={CONFIG,whatsapp};
  document.addEventListener('DOMContentLoaded',()=>{
    const lang=HeerI18n.currentLanguage(); HeerI18n.applyTranslations(lang);
    $$('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>HeerI18n.setLanguage(btn.dataset.lang)));
    const nav=$('.navbar'), progress=$('.scroll-progress'), top=$('.back-top');
    const onScroll=()=>{const y=scrollY;nav?.classList.toggle('scrolled',y>24);if(progress)progress.style.width=`${(y/(document.documentElement.scrollHeight-innerHeight))*100}%`;top?.classList.toggle('show',y>500)};
    addEventListener('scroll',onScroll,{passive:true});onScroll();top?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
    const toggle=$('.mobile-toggle'), panel=$('.mobile-panel'), close=$('.mobile-close');
    const setMenu=open=>{panel?.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);toggle?.setAttribute('aria-expanded',String(open));panel?.setAttribute('aria-hidden',String(!open));};
    toggle?.addEventListener('click',()=>setMenu(true));close?.addEventListener('click',()=>setMenu(false));$$('.mobile-panel a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
    $$('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item'),open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));}));
    $$('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{$$('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');$$('.service-card').forEach(card=>card.hidden=btn.dataset.filter!=='all'&&card.dataset.category!==btn.dataset.filter)}));
    $$('[data-wa-message]').forEach(a=>{a.href=whatsapp(a.dataset.waMessage);a.target='_blank';a.rel='noopener'});
    $$('[data-modal]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const modal=$(`#${a.dataset.modal}`);modal?.classList.add('open');modal?.querySelector('.modal-close')?.focus()}));
    $$('.privacy-modal').forEach(m=>{m.addEventListener('click',e=>{if(e.target===m||e.target.closest('.modal-close'))m.classList.remove('open')})});
    $$('[data-gbp]').forEach(a=>a.addEventListener('click',e=>{if(CONFIG.googleBusinessUrl==='#'){e.preventDefault();$('#contact')?.scrollIntoView({behavior:'smooth'})}}));
    const sections=$$('main section[id]'), navLinks=$$('.nav-link[href*="#"]');
    if(sections.length&&'IntersectionObserver'in window){const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.hash===`#${entry.target.id}`))}}),{rootMargin:'-35% 0px -55%'});sections.forEach(s=>obs.observe(s));}
    const year=$('#year');if(year)year.textContent=new Date().getFullYear();
    if(window.AOS&&!matchMedia('(prefers-reduced-motion: reduce)').matches)AOS.init({duration:650,once:true,offset:60});
  });
})();
