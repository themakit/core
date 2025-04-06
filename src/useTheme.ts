import { useContext } from "react";
import { ThemeContext } from "styled-components";

export function useTheme<T = any>() {
  return useContext(ThemeContext) as T;
}