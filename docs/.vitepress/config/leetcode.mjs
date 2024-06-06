export default {
  nav: [
    {
      text: 'LeetCode 打卡',
      link: '/leetcode/leetcode-1',
    },
  ],
  sidebar: {
    '/leetcode/': [
      {
        text: '简单题',
        collapsed: true,
        items: [
          {
            text: '【1】两数之和',
            link: '/leetcode/leetcode-1',
          },
        ],
      },
      {
        text: '中等题',
        collapsed: true,
        items: [
          {
            text: '【2】两数相加',
            link: '/leetcode/leetcode-2',
          },
        ],
      },

    ],
  },
}