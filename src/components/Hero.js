import React from "react";
// import Link from './Link'
import { getTheme } from "./Theming";
import { css } from "@emotion/core";
import Container from "../components/Container";
// import { rhythm } from "../lib/typography";
import Link from "./Link";
import colors from "../lib/colors";

const Hero = () => {
  const theme = getTheme();
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.black};
        // padding: 20px 0 30px 0;
        display: flex;
        -webkit-box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.2),
          0 2px 9px 0 rgba(62, 57, 107, 0.2);
        box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.2),
          0 2px 9px 0 rgba(62, 57, 107, 0.2);
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        {/* <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          Your blog says the things you want to say.
        </h1> */}
        <Link style={{ color: colors.white }} to="/learn/html">
          <span
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              alt="Learn html5"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                marginBottom: "0px"
              }}
              src="/images/tech/html-logo.svg"
            />{" "}
            HTML
          </span>
        </Link>

        <Link style={{ color: colors.white }} to="/learn/css">
          <span
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              alt="Learn css3"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                marginBottom: "0px"
              }}
              src="/images/tech/css-logo.svg"
            />{" "}
            CSS3
          </span>
        </Link>

        <Link style={{ color: colors.white }} to="/learn/javascript">
          <span
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              alt="Learn js"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                marginBottom: "0px"
              }}
              src="/images/tech/javascript-logo.svg"
            />{" "}
            JavaScript
          </span>
        </Link>

        <Link style={{ color: colors.white }} to="/learn/reactjs">
          <span
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              alt="Learn react"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                marginBottom: "0px"
              }}
              src="/images/tech/reactjs-logo.svg"
            />{" "}
            React.js
          </span>
        </Link>
      </Container>
      <div
        css={css`
          // height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  );
};

export default Hero;
