import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/db/1.Introduction.html.vue"
const data = JSON.parse("{\"path\":\"/db/1.Introduction.html\",\"title\":\"1. Introduction\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1760634910000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"52b98e83152ee4a0cb490e9570a43501e96e6cfb\",\"time\":1760634910000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update 1\"},{\"hash\":\"f98c134d2294a5b7b7b87b9b9db2db636e468f5d\",\"time\":1760021673000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update db assignment\"}]},\"filePathRelative\":\"db/1.Introduction.md\"}")
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
