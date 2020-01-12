const path = require("path")
const slugify = require("@sindresorhus/slugify")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogListTemplate = path.resolve("src/templates/blog-list-template.js")
  const singlePostTemplate = path.resolve("src/templates/single-post.js")
  const categoryTemplate = path.resolve("src/templates/category.js")
  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                category
              }
            }
          }
        }
        categoryGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({
    length: numPages,
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: singlePostTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Extract keywords data from query
  const categorys = result.data.categoryGroup.group
  // Make tag pages
  categorys.forEach(category => {
    createPage({
      path: `/learn/${category.fieldValue.toLowerCase()}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = slugify(node.frontmatter.title)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
