import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

function toggleMenu(e) {
  const menu = e.target.nextElementSibling
  const isVisible = menu.style.display === "block" ? true : false
  if (isVisible) {
    menu.style.display = "none"
  } else {
    menu.style.display = "block"
    menu.style.position = "absolute"
    menu.style.top = "83px"
    menu.style.background = "#fafafa"
    menu.style.width = "100%"
    menu.style.margin = "0px"
    menu.style.padding = "0px"
    menu.style.left = "0px"
  }
}

const Header = ({ siteTitle }) => {
  const menuRef = React.createRef()
  return (
    <header className="header">
      <nav className="header-nav container" role="navigation">
        <h1>
          <Link to="/">
            <span className="header-logo-wrapper">
              <Logo className="header-logo" />
              <img
                className="header-logoText"
                alt="iteachfrontend logo"
                src="/logo_alt_text.png"
              />
            </span>
          </Link>
        </h1>
        <button className="header-menu-button" onClick={e => toggleMenu(e)}>
          Menu
        </button>
        <ul ref={menuRef}>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
