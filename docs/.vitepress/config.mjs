import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  base: "/fed-blog/",
  head: [["link", { rel: "icon", href: "/fed-blog/favicon.ico" }]],
  title: "打工仔的博客",
  description: "一个技术记录的网站",
  themeConfig: {
    logo: "/bg.svg",
    siteTitle: "打工仔的博客",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: '首页', link: '/' },
      { text: "前端面试题", link: "/qdmst/JS-001.md" },
    ],

    // sidebar: [
    //   {
    //     text: '前端面试题',
    //     items: [
    //       { text: '我的东方大厦防守打法撒旦法阿萨德阿萨德阿萨德速度山大', link: '/qdmst/JS-001.md' },
    //       // { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {
      "/qdmst/": [
        {
          text: "前端面试题",
          items: [
            {
              text: "我的东方大厦防守打法撒旦法阿萨德阿萨德阿萨德速度山大",
              link: "/qdmst/JS-001.md",
            },
            { text: "Runtime API Examples", link: "/qdmst/JS-002.md" },
          ],
        },
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
