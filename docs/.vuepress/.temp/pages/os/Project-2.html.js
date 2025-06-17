import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/os/Project-2.html.vue"
const data = JSON.parse("{\"path\":\"/os/Project-2.html\",\"title\":\"Project 02: Implementing a simple kernel-level thread\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749897692000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":4}],\"changelog\":[{\"hash\":\"7dfc10ae87be9ce0083cb39d24d30b15e77a0371\",\"time\":1749897692000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"directory name change\"},{\"hash\":\"dbe1c41954e98f08833d8f4322d01722c506a8ff\",\"time\":1748101962000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"add test code\"},{\"hash\":\"c3e7d23c80b12947b3223803e03c5ba44736e1f9\",\"time\":1748027703000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"bug fix\"},{\"hash\":\"9461eff95217532807b27aee343d788c87a82af8\",\"time\":1747871687000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"add operating-system\"}]},\"filePathRelative\":\"os/Project-2.md\"}")
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
