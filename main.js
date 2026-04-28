// =============================================================================
// MAIN.JS
// - i18n initialisatie + language switcher
// - Navbar scroll state
// - Active nav link tijdens scrollen
// =============================================================================

document.addEventListener('DOMContentLoaded', async () => {
  // ---------------------------------------------------------------------------
  // Language switcher
  // ---------------------------------------------------------------------------
  const switcherButtons = document.querySelectorAll('.lang-switcher__btn');

  // ---------------------------------------------------------------------------
  // i18n initialisatie (laadt JSON, vult [data-i18n*] elementen, zet <html lang>)
  // ---------------------------------------------------------------------------
  if (window.i18n) {
    await window.i18n.init();
    syncSwitcherActiveState(window.i18n.getLanguage());
  }

  switcherButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && window.i18n) {
        window.i18n.setLanguage(lang);
      }
    });
  });

  // Update aria-pressed wanneer de taal verandert
  document.addEventListener('languagechanged', (event) => {
    syncSwitcherActiveState(event.detail.language);
  });

  function syncSwitcherActiveState(activeLang) {
    switcherButtons.forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === activeLang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  // ---------------------------------------------------------------------------
  // Navbar: --scrolled modifier zodra je voorbij de top scrollt
  // ---------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // ---------------------------------------------------------------------------
  // Active nav link bij scrollen (Intersection Observer)
  // ---------------------------------------------------------------------------
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                'navbar__link--active',
                link.getAttribute('href') === `#${entry.target.id}`
              );
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
