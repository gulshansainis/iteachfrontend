import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";
import { FiMoon, FiSun } from "react-icons/fi";
import { getTheme } from "../Theming";

const DarkMode = styled(FiMoon)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0"
});

const DefaultMode = styled(FiSun)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0"
});

const ThemeToggler = ({ toggleTheme, themeName }) => {
  const theme = getTheme();
  return (
    <Button
      css={{
        borderRadius: "50%",
        width: "2.375rem",
        height: "2.375rem",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        borderStyle: "solid",
        borderWidth: "1px",
        color: theme.colors.black,
        background: theme.colors.white,
        "@media (hover: hover)": {
          ":hover": {
            background:
              theme.themeName === "default"
                ? theme.colors.text
                : theme.colors.black
          }
        }
      }}
      aria-label={
        themeName === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      onClick={() => toggleTheme(themeName === "dark" ? "default" : "dark")}
    >
      {themeName === "dark" ? (
        <DefaultMode title="Switch to light mode" />
      ) : (
        <DarkMode title="Switch to dark mode" />
      )}
    </Button>
  );
};
export default ThemeToggler;
