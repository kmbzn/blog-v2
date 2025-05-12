import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export default (options) => ({
  name: 'custom-theme',
  extends: defaultTheme(options),
  alias: {
    '@theme/VPPage.vue': path.resolve(__dirname, './components/VPPage.vue')
  }
})
