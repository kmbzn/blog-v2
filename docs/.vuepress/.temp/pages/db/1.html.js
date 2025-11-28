import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/db/1.html.vue"
const data = JSON.parse("{\"path\":\"/db/1.html\",\"title\":\"1. Introduction\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"db/1.md\"}")
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
