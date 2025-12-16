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
          '/Mindscape', '/Musics',
        ]
      },
      {
        text: '🤖 Artificial Intelligence',
        collapsible: true,
        children: [
          '/ai/15', '/ai/16', '/ai/17', '/ai/20', '/ai/21', '/ai/24', '/ai/25', '/ai/26', '/ai/27', '/ai/28', 
        ]
      },
      {
        text: '🔐 Computer Security',
        collapsible: true,
        children: [
          '/cs/7', '/cs/8', '/cs/9', '/cs/10',
        ]
      },
      {
        text: '🗂️ Database System',
        collapsible: true,
        children: [
          '/db/1', '/db/2', '/db/3', '/db/6', '/db/7-1', '/db/7-2', '/db/13', '/db/14', '/db/15', '/db/16', '/db/17', '/db/18', '/db/19',
        ]
      },
      {
        text: '🧑‍💻 Software Engineering',
        collapsible: true,
        children: [
          '/se/9', '/se/10', '/se/11', '/se/12', '/se/13', '/se/14', '/se/15', '/se/16', '/se/17',
        ]
      },
    ],
    sidebarDepth: 0,
    lastUpdated: true
  }),
  bundler: viteBundler()
})