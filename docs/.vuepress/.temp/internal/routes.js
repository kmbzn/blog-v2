export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Mindscape.html", { loader: () => import(/* webpackChunkName: "Mindscape.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/Mindscape.html.js"), meta: {"title":"Mindscape 🔥"} }],
  ["/Musics.html", { loader: () => import(/* webpackChunkName: "Musics.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/Musics.html.js"), meta: {"title":"Playlist 🎧"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"KeyBaseZone"} }],
  ["/hjangkim.html", { loader: () => import(/* webpackChunkName: "hjangkim.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/hjangkim.html.js"), meta: {"title":"김형준"} }],
  ["/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/test.html.js"), meta: {"title":"Heading Level 1"} }],
  ["/vim.html", { loader: () => import(/* webpackChunkName: "vim.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/vim.html.js"), meta: {"title":"Vim 사용 매뉴얼"} }],
  ["/operating-system/10.VirtualMemory-1.html", { loader: () => import(/* webpackChunkName: "operating-system_10.VirtualMemory-1.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/10.VirtualMemory-1.html.js"), meta: {"title":"10. Virtual Memory(1)"} }],
  ["/operating-system/11.VirtualMemory-2.html", { loader: () => import(/* webpackChunkName: "operating-system_11.VirtualMemory-2.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/11.VirtualMemory-2.html.js"), meta: {"title":"11. Virtual Memory(2)"} }],
  ["/operating-system/12.FileSystem.html", { loader: () => import(/* webpackChunkName: "operating-system_12.FileSystem.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/12.FileSystem.html.js"), meta: {"title":"12. File System"} }],
  ["/operating-system/13.MassStorageManagement.html", { loader: () => import(/* webpackChunkName: "operating-system_13.MassStorageManagement.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/13.MassStorageManagement.html.js"), meta: {"title":"13. Mass Storage Management"} }],
  ["/operating-system/14.IOSystems.html", { loader: () => import(/* webpackChunkName: "operating-system_14.IOSystems.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/14.IOSystems.html.js"), meta: {"title":"14. I/O Systems"} }],
  ["/operating-system/7.Deadlocks.html", { loader: () => import(/* webpackChunkName: "operating-system_7.Deadlocks.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/7.Deadlocks.html.js"), meta: {"title":"7. Deadlocks"} }],
  ["/operating-system/8.MemoryManagement-1.html", { loader: () => import(/* webpackChunkName: "operating-system_8.MemoryManagement-1.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/8.MemoryManagement-1.html.js"), meta: {"title":"8. Memory Management(1)"} }],
  ["/operating-system/9.MemoryManagement-2.html", { loader: () => import(/* webpackChunkName: "operating-system_9.MemoryManagement-2.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/9.MemoryManagement-2.html.js"), meta: {"title":"9. Memory Management(2)"} }],
  ["/operating-system/Project-2-test-code.html", { loader: () => import(/* webpackChunkName: "operating-system_Project-2-test-code.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/Project-2-test-code.html.js"), meta: {"title":"Project 02: Test Code"} }],
  ["/operating-system/Project-2.html", { loader: () => import(/* webpackChunkName: "operating-system_Project-2.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/Project-2.html.js"), meta: {"title":"Project 02: Implementing a simple kernel-level thread"} }],
  ["/operating-system/wiki.html", { loader: () => import(/* webpackChunkName: "operating-system_wiki.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/operating-system/wiki.html.js"), meta: {"title":"Project 02: xv6 RISC-V Kernel-Level Threads Implementation - wiki"} }],
  ["/algorithm/1018.html", { loader: () => import(/* webpackChunkName: "algorithm_1018.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/algorithm/1018.html.js"), meta: {"title":"1018번: 체스판 다시 칠하기"} }],
  ["/algorithm/1966.html", { loader: () => import(/* webpackChunkName: "algorithm_1966.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/algorithm/1966.html.js"), meta: {"title":"1966번: 프린터 큐"} }],
  ["/algorithm/PythonTimeout.html", { loader: () => import(/* webpackChunkName: "algorithm_PythonTimeout.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/algorithm/PythonTimeout.html.js"), meta: {"title":"Python 시간 초과 방지를 위한 팁"} }],
  ["/computer-graphics/1-Course-Intro.html", { loader: () => import(/* webpackChunkName: "computer-graphics_1-Course-Intro.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/1-Course-Intro.html.js"), meta: {"title":"1 - Course Intro"} }],
  ["/computer-graphics/10-Character-Animation.html", { loader: () => import(/* webpackChunkName: "computer-graphics_10-Character-Animation.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/10-Character-Animation.html.js"), meta: {"title":"Computer Graphics"} }],
  ["/computer-graphics/11-Curves.html", { loader: () => import(/* webpackChunkName: "computer-graphics_11-Curves.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/11-Curves.html.js"), meta: {"title":"11 - Curves"} }],
  ["/computer-graphics/2-Rendering-Basics.html", { loader: () => import(/* webpackChunkName: "computer-graphics_2-Rendering-Basics.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/2-Rendering-Basics.html.js"), meta: {"title":"2 - Rendering Basics"} }],
  ["/computer-graphics/3-Transformations.html", { loader: () => import(/* webpackChunkName: "computer-graphics_3-Transformations.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/3-Transformations.html.js"), meta: {"title":"3 - Transformations"} }],
  ["/computer-graphics/4-Affine-Space-Frame_Matrix.html", { loader: () => import(/* webpackChunkName: "computer-graphics_4-Affine-Space-Frame_Matrix.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/4-Affine-Space-Frame_Matrix.html.js"), meta: {"title":"4 - Affine Space / Frame / Matrix"} }],
  ["/computer-graphics/5-Vertex-Processing-1.html", { loader: () => import(/* webpackChunkName: "computer-graphics_5-Vertex-Processing-1.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/5-Vertex-Processing-1.html.js"), meta: {"title":"5 - Vertex Processing 1"} }],
  ["/computer-graphics/6-Vertex-Processing-2.html", { loader: () => import(/* webpackChunkName: "computer-graphics_6-Vertex-Processing-2.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/6-Vertex-Processing-2.html.js"), meta: {"title":"6 - Vertex Processing 2"} }],
  ["/computer-graphics/7-Hierachical-Modeling-Mesh.html", { loader: () => import(/* webpackChunkName: "computer-graphics_7-Hierachical-Modeling-Mesh.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/7-Hierachical-Modeling-Mesh.html.js"), meta: {"title":"7 - Hierarchical Modeling, Mesh"} }],
  ["/computer-graphics/8-Lighting.html", { loader: () => import(/* webpackChunkName: "computer-graphics_8-Lighting.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/8-Lighting.html.js"), meta: {"title":"8 - Lighting"} }],
  ["/computer-graphics/9-Orientation-Rotation.html", { loader: () => import(/* webpackChunkName: "computer-graphics_9-Orientation-Rotation.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/9-Orientation-Rotation.html.js"), meta: {"title":"9 - Orientation & Rotation"} }],
  ["/computer-graphics/Project-2.html", { loader: () => import(/* webpackChunkName: "computer-graphics_Project-2.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/Project-2.html.js"), meta: {"title":"Computer Graphics Project 2: Obj viewer"} }],
  ["/computer-graphics/Project-3.html", { loader: () => import(/* webpackChunkName: "computer-graphics_Project-3.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/computer-graphics/Project-3.html.js"), meta: {"title":"Computer Graphics Project 3: Bvh Viewer"} }],
  ["/finance/WhyBitcoin.html", { loader: () => import(/* webpackChunkName: "finance_WhyBitcoin.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/finance/WhyBitcoin.html.js"), meta: {"title":"나는 왜 비트코인에 투자했는가"} }],
  ["/wellness/ExtraVirginOliveOil.html", { loader: () => import(/* webpackChunkName: "wellness_ExtraVirginOliveOil.html" */"/home/kmbzn/workspace/blog-v2/docs/.vuepress/.temp/pages/wellness/ExtraVirginOliveOil.html.js"), meta: {"title":"🫒 엑스트라 버진 올리브유 (Extra Virgin Olive Oil)"} }],
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
