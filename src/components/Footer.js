import React from "react"
import { css } from "@emotion/core"
import { bpMaxSM } from "../lib/breakpoints"
import SubscribeForm from "./Forms/Subscribe"
import Social from "./Social"
import Container from "./Container"

const Footer = ({ organization, noSubscribeForm, twitterUrl, githubUrl }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      {!noSubscribeForm && (
        <div>
          <SubscribeForm />
          <br />
          <br />
        </div>
      )}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >
          {organization &&
            `${organization.name} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div>
          <strong>Follow me</strong>
          {githubUrl && <Social githubUrl={githubUrl} />}
          {twitterUrl && <Social twitterUrl={twitterUrl} />}
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
