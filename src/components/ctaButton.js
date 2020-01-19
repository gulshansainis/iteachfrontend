import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CTAButton = ({ text, to }) => (
  <button className="cta-btn">
    <Link to={to}>{text}</Link>
  </button>
)

CTAButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default CTAButton
