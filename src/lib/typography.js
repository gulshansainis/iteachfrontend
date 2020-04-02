import Typography from "typography"
import "../fonts/fonts.css"

export const fonts = {
  regular: "Inter UI Regular",
  regularItalic: "Inter UI Regular Italic",
  semibold: "Inter UI Semibold",
  semiboldItalic: "Inter UI Semibold Italic",
  bold: "Inter UI Bold",
  boldItalic: "Inter UI Bold Italic",
}

const fontSize = 18

const typography = new Typography({
  baseFontSize: `${fontSize}px`,
  baseLineHeight: "1.5em",
  headerFontFamily: [fonts.bold, "sans-serif"],
  bodyFontFamily: [fonts.regular, "sans-serif"],
  headerColor: "hsla(0,0%,0%,0.9)",
  bodyColor: "hsla(0,0%,0%,0.8)",

  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: "hsla(0,0%,0%,0.75)",
      fontSize: `${Math.round(fontSize * 1.8)}px`,
      marginBottom: "0.75em",
    },
    h2: {
      color: "hsla(0,0%,0%,0.775)",
      fontSize: `${Math.round(fontSize * 1.35)}px`,
      lineHeight: 1.2,
      marginBottom: "0.75em",
    },
    h3: {
      color: "hsla(0,0%,0%,0.8)",
      fontSize: `${Math.round(fontSize * 1.15)}px`,
      lineHeight: 1.3,
      marginBottom: "1em",
    },
    h4: {
      fontSize: `${Math.round(fontSize * 1)}px`,
      lineHeight: 1.25,
      marginBottom: "1.5em",
    },
    h5: {
      fontSize: `${Math.round(fontSize * 0.9)}px`,
      marginBottom: "1.5em",
    },
    h6: {
      fontSize: `${Math.round(fontSize * 0.8)}px`,
      marginBottom: "1.5em",
    },
    p: {
      fontSize: `${Math.round(fontSize * 1.1)}px`,
    },
    ul: {
      fontSize: `${fontSize}px`,
      marginBottom: "1.5em",
    },
    li: {
      fontSize: `${fontSize}px`,
      lineHeight: 1.5,
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
