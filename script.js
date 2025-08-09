// script.js - small helper for mobile nav & smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if(menuBtn){
    menuBtn.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'linear-gradient(90deg,var(--nav), #062b4f)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '8px';
      nav.style.position = 'absolute';
      nav.style.right = '24px';
      nav.style.top = '64px';
    });
  }

  // smooth scroll links (if anchored)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });
});
