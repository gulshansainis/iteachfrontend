import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import CTAButton from "../components/ctaButton"

const IndexPage = props => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Master Frontend Development" />

      <div className="row">
        <h2 className="col-12 align-center mt-2 text-3x">Recent Articles</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const category = node.frontmatter.category
          return (
            <div className="col-md-6 col-sm-12" key={node.fields.slug}>
              <Card
                to={node.fields.slug}
                title={title}
                excerpt={node.excerpt}
                category={category}
              />
            </div>
          )
        })}
      </div>
      <div className="row">
        <div className="col-12 align-center mt-2">
          <CTAButton to="/articles" text="More Articles" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const articlesQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
      filter: { frontmatter: { published: { eq: true } } }
    ) {
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
