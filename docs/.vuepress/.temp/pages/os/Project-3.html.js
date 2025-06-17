import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/os/Project-3.html.vue"
const data = JSON.parse("{\"path\":\"/os/Project-3.html\",\"title\":\"Project 03\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750002329000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1}],\"changelog\":[{\"hash\":\"ff01710850651a0e14184a35ae9bb1d9d9b0379d\",\"time\":1750002329000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"update os project 3\"}]},\"filePathRelative\":\"os/Project-3.md\"}")
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
