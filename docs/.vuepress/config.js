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
    logoDark: '/images/kbz-dark.png',
    colorMode: 'auto',
    sidebar: [
      {
        children: [
          '/Mindscape',
          '/Musics',
        ]
      },
      {
        text: '🤖 Artifical Intelligence',
        collapsible: true,
        children: [
          '/ai/1-Linear-Algebra',
          '/ai/2-Linear-Algebra-Search',
          '/ai/3-Search',
          '/ai/4-Knowledge-Logic-1',
          '/ai/5-Knowledge-Logic-2',
          '/ai/6-Probability',
          '/ai/7-Information-Theory',
          '/ai/8-Probabilistic-Reasoning-2',
          '/ai/9-Probabilistic-Reasoning-3',
          '/ai/10-Machine-Learning-1',
          '/ai/11-Machine-Learning-2',
          '/ai/12-Machine-Learning-3',
          '/ai/13-Linear-Models',
          '/ai/14-Other-Classic-ML-Models',
          '/ai/15-Deep-Learning-1',
          '/ai/16-Deep-Learning-2',
        ]
      },
      {
        text: '🔒 Computer Security',
        collapsible: true,
        children: [
          '/cs/01.Overview',
          '/cs/02.보안정책',
          '/cs/03.Cryptographic_Tools',
          '/cs/04.User_Authentification',
          '/cs/05.Access_Control',
          '/cs/06.DB_Security',
          '/cs/07.Malware',
          '/cs/08.Firmware_Analysis',
        ]
      },
      {
        text: '🗄️ Database System',
        collapsible: true,
        children: [
          '/db/1.Introduction',
          '/db/2.Relational',
          '/db/3.SQL-1',
          '/db/6.E-R_Model',
          '/db/7.Relational_Database_Design-1',
          '/db/7.Relational_Database_Design-2',
          '/db/13.Data_Storage_Structures',
          '/db/14.Indexing',
          '/db/15.Query_Processing',
        ]
      },
      {
        text: '📝 Software Engineering',
        collapsible: true,
        children: [
          '/se/2-IntroToSE',
          '/se/3-Process',
          '/se/4-ProcessModels',
          '/se/5-Agile',
          '/se/6-Requirements',
          '/se/7-Requirements-2',
          '/se/8-Architecture',
          '/se/9-UML',
          '/se/10-Object-Oriented-Analysis',
          '/se/11-Object-Oriented-Design',
          '/se/12-DesignPatterns',
          '/se/13-Intro-To-QA-Testing',
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
