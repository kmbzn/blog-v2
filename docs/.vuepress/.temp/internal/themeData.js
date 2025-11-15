export const themeData = JSON.parse("{\"logo\":\"/images/kbz.png\",\"logoDark\":\"/images/kbz-dark.png\",\"colorMode\":\"auto\",\"sidebar\":[{\"children\":[\"/Mindscape\",\"/Musics\"]},{\"text\":\"🤖 Artifical Intelligence\",\"collapsible\":true,\"children\":[\"/ai/1-Linear-Algebra\",\"/ai/2-Linear-Algebra-Search\",\"/ai/3-Search\",\"/ai/4-Knowledge-Logic-1\",\"/ai/5-Knowledge-Logic-2\",\"/ai/6-Probability\",\"/ai/7-Information-Theory\",\"/ai/8-Probabilistic-Reasoning-2\",\"/ai/9-Probabilistic-Reasoning-3\",\"/ai/10-Machine-Learning-1\",\"/ai/11-Machine-Learning-2\",\"/ai/12-Machine-Learning-3\",\"/ai/13-Linear-Models\",\"/ai/14-Other-Classic-ML-Models\",\"/ai/15-Deep-Learning-1\",\"/ai/16-Deep-Learning-2\"]},{\"text\":\"🔒 Computer Security\",\"collapsible\":true,\"children\":[\"/cs/01.Overview\",\"/cs/02.보안정책\",\"/cs/03.Cryptographic_Tools\",\"/cs/04.User_Authentification\",\"/cs/05.Access_Control\",\"/cs/06.DB_Security\",\"/cs/07.Malware\",\"/cs/08.Firmware_Analysis\"]},{\"text\":\"🗄️ Database System\",\"collapsible\":true,\"children\":[\"/db/1.Introduction\",\"/db/2.Relational\",\"/db/3.SQL-1\",\"/db/6.E-R_Model\",\"/db/7.Relational_Database_Design-1\",\"/db/7.Relational_Database_Design-2\",\"/db/13.Data_Storage_Structures\",\"/db/14.Indexing\",\"/db/15.Query_Processing\"]},{\"text\":\"📝 Software Engineering\",\"collapsible\":true,\"children\":[\"/se/2-IntroToSE\",\"/se/3-Process\",\"/se/4-ProcessModels\",\"/se/5-Agile\",\"/se/6-Requirements\",\"/se/7-Requirements-2\",\"/se/8-Architecture\",\"/se/9-UML\",\"/se/10-Object-Oriented-Analysis\",\"/se/11-Object-Oriented-Design\",\"/se/12-DesignPatterns\",\"/se/13-Intro-To-QA-Testing\"]},{\"text\":\"🧠 Algorithm\",\"collapsible\":true,\"children\":[\"/algorithm/PythonTimeout\",\"/algorithm/std-vector\",\"/algorithm/vim\",\"/algorithm/1018\",\"/algorithm/1966\"]}],\"sidebarDepth\":0,\"lastUpdated\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
