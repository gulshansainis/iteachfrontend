import React from "react"
import { Link } from "gatsby"
import ReactIcon from "../images/react-logo.svg"
// import AngularIcon from "../images/angular-logo.svg"
import CSSIcon from "../images/css3-logo.svg"
import JSIcon from "../images/js-logo.svg"
// import GatsbyIcon from "../images/gatsby-logo.svg"
import HTML5Icon from "../images/html5-logo.svg"
// import VueIcon from "../images/vue-logo.svg"

const FeaturedBar = () => (
  <div className="featured-bar">
    <Link to="/learn/html">
      <HTML5Icon /> <span className="featured-text">HTML5</span>
    </Link>
    <Link to="/learn/css">
      <CSSIcon /> <span className="featured-text">CSS3</span>
    </Link>
    <Link to="/learn/javascript">
      <JSIcon /> <span className="featured-text">JavaScript</span>
    </Link>
    <Link to="/learn/react">
      <ReactIcon /> <span className="featured-text">React.js</span>
    </Link>
  </div>
)

export default FeaturedBar
