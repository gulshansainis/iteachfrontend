import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = ({ to, title, excerpt }) => (
  <article>
    <h3>{title}</h3>
    <p>{excerpt}</p>
    <Link to={to}>Read More</Link>
  </article>
)

Card.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
}

export default Card
