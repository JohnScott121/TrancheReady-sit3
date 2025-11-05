// Theme toggle, mobile nav, smooth scroll, FAQ accordion, back-to-top, year
// top of assets/main.js
const APP_HOST = 'https://trancheready.onrender.com/'; // or your onrender URL

(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('site_theme');
  if (saved) root.setAttribute('data-theme', saved);
  toggle && toggle.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('site_theme', next);
  });

  // Mobile menu
  const burger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  burger && burger.addEventListener('click', ()=>{
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); links && (links.style.display='none'); }
    });
  });

  // FAQ accordion
  document.querySelectorAll('.accordion .item .q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.item');
      item.classList.toggle('open');
    });
  });

  // Back to top
  const back = document.getElementById('backToTop');
  window.addEventListener('scroll', ()=> {
    const show = window.scrollY > 600;
    if (back) back.classList.toggle('show', show);
  });

  // Year
  const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
})();
