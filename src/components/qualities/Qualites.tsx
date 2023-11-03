import { Divider, Stack, Typography } from "@mui/material";
import Quotes from "./Quotes";


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
        <Typography fontFamily={'var(--font-fam)'} variant="h3" sx={{
          textAlign: 'center',
          marginBottom: 5,
        }}>
          Our Three Pillars of Impact
        </Typography>
        <Stack
          spacing={2}
          sx={{
            alignItems: "start",
          }}
        >
          {quo.map((x) => (
            <Quotes logo={x.logo} text={x.text} />
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default Qualites;
