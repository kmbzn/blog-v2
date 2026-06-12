import { defineClientConfig } from 'vuepress/client'
import DateMeta from './components/DateMeta.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DateMeta', DateMeta)
  }
})
