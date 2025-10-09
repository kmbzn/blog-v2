export const themeData = JSON.parse("{\"logo\":\"/images/kbz.png\",\"logoDark\":\"/images/kbz-dark.png\",\"colorMode\":\"auto\",\"sidebar\":[{\"children\":[\"/Mindscape\",\"/Musics\"]},{\"text\":\"🧠 Algorithm\",\"collapsible\":true,\"children\":[\"/algorithm/PythonTimeout\",\"/algorithm/std::vector\",\"/algorithm/vim\",\"/algorithm/1018\",\"/algorithm/1966\"]},{\"text\":\"🗄️ Database System\",\"collapsible\":false,\"children\":[\"/db/1.Introduction\",\"/db/Assignment2-1\"]},{\"text\":\"🔣 상공회의소 한자\",\"collapsible\":true,\"children\":[\"/hanja/saja\",\"/hanja/8\",\"/hanja/7\",\"/hanja/6\",\"/hanja/5\",\"/hanja/4\"]},{\"text\":\"💰 Finance\",\"children\":[\"/finance/Bitcoin\"]},{\"text\":\"🏛️ Humanities\",\"collapsible\":true,\"children\":[\"/humanities/Nordvik\",\"/humanities/NorthSentinelIsland\",\"/humanities/Rongorongo\"]},{\"text\":\"🏋️ Wellness\",\"collapsible\":true,\"children\":[\"/wellness/ExtraVirginOliveOil\",\"/wellness/PsylliumHusk\"]},{\"text\":\"🖥️ Computer Graphics\",\"collapsible\":true,\"children\":[\"/cg/8-Lighting\",\"/cg/9-Orientation-Rotation\",\"/cg/10-Character-Animation\",\"/cg/11-Curves.md\",\"/cg/12-More-Lighting-Texture\"]}],\"sidebarDepth\":0,\"lastUpdated\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
