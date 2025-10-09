import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/db/Assignment2-1.html.vue"
const data = JSON.parse("{\"path\":\"/db/Assignment2-1.html\",\"title\":\"Assignment #2. Web Application Development\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1760021673000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"f98c134d2294a5b7b7b87b9b9db2db636e468f5d\",\"time\":1760021673000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update db assignment\"}]},\"filePathRelative\":\"db/Assignment2-1.md\"}")
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
