import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/cs/final.html.vue"
const data = JSON.parse("{\"path\":\"/cs/final.html\",\"title\":\"2024 Computer Security Final Exam\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"cs/final.md\"}")
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
