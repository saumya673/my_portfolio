'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: 8,
          boxShadow: "0 4px 8px rgba(0,0,0,.4)",
          transform: "translateY(0)",
          transition:
            "transform 200ms ease, box-shadow 200ms ease, filter 200ms ease",
          "&:hover": {
            boxShadow:
              "0 15px 30px rgba(100, 255, 218, 0.12), 0 10px 25px rgba(0,0,0,.55)",
            filter: "saturate(1.06)",
          },
          "&:active": {
            transform: "translateY(-2px)",
          },
          "&:hover .MuiCardMedia-root": {
            transform: "scale(1.035)",
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&:hover": { transform: "none", boxShadow: "inherit", filter: "none" },
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          transition: "transform 350ms ease",
          objectFit: "cover",
        },
      },
    },
  },
});

export default theme;