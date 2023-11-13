import { Divider, Stack, ThemeProvider, Typography } from "@mui/material";
import Quotes from "./Quotes";
import getTheme from "../../theme";

const quo = [
  {
    logo: "pound",
    text: "100% Donation Transparency: Every Penny you give goes directly to those in need.",
  },
  {
    logo: "hand",
    text: "Impactful Change: Your support creates tangible, life-changing results",
  },
  {
    logo: "heart",
    text: "Community of Compassion: Join a network dedicated to making the world a better place",
  },
];
function Qualites() {
  return (
    <>
      <Divider />
      <Stack
        sx={{
          marginY: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemeProvider theme={getTheme()}>
        <Typography
          fontFamily={"var(--font-fam)"}
          variant="h3"
          sx={{
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Our Three Pillars of Impact
        </Typography>
        </ThemeProvider>
        <Stack
          spacing={2}
          sx={{
            alignItems: "start",
          }}
        >
          {quo.map((x, idx) => (
            <Quotes logo={x.logo} key={idx} text={x.text} />
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default Qualites;
