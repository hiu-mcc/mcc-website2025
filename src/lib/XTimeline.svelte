<script lang="ts">
  import { onMount } from 'svelte';

  type Twitter = {
    _e?: Array<() => void>;
    ready?: (callback: () => void) => void;
    widgets?: { load: (element: HTMLElement) => void };
  };

  let container: HTMLDivElement;

  onMount(() => {
    let active = true;
    const twitterWindow = window as Window & { twttr?: Twitter };
    const renderTimeline = () => {
      if (active) twitterWindow.twttr?.widgets?.load(container);
    };

    // The script load event can precede widget initialization; use X's ready queue.
    const twitter = twitterWindow.twttr ??= {};
    if (twitter.widgets) {
      renderTimeline();
    } else {
      if (!twitter.ready) {
        twitter._e = [];
        twitter.ready = (callback) => twitter._e?.push(callback);
      }
      twitter.ready(renderTimeline);
    }

    if (!document.getElementById('twitter-wjs')) {
      const loader = document.createElement('script');
      loader.id = 'twitter-wjs';
      loader.src = 'https://platform.x.com/widgets.js';
      loader.async = true;
      loader.charset = 'utf-8';
      document.head.appendChild(loader);
    }

    return () => {
      active = false;
    };
  });
</script>

<div bind:this={container}>
  <a class="twitter-timeline" href="https://x.com/mcc_hiu?ref_src=twsrc%5Etfw">Posts by mcc_hiu</a>
</div>
