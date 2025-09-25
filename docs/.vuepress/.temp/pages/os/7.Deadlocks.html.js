import comp from "/home/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/7.Deadlocks.html.vue"
const data = JSON.parse("{\"path\":\"/os/7.Deadlocks.html\",\"title\":\"7. Deadlocks\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749897692000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"},{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1}],\"changelog\":[{\"hash\":\"7dfc10ae87be9ce0083cb39d24d30b15e77a0371\",\"time\":1749897692000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"directory name change\"},{\"hash\":\"dae7635ba2316839b2896e1a76d96639f0a02d6b\",\"time\":1749398480000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"commit os md files\"}]},\"filePathRelative\":\"os/7.Deadlocks.md\"}")
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
