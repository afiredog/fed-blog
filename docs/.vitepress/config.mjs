import { defineConfig } from "vitepress";
import fedInterview from "./config/fed-interview.mjs";
import leetcode from './config/leetcode.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  base: "/fed-blog/",
  head: [["link", { rel: "icon", href: "/fed-blog/favicon.ico" }]],
  title: "打工仔の博客",
  description: "一个技术记录の网站",
  themeConfig: {
    outlineTitle: "当前页面",
    logo: "/bg.svg",
    siteTitle: "打工仔の博客",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      ...fedInterview.nav,
      ...leetcode.nav
    ],
    sidebar: {
      ...fedInterview.sidebar,
      ...leetcode.sidebar
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
