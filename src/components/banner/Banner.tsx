import { Box, Button, Stack, Typography } from "@mui/material";
import "./Banner.css";
import QuickDonate from "./quick_donate/QuickDonate";
import CustomLink from "../CustomLink";

function Banner() {
  return (
    <>
      <div className="banner-container">
        <Box
          sx={{
            padding: "1rem",
            maxWidth: "1000px",
          }}
        >
          <Typography fontFamily={"var(--font-fam)"} variant="h4">
            Caring Communites, Stronger Tomorrow
          </Typography>
          <Typography
            fontFamily={"var(--font-fam)"}
            sx={{
              marginBottom: 1,
            }}
          >
            Join us in making a difference. Together, we build a stronger
            tomorrow, one act of kindness at a time.
          </Typography>
          <Stack spacing={2} direction="row">
            <CustomLink to="/join">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--green)",
                  color: "var(--black)",
                  "&:hover": {
                    backgroundColor: "var(--hover-green)",
                    color: "var(--black)",
                  },
                }}
              >
                Join Now!
              </Button>
            </CustomLink>
            <CustomLink to="/about">
              <Button
                variant="outlined"
                sx={{
                  borderColor: "var(--brown)",
                  color: "var(--brown)",
                  "&:hover": {
                    borderColor: "var(--brown)",
                    color: "var(--black)",
                  },
                }}
              >
                Learn More
              </Button>
            </CustomLink>
          </Stack>
        </Box>
        <span className="banner-img-container">
          <img
            className="banner-img"
            src="exp/IMG-20231211-WA0004.jpg"
            loading="eager"
            width={500}
          />
        </span>
      </div>
      <QuickDonate />
    </>
  );
}

export default Banner;
