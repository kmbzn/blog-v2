import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme/index.js'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  lang: 'ko-KR',
  extendsMarkdown: (md) => {
    md.core.ruler.push('inject-date-meta', (state) => {
      for (let i = 0; i < state.tokens.length; i++) {
        if (state.tokens[i].type === 'heading_close' && state.tokens[i].markup === '#') {
          const t = new state.Token('html_block', '', 0)
          t.content = '<DateMeta />\n'
          state.tokens.splice(i + 1, 0, t)
          break
        }
      }
    })
  },
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
        text: 'Algorithm',
        collapsible: false,
        children: [
          '/a/1018', '/a/1966', '/a/pytimeout', '/a/stdvector', '/a/vim', 
        ]
      },
      {
        text: 'Ubuntu',
        collapsible: false,
        children: [
          '/os/terminus',
          '/os/ubuntu_thumbnails',
          '/os/wine_without_explorer',
          '/os/clipboard_image_kakaotalk_ubuntu',
          '/os/winemoji',
          '/os/no_animation',
        ]
      },
      {
        text: 'Wellness',
        collapsible: true,
        children: [
          '/wellness/PsylliumHusk',
          '/wellness/ExtraVirginOliveOil',
          '/wellness/NasalIrrigation',
          '/wellness/ht08',
        ]
      },
      {
        text: 'Humanities',
        collapsible: true,
        children: [
          '/humanities/Nordvik',
          '/humanities/NorthSentinelIsland',
          '/humanities/Rongorongo',
        ]
      },
      {
        text: 'Watch Industry',
        collapsible: true,
        children: [
          '/watch/NOMOS-Glashutte',
        ]
      },
      {
        text: 'Programming Languages',
        collapsible: true,
        children: [
          '/pl/8-0-Statement-Level-Control-Structures',
          '/pl/8-Subprogram',
          '/pl/9-Implementing-Subprogram',
          '/pl/10-1-Abstract-Data-Types-and-Encapsulation-Constructs',
          '/pl/10-2-Support-for-Object-Oriented-Programming',
          '/pl/11-Concurrency',
          '/pl/12-FPL-(1)',
          '/pl/13-FPL-(2)',
          '/pl/14-Exception-Handling-and-Event-Handling',
          '/pl/final',
        ]
      },
    ],
    sidebarDepth: 0,
    lastUpdated: true,
    themePlugins: {
      git: {
        createdTime: true,
      },
      prismjs: {
        themes: {
          light: 'ghcolors',
          dark: 'ghcolors',
        }
      }
    }
  }),
  bundler: viteBundler()
})