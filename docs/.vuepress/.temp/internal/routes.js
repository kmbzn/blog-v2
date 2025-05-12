export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"kmbzn.com"} }],
  ["/%EA%B5%AD%EB%AF%BC%EC%B2%B4%EC%A1%B0.html", { loader: () => import(/* webpackChunkName: "국민체조.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/국민체조.html.js"), meta: {"title":"국민체조"} }],
  ["/computer-graphics/1-Course-Intro.html", { loader: () => import(/* webpackChunkName: "computer-graphics_1-Course-Intro.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/1-Course-Intro.html.js"), meta: {"title":"1 - Course Intro"} }],
  ["/computer-graphics/2-Rendering-Basics.html", { loader: () => import(/* webpackChunkName: "computer-graphics_2-Rendering-Basics.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/2-Rendering-Basics.html.js"), meta: {"title":"2 - Rendering Basics"} }],
  ["/computer-graphics/3-Transformations.html", { loader: () => import(/* webpackChunkName: "computer-graphics_3-Transformations.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/3-Transformations.html.js"), meta: {"title":"3 - Transformations"} }],
  ["/computer-graphics/4-Affine-Space-Frame_Matrix.html", { loader: () => import(/* webpackChunkName: "computer-graphics_4-Affine-Space-Frame_Matrix.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/4-Affine-Space-Frame_Matrix.html.js"), meta: {"title":"4 - Affine Space / Frame / Matrix"} }],
  ["/computer-graphics/5-Vertex-Processing-1.html", { loader: () => import(/* webpackChunkName: "computer-graphics_5-Vertex-Processing-1.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/5-Vertex-Processing-1.html.js"), meta: {"title":"5 - Vertex Processing 1"} }],
  ["/computer-graphics/6-Vertex-Processing-2.html", { loader: () => import(/* webpackChunkName: "computer-graphics_6-Vertex-Processing-2.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/6-Vertex-Processing-2.html.js"), meta: {"title":"6 - Vertex Processing 2"} }],
  ["/computer-graphics/7-Hierachical-Modeling-Mesh.html", { loader: () => import(/* webpackChunkName: "computer-graphics_7-Hierachical-Modeling-Mesh.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/7-Hierachical-Modeling-Mesh.html.js"), meta: {"title":"7 - Hierarchical Modeling, Mesh"} }],
  ["/computer-graphics/8-Lighting.html", { loader: () => import(/* webpackChunkName: "computer-graphics_8-Lighting.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/8-Lighting.html.js"), meta: {"title":"8 - Lighting"} }],
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
