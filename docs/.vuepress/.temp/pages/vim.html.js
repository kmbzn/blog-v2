import comp from "C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/vim.html.vue"
const data = JSON.parse("{\"path\":\"/vim.html\",\"title\":\"Vim 사용 매뉴얼\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1748829727000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1}],\"changelog\":[{\"hash\":\"829311c972f55e5a1066e65f419180407b981828\",\"time\":1748829727000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"vim\"}]},\"filePathRelative\":\"vim.md\"}")
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
