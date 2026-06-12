import comp from "/home/kmbzn/blog-v2/docs/.vuepress/.temp/pages/finance/SP500-ETF.html.vue"
const data = JSON.parse("{\"path\":\"/finance/SP500-ETF.html\",\"title\":\"S&P 500 ETF 투자 가이드\",\"lang\":\"ko-KR\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"finance/SP500-ETF.md\"}")
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
