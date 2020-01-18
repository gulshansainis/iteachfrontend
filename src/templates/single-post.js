import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={frontmatter.keywords} />
      <article className="post">
        <header className="post-header">
          <h1>{frontmatter.title}</h1>
        </header>
        <h5 className="post-publish-date">{frontmatter.date}</h5>
        {frontmatter.category && (
          <Link to={`learn/${frontmatter.category.toLowerCase()}`}>
            {frontmatter.category}
          </Link>
        )}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        keywords
        category
      }
      fields {
        slug
      }
    }
  }
`
