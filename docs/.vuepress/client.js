import { defineClientConfig } from 'vuepress/client'
import DateMeta from './components/DateMeta.vue'
import ApplauseWrapper from './components/ApplauseWrapper.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DateMeta', DateMeta)
    app.component('ApplauseWrapper', ApplauseWrapper)
    app.config.compilerOptions.isCustomElement = tag => tag === 'applause-button'
  }
})
