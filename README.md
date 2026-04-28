# Portfolio

Persoonlijk portfolio van Karl Smit — gebouwd met HTML, SCSS (ITCSS + BEM) en
vanilla JS.

## Structuur

```
.
├── index.html              # Single-page entry
├── main.js                 # Navbar/observer + i18n bootstrap
├── main.scss               # ITCSS entry point
├── main.css                # Output van Live Sass Compiler (gegenereerd)
├── js/
│   └── i18n.js             # Lichte vanilla i18n module
├── lang/
│   ├── nl.json             # Nederlandse vertalingen
│   └── en.json             # Engelse vertalingen
└── styles/                 # ITCSS lagen (1-settings t/m 7-utilities)
```

## Lokaal draaien

> **Belangrijk:** open `index.html` niet direct als bestand
> (`file:///...`) — dan kan de browser de taal-JSONs niet laden via `fetch`.

Gebruik een lokale server. Snelste optie in VS Code:

1. Installeer de extensie **Live Server** (Ritwick Dey).
2. Klik rechtsonder op **Go Live** of rechtermuisknop op `index.html` → **Open
   with Live Server**.

De site draait dan op `http://127.0.0.1:5500/`.

## SCSS compileren

Dit project gebruikt de **Live Sass Compiler** VS Code extensie. Opent
automatisch `main.scss` (zie `.vscode/settings.json`) en schrijft naar
`main.css`. Klik op **Watch Sass** om de watcher te starten.

## Vertalingen toevoegen of wijzigen

Edit `lang/nl.json` en `lang/en.json`. Beide bestanden moeten dezelfde
key-structuur hebben — anders krijg je een fallback naar de key-naam.

In de HTML markeer je een element via:

- `data-i18n="path.to.key"` → vervangt textContent
- `data-i18n-html="path.to.key"` → vervangt innerHTML (alleen voor keys die
  bewust HTML bevatten, bv. een `<br>`)
- `data-i18n-attr="aria-label:path.to.key"` → vult attributen
  (meerdere via komma: `aria-label:foo,title:bar`)

De placeholder `{year}` wordt automatisch vervangen door het huidige jaartal.

## Roadmap

- [x] i18n / NL-EN taalswitcher
- [ ] Dark mode toggle (CSS custom properties zijn al voorbereid in
      `styles/3-generic/themes.scss`)
- [ ] Mobile menu functionaliteit
- [ ] Scroll-reveal animaties
- [ ] Project-detailpagina's
