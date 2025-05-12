import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/2-Rendering-Basics.html.vue"
const data = JSON.parse("{\"path\":\"/computer-graphics/2-Rendering-Basics.html\",\"title\":\"2 - Rendering Basics\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"computer-graphics/2-Rendering-Basics.md\"}")
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
