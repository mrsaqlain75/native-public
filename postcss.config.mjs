// Intentionally empty: Tailwind v4 is applied via the @tailwindcss/vite plugin
// (see astro.config.mjs). This explicit empty config stops Vite/postcss from
// searching parent directories — a stray Tailwind v3 postcss.config.js exists
// in the user's home directory and would otherwise break the build.
export default { plugins: [] };
