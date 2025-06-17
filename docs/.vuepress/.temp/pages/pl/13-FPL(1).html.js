import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/pl/13-FPL(1).html.vue"
const data = JSON.parse("{\"path\":\"/pl/13-FPL(1).html\",\"title\":\"13. FPL(1)\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749897692000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1}],\"changelog\":[{\"hash\":\"7dfc10ae87be9ce0083cb39d24d30b15e77a0371\",\"time\":1749897692000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"directory name change\"}]},\"filePathRelative\":\"pl/13-FPL(1).md\"}")
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
