# 大鐘工業サイト（Vite + React + Tailwind）

## 1) ローカル起動
```bash
npm install
npm run dev
```

## 2) GitHub Pages 用の設定（重要）
`vite.config.js` の `base` を、リポジトリ名に合わせて変更してください。

- 例）リポジトリ名が `ogane-industry` の場合
```js
base: '/ogane-industry/'
```

## 3) GitHub Pages 公開
- GitHub のリポジトリに push
- GitHub: Settings → Pages → Source を **GitHub Actions** に設定
- main ブランチへ push すると Actions が走り、Pages が更新されます
