import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = ({ icon, title, excerpt, displayCta, to }) => {
  return (
    <article className="article-card border-round-1">
      <Link to={to}>
        <h3>{title}</h3>
        {icon && icon}
      </Link>
      {excerpt && <p>{excerpt}</p>}
      {!!displayCta && (
        <Link to={to}>
          <strong>Read More</strong>
        </Link>
      )}
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  icon: PropTypes.element,
  displayCta: PropTypes.bool,
  to: PropTypes.string,
}

Card.defaultProps = {
  displayCta: true,
}

export default Card
