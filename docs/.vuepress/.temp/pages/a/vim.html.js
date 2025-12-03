import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/a/vim.html.vue"
const data = JSON.parse("{\"path\":\"/a/vim.html\",\"title\":\"Vim 사용 매뉴얼\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764506597000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1},{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"4997c37eb1d4ad491f033600ca10151bd286506e\",\"time\":1764506597000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"탭 개편\"},{\"hash\":\"cc6e2622213e2cbcc12db01e4ff8c68326b94e11\",\"time\":1759715678000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update 1006\"},{\"hash\":\"829311c972f55e5a1066e65f419180407b981828\",\"time\":1748829727000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"vim\"}]},\"filePathRelative\":\"a/vim.md\"}")
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
