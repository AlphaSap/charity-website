import { Box, Button, Stack, Typography } from "@mui/material";
import "./Banner.css";
import QuickDonate from "./quick_donate/QuickDonate";

function Banner() {
  return (
    <>
      <div className="banner-container">
        <Box
          sx={{
            padding: "1rem",
          }}
        >
          <Typography fontFamily={"var(--font-fam)"} variant="h4">
            "Caring Communites, Stronger Tomorrow"
          </Typography>
          <Typography
            fontFamily={"var(--font-fam)"}
            sx={{
              marginBottom: 1,
            }}
          >
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--green)",
                color: "var(--black)",
                "&:hover": {
                  backgroundColor: "var(--hover-green)",
                },
              }}
            >
              Join Now!
            </Button>
            <Button
              variant="outlined"
              disableRipple
              sx={{
                borderColor: "var(--brown)",
                color: "var(--brown)",
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
        <span className="banner-img-container">
          <img src="banner.jpg" width={500} />
        </span>
      </div>
      <QuickDonate />
    </>
  );
}

export default Banner;
