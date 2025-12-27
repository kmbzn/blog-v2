export const themeData = JSON.parse("{\"logo\":\"/images/kbz.png\",\"colorMode\":\"auto\",\"sidebar\":[{\"children\":[\"/Mindscape\",\"/Musics\"]},{\"text\":\"Ubuntu\",\"collapsible\":false,\"children\":[\"/os/wine_without_explorer\",\"/os/clipboard_image_kakaotalk_ubuntu\"]},{\"text\":\"🗂️ Database System\",\"collapsible\":true,\"children\":[\"/db/1\",\"/db/2\",\"/db/3\",\"/db/6\",\"/db/7-1\",\"/db/7-2\",\"/db/13\",\"/db/14\",\"/db/15\",\"/db/16\",\"/db/17\",\"/db/18\",\"/db/19\"]}],\"sidebarDepth\":0,\"lastUpdated\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
