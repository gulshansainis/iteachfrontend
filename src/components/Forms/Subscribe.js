import React from "react"
import { css } from "@emotion/core"
import { withTheme } from "../Theming"
import { rhythm } from "../../lib/typography"
import { bpMaxSM } from "../../lib/breakpoints"

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { first_name: "", email: "" }
  }

  render() {
    const { theme } = this.props

    return (
      <div>
        <h2
          css={css`
            margin-bottom: ${rhythm(1)};
            margin-top: 0;
          `}
        >
          Join the Newsletter
        </h2>
        <form
          action="https://iteachfrontend.us4.list-manage.com/subscribe/post?u=ffbbcda2c9ac65b1b50bb5bff&amp;id=2b4baba5da"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          css={css`
            display: flex;
            align-items: flex-end;
            button {
              margin-left: 10px;
              font-weight: bold;
              color: ${theme.colors.text};
            }
            .field-error {
              display: block;
              color: ${theme.colors.red};
              font-size: 80%;
            }
            input,
            label {
              width: 100%;
            }
            ${bpMaxSM} {
              flex-direction: column;
              align-items: flex-start;
              width: auto;
              label,
              input {
                margin: 5px 0 0 0 !important;
                width: 100%;
                display: flex;
                flex-direction: column;
              }
              button {
                margin: 20px 0 0 0;
              }
            }
          `}
          target="_blank"
          noValidate
        >
          <label htmlFor="mce-FIRST_NAME">
            First Name
            <input
              id="mce-FIRST_NAME"
              type="text"
              value={this.state.first_name}
              name="FIRST_NAME"
              placeholder="Jane"
              aria-label="your first name"
              aria-required="true"
              onChange={e => {
                this.setState({ first_name: e.target.value })
              }}
              required
            />
          </label>
          <label htmlFor="mce-EMAIL">
            Email
            <input
              id="mce-EMAIL"
              type="email"
              value={this.state.email}
              name="EMAIL"
              aria-label="your email address"
              aria-required="true"
              placeholder="jane@acme.com"
              onChange={e => {
                this.setState({ email: e.target.value })
              }}
              required
            />
          </label>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_ffbbcda2c9ac65b1b50bb5bff_2b4baba5da"
              tabIndex="-1"
              value=""
              readOnly
            />
          </div>
          <button
            type="submit"
            onSubmit={() => {
              this.setState({ first_name: "", email: "" })
            }}
          >
            Subscribe
          </button>
        </form>
        <p
          css={css`
            margin-top: ${rhythm(1)};
            margin-bottom: 0;
          `}
        >
          <i>No spam, I hate it more than you do.</i>
        </p>
      </div>
    )
  }
}

export default withTheme(SignUp)
