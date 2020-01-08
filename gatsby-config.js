module.exports = {
  siteMetadata: {
    title: `iTeachFrontend`,
    description: `Advance your frontend skills - learn JavaScript, React, Vue & Angular from experts`,
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
