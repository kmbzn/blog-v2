import comp from "C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/1-Course-Intro.html.vue"
const data = JSON.parse("{\"path\":\"/cg/1-Course-Intro.html\",\"title\":\"1 - Course Intro\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749897692000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":2}],\"changelog\":[{\"hash\":\"7dfc10ae87be9ce0083cb39d24d30b15e77a0371\",\"time\":1749897692000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"directory name change\"},{\"hash\":\"2b556a92d04849cf6de46aa4f92180a2dc2325bb\",\"time\":1747013490000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"initial commit\"}]},\"filePathRelative\":\"cg/1-Course-Intro.md\"}")
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
