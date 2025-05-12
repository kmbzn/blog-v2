export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"logoDark\":\"/images/logo-dark.png\",\"colorMode\":\"auto\",\"sidebar\":[{\"collapsible\":false,\"children\":[\"/국민체조\"]},{\"text\":\"🖥️ Computer Graphics\",\"collapsible\":false,\"children\":[\"/computer-graphics/1-Course-Intro\",\"/computer-graphics/2-Rendering-Basics\",\"/computer-graphics/3-Transformations\",\"/computer-graphics/4-Affine-Space-Frame_Matrix\",\"/computer-graphics/5-Vertex-Processing-1\",\"/computer-graphics/6-Vertex-Processing-2\",\"/computer-graphics/7-Hierachical-Modeling-Mesh\"]}],\"sidebarDepth\":0,\"lastUpdated\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
