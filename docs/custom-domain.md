# カスタムドメインの切り替え

公開先: `https://mcc.do-johodai.ac.jp/`

## GitHub Pages

リポジトリの [Settings → Pages](https://github.com/hiu-mcc/mcc-website2025/settings/pages) で、Custom domain に `mcc.do-johodai.ac.jp` を入力して保存する。

このリポジトリは GitHub Actions から公開しているため、`CNAME` ファイルは不要。カスタムドメインは Pages の設定で登録する。

## DNS

`do-johodai.ac.jp` の管理者に、次の設定を依頼する。

| 名前 | 種別 | 値 |
| --- | --- | --- |
| `mcc` | `CNAME` | `hiu-mcc.github.io.` |

2026-11-05 の確認時点では、`mcc.do-johodai.ac.jp` に `202.34.242.44` を指す A レコードがある。この A レコードを上記の CNAME に置き換える。同名の A/AAAA レコードと CNAME は併用しない。CNAME の値には `https://` や `/mcc-website2025/` を含めない。

## デプロイと確認

1. GitHub Pages にカスタムドメインを保存する。
2. この変更を main に push し、GitHub Actions のデプロイ成功を確認する。
3. DNS レコードを切り替える。
4. Pages 設定の DNS チェックと証明書の発行を確認し、Enforce HTTPS を有効にする。
5. `https://mcc.do-johodai.ac.jp/` で画像・CSS・ファビコンが読み込めることを確認する。

DNS 反映と HTTPS 設定が利用可能になるまで、それぞれ最大24時間かかる場合がある。

本番ビルドのベースパスは空文字に設定済み。ページは新ドメイン直下で公開する。旧ドメインからのアクセスも、GitHub Pages のリダイレクト後の URL で確認する。

参考: [GitHub Pages のカスタムドメイン管理](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
