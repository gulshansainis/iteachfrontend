import React from "react";
import { Link } from "gatsby";
import { getTheme } from "../Theming";
import ThemeToggler from "./ThemeToggler";

export default () => {
  const theme = getTheme();
  return (
    <React.Fragment>
      <Link
        to="/articles"
        activeClassName="active"
        aria-label="View articles page"
      >
        Articles
      </Link>
      <Link to="#" activeClassName="active" aria-label="View blog page">
        About
      </Link>
      <Link to="#" activeClassName="active" aria-label="View blog page">
        Contact
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  );
};
