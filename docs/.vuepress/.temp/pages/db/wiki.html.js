import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/db/wiki.html.vue"
const data = JSON.parse("{\"path\":\"/db/wiki.html\",\"title\":\"Assignment2-2. 도서 관리 시스템 구현 - wiki\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1761263576000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":2,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"31dabd91062ae4097bbcb6f7bebeb609ae905ae8\",\"time\":1761263576000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"위키 문서 수정: 데이터베이스 시스템 응용 제목 형식 변경 및 데모 영상 링크 추가\"},{\"hash\":\"8600b20ab0a31871d0a8ab1f33077cca06e672d9\",\"time\":1761260557000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"위키 문서 추가: 도서 관리 시스템 구현 및 인증 기능에 대한 상세 설명 포함\"}]},\"filePathRelative\":\"db/wiki.md\"}")
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
