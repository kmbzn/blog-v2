import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/se/2024-final.html.vue"
const data = JSON.parse("{\"path\":\"/se/2024-final.html\",\"title\":\"2024년 기말고사\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"se/2024-final.md\"}")
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
