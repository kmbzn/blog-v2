import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/se/wiki-2.html.vue"
const data = JSON.parse("{\"path\":\"/se/wiki-2.html\",\"title\":\"\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764082059000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"3234ac40491dbff8d82fcbb9da5da9823ffbd763\",\"time\":1764082059000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"md title level lessen\"},{\"hash\":\"eccceaaadcd967d6c9ccd932a5897280a0f9ecdf\",\"time\":1764081817000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Add homework documentation for Software Engineering course, including design pattern analysis and implementation details\"}]},\"filePathRelative\":\"se/wiki-2.md\"}")
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
