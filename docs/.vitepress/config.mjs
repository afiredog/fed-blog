import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  base: "/fed-blog/",
  head: [["link", { rel: "icon", href: "/fed-blog/favicon.ico" }]],
  title: "打工仔的博客",
  description: "一个技术记录的网站",
  themeConfig: {
    outlineTitle: "当前页面",
    logo: "/bg.svg",
    siteTitle: "打工仔的博客",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: "前端面试题",
        items: [
          {
            text: "JavaScript",
            link: "/fed-interview/js/js-1",
          },
        ],
      },
    ],
    sidebar: {
      "/fed-interview/": [
        {
          text: "JavaScript",
          collapsed: true,
          items: [
            {
              text: "JavaScript有哪些数据类型，它们的区别？",
              link: "/fed-interview/js/js-1",
            },
            {
              text: "JavaScript的数据结构有哪些？",
              link: "/fed-interview/js/js-2",
            },
          ],
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 打工仔'
    },
    outline: "deep",
    docFooter: { prev: '上一篇', next: '下一篇' }
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
