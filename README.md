あとでGPTに英語にしてもらう
# Astro i18n Starter

i18n Starter は多言語対応サイトを作成するための最小限構成のAstro themeです。

Astro v4.0からの[i18n](https://docs.astro.build/en/guides/internationalization/)機能に対応しています。

基本的にサブディレクトリ方式のURLのみサポートしています。
Ex:
- example.com/en/
- example.com/ja/
example.comは指定したデフォルトにリダイレクトされます


## 設定方法

### 1. [./astro.config.mjs](./astro.config.mjs) にlangコードを設定します。

> [!TIP]
> langコードについてはこちらをご確認ください。
> [lang - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

### 2. [./src/consts.ts](./src/consts.ts) にLangugeリストと、各言語での基本的なサイトタイトルなどを設定します


## ページコンテンツの作成
