import React, { useState } from "react"

const Subscribe = () => {
  const [email, setEmail] = useState("")

  function handleChange(e) {
    setEmail(e.target.value)
  }

  return (
    <div class="subscription">
      <img src="/logo_alt_text.png" alt="itechfrontend logo" />
      <p>Join our newsletter for developers!</p>
      <form
        action="https://iteachfrontend.us4.list-manage.com/subscribe/post?u=ffbbcda2c9ac65b1b50bb5bff&amp;id=2b4baba5da"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            value={email}
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="email address"
            onChange={handleChange}
            required
          />

          <input
            className="robos"
            type="text"
            name="b_ffbbcda2c9ac65b1b50bb5bff_2b4baba5da"
            tabIndex="-1"
            value=""
          />

          <input
            className="sub-btn"
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
          />
        </div>
      </form>
      <p>
        <i>No spam, I hate it more than you do.</i>
      </p>
    </div>
  )
}

export default Subscribe
