// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export for GitHub Pages: only enabled for the deploy build, so local
// dev (`bun run dev`) and the default production build are unchanged.
const isGithubPages = process.env["DEPLOY_TARGET"] === "github-pages";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(isGithubPages
    ? {
        tanstackStart: {
          server: { entry: "server" },
          // Fully-rendered static HTML for every route (SSR prerender), so SEO
          // (title/meta/OG per page) is preserved in the deployed files.
          prerender: { enabled: true, crawlLinks: true, failOnError: false },
        },
        vite: {
          // Hosted at https://bobbychilami.github.io/bobby-s-dev-hub/
          base: "/bobby-s-dev-hub/",
        },
      }
    : {}),
});
