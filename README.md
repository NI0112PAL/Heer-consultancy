# Heer Consultancy website

A responsive two-page static website for Heer Consultancy, built with semantic HTML, locally compiled Tailwind CSS, custom CSS, vanilla JavaScript, Bootstrap Icons and AOS. The site supports English and Gujarati, accessible forms, contextual WhatsApp enquiries and local SEO metadata.

## Run locally

Open `index.html` directly, or serve the folder with any static server. For example:

```bash
npx serve .
```

No build step is required to run the included production files. An internet connection is needed for Google Fonts, Bootstrap Icons, AOS and the embedded map.

## Project structure

- `index.html` — main landing page
- `about.html` — business information, checklists and application forms
- `css/style.css` — brand tokens, layouts, components and responsive styles
- `css/tailwind.min.css` — compiled, production-ready Tailwind stylesheet
- `tailwind.config.js`, `css/tailwind-input.css` — Tailwind source configuration
- `js/translations.js` — English/Gujarati dictionary and language persistence
- `js/main.js` — navigation, FAQ, filters, modals, animations and business configuration
- `js/forms.js` — dynamic service forms, validation and WhatsApp submission
- `js/download-forms.js` — bilingual catalogue for the five PAN and TAN PDF forms
- `assets/forms/` — genuine downloadable PDF files and setup instructions
- `assets/logo/heer-consultancy-logo.png` — single official logo source, including the favicon
- `assets/video/heer-logo-preloader.mp4` — full-screen session video preloader
- `robots.txt`, `sitemap.xml`, `manifest.json` — search/PWA support

## Logo

The supplied Heer Consultancy artwork is installed byte-for-byte as provided and used consistently in the header, mobile menu, footer, hero visual, social metadata and favicon. The supplied MP4 is the full-screen preloader and plays once per browser session using the `heerPreloaderPlayed` sessionStorage key. Preserve both assets without alteration.

## Business settings

Edit `BUSINESS_CONFIG` near the top of `js/main.js` to update:

- WhatsApp number (country code, digits only)
- telephone
- email
- optional form endpoint
- Google Business Profile URL

Business address and visible contact details appear in both HTML pages and in homepage JSON-LD. Search for the old value across the project when changing them. Brand colours are CSS custom properties at the top of `css/style.css`.

The Google map is an address-query embed in `index.html`. Replace its `src` with the verified Maps embed URL when available. Set `googleBusinessUrl` to the real profile or directions link.

## Languages

Elements use `data-i18n` keys. `js/translations.js` contains the full English and Gujarati dictionaries. The selected language is stored only as `heer-language` in `localStorage`; no enquiry or identity data is stored.

## Forms and backend integration

With `formEndpoint` empty, forms validate locally, build a formatted enquiry and open WhatsApp. No submission is falsely recorded and no files are collected. To connect PHP, Formspree, EmailJS or a custom API, add a secure submission branch in `js/forms.js`. Never expose private API keys in frontend code. Configure a secure backend before enabling document uploads.

## Downloadable PDF forms

Store the five genuine PAN and TAN PDFs in `assets/forms/` using the filenames listed in `assets/forms/README.md`. The cards are rendered from `js/download-forms.js`.

## Deployment

- **GitHub Pages:** push the folder to a repository and enable Pages from the main branch.
- **Vercel:** import the repository as a static project; no build command is required.
- **Netlify:** drag the folder into Netlify Drop or connect the repository; publish the project root.

## Before production

- Replace every `https://www.example.com/` URL in canonical tags, JSON-LD, `robots.txt` and `sitemap.xml` with the live HTTPS domain.
- Verify the final logo and favicon rendering on the deployed domain.
- Add the verified Google Maps and Google Business Profile links.
- Verify contact details and the Gujarati copy with the business owner.
- Validate Schema.org JSON-LD and all form/WhatsApp flows.
- Submit `sitemap.xml` through Google Search Console.
- Create or optimise the Google Business Profile.
- Run Lighthouse and cross-browser/mobile checks from the deployed URL.
