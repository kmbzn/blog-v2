export const themeData = JSON.parse("{\"logo\":\"/images/kbz.png\",\"colorMode\":\"auto\",\"sidebar\":[{\"children\":[\"/Mindscape\",\"/Musics\"]},{\"text\":\"🤖 Artificial Intelligence\",\"collapsible\":true,\"children\":[\"/ai/1\",\"/ai/2\",\"/ai/3\",\"/ai/4\",\"/ai/5\",\"/ai/6\",\"/ai/7\",\"/ai/8\",\"/ai/9\",\"/ai/10\",\"/ai/11\",\"/ai/12\",\"/ai/13\",\"/ai/14\",\"/ai/15\",\"/ai/16\",\"/ai/17\",\"/ai/18\",\"/ai/19\"]},{\"text\":\"🔐 Computer Security\",\"collapsible\":true,\"children\":[\"/cs/7\",\"/cs/8\",\"/cs/9\",\"/cs/10\"]},{\"text\":\"🗂️ Database System\",\"collapsible\":true,\"children\":[\"/db/1\",\"/db/2\",\"/db/3\",\"/db/6\",\"/db/7-1\",\"/db/7-2\",\"/db/13\",\"/db/14\",\"/db/15\",\"/db/16\",\"/db/17\",\"/db/18\",\"/db/19\"]},{\"text\":\"🧑‍💻 Software Engineering\",\"collapsible\":true,\"children\":[\"/se/9\",\"/se/10\",\"/se/11\",\"/se/12\",\"/se/13\",\"/se/14\",\"/se/15\",\"/se/16\",\"/se/17\"]}],\"sidebarDepth\":0,\"lastUpdated\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
