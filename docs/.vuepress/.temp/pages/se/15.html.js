import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/se/15.html.vue"
const data = JSON.parse("{\"path\":\"/se/15.html\",\"title\":\"15. Inspections / Code Reviews\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764398785000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"c537749f4d3bc5506382a740638d907397ada1ac\",\"time\":1764398785000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"new build\"},{\"hash\":\"4062b1472d26318057ccbc92972d0c6e452aba97\",\"time\":1764309303000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Refactor code structure for improved readability and maintainability\"}]},\"filePathRelative\":\"se/15.md\"}")
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
