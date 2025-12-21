<svelte:head>
  <!-- 高速化：事前接続 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
</svelte:head>
  <script>
    import { base } from '$app/paths';
  </script>

<!-- ヘッター部分・メインTOP画像-->

<section class="TOP">
    <img src="/MCC/top.png" alt="MCC外観" class="TOP__img" />
    <div class="TOP__overlay"></div>

  <!-- 装飾図形-->

  <div class="TOP_kazari" aria-hidden="true"></div>
  <div class="TOP_kazari1" aria-hidden="true"></div>
  <!--小物図形-->
  <div class="circle"></div>
  <div class="circle1"></div>
  <div class="circle2"></div>
  <div class="circle3"></div>
  <div class="circle4"></div>
  <div class="circle5"></div>
  <img src="/MCC/zukei01.png" alt="図形" class="zukei__img" />

  <div class="TOP__inner">
  <h1 class="TOP__title russo">Media<br/>Creative<br/>Center</h1>
    <p class="TOP__subtitle">Supporting Students' Creative Activities</p>
  </div>

  <div class="TOP_kazari2" aria-hidden="true"></div>
  <div class="circle6"></div>

<!-- 利用申請ボタン -->
<a href="/riyou" class="riyou-badge" aria-label="利用申請">
  <span class="riyou-badge__core">
    利用<br />申請
  </span>

  <!-- 文字リング -->
  <span class="riyou-badge__ring" aria-hidden="true">
    <svg
      class="riyou-badge__svg"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
    >
      <defs>
        <!-- 円パス -->
        <path
          id="riyou-circle"
          d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
        />
      </defs>

      <!-- 円の線-->
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke-width="1"
      />

      <!-- テキスト-->
      <text
        class="riyou-badge__text riyou-badge__spin"
        font-size="12"
        letter-spacing="3"
        fill="black"
      >
        <textPath xlink:href="#riyou-circle" startOffset="0%">
          Click here when using the facility. • Click here when using the facility.I •
        </textPath>
      </text>
    </svg>
  </span>

  <span class="riyou-badge__blob riyou-badge__blob--left" aria-hidden="true"></span>
  <span class="riyou-badge__blob riyou-badge__blob--right" aria-hidden="true"></span>
</a>
</section>

<!-- MCC説明文 -->

<script>
  import './index.page.css';

  const facilities = [
    { no: '01', title: '共創エリア',
      body: '創作活動を行うためのスペース。ハイスペックPCが常設され、映像制作やWeb制作などのクリエイティブな作業に活用できます。ディスカッションスペースを活用してグループワークを進めることもできます。',
      img: './MCC/Image01.png' },
    { no: '02', title: 'サウンドアートラボ',
      body: '楽曲制作や音源収録などの音楽活動を行うためのスペース。音楽関連の機材が設置されています。利用には、MCC利用申請後に別途登録作業が必要です',
      img: './MCC/Image02.png' },
    { no: '03', title: 'テックラボ',
      body: 'はんだづけなどの電子工作を行うためのスペース。はんだごてやブレッドボードなど、電子回路のプロトタイピングに必要な機材が設置されています。利用には、MCC利用申請後に別途登録作業が必要です。',
      img: './MCC/Image03.png' }
  ];

  const related = [
    { title: 'モーションキャプチャー', img: './MCC/Image04.png',
      body: 'VICON社製のマーカレスモーションキャプチャを設置。映画、ゲーム制作、研究に活用できます。北海道情報技術研究所 1階 大スタジオ内にあります。' },
    { title: 'Gスタジオ', img: '/MCC/PXL_20250613_050406028 1.png',
      body: 'e-SportsのためのPC機器類を設置。eDCタワー6F (図書館内) にあります。' },
    { title: 'HIUファブ', img: './MCC/PXL_20250613_050629025 1.png',
      body: '3Dプリンタやレーザー加工機などのデジタルファブリケーション機器を設置。Gスタジオ内にあります。' }
  ];
</script>

<!-- ここから一枚の白カード -->
<section class="container section-card py-14 md:py-20">

  <!-- 説明 -->
  <h2 class="section-title_01">メディアクリエイティブセンターとは</h2>
  <p class="lead text-center">
    メディアクリエイティブセンター（MCC）は、最新鋭の設備を導入したクリエイティブ施設です。
    北海道情報大学の学生は、個人制作やグループワークなどの創作活動全般に利用できます。
  </p>

  <!-- 施設案内 -->
  <div class="relative mt-12 md:mt-16">
    <div class="wmrk_01" aria-hidden="true">FACILITIES</div>
    <h2 class="section-title_02">施設案内</h2>

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
  </div>

  <!-- 関連施設 -->
  <div class="mt-20 md:mt-50">
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
  </div>

</section>


<!--  SNS -->
<section class="container relative py-12 md:py-16 sns-section">
  <div class="wmrk_02" aria-hidden="true">OFFICIAL SNS</div>
  <h2 class="section-title_03">公式SNS</h2>


  <div class="sns">
    <!-- とり-->
    <div class="sns__panel">
      <div class="sns__label">X</div>
        <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">eDCタワー6F(図書館内)のGスタジオにある <a href="https://twitter.com/hashtag/HIU%E3%83%95%E3%82%A1%E3%83%96?src=hash&amp;ref_src=twsrc%5Etfw">#HIUファブ</a> 、平日12:30〜14:15にオープンしています。レーザー加工機と3Dプリンタが使えます(機材不調の際はご容赦ください)。時間内は学生スタッフが常駐していますのでお気軽におたずねください！ <a href="https://twitter.com/hashtag/johodai?src=hash&amp;ref_src=twsrc%5Etfw">#johodai</a> <a href="https://t.co/I4KaPIayu1">pic.twitter.com/I4KaPIayu1</a></p>&mdash; MCC 北海道情報大学 (@mcc_hiu) <a href="https://twitter.com/mcc_hiu/status/1945329269166702827?ref_src=twsrc%5Etfw">July 16, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>

    <!-- ふぇいす -->
    <div class="sns__panel">
      <div class="sns__label">FACEBOOK</div>
      <div id="fb-root"></div>
        <div id="fb-root"></div>
        <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v24.0&appId=APP_ID"></script>
       <div class="fb-page" data-href="https://www.facebook.com/hiu.mcc/" data-tabs="timeline" data-width="500" data-height="700" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/hiu.mcc/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/hiu.mcc/">Mcc - Media Creative Center HIU</a></blockquote></div>
      </div>
</section>

<!-- ACCESS -->
<section class="container relative py-14 md:py-20">
  <div class="wmrk_03" aria-hidden="true">ACCESS</div>
  <h2 class="section-title_04">アクセス</h2>

  <!-- 地図 -->
  <div class="map">
    <!-- svelte-ignore a11y_missing_attribute -->
    <iframe
      class="map__frame"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.7266361950983!2d141.53301674983155!3d43.07852553459276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2d9dfb0126df%3A0x6295aff7704df0d4!2z5YyX5rW36YGT5oOF5aCx5oqA6KGT56CU56m25omA!5e0!3m2!1sja!2sjp!4v1758260037465!5m2!1sja!2sjp"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</section>


<!-- フッター-->
<footer class="site-footer">
  <div class="footer-top">
    <!-- 左側 -->
    <div class="footer-left">
      <div class="brand-row">
        <img src="/MCC/MCCrogo.png" alt="HIU Media Creative Center" class="brand-mcc" />
      </div>

      <address class="footer-addr">
        北海道情報大学 メディア・クリエイティブ・センター<br>
        〒069-0832 北海道江別市西野幌45 HiiTビル 4階<br>
        開館時間　10:00 ～ 17:00
      </address>
    </div>

    <!-- 右側 -->
    <div class="footer-right">
      <a href="https://www.do-johodai.ac.jp/"><img src="/MCC/HIUrogo.png" alt="北海道情報大学 ロゴ" class="hiu-logo"></a>
      <img src="/MCC/kage.png" alt="北海道情報大学 ロゴ" class="hiu-logo2">
    </div>
  </div>

  <!-- 下 -->
  <div class="footer-bottom">© Hokkaido Information University.</div>
</footer>
