export const themeData = JSON.parse("{\"logo\":\"/images/kbz.png\",\"logoDark\":\"/images/kbz-dark.png\",\"colorMode\":\"auto\",\"sidebar\":[{\"children\":[\"/Mindscape\",\"/Musics\",\"/vim\"]},{\"text\":\"🧠 Algorithm\",\"children\":[\"/algorithm/PythonTimeout\",\"/algorithm/1966\",\"/algorithm/1018\"]},{\"text\":\"💰 Finance\",\"children\":[\"/finance/WhyBitcoin\"]},{\"text\":\"🏋️ Wellness\",\"children\":[\"/wellness/ExtraVirginOliveOil\"]},{\"text\":\"🖥️ Computer Graphics\",\"collapsible\":true,\"children\":[\"/computer-graphics/8-Lighting\",\"/computer-graphics/9-Orientation-Rotation\"]},{\"text\":\"🗂️ Operating System\",\"collapsible\":true,\"children\":[\"/operating-system/7.Deadlocks\",\"/operating-system/8.MemoryManagement-1\",\"/operating-system/9.MemoryManagement-2\",\"/operating-system/10.VirtualMemory-1\",\"/operating-system/11.VirtualMemory-2\",\"/operating-system/12.FileSystem\",\"/operating-system/13.MassStorageManagement\",\"/operating-system/14.IOSystems\"]}],\"sidebarDepth\":0,\"lastUpdated\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
