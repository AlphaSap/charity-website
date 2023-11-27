import { Typography, Stack } from "@mui/material";
import "./LearnMoreHeader.css";

function LearnMoreHeader() {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={2}
      >
        <Typography fontSize={{
          sm: "3rem",
          xs: "1.5rem",
          md: "4rem"
        }} sx={{ fontWeight: "bold" }}>
          <span className="text-green">Dholar</span>{" "}
          <span className="text-brown">Community</span>
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingX: 2,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              lineHeight: "136%",
              width: { xs: "70%", md: "50%" },
              paddingBottom: { xs: 0, md: 10 },
            }}
          >
            Thank you for visiting Dholar Community, where compassion meets
            action, and hope is a shared commitment. As a Muslim charity
            organization, we stand united in our mission to extend a helping
            hand to those affected by natural disasters and crises, irrespective
            of their background or beliefs. Our journey is guided by the
            principles of empathy, unity, and the Islamic values of charity,
            driving us to make a positive impact on the lives of those facing
            adversity.
          </Typography>
          <span className="hero-container">
            <img className="hero-img" src="hero.png" />
          </span>
        </Stack>
      </Stack>
    </>
  );
}

export default LearnMoreHeader;
