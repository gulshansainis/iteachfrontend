import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { getTheme } from "../Theming"
import { bpMaxSM } from "../../lib/breakpoints"
import MobileMenu from "./MobileMenu"
import Links from "./Links"

import Container from "../Container"

const Header = ({ siteTitle }) => {
  const theme = getTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 20px 0;
        background: ${theme.colors.headerBg};
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: ${theme.colors.black};
              &:hover {
                color: ${theme.colors.black};
                text-decoration: none;
              }
            `}
          >
            <img
              alt={siteTitle}
              style={{ marginBottom: "0", width: "250px", height: "auto" }}
              src="/images/iteachfrontend.svg"
            />
          </Link>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.text};
                margin-left: 16px;
                margin-right: 16px;
              }
              .active {
                // display: none;
                // visibility: hidden;
                background: ${theme.colors.yellow};
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
