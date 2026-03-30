# Nheron Portfolio (Vue + Tailwind)

A modern, animated personal site built with Vue 3, Vite, and Tailwind CSS. Includes hero, skills, work, certificates, social links, contact form, and lightweight in-page analytics. Sections are split into components under `src/components` with shared data in `src/data/content.js`.

## Quick start

```bash
npm install
npm run dev
npm run build
```

## Customize
- Update `public/cv.pdf` with your real resume.
- Swap the placeholder portrait at `public/me.svg` with your photo (or use `me.jpg` and adjust `profile.photo`).
- Edit content in `src/data/content.js` (`skills`, `projects`, `certificates`, `profile`, `contactInfo`).
- Set your actual Formspree endpoint in `formEndpoint` for the contact form, or switch to another backend.
- Replace social links with your accounts.
- Theme tokens live in `tailwind.config.js`.
