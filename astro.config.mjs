import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qilmegd.com',

  // Static output, no adapter — on purpose.
  //
  // `dist/` comes out as plain HTML/CSS/JS that any host can serve: Vercel
  // today, a rented box later. See CONTEXT.md, "Guiding constraint: portability".
  // If a running server is ever genuinely needed, adding @astrojs/vercel or
  // @astrojs/node is a one-line change here rather than a rewrite.
  output: 'static',
});
