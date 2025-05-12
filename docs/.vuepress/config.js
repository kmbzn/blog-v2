import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme/index.js'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { gitPlugin } from '@vuepress/plugin-git'

export default defineUserConfig({
  lang: 'ko-KR',
  plugins: [
    markdownMathPlugin({
      type: 'katex',
    }),
  ],
  description: 'Summarizing key concepts from CS lectures.',
  email: 'kmbzn24@gmail.com',
  base: '/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }],
    ['meta', { property: 'og:description', content: 'by kmbzn' }],
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
    logo: '/images/logo.png',
    logoDark: '/images/logo-dark.png',
    colorMode: 'auto',
    sidebar: [
      {
        collapsible: false,
        children: [
          '/국민체조',
        ]
      },
      {
        text: '🖥️ Computer Graphics',
        collapsible: false,
        children: [
          '/computer-graphics/1-Course-Intro',
          '/computer-graphics/2-Rendering-Basics',
          '/computer-graphics/3-Transformations',
          '/computer-graphics/4-Affine-Space-Frame_Matrix',
          '/computer-graphics/5-Vertex-Processing-1',
          '/computer-graphics/6-Vertex-Processing-2',
          '/computer-graphics/7-Hierachical-Modeling-Mesh',
        ]
      }
    ],
    sidebarDepth: 0,
    lastUpdated: true
  }),
  bundler: viteBundler()
})