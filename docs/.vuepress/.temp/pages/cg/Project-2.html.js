import comp from "C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/Project-2.html.vue"
const data = JSON.parse("{\"path\":\"/cg/Project-2.html\",\"title\":\"Computer Graphics Project 2: Obj viewer\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749897692000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"},{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":2}],\"changelog\":[{\"hash\":\"7dfc10ae87be9ce0083cb39d24d30b15e77a0371\",\"time\":1749897692000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"directory name change\"},{\"hash\":\"a0d84b252ff92b59f5561ab8117a825149de91a0\",\"time\":1747409418000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"add lighting\"},{\"hash\":\"75dfb36c7cd6b6dfd404d8f45ff3ffa4b6d1e609\",\"time\":1747205636000,\"email\":\"kmbzn@example.com\",\"author\":\"kmbzn\",\"message\":\"project 2\"},{\"hash\":\"f56aa755fbfefc00d5702dc80d760e921505055c\",\"time\":1747188620000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Project-2.md 만들기\"}]},\"filePathRelative\":\"cg/Project-2.md\"}")
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
