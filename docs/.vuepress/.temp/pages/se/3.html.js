import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/se/3.html.vue"
const data = JSON.parse("{\"path\":\"/se/3.html\",\"title\":\"3. Process\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"se/3.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
