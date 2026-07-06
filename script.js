document.addEventListener('DOMContentLoaded', () => {

  // Header shrink on scroll
  const header = document.querySelector('header.site');
  const tapeFill = document.querySelector('.tape-progress__fill');

  function onScroll(){
    if(header){
      if(window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    if(tapeFill){
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      tapeFill.style.width = scrolled + '%';
    }
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.mainnav');
  if(toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .stitch');

  if(!('IntersectionObserver' in window)){
    revealEls.forEach(el => el.classList.add('in-view'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.1});

    revealEls.forEach(el => io.observe(el));

    // Safety net: if anything is still hidden after load (e.g. a tall
    // section rendered outside the initial viewport calc), force it visible.
    window.addEventListener('load', () => {
      setTimeout(() => revealEls.forEach(el => el.classList.add('in-view')), 2500);
    });
  }

});
