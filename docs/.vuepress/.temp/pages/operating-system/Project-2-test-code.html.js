import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/Project-2-test-code.html.vue"
const data = JSON.parse("{\"path\":\"/operating-system/Project-2-test-code.html\",\"title\":\"Project 02: Test Code\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1748183308000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":2}],\"changelog\":[{\"hash\":\"2b4e7518785d5abd51b56763aec5d7d0d5ec111e\",\"time\":1748183308000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"오타 수정\"},{\"hash\":\"dbe1c41954e98f08833d8f4322d01722c506a8ff\",\"time\":1748101962000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"add test code\"}]},\"filePathRelative\":\"operating-system/Project-2-test-code.md\"}")
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
