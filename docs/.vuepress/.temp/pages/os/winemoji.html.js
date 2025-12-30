import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/os/winemoji.html.vue"
const data = JSON.parse("{\"path\":\"/os/winemoji.html\",\"title\":\"Wine 카카오톡 이모지 깨짐 문제 해결\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1767129362000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"9dec6af446516dac86f26db73b1d3156fcfcb0f0\",\"time\":1767129362000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Add documentation for Winemoji font and Nasal Irrigation technique\"}]},\"filePathRelative\":\"os/winemoji.md\"}")
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
