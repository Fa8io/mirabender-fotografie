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

document.addEventListener('DOMContentLoaded', function () {
  initFadeImages();
});
