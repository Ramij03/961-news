import { Dimensions } from "react-native";

type ColorTheme = {
  gray: string;
  gray2: string;
  lightgray: string;
  offwhite: string;
  white: string;
  black: string;
  red: string;
  darkred: string;
  green: string;
  lightWhite: string;
};

const COLORS: ColorTheme = {
  gray: "#83829A",
  gray2: "#C1C0C8",
  lightgray: "#EFEDF8FF",
  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#FF0000",
  darkred: "#B80000",
  green: "#00C135",
  lightWhite: "#FAFAFC",
};

const { width, height } = Dimensions.get("window");

const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,

  // device dimensions
  width,
  height,
};

export { COLORS, SIZES };
