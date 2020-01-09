module.exports = {
  siteMetadata: {
    title: `iTeachFrontend`,
    description: `Advance your frontend skills - learn JavaScript, React, Vue & Angular from experts`,
    keywords:
      "learn frontend development, learn html, learn css, learn js, learn ReactJs, learn angular, learn vue, learn frontend development online, learn ReactJs online, learn angular online, learn vue online, learn html online, learn css online, learn js online",
    author: `@iteachfrontend`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/articles`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
