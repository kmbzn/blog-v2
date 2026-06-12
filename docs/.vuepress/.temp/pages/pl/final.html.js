import comp from "/home/kmbzn/blog-v2/docs/.vuepress/.temp/pages/pl/final.html.vue"
const data = JSON.parse("{\"path\":\"/pl/final.html\",\"title\":\"Final Exam\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"createdTime\":1781199229000,\"updatedTime\":1781199229000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"93aaec14aeb23243f14a468bc423e7f688a54750\",\"time\":1781199229000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"docs: add Programming Languages section to sidebar and publish pl/ docs\",\"coAuthors\":[{\"name\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\"}]}]},\"filePathRelative\":\"pl/final.md\"}")
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
