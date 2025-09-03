<script>
  import './index.page.css';  // ← 追加（このCSSはこのページでだけ使う想定）
  const pages = [
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/blog/hello-svelte', label: 'Blog(サンプル)' }
  ];
</script>

<main id="index-root" class="min-h-screen flex flex-col items-center justify-center gap-8">
  <h1 class="heading">こんにちは！Svelte + Tailwind 🚀</h1>

  <nav class="nav">
    {#each pages as p}
      <a class="nav-link" href={p.href}>{p.label}</a>
    {/each}
  </nav>
</main>
