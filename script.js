function toggleMenu() {
    document.getElementById('sideDrawer').classList.toggle('open');
    document.querySelector('.menu-overlay').classList.toggle('active');
}

new Typed('#typed', {
  strings: [
    'education and impact.',
    'mentorship and growth.',
    'knowledge and purpose.',
    'community and change.',
  ],
  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: '|',
})
