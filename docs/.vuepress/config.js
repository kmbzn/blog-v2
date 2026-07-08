import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme/index.js'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { seoPlugin } from '@vuepress/plugin-seo'

const sidebar = [
  {
    children: [
      '/mindscape', '/musics',
    ]
  },
  {
    text: 'Algorithm',
    collapsible: true,
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
      '/wellness/psyllium-husk',
      '/wellness/extra-virgin-olive-oil',
      '/wellness/nasal-irrigation',
      '/wellness/ht08',
      '/wellness/concerta',
      '/wellness/inderal',
      '/wellness/sertraline',
      '/wellness/melatonin',
      '/wellness/cervical-abrasion',
      '/wellness/barbell-squat',
    ]
  },
  {
    text: 'Humanities',
    collapsible: true,
    children: [
      '/humanities/nordvik',
      '/humanities/north-sentinel-island',
      '/humanities/rongorongo',
      '/humanities/baroque-music',
    ]
  },
  {
    text: 'Design',
    collapsible: true,
    children: [
      '/design/google-icon-redesign-2026',
      '/design/gerald-genta',
      '/design/bauhaus',
    ]
  },
  {
    text: 'Brands',
    collapsible: true,
    children: [
      '/brands/nomos-glashutte',
      '/brands/frederique-constant',
      '/brands/kz',
      '/brands/aestrua',
      '/brands/jinhao',
      '/brands/herman-miller',
      '/brands/desker',
      '/brands/musinsa-standard',
    ]
  },
  {
    text: 'Finance',
    collapsible: true,
    children: [
      '/finance/hyundai-card-zero',
      '/finance/shinhan-card-cheum',
      '/finance/sp500-etf',
      '/finance/parking-account-cma',
      '/finance/berkshire-hathaway',
      '/finance/bitcoin',
    ]
  },
  {
    text: 'Products',
    collapsible: true,
    children: [
      '/products/audio-interface',
      '/products/kurutoga',
      '/products/cx31993-dac',
      '/products/cleansing-milk',
      '/products/fidget-toy',
      '/products/thinkpad',
    ]
  },
]

const sidebarPaths = new Set(
  sidebar.flatMap(section =>
    (section.children || []).map(child =>
      typeof child === 'string' ? child : child.link
    )
  )
)

const pagePatterns = [
  'README.md',
  'index.md',
  '404.md',
  ...Array.from(sidebarPaths).flatMap(path => {
    const cleanPath = path.replace(/^\//, '')
    return [
      `${cleanPath}.md`,
      `${cleanPath}/README.md`,
      `${cleanPath}/index.md`
    ]
  }),
  '!.vuepress',
  '!node_modules'
]

export default defineUserConfig({
  pagePatterns,
  extendsPage: (page) => {
    const normalized = page.path.replace(/\.html$/, '').replace(/\/$/, '') || '/'
    if (normalized !== '/' && !sidebarPaths.has(normalized)) {
      page.frontmatter.sitemap = false
    }
    if (normalized !== '/' && page.path !== '/404.html') {
      page.path = normalized
      page.frontmatter.permalink = normalized
    }
  },
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

    md.core.ruler.push('wrap-print-sections', (state) => {
      const tokens = state.tokens
      const out = []
      let inSection = false

      for (const token of tokens) {
        const isSub = token.type === 'heading_open'
        if (isSub) {
          if (inSection) {
            const t = new state.Token('html_block', '', 0)
            t.content = '</section>\n'
            out.push(t)
          }
          const t = new state.Token('html_block', '', 0)
          t.content = '<section class="print-section">\n'
          out.push(t)
          inSection = true
        }
        out.push(token)
      }

      if (inSection) {
        const t = new state.Token('html_block', '', 0)
        t.content = '</section>\n'
        out.push(t)
      }

      state.tokens = out
    })
  },
  plugins: [
    markdownMathPlugin({
      type: 'katex',
    }),
    sitemapPlugin({
      hostname: 'https://kmbzn.com',
    }),
    seoPlugin({
      hostname: 'https://kmbzn.com',
      fallBackImage: 'https://kmbzn.com/images/og.png',
      twitterID: '',
    }),
  ],
  description: 'KeyBaseZone',
  base: '/',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }],
    ['meta', { property: 'og:image', content: 'https://kmbzn.com/images/og.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/android-chrome-512x512.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/applause-button/dist/applause-button.css' }],
    ['script', { src: 'https://unpkg.com/applause-button/dist/applause-button.js' }],
  ],
  theme: theme({
    logo: '/images/kbz.png',
    colorMode: 'auto',
    sidebar,
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