import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/Musics.html.vue"
const data = JSON.parse("{\"path\":\"/Musics.html\",\"title\":\"Musics 🎧\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1748037538000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1}],\"changelog\":[{\"hash\":\"36c74d53c5728d815386132c158a9a67852189ea\",\"time\":1748037538000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"update musics\"}]},\"filePathRelative\":\"Musics.md\"}")
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
