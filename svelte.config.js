import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const preview = process.env.npm_lifecycle_event === 'preview';
const dev = process.argv.includes('dev') || preview;

// origin には「ホスト部分だけ」書く（ベースパスは禁止）
const origin = dev
  ? 'http://localhost:4173'
  : 'https://hiu-mcc.github.io';

// base（サブパス）はここで設定する
const base = dev ? '' : '/mcc-website2025';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      strict: false
    }),

    paths: {
      base,
      assets: ''
    },

    prerender: {
      entries: ['*'],
      origin,                // ← ★ これが重要（サブパス無し）
      handleHttpError: 'ignore',
      handleUnseenRoutes: 'ignore'
    }
  }
};

export default config;
