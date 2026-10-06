const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
document.getElementById('year').textContent = new Date().getFullYear();
