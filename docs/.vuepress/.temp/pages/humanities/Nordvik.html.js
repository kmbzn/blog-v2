import comp from "C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/humanities/Nordvik.html.vue"
const data = JSON.parse("{\"path\":\"/humanities/Nordvik.html\",\"title\":\"Nordvik, Russia\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750362348000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"9bcb05f3cddf4aa570435ab3a8bfefcedabd6791\",\"time\":1750362348000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"humanities\"}]},\"filePathRelative\":\"humanities/Nordvik.md\"}")
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
