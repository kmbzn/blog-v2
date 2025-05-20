export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/KeyBaseZone.html", { loader: () => import(/* webpackChunkName: "KeyBaseZone.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/KeyBaseZone.html.js"), meta: {"title":"KeyBaseZone"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Mindscape"} }],
  ["/algorithm/1018.html", { loader: () => import(/* webpackChunkName: "algorithm_1018.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/algorithm/1018.html.js"), meta: {"title":"1018번: 체스판 다시 칠하기"} }],
  ["/algorithm/1966.html", { loader: () => import(/* webpackChunkName: "algorithm_1966.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/algorithm/1966.html.js"), meta: {"title":"1966번: 프린터 큐"} }],
  ["/algorithm/Python-%EC%8B%9C%EA%B0%84-%EC%B4%88%EA%B3%BC-%EB%B0%A9%EC%A7%80%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%8C%81.html", { loader: () => import(/* webpackChunkName: "algorithm_Python-시간-초과-방지를-위한-팁.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/algorithm/Python-시간-초과-방지를-위한-팁.html.js"), meta: {"title":"Python 시간 초과 방지를 위한 팁"} }],
  ["/finance/%EB%82%98%EB%8A%94-%EC%99%9C-%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%EC%97%90-%ED%88%AC%EC%9E%90%ED%96%88%EB%8A%94%EA%B0%80.html", { loader: () => import(/* webpackChunkName: "finance_나는-왜-비트코인에-투자했는가.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/finance/나는-왜-비트코인에-투자했는가.html.js"), meta: {"title":"나는 왜 비트코인에 투자했는가"} }],
  ["/computer-graphics/1-Course-Intro.html", { loader: () => import(/* webpackChunkName: "computer-graphics_1-Course-Intro.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/1-Course-Intro.html.js"), meta: {"title":"1 - Course Intro"} }],
  ["/computer-graphics/2-Rendering-Basics.html", { loader: () => import(/* webpackChunkName: "computer-graphics_2-Rendering-Basics.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/2-Rendering-Basics.html.js"), meta: {"title":"2 - Rendering Basics"} }],
  ["/computer-graphics/3-Transformations.html", { loader: () => import(/* webpackChunkName: "computer-graphics_3-Transformations.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/3-Transformations.html.js"), meta: {"title":"3 - Transformations"} }],
  ["/computer-graphics/4-Affine-Space-Frame_Matrix.html", { loader: () => import(/* webpackChunkName: "computer-graphics_4-Affine-Space-Frame_Matrix.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/4-Affine-Space-Frame_Matrix.html.js"), meta: {"title":"4 - Affine Space / Frame / Matrix"} }],
  ["/computer-graphics/5-Vertex-Processing-1.html", { loader: () => import(/* webpackChunkName: "computer-graphics_5-Vertex-Processing-1.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/5-Vertex-Processing-1.html.js"), meta: {"title":"5 - Vertex Processing 1"} }],
  ["/computer-graphics/6-Vertex-Processing-2.html", { loader: () => import(/* webpackChunkName: "computer-graphics_6-Vertex-Processing-2.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/6-Vertex-Processing-2.html.js"), meta: {"title":"6 - Vertex Processing 2"} }],
  ["/computer-graphics/7-Hierachical-Modeling-Mesh.html", { loader: () => import(/* webpackChunkName: "computer-graphics_7-Hierachical-Modeling-Mesh.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/7-Hierachical-Modeling-Mesh.html.js"), meta: {"title":"7 - Hierarchical Modeling, Mesh"} }],
  ["/computer-graphics/8-Lighting.html", { loader: () => import(/* webpackChunkName: "computer-graphics_8-Lighting.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/8-Lighting.html.js"), meta: {"title":"8 - Lighting"} }],
  ["/computer-graphics/Project-2.html", { loader: () => import(/* webpackChunkName: "computer-graphics_Project-2.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/Project-2.html.js"), meta: {"title":"Computer Graphics Project 2: Obj viewer"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
