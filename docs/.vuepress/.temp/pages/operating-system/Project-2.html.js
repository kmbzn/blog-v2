import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/Project-2.html.vue"
const data = JSON.parse("{\"path\":\"/operating-system/Project-2.html\",\"title\":\"Project 02: Implementing a simple kernel-level thread\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1748027703000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":2}],\"changelog\":[{\"hash\":\"c3e7d23c80b12947b3223803e03c5ba44736e1f9\",\"time\":1748027703000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"bug fix\"},{\"hash\":\"9461eff95217532807b27aee343d788c87a82af8\",\"time\":1747871687000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"add operating-system\"}]},\"filePathRelative\":\"operating-system/Project-2.md\"}")
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
