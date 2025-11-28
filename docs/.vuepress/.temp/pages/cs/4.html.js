import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cs/4.html.vue"
const data = JSON.parse("{\"path\":\"/cs/4.html\",\"title\":\"04. User Authentication\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"cs/4.md\"}")
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
