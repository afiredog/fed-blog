export default {
  nav: [
    {
      text: '前端面试题',
      link: '/fed-interview/js/js-1',
      // items: [
      //     {
      //         text: "JavaScript",
      //         link: "/fed-interview/js/js-1",
      //     },
      // ],
    },
  ],
  sidebar: {
    '/fed-interview/': [
      {
        text: 'JavaScript',
        collapsed: true,
        items: [
          {
            text: 'JavaScript有哪些数据类型，它们的区别？',
            link: '/fed-interview/js/js-1',
          },
          {
            text: 'JavaScript的数据结构有哪些？',
            link: '/fed-interview/js/js-2',
          },
        ],
      },
    ],
  },
}