import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/Musics.html.vue"
const data = JSON.parse("{\"path\":\"/Musics.html\",\"title\":\"Playlist 🎧\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1749494695000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":4}],\"changelog\":[{\"hash\":\"57df8d4bff9ea00f3f7826407414ffba241ddb64\",\"time\":1749494695000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"playlist update\"},{\"hash\":\"89b5da5b5be7545c2c438cee66c9836d8f073614\",\"time\":1748321650000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"update wiki (2)\"},{\"hash\":\"6e65cd5788647e99d415b967c0905c06df214d34\",\"time\":1748038506000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"update music\"},{\"hash\":\"36c74d53c5728d815386132c158a9a67852189ea\",\"time\":1748037538000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"update musics\"}]},\"filePathRelative\":\"Musics.md\"}")
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
