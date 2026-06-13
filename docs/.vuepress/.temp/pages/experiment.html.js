import comp from "/home/kmbzn/blog-v2/docs/.vuepress/.temp/pages/experiment.html.vue"
const data = JSON.parse("{\"path\":\"/experiment.html\",\"title\":\"\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"1. Text Missing 2. Image Missing\"},\"git\":{},\"filePathRelative\":\"experiment.md\",\"autoDesc\":true}")
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
