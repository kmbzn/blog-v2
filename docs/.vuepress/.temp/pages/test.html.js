import comp from "/home/kmbzn/blog-v2/docs/.vuepress/.temp/pages/test.html.vue"
const data = JSON.parse("{\"path\":\"/test.html\",\"title\":\"Heading Level 1\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Heading Level 2 - 한국어 제목 Heading Level 1\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Heading Level 1\\\",\\\"image\\\":[\\\"https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=\\\"],\\\"dateModified\\\":\\\"2025-11-28T04:49:36.000Z\\\",\\\"author\\\":[]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kmbzn.com/test.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Heading Level 1\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Heading Level 2 - 한국어 제목 Heading Level 1\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2025-11-28T04:49:36.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2025-11-28T04:49:36.000Z\"}]]},\"git\":{\"createdTime\":1749562080000,\"updatedTime\":1764305376000,\"contributors\":[{\"name\":\"김병준\",\"username\":\"\",\"email\":\"kmbzn24@hanyang.ac.kr\",\"commits\":1},{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"f81f9042e7888855a506f92261c74aaa2d86aa2a\",\"time\":1764305376000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"update npm\"},{\"hash\":\"340964c5c8124af487322112de553ba8417fe1f7\",\"time\":1763219599000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"codeblock background 개편\"},{\"hash\":\"02cd8b407ae7884913357970784118eaed8dcc4f\",\"time\":1749562080000,\"email\":\"kmbzn24@hanyang.ac.kr\",\"author\":\"김병준\",\"message\":\"test page\"}]},\"filePathRelative\":\"test.md\",\"autoDesc\":true}")
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
