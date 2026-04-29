// =============================================================================
// MAIN.JS
// - i18n initialisatie + language switcher
// - Navbar scroll state
// - Active nav link tijdens scrollen
// =============================================================================

document.addEventListener('DOMContentLoaded', async () => {
  // ---------------------------------------------------------------------------
  // Language switcher — single toggle button, CSS handles flag visibility
  // ---------------------------------------------------------------------------
  const langToggle = document.querySelector('[data-lang-toggle]');

  // ---------------------------------------------------------------------------
  // i18n initialisatie (laadt JSON, vult [data-i18n*] elementen, zet <html lang>)
  // ---------------------------------------------------------------------------
  if (window.i18n) {
    await window.i18n.init();
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      if (window.i18n) {
        const next = window.i18n.getLanguage() === 'nl' ? 'en' : 'nl';
        window.i18n.setLanguage(next);
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Navbar: --scrolled modifier zodra je voorbij de top scrollt
  // ---------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar');
  const navbarToggle = document.querySelector('.navbar__toggle');

  // ---------------------------------------------------------------------------
  // Mobile nav toggle
  // ---------------------------------------------------------------------------
  if (navbarToggle && navbar) {
    navbarToggle.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('navbar--open');
      navbarToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Sluit menu bij klik op een nav-link
    document.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', () => {
        navbar.classList.remove('navbar--open');
        navbarToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Sluit menu bij klik buiten de navbar
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navbar.classList.remove('navbar--open');
        navbarToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

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
