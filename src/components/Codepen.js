import React from "react"

const Codepen = ({ id }) => {
  return (
    <iframe
      height="265"
      style={{ width: "100%" }}
      scrolling="no"
      src={`https://codepen.io/gulshansainis/embed/${id}?height=265&theme-id=dark&default-tab=html,result`}
      frameBorder="no"
      allowtransparency="true"
      allowFullScreen={true}
      title={id}
    >
      <a href={`https://codepen.io/gulshansainis/pen/${id}`}>
        Open example in Codepen
      </a>
    </iframe>
  )
}

export default Codepen
