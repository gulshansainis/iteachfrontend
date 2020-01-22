import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Card from "../components/card"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark
  const categoryHeader = `More posts in "${category}"`
  const {
    currentPage,
    hasNextPage,
    hasPreviousPage,
  } = data.allMarkdownRemark.pageInfo

  return (
    <Layout>
      <SEO
        title={categoryHeader}
        keywords={`learn ${category}, ${category} tutorials`}
        description={`Learn ${category} from experts and take your knowledge to next level to harness the full potential of ${category}. Our simple and easy to follow tutorials and articles on ${category} will help you advance your skills from zeor to hero level.`}
      />
      <h1>{categoryHeader}</h1>
      {edges.map(({ node }) => {
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
          to={`/learn/${category.toLowerCase()}/${
            currentPage - 1 === 1 ? "" : currentPage - 1
          }`}
        >
          Prev
        </Link>
      )}
      {hasNextPage && (
        <Link to={`/learn/${category.toLowerCase()}/${currentPage + 1}`}>
          Next
        </Link>
      )}
    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { in: [$category] }, published: { eq: true } }
      }
    ) {
      totalCount
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
