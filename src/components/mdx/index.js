import React from "react"

import Title from "./title"
import Subtitle from "./subtitle"
import Paragraph from "./paragraph"
import Code from "./code"

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  p: props => <Paragraph {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
}
