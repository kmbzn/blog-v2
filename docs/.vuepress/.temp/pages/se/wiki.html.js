import comp from "/home/kmbzn/blog-v2/docs/.vuepress/.temp/pages/se/wiki.html.vue"
const data = JSON.parse("{\"path\":\"/se/wiki.html\",\"title\":\"\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Homework #1-1\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"https://kmbzn.com/images/og.png\\\"],\\\"dateModified\\\":\\\"2025-11-25T14:43:37.000Z\\\",\\\"author\\\":[]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kmbzn.com/se/wiki.html\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Homework #1-1\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://kmbzn.com/images/og.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2025-11-25T14:43:37.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2025-11-25T14:43:37.000Z\"}]]},\"git\":{\"createdTime\":1764081817000,\"updatedTime\":1764081817000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":1,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"eccceaaadcd967d6c9ccd932a5897280a0f9ecdf\",\"time\":1764081817000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Add homework documentation for Software Engineering course, including design pattern analysis and implementation details\"}]},\"filePathRelative\":\"se/wiki.md\",\"autoDesc\":true}")
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
