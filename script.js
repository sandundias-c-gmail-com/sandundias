const WHATSAPP_NUMBER = "94759551551";
const msg = encodeURIComponent("Hi Sandun, I'd like to book a session.");
document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  a.target = "_blank";
  a.rel = "noopener";
});

const header = document.querySelector('header');
const onScroll = () => header.classList.toggle('solid', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const btn = document.querySelector('.menu-btn');
btn.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  btn.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.links a').forEach(a =>
  a.addEventListener('click', () => document.body.classList.remove('menu-open')));

const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.portrait img').forEach(img => {
  const hide = () => img.closest('.portrait').classList.add('empty') || img.remove();
  if (img.complete && !img.naturalWidth) hide();
  img.addEventListener('error', hide);
});
document.getElementById('yr').textContent = new Date().getFullYear();
