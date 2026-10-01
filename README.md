# Rooter Hero Plumbing

Responsive plumbing services website built with React, TypeScript, and Vite.

## Local Development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run build
```

The static site is generated in `dist/`. Deploy the contents of that directory to any static host. Vite uses relative asset paths so the site can be served from a domain root or a subdirectory. On Netlify, the included `netlify.toml` provides the build command and SPA fallback; other hosts can serve `dist/index.html` as the fallback document if they need one.

To preview the production build locally, run `npm run preview`.
