export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/hjangkim.html", { loader: () => import(/* webpackChunkName: "hjangkim.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/hjangkim.html.js"), meta: {"title":"김형준"} }],
  ["/Mindscape.html", { loader: () => import(/* webpackChunkName: "Mindscape.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/Mindscape.html.js"), meta: {"title":"Mindscape 🔥"} }],
  ["/Musics.html", { loader: () => import(/* webpackChunkName: "Musics.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/Musics.html.js"), meta: {"title":"Playlist 🎧"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"KeyBaseZone"} }],
  ["/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/test.html.js"), meta: {"title":"Heading Level 1"} }],
  ["/vim.html", { loader: () => import(/* webpackChunkName: "vim.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/vim.html.js"), meta: {"title":"Vim 사용 매뉴얼"} }],
  ["/algorithm/1018.html", { loader: () => import(/* webpackChunkName: "algorithm_1018.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/algorithm/1018.html.js"), meta: {"title":"1018번: 체스판 다시 칠하기"} }],
  ["/algorithm/1966.html", { loader: () => import(/* webpackChunkName: "algorithm_1966.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/algorithm/1966.html.js"), meta: {"title":"1966번: 프린터 큐"} }],
  ["/algorithm/PythonTimeout.html", { loader: () => import(/* webpackChunkName: "algorithm_PythonTimeout.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/algorithm/PythonTimeout.html.js"), meta: {"title":"Python 시간 초과 방지를 위한 팁"} }],
  ["/cg/1-Course-Intro.html", { loader: () => import(/* webpackChunkName: "cg_1-Course-Intro.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/1-Course-Intro.html.js"), meta: {"title":"1 - Course Intro"} }],
  ["/cg/10-Character-Animation.html", { loader: () => import(/* webpackChunkName: "cg_10-Character-Animation.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/10-Character-Animation.html.js"), meta: {"title":"10 - Character Animation"} }],
  ["/cg/11-Curves.html", { loader: () => import(/* webpackChunkName: "cg_11-Curves.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/11-Curves.html.js"), meta: {"title":"11 - Curves"} }],
  ["/cg/12-More-Lighting-Texture.html", { loader: () => import(/* webpackChunkName: "cg_12-More-Lighting-Texture.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/12-More-Lighting-Texture.html.js"), meta: {"title":"12 - More Lighting, Texture"} }],
  ["/cg/2-Rendering-Basics.html", { loader: () => import(/* webpackChunkName: "cg_2-Rendering-Basics.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/2-Rendering-Basics.html.js"), meta: {"title":"2 - Rendering Basics"} }],
  ["/cg/3-Transformations.html", { loader: () => import(/* webpackChunkName: "cg_3-Transformations.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/3-Transformations.html.js"), meta: {"title":"3 - Transformations"} }],
  ["/cg/4-Affine-Space-Frame_Matrix.html", { loader: () => import(/* webpackChunkName: "cg_4-Affine-Space-Frame_Matrix.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/4-Affine-Space-Frame_Matrix.html.js"), meta: {"title":"4 - Affine Space / Frame / Matrix"} }],
  ["/cg/5-Vertex-Processing-1.html", { loader: () => import(/* webpackChunkName: "cg_5-Vertex-Processing-1.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/5-Vertex-Processing-1.html.js"), meta: {"title":"5 - Vertex Processing 1"} }],
  ["/cg/6-Vertex-Processing-2.html", { loader: () => import(/* webpackChunkName: "cg_6-Vertex-Processing-2.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/6-Vertex-Processing-2.html.js"), meta: {"title":"6 - Vertex Processing 2"} }],
  ["/cg/7-Hierachical-Modeling-Mesh.html", { loader: () => import(/* webpackChunkName: "cg_7-Hierachical-Modeling-Mesh.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/7-Hierachical-Modeling-Mesh.html.js"), meta: {"title":"7 - Hierarchical Modeling, Mesh"} }],
  ["/cg/8-Lighting.html", { loader: () => import(/* webpackChunkName: "cg_8-Lighting.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/8-Lighting.html.js"), meta: {"title":"8 - Lighting"} }],
  ["/cg/9-Orientation-Rotation.html", { loader: () => import(/* webpackChunkName: "cg_9-Orientation-Rotation.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/9-Orientation-Rotation.html.js"), meta: {"title":"9 - Orientation & Rotation"} }],
  ["/cg/Project-2.html", { loader: () => import(/* webpackChunkName: "cg_Project-2.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/Project-2.html.js"), meta: {"title":"Computer Graphics Project 2: Obj viewer"} }],
  ["/cg/Project-3.html", { loader: () => import(/* webpackChunkName: "cg_Project-3.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/cg/Project-3.html.js"), meta: {"title":"Computer Graphics Project 3: Bvh Viewer"} }],
  ["/finance/Bitcoin.html", { loader: () => import(/* webpackChunkName: "finance_Bitcoin.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/finance/Bitcoin.html.js"), meta: {"title":"비트코인(Bitcoin)"} }],
  ["/humanities/Nordvik.html", { loader: () => import(/* webpackChunkName: "humanities_Nordvik.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/humanities/Nordvik.html.js"), meta: {"title":"Nordvik, Russia"} }],
  ["/humanities/NorthSentinelIsland.html", { loader: () => import(/* webpackChunkName: "humanities_NorthSentinelIsland.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/humanities/NorthSentinelIsland.html.js"), meta: {"title":"North Sentinel Island"} }],
  ["/humanities/Rongorongo.html", { loader: () => import(/* webpackChunkName: "humanities_Rongorongo.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/humanities/Rongorongo.html.js"), meta: {"title":"롱고롱고(Rongorongo)"} }],
  ["/os/10.VirtualMemory-1.html", { loader: () => import(/* webpackChunkName: "os_10.VirtualMemory-1.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/10.VirtualMemory-1.html.js"), meta: {"title":"10. Virtual Memory(1)"} }],
  ["/os/11.VirtualMemory-2.html", { loader: () => import(/* webpackChunkName: "os_11.VirtualMemory-2.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/11.VirtualMemory-2.html.js"), meta: {"title":"11. Virtual Memory(2)"} }],
  ["/os/12.FileSystem.html", { loader: () => import(/* webpackChunkName: "os_12.FileSystem.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/12.FileSystem.html.js"), meta: {"title":"12. File System"} }],
  ["/os/13.MassStorageManagement.html", { loader: () => import(/* webpackChunkName: "os_13.MassStorageManagement.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/13.MassStorageManagement.html.js"), meta: {"title":"13. Mass Storage Management"} }],
  ["/os/14.IOSystems.html", { loader: () => import(/* webpackChunkName: "os_14.IOSystems.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/14.IOSystems.html.js"), meta: {"title":"14. I/O Systems"} }],
  ["/os/7.Deadlocks.html", { loader: () => import(/* webpackChunkName: "os_7.Deadlocks.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/7.Deadlocks.html.js"), meta: {"title":"7. Deadlocks"} }],
  ["/os/8.MemoryManagement-1.html", { loader: () => import(/* webpackChunkName: "os_8.MemoryManagement-1.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/8.MemoryManagement-1.html.js"), meta: {"title":"8. Memory Management(1)"} }],
  ["/os/9.MemoryManagement-2.html", { loader: () => import(/* webpackChunkName: "os_9.MemoryManagement-2.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/9.MemoryManagement-2.html.js"), meta: {"title":"9. Memory Management(2)"} }],
  ["/os/Project-2-test-code.html", { loader: () => import(/* webpackChunkName: "os_Project-2-test-code.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/Project-2-test-code.html.js"), meta: {"title":"Project 02: Test Code"} }],
  ["/os/Project-2.html", { loader: () => import(/* webpackChunkName: "os_Project-2.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/Project-2.html.js"), meta: {"title":"Project 02: Implementing a simple kernel-level thread"} }],
  ["/os/Project-3-ko.html", { loader: () => import(/* webpackChunkName: "os_Project-3-ko.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/Project-3-ko.html.js"), meta: {"title":"프로젝트 03"} }],
  ["/os/Project-3-wiki.html", { loader: () => import(/* webpackChunkName: "os_Project-3-wiki.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/Project-3-wiki.html.js"), meta: {"title":"Project 3: Virtual Memory & File system - wiki"} }],
  ["/os/Project-3.html", { loader: () => import(/* webpackChunkName: "os_Project-3.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/Project-3.html.js"), meta: {"title":"Project 03"} }],
  ["/os/wiki.html", { loader: () => import(/* webpackChunkName: "os_wiki.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/os/wiki.html.js"), meta: {"title":"Project 02: xv6 RISC-V Kernel-Level Threads Implementation - wiki"} }],
  ["/pl/13-FPL(1).html", { loader: () => import(/* webpackChunkName: "pl_13-FPL(1).html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/pl/13-FPL(1).html.js"), meta: {"title":"13. FPL(1)"} }],
  ["/wellness/ExtraVirginOliveOil.html", { loader: () => import(/* webpackChunkName: "wellness_ExtraVirginOliveOil.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/wellness/ExtraVirginOliveOil.html.js"), meta: {"title":"🫒 엑스트라 버진 올리브유 (Extra Virgin Olive Oil)"} }],
  ["/wellness/PsylliumHusk.html", { loader: () => import(/* webpackChunkName: "wellness_PsylliumHusk.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/wellness/PsylliumHusk.html.js"), meta: {"title":"차전자피(Psyllium Husk)"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/kmbzn/blog-v2/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
