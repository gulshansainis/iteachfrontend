/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Social from "./social"
import "../styles/normalize.css"
import "../styles/layout.css"
import Hero from "./hero"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero title="Advance Your Frontend Skills" cta="#latest-courses" />
      <main className="main container" role="main">
        {children}
      </main>
      <footer className="footer">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <a href="https://www.iteachfrontend.com">iTeachFrontend</a>
        </p>
        <Social />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
