import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cs/10.html.vue"
const data = JSON.parse("{\"path\":\"/cs/10.html\",\"title\":\"10. String Security\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764305376000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":3,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"f81f9042e7888855a506f92261c74aaa2d86aa2a\",\"time\":1764305376000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update npm\"},{\"hash\":\"eccceaaadcd967d6c9ccd932a5897280a0f9ecdf\",\"time\":1764081817000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Add homework documentation for Software Engineering course, including design pattern analysis and implementation details\"},{\"hash\":\"f377a812e180df33ea730c65a8d2dbad7fb4a33e\",\"time\":1763946767000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Refactor code structure for improved readability and maintainability\"}]},\"filePathRelative\":\"cs/10.md\"}")
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
