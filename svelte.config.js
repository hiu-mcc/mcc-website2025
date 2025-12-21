import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ strict: false }),
    paths: {
      base: dev ? '' : '/mcc-website2025'
    },
    prerender: {
      entries: ['/'],
      handleHttpError: 'ignore',
      handleUnseenRoutes: 'ignore'
    }
  }
};

