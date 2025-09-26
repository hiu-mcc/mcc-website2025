<!-- へったー-->
<section class="hero">
  <img src="/images/hero.jpg" alt="MCC外観" class="hero__img" />
  <div class="hero__overlay"></div>

  <!-- 飾り図形-->
  <div class="hero__shapes" aria-hidden="true"></div>

  <div class="hero__inner">
    <h1 class="hero__title">Media<br/>Creative<br/>Center</h1>
    <p class="hero__subtitle">Supporting Students' Creative Activities</p>

    <a href="/apply" class="apply-btn">利用申請</a>
  </div>
</section>

<!-- 説明の文書 -->
<section class="container py-14 md:py-20">
  <h2 class="sr-only">メディアクリエイティブセンター</h2>
  <p class="lead text-center">
  ここもじいいいいいいいいいいいいいいいいいいいいいいいい

  </p>
</section>

<!-- しせつ -->
<script>
  import './index.page.css';

  const facilities = [
    {
      no: '01',
      title: '共創エリア',
      body:
        '最新モニタ・シェアデスクシステム導入。グループ制作やゼミ演習のベースとして活用できます。',
      img: '/images/facility-1.jpg'
    },
    {
      no: '02',
      title: 'サウンドアートラボ',
      body:
        '音響/レコーディング/アプリケーション対応。ワークフロー最適化と試作検証のための実験環境を提供。',
      img: '/images/facility-2.jpg'
    },
    {
      no: '03',
      title: 'テックラボ',
      body:
        '電子工作・プロトタイピング用の設備を整備。センサー/マイコン/3Dプリンタ等を段階的に導入予定。',
      img: '/images/facility-3.jpg'
    }
  ];

  // 関連施設
  const related = [
    { title: 'モーションキャプチャー', img: '/images/related-1.jpg', body: '最新のほにゃほにゃ。' },
    { title: 'Gスタジオ', img: '/images/related-2.jpg', body: '最新システムをめにゃめにゃ' },
    { title: 'HIUファブ', img: '/images/related-3.jpg', body: '最新システムをもけもけ' }
  ];
</script>

<!-- さぶ -->
<section class="container relative py-10 md:py-16">
  <div class="wmrk" aria-hidden="true">FACILITIES</div>
  <h2 class="section-title">施設案内</h2>

  <div class="grid gap-8 md:gap-10">
    {#each facilities as f}
      <article class="card">
        <div class="card__media">
          <img src={f.img} alt={f.title} loading="lazy" width="960" height="540" />
          <span class="card__no" aria-hidden="true">{f.no}</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">{f.title}</h3>
          <p class="card__text">{f.body}</p>
        </div>
      </article>
    {/each}
  </div>
</section>

<!-- 関連施設 -->
<section class="container py-12 md:py-16">
  <h3 class="subhead">関連施設</h3>
  <div class="related">
    {#each related as r}
      <article class="related__item">
        <img src={r.img} alt={r.title} loading="lazy" width="420" height="280" class="related__img" />
        <h4 class="related__title">{r.title}</h4>
        <p class="related__text">{r.body}</p>
      </article>
    {/each}
  </div>
</section>

<!--  SNS -->
<section class="container relative py-14 md:py-20">
  <div class="wmrk" aria-hidden="true">OFFICIAL SNS</div>
  <h2 class="section-title">公式SNS</h2>

  <div class="sns">
    <!-- とり-->
    <div class="sns__panel">
      <div class="sns__label">X</div>
      <div class="aspect-[3/4] w-full bg-slate-200 rounded-xl shadow-inner grid place-items-center">
        <p class="opacity-60">（Xの埋め込みを入れる）</p>
      </div>
    </div>

    <!-- ふぇいす -->
    <div class="sns__panel">
      <div class="sns__label">FACEBOOK</div>
      <div class="aspect-[3/4] w-full bg-slate-200 rounded-xl shadow-inner grid place-items-center">
        <p class="opacity-60">（Facebookの埋め込みを入れる）</p>
      </div>
    </div>
  </div>
</section>

<!-- ACCESS -->
<section class="container relative py-14 md:py-20">
  <div class="wmrk" aria-hidden="true">ACCESS</div>
  <h2 class="section-title">アクセス</h2>

  <div class="map">
    <!-- 地図-->
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.7266361950983!2d141.53301674983155!3d43.07852553459276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2d9dfb0126df%3A0x6295aff7704df0d4!2z5YyX5rW36YGT5oOF5aCx5oqA6KGT56CU56m25omA!5e0!3m2!1sja!2sjp!4v1758260037465!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>

<!-- フッター-->
<footer class="footer">
  <div class="footer__logos">
    <img src="/images/logo-mcc.svg" alt="Media Creative Center" height="32" />
    <img src="/images/logo-hiu.svg" alt="北海道情報大学" height="36" />
  </div>
  <address class="footer__addr">
    北海道情報大学 メディア・クリエイティブ・センター<br />
    〒069-0832 北海道江別市西野幌45 HiiTビル　4階
  </address>
  <small class="footer__copy">© Hokkaido Information University.</small>
</footer>
