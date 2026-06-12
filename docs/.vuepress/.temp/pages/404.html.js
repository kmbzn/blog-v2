import comp from "/home/kmbzn/blog-v2/docs/.vuepress/.temp/pages/404.html.vue"
const data = JSON.parse("{\"path\":\"/404.html\",\"title\":\"\",\"lang\":\"ko-KR\",\"frontmatter\":{\"layout\":\"NotFound\",\"description\":\"404 Not Found\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\",\\\"description\\\":\\\"404 Not Found\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kmbzn.com/404.html\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"404 Not Found\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://kmbzn.com/images/og.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}]]},\"git\":{},\"filePathRelative\":null,\"autoDesc\":true}")
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
