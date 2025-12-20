# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

```

```
pre-build-antac
├─ eslint.config.js
├─ index.html
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ public
│  ├─ hybrid-solar.png
│  ├─ infra-banner-mobile.png
│  ├─ infra-banner.png
│  ├─ lights-banner-mobile.png
│  ├─ lights-banner.png
│  ├─ solar-banner-mobile.png
│  ├─ solar-banner.png
│  ├─ vite.svg
│  ├─ _headers
│  └─ _redirects
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ certicates
│  │  │  ├─ 14001.jpg
│  │  │  ├─ 45001.jpg
│  │  │  ├─ 9001.jpg
│  │  │  ├─ CE.jpg
│  │  │  ├─ IP-65.jpg
│  │  │  └─ rohs.jpg
│  │  ├─ client
│  │  │  ├─ logo1.png
│  │  │  ├─ logo2.png
│  │  │  ├─ logo3.png
│  │  │  ├─ logo4.png
│  │  │  ├─ logo5.png
│  │  │  ├─ logo6.png
│  │  │  ├─ logo7.png
│  │  │  ├─ logo8.png
│  │  │  └─ logo9.png
│  │  ├─ icons
│  │  │  ├─ antac.png
│  │  │  ├─ chevron.svg
│  │  │  ├─ email.svg
│  │  │  ├─ facebook.svg
│  │  │  ├─ instagram.svg
│  │  │  ├─ linkedin.svg
│  │  │  ├─ location.svg
│  │  │  ├─ phone.svg
│  │  │  └─ whatsapp.svg
│  │  ├─ office-pics
│  │  │  ├─ front-another-angle.jpg
│  │  │  ├─ front-left.jpg
│  │  │  ├─ front-narrow.jpg
│  │  │  ├─ front.jpg
│  │  │  ├─ office.jpg
│  │  │  └─ staff-desk.jpg
│  │  ├─ product-installation
│  │  │  └─ 1.jpg
│  │  └─ products
│  │     ├─ led-light
│  │     │  ├─ flood-light.png
│  │     │  ├─ high-bay.png
│  │     │  └─ led-light.png
│  │     ├─ poles
│  │     │  ├─ ac-high-mast.png
│  │     │  ├─ circular-poles.png
│  │     │  ├─ designer-pole.png
│  │     │  ├─ octagonal-poles.png
│  │     │  └─ solar-high-mast.png
│  │     ├─ services
│  │     │  ├─ pole installation.png
│  │     │  ├─ pole-installation.png
│  │     │  ├─ rain-water-harvesting.png
│  │     │  └─ solar-amc.png
│  │     ├─ solar-light
│  │     │  ├─ all-in-one.png
│  │     │  ├─ hybrid-solar-light.png
│  │     │  ├─ iot-rms-light.png
│  │     │  └─ new-semi-intigrated-light.png
│  │     └─ solar-power-plant
│  │        ├─ hybrid-solar.png
│  │        ├─ hybrid.png
│  │        ├─ off-grid-solar.png
│  │        ├─ off-grid.png
│  │        ├─ on-grid-solar.png
│  │        └─ on-grid.png
│  ├─ components
│  │  ├─ footer
│  │  │  └─ Footer.jsx
│  │  ├─ header
│  │  │  ├─ componets
│  │  │  │  ├─ ContactSummary.jsx
│  │  │  │  ├─ MainNavbar.jsx
│  │  │  │  ├─ MobileMenu.jsx
│  │  │  │  └─ OpenProduct.jsx
│  │  │  └─ Navbar.jsx
│  │  └─ shared
│  │     ├─ BackToTop.jsx
│  │     ├─ Certificate.jsx
│  │     ├─ ClientsSlider.jsx
│  │     ├─ ContactBanner.jsx
│  │     ├─ ContactForm.jsx
│  │     ├─ EmailBanner.jsx
│  │     ├─ Faq.jsx
│  │     ├─ Highlight.jsx
│  │     ├─ Modal.jsx
│  │     ├─ NotFound.jsx
│  │     ├─ ScrollToTop.jsx
│  │     └─ Whatsapp.jsx
│  ├─ data
│  │  ├─ banner.js
│  │  ├─ certificate.js
│  │  ├─ contact.js
│  │  ├─ highlight.js
│  │  ├─ products.js
│  │  └─ videos.json
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ 1.home
│     │  ├─ component
│     │  │  ├─ HeroBanner.jsx
│     │  │  └─ HomeProductSlider.jsx
│     │  └─ Home.jsx
│     ├─ 2.about
│     │  └─ About.jsx
│     ├─ 3.products
│     │  ├─ components
│     │  │  ├─ ProductCard.jsx
│     │  │  └─ ProductDetail.jsx
│     │  └─ Product.jsx
│     ├─ 4.gallery
│     │  └─ Gallery.jsx
│     └─ 5.contact
│        └─ Contact.jsx
└─ vite.config.js

```