// =============================================================================
// MAIN.JS
// Navbar scroll state + smooth anchor scrolling
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar: add --scrolled modifier on scroll ---
  const navbar = document.querySelector('.c-navbar');

  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('c-navbar--scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // --- Active nav link on scroll (Intersection Observer) ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.c-navbar__link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'c-navbar__link--active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));

});
