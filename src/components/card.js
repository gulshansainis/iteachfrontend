import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Card = ({
  icon,
  title,
  excerpt,
  displayCta,
  to,
  category,
  featuredImgFluid,
}) => {
  return (
    <article className="article-card border-round-1">
      <Link to={to}>
        {featuredImgFluid && <Img fluid={featuredImgFluid} />}
        <h3>{title}</h3>
        {icon && icon}
      </Link>
      {excerpt && <p>{excerpt}</p>}
      {!!displayCta && (
        <Link to={to}>
          <strong>Read More</strong>
        </Link>
      )}
      {category && (
        <div className="article-card-category mt-2">
          <Link to={`learn/${category.toLowerCase()}`}>#{category}</Link>
        </div>
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
  category: PropTypes.string,
  featuredImgFluid: PropTypes.object,
}

Card.defaultProps = {
  displayCta: true,
}

export default Card
