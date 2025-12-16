import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/cs/final.html.vue"
const data = JSON.parse("{\"path\":\"/cs/final.html\",\"title\":\"2024 Computer Security Final Exam\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765654172000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"fbc761248c4632f2dc6fe5fc2afee172914eca6c\",\"time\":1765654172000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update security\"}]},\"filePathRelative\":\"cs/final.md\"}")
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
