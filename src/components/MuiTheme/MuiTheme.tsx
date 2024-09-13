"use client";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#8a2be2",
      main: "#a458eb",
      dark: "#bc93e1",
    },
    secondary: {
      light: "#ffd3c2",
      main: "#22e7b7",
      dark: "#156f59",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textWrap: "nowrap",
        },
      },
    },
  },
});

export default function MuiTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
