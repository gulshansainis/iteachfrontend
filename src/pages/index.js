import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import CTAButton from "../components/ctaButton"
import ReactIcon from "../images/react-logo.svg"
import AngularIcon from "../images/angular-logo.svg"
import CSSIcon from "../images/css3-logo.svg"
import JSIcon from "../images/js-logo.svg"
import GatsbyIcon from "../images/gatsby-logo.svg"
import HTML5Icon from "../images/html5-logo.svg"
// import VueIcon from "../images/vue-logo.svg"

const IndexPage = props => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Master Frontend Development" />

      <div className="row">
        <h2 id="latest-courses" className="col-12 align-center mt-2 text-3x">
          Latest Courses
        </h2>
        <div className="col-4 col-md-6 col-sm-12">
          <Card
            to="#"
            title="HTML5"
            excerpt=""
            displayCta={false}
            icon={<HTML5Icon className="article-card-topic-icon" />}
          />
        </div>
        <div className="col-4 col-md-6 col-sm-12">
          <Card
            to="#"
            title="CSS3"
            excerpt=""
            displayCta={false}
            icon={<CSSIcon className="article-card-topic-icon" />}
          />
        </div>
        <div className="col-4 col-md-6 col-sm-12">
          <Card
            to="#"
            title="JavaScript"
            excerpt=""
            displayCta={false}
            icon={<JSIcon className="article-card-topic-icon" />}
          />
        </div>
        <div className="col-4 col-md-6 col-sm-12">
          <Card
            to="#"
            title="Angular"
            excerpt=""
            displayCta={false}
            icon={<AngularIcon className="article-card-topic-icon" />}
          />
        </div>
        <div className="col-4 col-md-6 col-sm-12">
          <Card
            to="#"
            title="ReactJS"
            excerpt=""
            displayCta={false}
            icon={<ReactIcon className="article-card-topic-icon" />}
          />
        </div>
        <div className="col-4 col-md-6 col-sm-12">
          <Card
            to="#"
            title="Gatsby"
            excerpt=""
            displayCta={false}
            icon={<GatsbyIcon className="article-card-topic-icon" />}
          />
        </div>
      </div>
      <div className="row">
        <h2 className="col-12 align-center mt-2 text-3x">Recent Articles</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="col-md-6 col-sm-12" key={node.fields.slug}>
              <Card
                to={node.fields.slug}
                title={title}
                excerpt={node.excerpt}
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
          }
          excerpt
        }
      }
    }
  }
`
