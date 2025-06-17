export const themeData = JSON.parse("{\"logo\":\"/images/kbz.png\",\"logoDark\":\"/images/kbz-dark.png\",\"colorMode\":\"auto\",\"sidebar\":[{\"children\":[\"/Mindscape\",\"/Musics\",\"/vim\"]},{\"text\":\"🧠 Algorithm\",\"collapsible\":true,\"children\":[\"/algorithm/PythonTimeout\",\"/algorithm/1966\",\"/algorithm/1018\"]},{\"text\":\"💰 Finance\",\"children\":[\"/finance/WhyBitcoin\"]},{\"text\":\"🏋️ Wellness\",\"children\":[\"/wellness/ExtraVirginOliveOil\",\"/wellness/PsylliumHusk\"]},{\"text\":\"🖥️ Computer Graphics\",\"collapsible\":true,\"children\":[\"/cg/8-Lighting\",\"/cg/9-Orientation-Rotation\",\"/cg/10-Character-Animation\",\"/cg/11-Curves.md\",\"/cg/12-More-Lighting-Texture\"]},{\"text\":\"🗂️ Operating System\",\"collapsible\":true,\"children\":[\"/os/7.Deadlocks\",\"/os/8.MemoryManagement-1\",\"/os/9.MemoryManagement-2\",\"/os/10.VirtualMemory-1\",\"/os/11.VirtualMemory-2\",\"/os/12.FileSystem\",\"/os/13.MassStorageManagement\",\"/os/14.IOSystems\"]},{\"text\":\"🔣 Programming Language Theory\",\"collapsible\":true,\"children\":[\"/pl/13-FPL(1)\"]}],\"sidebarDepth\":0,\"lastUpdated\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
