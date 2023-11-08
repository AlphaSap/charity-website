import { createTheme } from "@mui/material";

function getTheme() {
  return createTheme({
    typography: {
      fontFamily: "var(--font-fam)",
      h3: {
        "@media (max-width: 420px)": {
          fontSize: "1.5rem",
        },
      },
      body1: {
        "@media (max-width: 420px)": {
          fontSize: "1rem",
        },
      },
      h2: {
        "@media (max-width: 420px)": {
          fontSize: "1.6rem",
        },
      },
    },
  });
}

export default getTheme;
