// =============================================================================
// THEME-TOGGLE.JS
// Wisselt het data-theme attribuut op <html> tussen "light" en "dark" en
// bewaart de keuze in localStorage onder key "theme".
//
// De eerste render-staat wordt al gezet door het inline bootstrap-script in
// <head> (vóór de stylesheet, om FOUC te voorkomen). Dit bestand voegt enkel
// de interactie toe en houdt aria-pressed gesynchroniseerd zodat assistive
// tech weet welke staat actief is.
//
// HTML contract:
//   <button class="theme-toggle" data-theme-toggle aria-pressed="false">
//     <svg class="theme-toggle__icon theme-toggle__icon--sun"  …>…</svg>
//     <svg class="theme-toggle__icon theme-toggle__icon--moon" …>…</svg>
//   </button>
//
// aria-pressed="true"  → dark mode is actief
// aria-pressed="false" → light mode is actief
// =============================================================================

(function () {
  'use strict';

  const STORAGE_KEY = 'theme';
  const ROOT = document.documentElement;
  const SELECTOR = '[data-theme-toggle]';

  /**
   * Lees de huidige theme van het <html> attribuut. Het bootstrap-script
   * heeft dit al gezet vóór de stylesheet — wij vertrouwen daarop i.p.v.
   * opnieuw localStorage te lezen. Single source of truth.
   */
  function getCurrentTheme() {
    return ROOT.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  /**
   * Past een theme toe op de DOM, persist en synct alle toggle-knoppen.
   * Centrale plek voor side-effects zodat de knop, een eventuele tweede
   * knop, of een toekomstige system-listener allemaal hetzelfde pad volgen.
   */
  function applyTheme(theme) {
    ROOT.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Storage geblokkeerd (private mode, Safari ITP) — niet fataal,
      // de UI werkt voor de duur van de sessie nog steeds.
    }
    syncButtons(theme);
  }

  /**
   * Houdt elke aanwezige toggle-knop in sync met de actieve theme.
   * Werkt ook als er ooit een tweede toggle bijkomt (bv. mobiel menu).
   */
  function syncButtons(theme) {
    const isDark = theme === 'dark';
    document.querySelectorAll(SELECTOR).forEach((btn) => {
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
  }

  function init() {
    // Eerste sync — bootstrap heeft data-theme al gezet.
    syncButtons(getCurrentTheme());

    // Eén event-listener via delegation, zodat dynamisch toegevoegde knoppen
    // ook werken zonder her-init.
    document.addEventListener('click', (event) => {
      const btn = event.target.closest(SELECTOR);
      if (!btn) return;
      const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });

    // Volg systeem-voorkeur ALLEEN als de gebruiker zelf nog geen keuze
    // heeft gemaakt. Zodra ze de toggle gebruikt hebben, schrijft applyTheme
    // naar localStorage en wint die keuze voortaan.
    if (window.matchMedia) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (event) => {
        let stored = null;
        try {
          stored = localStorage.getItem(STORAGE_KEY);
        } catch (e) {
          /* zie applyTheme — zelfde reden, niet fataal */
        }
        if (stored) return; // gebruiker heeft expliciet gekozen
        applyTheme(event.matches ? 'dark' : 'light');
      };
      // Moderne browsers: addEventListener; oudere Safari: addListener.
      if (mql.addEventListener) mql.addEventListener('change', handler);
      else if (mql.addListener) mql.addListener(handler);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
