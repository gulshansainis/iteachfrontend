import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark
  const { title, keywords, date, category } = frontmatter
  return (
    <Layout>
      <SEO title={title} keywords={keywords} description={excerpt} />
      <article className="post">
        <header className="post-header">
          <h1>{title}</h1>
        </header>
        <h5 className="post-publish-date">{date}</h5>
        {category && (
          <div className="post-category">
            <Link to={`learn/${category.toLowerCase()}`}>#{category}</Link>
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
