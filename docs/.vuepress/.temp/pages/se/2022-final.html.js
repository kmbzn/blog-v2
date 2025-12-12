import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/se/2022-final.html.vue"
const data = JSON.parse("{\"path\":\"/se/2022-final.html\",\"title\":\"2022년 기말고사\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765301361000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"d2a1df10c006deef6a8423cd371a7833a83fe027\",\"time\":1765301361000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update to thinkpad\"}]},\"filePathRelative\":\"se/2022-final.md\"}")
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
