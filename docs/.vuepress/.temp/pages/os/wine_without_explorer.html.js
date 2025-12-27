import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/os/wine_without_explorer.html.vue"
const data = JSON.parse("{\"path\":\"/os/wine_without_explorer.html\",\"title\":\"Wine 환경에서 카카오톡 실행 시 explorer.exe 뜨지 않게 하는 법\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"os/wine_without_explorer.md\"}")
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
