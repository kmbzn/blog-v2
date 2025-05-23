import comp from "/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/Musics.html.vue"
const data = JSON.parse("{\"path\":\"/Musics.html\",\"title\":\"Musics 🎧\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"Musics.md\"}")
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
