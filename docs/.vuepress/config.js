module.exports = {
  // base:配置部署站点的基础路径，后续再介绍
  //   title: "湖南天承", // 网站的标题
  //   description: "1", // 网站xxx的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ["link", { rel: "icon", href: "/logo.png" }] // 需要被注入到当前页面的 HTML <head> 中的标签
    //  ['link',{rel:"stylesheet",href:"/styles/index.css"}],
  ],
  // theme: "reco",
  enhanceApp: "./enhanceApp.js",
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    logo: "/logo.jpg",
    // lastUpdated: 'Last Updated',
    nav: [
      //   { text: "Home",activeMatch: "/介绍/01项目结构和架构介绍/", link: "/" },
      { text: "介绍", link: "/介绍/01项目结构和架构介绍/" },
      { text: "规范", link: "/规范/01规范/" },
      { text: "应用通信", link: "/应用通信/01应用通信/" },
      { text: "组件篇", link: "/组件篇/01组件篇" },
      { text: "常见问题", link: "/常见问题/常见问题" }
    ]
    // sidebar: [
    //   {
    //     title: "Group 1", // 必要的
    //     path: "/介绍/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ["02测试"]
    //   },
    //   {
    //     title: "Group 2",
    //     children: [
    //       /* ... */
    //     ],
    //     initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    //   }
    // ]
  }
};
