module.exports = {
  base: "/blog/",
  title: "ZhendongWang's Blog",
  description: "Just playing around",
  plugins: ["@vuepress/back-to-top"],
  themeConfig: {
    sidebar: [
      {
        title: "React Hooks",
        path: "/react-hooks/",
        children: [
          {
            title: "Hooks从入门到放弃",
            path: "/react-hooks/start-giveup/"
          }
        ]
      },
      {
        title: "LeetCode",
        path: "/leetcode/",
        children: [
        ]
      }
    ]
  }
};
