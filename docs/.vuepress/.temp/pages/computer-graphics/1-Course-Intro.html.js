import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/1-Course-Intro.html.vue"
const data = JSON.parse("{\"path\":\"/computer-graphics/1-Course-Intro.html\",\"title\":\"1 - Course Intro\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1747013490000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1}],\"changelog\":[{\"hash\":\"2b556a92d04849cf6de46aa4f92180a2dc2325bb\",\"time\":1747013490000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"initial commit\"}]},\"filePathRelative\":\"computer-graphics/1-Course-Intro.md\"}")
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
