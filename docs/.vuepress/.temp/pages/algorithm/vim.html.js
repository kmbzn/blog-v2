import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/algorithm/vim.html.vue"
const data = JSON.parse("{\"path\":\"/algorithm/vim.html\",\"title\":\"Vim 사용 매뉴얼\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1759715678000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1},{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"cc6e2622213e2cbcc12db01e4ff8c68326b94e11\",\"time\":1759715678000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update 1006\"},{\"hash\":\"829311c972f55e5a1066e65f419180407b981828\",\"time\":1748829727000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"vim\"}]},\"filePathRelative\":\"algorithm/vim.md\"}")
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
