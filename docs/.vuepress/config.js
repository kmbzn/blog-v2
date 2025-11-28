import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme/index.js'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  lang: 'ko-KR',
  plugins: [
    markdownMathPlugin({
      type: 'katex',
    }),
  ],
  
  description: 'Summarizing key concepts from CS lectures.',
  base: '/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }],
    ['meta', { property: 'og:description', content: 'KeyBaseZone' }],
    ['meta', { property: 'og:image', content: 'https://kmbzn.com/images/og.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/android-chrome-512x512.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/orioncactus/victor-mono@latest/dist/index.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css' }]
  ],
  
  theme: theme({
    logo: '/images/kbz.png',
    colorMode: 'auto',
    sidebar: [
      {
        children: [
          '/Mindscape',
          '/Musics',
        ]
      },
      {
        text: '🧠 Algorithm',
        collapsible: true,
        children: [
          '/algorithm/PythonTimeout',
          '/algorithm/std-vector',
          '/algorithm/vim',
          '/algorithm/1018',
          '/algorithm/1966',
        ]
      },
    ],
    sidebarDepth: 0,
    lastUpdated: true
  }),
  bundler: viteBundler()
})