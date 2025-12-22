import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      strict: false
    }),

    paths: {
      base: dev ? "" : "/mcc-website2025",
      assets: ""
    },

    prerender: {
      entries: ["/"],   // ★ 最重要：index を明示的に指定する
      handleHttpError: "ignore",
      handleUnseenRoutes: "ignore"
    }
  }
};
