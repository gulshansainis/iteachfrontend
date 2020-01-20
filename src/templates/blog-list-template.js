import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const {
      currentPage,
      hasNextPage,
      hasPreviousPage,
    } = this.props.data.allMarkdownRemark.pageInfo
    return (
      <Layout>
        <SEO title="Latest Articles On Frontend Development" />
        <h1>Latest Articles</h1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const category = node.frontmatter.category
          return (
            <Card
              key={node.fields.slug}
              to={node.fields.slug}
              title={title}
              excerpt={node.excerpt}
              category={category}
            />
          )
        })}
        {hasPreviousPage && (
          <Link
            to={`/articles/${currentPage - 1 === 1 ? "" : currentPage - 1}`}
          >
            Prev
          </Link>
        )}
        {hasNextPage && <Link to={`/articles/${currentPage + 1}`}>Next</Link>}
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
      }
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            category
          }
          excerpt
        }
      }
    }
  }
`
