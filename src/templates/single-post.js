import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={frontmatter.keywords}
        description={excerpt}
      />
      <article className="post">
        <header className="post-header">
          <h1>{frontmatter.title}</h1>
        </header>
        <h5 className="post-publish-date">{frontmatter.date}</h5>
        {frontmatter.category && (
          <div className="post-category">
            <Link to={`learn/${frontmatter.category.toLowerCase()}`}>
              #{frontmatter.category}
            </Link>
          </div>
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
      excerpt
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
