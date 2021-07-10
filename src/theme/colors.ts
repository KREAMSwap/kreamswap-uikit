import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FC80B8",
  primaryBright: "#FDACD2",
  primaryDark: "#D50054",
  secondary: "#D50054",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#FC9CC8"
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#FC80B8",
  invertedContrast: "#FFFFFF",
  input: "#FFF3F3",
  inputSecondary: "#d7caec",
  tertiary: "#FFECF1",
  text: "#D50054",
  textDisabled: "#BDC2C4",
  textSubtle: "#FC80B8",
  borderColor: "#D50054",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FC9CC8 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#D50054",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#FC9CC8",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#FC9CC8",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
