import path from "path"
import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import SchemaOrg from "./SchemaOrg"

const SEO = ({
  postData,
  frontmatter = {},
  postImage,
  isBlogPost,
  activeCategory,
}) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            image
            twitterUrl
            twitterHandle
            fbAppID
            author {
              name
            }
            organization {
              name
              url
              logo
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const postMeta =
        frontmatter || postData.childMarkdownRemark.frontmatter || {}

      const title = (isBlogPost
        ? postMeta.title
        : activeCategory
        ? `Learn Modern ${activeCategory.toUpperCase()}`
        : frontmatter.title
      ).concat(" | iTeachFrontend")

      const description = isBlogPost
        ? postMeta.description
        : activeCategory
        ? `Learn ${activeCategory.toUpperCase()} from experts and take your knowledge to next level to harness the full potential of ${activeCategory.toUpperCase()}. Our simple and easy to follow tutorials and articles on ${activeCategory.toUpperCase()} will help you advance your skills from zero to hero level.`
        : frontmatter.description
      const image = isBlogPost
        ? postImage
          ? `${seo.canonicalUrl}${postImage}`
          : seo.image
        : activeCategory
        ? `${seo.canonicalUrl}${path.sep}${activeCategory}-logo.svg`
        : seo.image
      const url = postMeta.slug
        ? `${seo.canonicalUrl}${path.sep}${postMeta.slug}`
        : activeCategory
        ? `${seo.canonicalUrl}${path.sep}learn${path.sep}${activeCategory}`
        : seo.canonicalUrl
      const datePublished = isBlogPost ? postMeta.datePublished : false

      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="fb:app_id" content={seo.fbAppID} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={seo.twitterHandle} />
            <meta name="twitter:creator" content={seo.author.name} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
          <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            canonicalUrl={seo.canonicalUrl}
            author={seo.author}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      )
    }}
  />
)

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
}

export default SEO
