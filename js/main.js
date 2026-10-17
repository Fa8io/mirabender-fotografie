// Blendet Bilder sanft ein, sobald sie geladen sind (statt abrupt zu "poppen"
// oder der Reihe nach von oben nach unten zu erscheinen).
function initFadeImages(root) {
  root = root || document;
  root.querySelectorAll('img.fade-img:not(.is-loaded)').forEach(function (img) {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('is-loaded');
    } else {
      img.addEventListener('load', function () { img.classList.add('is-loaded'); }, { once: true });
      img.addEventListener('error', function () { img.classList.add('is-loaded'); }, { once: true });
    }
  });
}

// Hamburger-Menü auf Mobile: öffnet/schließt die Navigation als Vollbild-Overlay.
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  function setOpen(isOpen) {
    nav.classList.toggle('is-open', isOpen);
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initFadeImages();
  initNavToggle();
});
