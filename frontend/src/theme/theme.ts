import { createTheme, ThemeOptions } from "@mui/material/styles";
import React from "react";
import { PaletteColor } from "@mui/material/styles/createPalette";

interface IThemeOptions extends ThemeOptions {}
interface AccentColor extends PaletteColor {
  "100": string;
  "200": string;
}
interface StructuralColor {
  "50": string;
  "100": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
}
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    accent?: AccentColor;
    structural: StructuralColor;
  }
  interface PaletteOptions {
    accent?: AccentColor;
    structural?: StructuralColor;
  }
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4?: React.CSSProperties;
    overline2: React.CSSProperties;
    overline1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
    caption4?: React.CSSProperties;
    overline2?: React.CSSProperties;
    overline1?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    caption2: true;
    caption3: true;
    caption4: true;
    overline1: true;
    overline2: true;
  }
}

const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      main: "#4C2CD9",
      light: "#13006A",
      dark: "#FBFAFF",

      contrastText: "#9986F0",
    },
    grey: {
      "50": "#FBFAFC",
      "100": "#F3F2F7",
      "200": "#D4D2D9",
      "300": "#9F9DA6",
      "500": "#6D6C73",
      "700": "#3C3B40",
      "800": "#E5E5E5",
    },
    success: {
      main: "#1D8651",
      light: "#EEEBFF",
    },
    error: {
      main: "#FC5C5C",
    },
    accent: {
      main: "rgba(66, 157, 223, 0.5)",
      light: "rgba(66, 157, 223, 0.75)",
      dark: "#1FC9FF",
      contrastText: "#FFB8B8",
      "100": "#FC90C2",
      "200": "#FF6161",
    },
    structural: {
      "50": " #FFFFFF",
      "100": "#FAFAFA",

      "300": "#F7F5FF",
      "400": "#FDFAFF",
      "500": "#EEEBFF",
      "600": "#6200EE",
      "700": "#2C2937",
    },
    text: {
      primary: "#2C2937",
      secondary: "#5A5766",
      divider: "#FFFDFD",
      disabled: "#817E8C",
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        backgroundColor: "#F9F5FA",
        circular: {
          width: "136px",
          height: "136px",
        },
        rounded: {
          width: "36px",
          height: "36px",
        },
        square: {
          width: "34px",
          height: "34px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          backgroundColor: "#EEEBFF",
          color: "#2C2937",
        },

        label: {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: 400,
          color:"#817E8C"
        },
        outlined: {
          color: "#817E8C",
        },
      },

      SnackbarContent: {
        styleOverrides: {
        },
      },
    },

  },
  typography: {
    button: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "18px",
    },
    allVariants: {
      color: "#262626",
    },
    overline: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
    },
    overline1: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    overline2: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    h1: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      textTransform: "none",
    },
    h2: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "32px",
    },
    body1: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    caption: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption2: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption3: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    caption4: {
      fontFamily: "Roboto",
      fontStyle: "mixed",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "30px",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "30px",
    },
    title: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: "48px",
      letterSpacing: "-0.02em",
    },
  },
} as IThemeOptions);

export default theme;
