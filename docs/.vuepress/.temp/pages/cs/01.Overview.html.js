import comp from "/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cs/01.Overview.html.vue"
const data = JSON.parse("{\"path\":\"/cs/01.Overview.html\",\"title\":\"01. Overview\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{\"updatedTime\":1760816370000,\"contributors\":[{\"name\":\"kmbzn\",\"username\":\"kmbzn\",\"email\":\"kmbzn24@gmail.com\",\"commits\":5,\"url\":\"https://github.com/kmbzn\"}],\"changelog\":[{\"hash\":\"f7b11578dbf09e2faced3c8ea27865b8bd919c22\",\"time\":1760816370000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"문서의 일관성과 명확성을 개선하기 위해 보안 개념 및 용어 정의를 수정하고, 형식을 정리했습니다.\"},{\"hash\":\"992cff59c4c6901f5907d4f25fe3f307506c196d\",\"time\":1760730912000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Remove unnecessary blank line in Computer Security Terminology section\"},{\"hash\":\"753602915cd35a5b4d937d16206250330fc05a20\",\"time\":1760730102000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Refactor relational model documentation for clarity and consistency\"},{\"hash\":\"b4f3a5b216ddcf4da76cea9858c62ecff3206f55\",\"time\":1760728774000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Fix section headers for consistency in documentation\"},{\"hash\":\"96ffe5267f585ee7edbbe18e9ef393ef6cd3f3e8\",\"time\":1760727848000,\"email\":\"kmbzn24@gmail.com\",\"author\":\"kmbzn\",\"message\":\"Add comprehensive documentation on malware, including definitions, types, features, propagation methods, and countermeasures\"}]},\"filePathRelative\":\"cs/01.Overview.md\"}")
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
