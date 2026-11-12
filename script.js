
// MENU NAVIGASI MOBILE

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-expanded',
    String(isOpen)
  );

  menuToggle.textContent = isOpen ? '×' : '☰';
});

// MENUTUP MENU SETELAH LINK DIKLIK

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// TAHUN OTOMATIS

document.getElementById('year').textContent =
  new Date().getFullYear();


// PENGATURAN WHATSAPP

// GANTI NOMOR INI DENGAN NOMOR WHATSAPP KAMU
// Gunakan kode negara 62 tanpa tanda + dan angka 0 di depan.

const WHATSAPP_NUMBER = '6289807654321';

const whatsappDirect =
  document.getElementById('whatsappDirect');

// LINK WHATSAPP LANGSUNG

whatsappDirect.href =
  `https://wa.me/${WHATSAPP_NUMBER}`;


// FORMULIR HUBUNGI KAMI

document.getElementById('contactForm')
  .addEventListener('submit', (event) => {

    event.preventDefault();

    const name =
      document.getElementById('name').value.trim();

    const message =
      document.getElementById('message').value.trim();

    const text =
      `Halo R.I.D.S CYBER, saya ${name}.\n\n${message}`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  });


// SECRET EASTER EGG

const logo = document.querySelector('.brand img');
const secretOverlay = document.getElementById('secretOverlay');
const secretClose = document.getElementById('secretClose');

let logoClicks = 0;
let clickTimer;

logo.addEventListener('click', (event) => {
  event.preventDefault();

  logoClicks++;

  clearTimeout(clickTimer);

  clickTimer = setTimeout(() => {
    logoClicks = 0;
  }, 1500);

  if (logoClicks >= 3) {
    secretOverlay.classList.add('active');
    logoClicks = 0;
    clearTimeout(clickTimer);
  }
});

// TUTUP EASTER EGG

secretClose.addEventListener('click', () => {
  secretOverlay.classList.remove('active');
});

// TUTUP KETIKA AREA LUAR DIKLIK

secretOverlay.addEventListener('click', (event) => {
  if (event.target === secretOverlay) {
    secretOverlay.classList.remove('active');
  }
});

// TUTUP DENGAN TOMBOL ESCAPE

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    secretOverlay.classList.remove('active');
  }
});
