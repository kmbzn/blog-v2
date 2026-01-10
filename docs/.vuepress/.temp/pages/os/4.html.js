import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/os/4.html.vue"
const data = JSON.parse("{\"path\":\"/os/4.html\",\"title\":\"4. Threads\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1768037745000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"a0aafb6736244476d03cd43d49a895d5b2b2840b\",\"time\":1768037745000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"add os/4.md\"}]},\"filePathRelative\":\"os/4.md\"}")
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
