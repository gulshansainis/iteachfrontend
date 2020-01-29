import { createTheming } from "@callstack/react-theme-provider";
import { lighten } from "polished";
import colors from "../lib/colors";

const themes = {
  default: {
    themeName: "default",
    colors: {
      primary: colors.yellow,
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: colors.gray,
      link: colors.blue,
      ...colors
    }
  },
  dark: {
    themeName: "dark",
    colors: {
      primary: lighten(0.05, colors.yellow),
      text: colors.white,
      bodyBg: lighten(0.05, colors.black),
      headerBg: lighten(0.05, colors.black),
      link: colors.white,
      ...colors
    }
  }
};

const { ThemeProvider, withTheme, useTheme: getTheme } = createTheming(
  themes.default
);

export { ThemeProvider, withTheme, getTheme, themes, colors };
