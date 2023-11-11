import { createTheme } from "@mui/material";

function getTheme() {
  return createTheme({
    typography: {
      fontFamily: "var(--font-fam)",
      h3: {
        color: 'var(--black)',
        "@media (max-width: 420px)": {
          fontSize: "2rem",
        },
      },
      h4: {
        color: 'var(--black)',
        "@media (max-width: 420px)": {
          fontSize: "1.6rem",
        },
      },
      body1: {
        color: 'var(--black)',
        "@media (max-width: 420px)": {
          fontSize: "1.1rem",
        },
      },
      h2: {
        color: 'var(--black)',
        "@media (max-width: 420px)": {
          fontSize: "1.6rem",
        },
      },
    },
  });
}

export default getTheme;
