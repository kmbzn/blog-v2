import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/se/14.html.vue"
const data = JSON.parse("{\"path\":\"/se/14.html\",\"title\":\"14. QA Process\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764309303000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"4062b1472d26318057ccbc92972d0c6e452aba97\",\"time\":1764309303000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Refactor code structure for improved readability and maintainability\"}]},\"filePathRelative\":\"se/14.md\"}")
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
