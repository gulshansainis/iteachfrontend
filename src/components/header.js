import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="main-nav">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul>
        <li>
          <Link className="h1" to="/articles">
            Articles
          </Link>
        </li>
        <li>
          <Link className="h1" to="/guides">
            Guides
          </Link>
        </li>
        <li>
          <Link className="h1" to="/videos">
            Videos
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
