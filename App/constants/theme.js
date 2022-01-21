import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const COLORS = {
  primary: "#bb2025",
  white: "#fff",
  black: "#000",
  gray: "#eee",
  lightgray: "#f9f9f9",
  transparentWhite: "rgba(255,255,255, 0.2)",
  transparentBlack: "rgba(0,0,0, 0.4)",
};
export const SIZES = {
  //global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  //font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  //app dimension
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export { appTheme };
