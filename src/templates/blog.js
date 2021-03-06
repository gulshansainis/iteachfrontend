import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import Container from "../components/Container"
import Hero from "../components/Hero"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Link from "../components/Link"
import { bpMaxSM, bpMaxMD } from "../lib/breakpoints"

const Blog = ({
  data: { site, allMdx },
  pageContext: { pagination, categories, activeCategory },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const posts = page
    .map(id => allMdx.edges.find(edge => edge.node.id === id))
    .filter(post => post !== undefined)

  const frontmatter = {
    title: "Latest Frontend Development Articles",
    description:
      "Latest Frontend Development Articles. Advance your frontend skills - learn JavaScript, React, Vue & Angular from experts",
    slug: "articles",
    datePublished: Date.now(),
  }
  return (
    <Layout site={site}>
      {activeCategory ? (
        <SEO activeCategory={activeCategory} />
      ) : (
        <SEO frontmatter={frontmatter} />
      )}
      <Hero />
      <Container noVerticalPadding>
        {posts.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              :not(:first-of-type) {
                margin-top: 60px;
                ${bpMaxMD} {
                  margin-top: 40px;
                }
                ${bpMaxSM} {
                  margin-top: 20px;
                }
              }
              :first-of-type {
                margin-top: 20px;
                ${bpMaxSM} {
                  margin-top: 20px;
                }
              }
              .gatsby-image-wrapper {
              }
              ${bpMaxSM} {
                padding: 20px;
              }
              display: flex;
              flex-direction: column;
              -webkit-box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.2),
                0 2px 9px 0 rgba(62, 57, 107, 0.2);
              box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.2),
                0 2px 9px 0 rgba(62, 57, 107, 0.2);
              padding: 20px;
              border-radius: 10px;
            `}
          >
            {post.frontmatter.banner && (
              <div>
                <Link
                  aria-label={`View ${post.frontmatter.title} article`}
                  to={`/${post.fields.slug}`}
                >
                  <Img sizes={post.frontmatter.banner.childImageSharp.fluid} />
                </Link>
              </div>
            )}
            <h2
              css={css`
                margin-top: 30px;
                margin-bottom: 10px;
              `}
            >
              <Link
                aria-label={`View ${post.frontmatter.title} article`}
                to={`/${post.fields.slug}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <p style={{ opacity: "90%" }}>
              {/* Date */}
              {/* Post Categories */}
              {post.frontmatter.categories &&
                post.frontmatter.categories.map(category => (
                  <small key={category} style={{ marginRight: "1em" }}>
                    <Link to={`/learn/${category}`}>{`#${category}`}</Link>
                  </small>
                ))}
              <small>{post.frontmatter.date}</small>
            </p>
            <p
              css={css`
                margin-top: 10px;
              `}
            >
              {post.excerpt}
            </p>{" "}
            <Link
              to={`/${post.fields.slug}`}
              aria-label={`view "${post.frontmatter.title}" article`}
            >
              Read Article →
            </Link>
          </div>
        ))}
        <div css={css({ marginTop: "30px" })}>
          {nextPagePath && (
            <Link to={nextPagePath} aria-label="View next page">
              Next Page →
            </Link>
          )}
          {previousPagePath && (
            <Link to={previousPagePath} aria-label="View previous page">
              ← Previous Page
            </Link>
          )}
        </div>
        <hr
          css={css`
            margin: 50px 0;
          `}
        />
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { isPost: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            title
            slug
            date
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                fluid(
                  maxWidth: 720
                  traceSVG: { color: "#fed82b" }
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            slug
            keywords
            categories
            description
          }
        }
      }
    }
  }
`
