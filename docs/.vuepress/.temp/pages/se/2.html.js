import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/se/2.html.vue"
const data = JSON.parse("{\"path\":\"/se/2.html\",\"title\":\"2. Introduction to Software Engineering\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764305376000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":3,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"f81f9042e7888855a506f92261c74aaa2d86aa2a\",\"time\":1764305376000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update npm\"},{\"hash\":\"f76b50c5f9e87c142040bb7f8afcc8e3c2466556\",\"time\":1760995467000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Refactor documentation structure: rename and reorganize requirements sections for clarity; remove obsolete file and update references.\"},{\"hash\":\"eb48cfa19b19a2f50f39f47a7af1731ebae06859\",\"time\":1760995141000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Add requirements elicitation and architecture documentation\"}]},\"filePathRelative\":\"se/2.md\"}")
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
