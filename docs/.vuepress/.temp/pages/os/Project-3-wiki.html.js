import comp from "C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/Project-3-wiki.html.vue"
const data = JSON.parse("{\"path\":\"/os/Project-3-wiki.html\",\"title\":\"Project 3: Virtual Memory & File system - wiki\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750258096000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":2}],\"changelog\":[{\"hash\":\"3e6d2e8c756586574c55394b24f7af279476eb43\",\"time\":1750258096000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"update wiki 2\"},{\"hash\":\"65d9dc8d40c1a57b09bb4d121e0e7b4c8d8023a2\",\"time\":1750257618000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"update wiki\"}]},\"filePathRelative\":\"os/Project-3-wiki.md\"}")
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
