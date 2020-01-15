import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="header-nav container" role="navigation">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul>
        <li>
          <Link className="h1 h1-small" to="/articles">
            Articles
          </Link>
        </li>
        <li>
          <Link className="h1 h1-small" to="/guides">
            Guides
          </Link>
        </li>
        <li>
          <Link className="h1 h1-small" to="/videos">
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
