// =============================================================================
// I18N.JS
// Lichte vanilla i18n met "mustache-style" placeholders in de HTML.
//
// In je HTML schrijf je gewoon:
//   <time class="experience__period">
//     {experience.items.chipsoftFulltime.period}
//   </time>
//
//   <button aria-label="{nav.menuAria}">…</button>
//
// Bij init scant deze module eenmalig de DOM, bewaart per text-node/attribuut
// de originele template (met de {key.path} placeholders), en substitueert die
// opnieuw bij elke taalwissel.
//
// Voor vertalingen met inline HTML (zoals <br> of <strong>) gebruik je nog
// steeds data-i18n-html, omdat text-node substitutie geen HTML mag injecteren.
//
// Public API (op window.i18n):
//   init()             → eerste keer initialiseren bij DOMContentLoaded
//   setLanguage(code)  → taal wisselen ('nl' | 'en')
//   getLanguage()      → huidige taal code
//   t(keyPath)         → vertaling ophalen voor een dot-path
//
// Custom event 'languagechanged' wordt op document gefired bij elke wissel.
// =============================================================================

(function () {
  'use strict';

  // -- Config -----------------------------------------------------------------
  const SUPPORTED = ['nl', 'en'];
  const FALLBACK = 'nl';
  const STORAGE_KEY = 'portfolio.lang';
  const FILE_PATH = (code) => `lang/${code}.json`;

  // Matcht {dot.path.naar.key}. Letters, cijfers, underscore en punt zijn toegestaan.
  // Let op: /g maakt de regex stateful, dus we maken hem per gebruik nieuw aan
  // of resetten lastIndex voor we hem voor `.test()` gebruiken.
  const PLACEHOLDER_RE = () => /\{([a-zA-Z0-9_.]+)\}/g;

  // -- State ------------------------------------------------------------------
  // Cache van geladen translation bundles, key = lang code
  const cache = {};
  let current = FALLBACK;

  // Snapshot van originele templates zodat we bij elke taalwissel opnieuw
  // kunnen substitueren in plaats van alleen de eerste keer.
  const textTemplates = []; // [{ node, template }]
  const attrTemplates = []; // [{ el, attr, template }]
  let templatesCaptured = false;

  // -- Helpers ----------------------------------------------------------------

  /**
   * Loopt door een dot-path ('hero.title') in een geneste object en retourneert
   * de waarde, of undefined als het pad niet bestaat.
   */
  function resolveKey(obj, path) {
    return path.split('.').reduce(
      (acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined),
      obj
    );
  }

  /**
   * Detecteer initiele taal: localStorage > browser language > fallback.
   */
  function detectLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;

    const browser = (navigator.language || navigator.userLanguage || '')
      .slice(0, 2)
      .toLowerCase();
    if (SUPPORTED.includes(browser)) return browser;

    return FALLBACK;
  }

  /**
   * Laad een JSON bundle (gecached na eerste keer).
   */
  async function loadBundle(code) {
    if (cache[code]) return cache[code];

    const response = await fetch(FILE_PATH(code));
    if (!response.ok) {
      throw new Error(`Failed to load ${FILE_PATH(code)} (${response.status})`);
    }
    const data = await response.json();
    cache[code] = data;
    return data;
  }

  /**
   * Vervang simpele placeholders zoals {year} in een tekstuele vertaling.
   * Dit draait NA de key-resolutie, dus een vertaling met "© 2024-{year} Karl"
   * wordt nog steeds correct geinterpoleerd.
   */
  function interpolate(value) {
    if (typeof value !== 'string') return value;
    return value.replace(/\{year\}/g, new Date().getFullYear());
  }

  /**
   * Vervangt alle {key.path} placeholders in een template-string door de
   * vertaalwaarde uit de bundle. Onbekende keys blijven onveranderd staan,
   * zodat je in de DOM ziet welke vertaling ontbreekt.
   */
  function substitute(template, bundle) {
    return template.replace(PLACEHOLDER_RE(), (match, key) => {
      const value = resolveKey(bundle, key);
      return value !== undefined ? interpolate(value) : match;
    });
  }

  /**
   * Wandel eenmalig door de DOM en bewaar elk text-node en elk attribuut
   * dat een {placeholder} bevat. We slaan het originele template op zodat
   * we bij volgende taalwissels niet werken op een al gesubstitueerd resultaat.
   */
  function captureTemplates(root) {
    // Text nodes
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          // Skip <script> en <style> inhoud
          const parentTag = node.parentNode && node.parentNode.nodeName;
          if (parentTag === 'SCRIPT' || parentTag === 'STYLE') {
            return NodeFilter.FILTER_REJECT;
          }
          return PLACEHOLDER_RE().test(node.nodeValue)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    let node;
    while ((node = walker.nextNode())) {
      textTemplates.push({ node, template: node.nodeValue });
    }

    // Attributen
    root.querySelectorAll('*').forEach((el) => {
      // attributes is een live NamedNodeMap; converteer naar array zodat
      // we veilig kunnen itereren ook als er straks attributen veranderen.
      Array.from(el.attributes).forEach((attr) => {
        if (PLACEHOLDER_RE().test(attr.value)) {
          attrTemplates.push({
            el,
            attr: attr.name,
            template: attr.value,
          });
        }
      });
    });

    templatesCaptured = true;
  }

  /**
   * Past vertalingen toe op alle gemarkeerde elementen in de DOM.
   *  - placeholders {key.path} in text nodes en attributen (de nieuwe stijl)
   *  - [data-i18n-html] → innerHTML (voor vertalingen met inline tags)
   *  - <html lang>, <title>, meta description
   */
  function applyTranslations(bundle) {
    // Placeholders in text nodes
    textTemplates.forEach(({ node, template }) => {
      node.nodeValue = substitute(template, bundle);
    });

    // Placeholders in attributen
    attrTemplates.forEach(({ el, attr, template }) => {
      el.setAttribute(attr, substitute(template, bundle));
    });

    // HTML vervangingen (gebruik spaarzaam — alleen voor whitelisted keys met <br>)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const value = resolveKey(bundle, key);
      if (value !== undefined) el.innerHTML = interpolate(value);
    });

    // <html lang>
    const htmlLang = resolveKey(bundle, 'meta.htmlLang');
    if (htmlLang) document.documentElement.setAttribute('lang', htmlLang);

    // <title>
    const pageTitle = resolveKey(bundle, 'meta.title');
    if (pageTitle) document.title = pageTitle;

    // <meta name="description">
    const description = resolveKey(bundle, 'meta.description');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (description && metaDesc) metaDesc.setAttribute('content', description);
  }

  // -- Public API -------------------------------------------------------------

  async function setLanguage(code) {
    if (!SUPPORTED.includes(code)) {
      console.warn(`[i18n] Unsupported language: ${code}`);
      return;
    }

    try {
      const bundle = await loadBundle(code);
      current = code;
      localStorage.setItem(STORAGE_KEY, code);

      // Eerste keer: leg de originele templates vast vóór we substitueren.
      if (!templatesCaptured) {
        captureTemplates(document.body);
      }

      applyTranslations(bundle);

      // Geef de rest van de app een kans om te reageren (bv. switcher actieve staat)
      document.dispatchEvent(
        new CustomEvent('languagechanged', { detail: { language: code } })
      );
    } catch (err) {
      console.error('[i18n] Failed to set language:', err);
    }
  }

  function getLanguage() {
    return current;
  }

  function t(keyPath) {
    const bundle = cache[current];
    if (!bundle) return keyPath;
    const value = resolveKey(bundle, keyPath);
    return value !== undefined ? interpolate(value) : keyPath;
  }

  async function init() {
    const lang = detectLanguage();
    await setLanguage(lang);
  }

  // -- Expose -----------------------------------------------------------------
  window.i18n = { init, setLanguage, getLanguage, t };
})();
