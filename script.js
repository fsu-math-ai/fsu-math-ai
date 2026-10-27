'use strict';
const menu = document.querySelector('#menu');
const mobileNav = document.querySelector('#mobile-nav');
if(menu && mobileNav){
  menu.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){mobileNav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
}
