import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages(プロジェクトページ)で公開する場合は base を '/<REPO>/' に変更してください
// 例: リポジトリ名が ogane-industry の場合 -> base: '/ogane-industry/'
export default defineConfig({
  plugins: [react()],
  base: '/ogane-industry/',
})
