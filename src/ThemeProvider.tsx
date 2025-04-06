import React, { ReactNode } from "react";
import { ThemeProvider as SCProvider } from "styled-components";
import { defaultTheme } from "@themakit/theme";

type Props = {
  children: ReactNode;
  theme?: object;
};

export const ThemeProvider = ({ children, theme = defaultTheme }: Props) => (
  <SCProvider theme={theme}>{children}</SCProvider>
);
