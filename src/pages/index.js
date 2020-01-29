import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
// import styled from "@emotion/styled";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Link from "../components/Link";
import { getTheme } from "../components/Theming";
import Container from "../components/Container";
import { rhythm } from "../lib/typography";
import { bpMaxSM, bpMaxMD } from "../lib/breakpoints";

export default function Index({ data: { site, allMdx } }) {
  const theme = getTheme();
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {allMdx.edges.map(({ node: post }) => (
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
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: "all 150ms ease",
                ":hover": {
                  color: theme.colors.primary
                }
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <p style={{ opacity: "90%" }}>
              {/* Post Categories */}
              {post.frontmatter.categories &&
                post.frontmatter.categories.map(category => (
                  <small key={category} style={{ marginRight: "1em" }}>
                    <Link to={`/learn/${category}`}>{`#${category}`}</Link>
                  </small>
                ))}
              {/* Date */}
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
              to={post.frontmatter.slug}
              aria-label={`View ${post.frontmatter.title}`}
            >
              Read Article →
            </Link>
          </div>
        ))}
        <div
          css={css`
            margin-top: 60px;
          `}
        >
          <Link to="/articles" aria-label="Visit blog page">
            View all articles
          </Link>
        </div>
        <hr />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
            categories
          }
        }
      }
    }
  }
`;
