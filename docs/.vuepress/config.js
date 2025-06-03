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
    ['meta', { property: 'og:image', content: 'https://kmbzn.com/images/og-home.png' }],
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
    logoDark: '/images/kbz-dark.png',
    colorMode: 'auto',
    sidebar: [
      {
        collapsible: false,
        children: [
          '/Mindscape',
          '/Musics',
          '/vim'
        ]
      },
      {
        text: '🧠 Algorithm',
        collapsible: false,
        children: [
          '/algorithm/Python-시간-초과-방지를-위한-팁',
          '/algorithm/1966',
          '/algorithm/1018'
        ]
      },
      {
        text: '💰 Finance',
        collapsible: false,
        children: [
          '/finance/나는-왜-비트코인에-투자했는가'
        ]
      },
      {
        text: '🖥️ Computer Graphics',
        collapsible: false,
        children: [
          '/computer-graphics/8-Lighting',
          '/computer-graphics/Project-3',
        ]
      },
      {
        text: '🗂️ Operating System',
        collapsible: false,
        children: [
          '/operating-system/Project-2',
          '/operating-system/Project-2-test-code',
          '/operating-system/wiki',
          '/operating-system/8.MemoryManagement-1',
          '/operating-system/9.MemoryManagement-2',
          '/operating-system/10.VirtualMemory-1',
          '/operating-system/11.VirtualMemory-2'
        ]
      },
    ],
    sidebarDepth: 0,
    lastUpdated: true
  }),
  bundler: viteBundler()
})