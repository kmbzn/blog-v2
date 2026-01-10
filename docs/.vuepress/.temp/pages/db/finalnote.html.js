import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/db/finalnote.html.vue"
const data = JSON.parse("{\"path\":\"/db/finalnote.html\",\"title\":\"Final Note\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765490557000,\"contributors\":[{\"name\":\"Byungjun Kim\",\"username\":\"\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"4803658c3d1a310eb04dd4cddd8242ad9591eff8\",\"time\":1765490557000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"Byungjun Kim\",\"message\":\"update db final\"}]},\"filePathRelative\":\"db/finalnote.md\"}")
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
