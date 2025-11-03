import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/db/LAB06.html.vue"
const data = JSON.parse("{\"path\":\"/db/LAB06.html\",\"title\":\"Web Application Development\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1761611594000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"2e41f6fb3a0ca9f51c2a53d763815f9fceffac27\",\"time\":1761611594000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Refactor code structure for improved readability and maintainability\"}]},\"filePathRelative\":\"db/LAB06.md\"}")
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
