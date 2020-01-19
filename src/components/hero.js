import React from "react"
import PropTypes from "prop-types"
import CTAButton from "./ctaButton"

const Hero = ({ title, cta, image }) => (
  // home
  // post
  // category page
  // videos page
  // title
  // title + image
  // title + video
  <div className="hero">
    <div className="container align-center">
      <h1 className="text-3x">{title}</h1>
      <CTAButton className="mt-4" text="Explore" to={cta} />
    </div>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default Hero
