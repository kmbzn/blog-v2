import comp from "C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"kmbzn.com\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1747116294000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1},{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn@example.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"d7393059eb66632edc94c23fbb4dcb3224e201cd\",\"time\":1747116294000,\"email\":\"kmbzn@example.com\",\"author\":\"kmbzn\",\"message\":\"mobile\"},{\"hash\":\"aeeb8353830b4f783e839a7a6c57b1ed755d67d8\",\"time\":1747080515000,\"email\":\"kmbzn@example.com\",\"author\":\"kmbzn\",\"message\":\"code-tabs\"},{\"hash\":\"2b556a92d04849cf6de46aa4f92180a2dc2325bb\",\"time\":1747013490000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"initial commit\"}]},\"filePathRelative\":\"README.md\"}")
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
