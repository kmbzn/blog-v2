import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/db/Assignment3.html.vue"
const data = JSON.parse("{\"path\":\"/db/Assignment3.html\",\"title\":\"Implementing Augmented B+tree\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1763149723000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"6120a63360466143831636b40c0f1ff3226d9d3e\",\"time\":1763149723000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Refactor code structure for improved readability and maintainability\"}]},\"filePathRelative\":\"db/Assignment3.md\"}")
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
