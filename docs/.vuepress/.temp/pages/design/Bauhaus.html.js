import comp from "/home/kmbzn/blog-v2/docs/.vuepress/.temp/pages/design/Bauhaus.html.vue"
const data = JSON.parse("{\"path\":\"/design/Bauhaus.html\",\"title\":\"바우하우스 — 현대 디자인의 원점\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"createdTime\":1781276034000,\"updatedTime\":1781276034000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"e21cf0ebbfdf5b897074fade7d0f32f4e5a2562c\",\"time\":1781276034000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"docs: add images to Google redesign article, add Gerald Genta and Bauhaus articles\"}]},\"filePathRelative\":\"design/Bauhaus.md\"}")
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
