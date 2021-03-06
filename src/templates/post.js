import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
import { css } from "@emotion/core"
import Container from "../components/Container"
import Layout from "../components/Layout"
import { fonts } from "../lib/typography"
import Share from "../components/Share"

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  // const author = mdx.frontmatter.author || site.siteMetadata.author.name;
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const banner = mdx.frontmatter.banner

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO
        frontmatter={mdx.frontmatter}
        isBlogPost
        postImage={banner && banner.childImageSharp.fluid.src}
      />
      <article
        css={css`
          width: 100%;
          display: flex;
          code {
            background: #f0f0f0;
            color: #ef3b7d;
            border-radius: 2px;
            padding: 1px 6px;
          }
        `}
      >
        <Container>
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
            `}
          >
            {title}
          </h1>
          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
              h3,
              span {
                text-align: center;
                font-size: 15px;
                opacity: 0.6;
                font-family: ${fonts.regular}, sans-serif;
                font-weight: normal;
                margin: 0 5px;
              }
            `}
          >
            {/* {author && <h3>{author}</h3>}
            {author && <span>—</span>} */}
            {date && <h3>{date}</h3>}
          </div>
          {banner && (
            <div>
              <Img
                sizes={banner.childImageSharp.fluid}
                alt={site.siteMetadata.keywords.join(", ")}
              />
            </div>
          )}
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
        {/* <SubscribeForm /> */}
      </article>
      <Container noVerticalPadding>
        <Share
          url={`${site.siteMetadata.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={site.siteMetadata.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        banner {
          childImageSharp {
            fluid(maxWidth: 720, traceSVG: { color: "#fed82b" }, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
        keywords
        description
      }
      body
    }
  }
`
