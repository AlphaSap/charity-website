import { Box, Button, Stack, ThemeProvider, Typography } from "@mui/material";

import "./JoinUs.css";
import getTheme from "../../theme";
import CustomLink from "../CustomLink";
("../../theme.tsx");

function JoinUs() {
  return (
    <>
      <Stack
        sx={{
          paddingX: { xs: "2rem", md: "5rem" },
          paddingTop: "3rem",

          flexDirection: { xs: "column", md: "row" },
        }}
        direction={"row"}
      >
        <Box>
          <ThemeProvider theme={getTheme()}>
            <Typography
              variant="h3"
              fontFamily={"var(--font-fam)"}
              fontWeight={"bold"}
              margin={1}
            >
              Join us!
            </Typography>
            <Typography
              fontFamily={"var(--font-fam)"}
              margin={1}
              fontSize={"1.2rem"}
            >
              Together, let's create a world where compassion knows no bounds,
              and every individual can find solace in the helping hands of a
              caring community. Discover the profound joy of giving back as a
              volunteer, you’ll touch lives, create bonds, and be a force for
              positive change.
              <span className="red-text"> Join us today! </span>
            </Typography>
          </ThemeProvider>
          <CustomLink to="/join">
            <Button
              variant="outlined"
              size="large"
              sx={{
                margin: 1,
                borderColor: "var(--brown)",
                color: "var(--brown)",
                "&:hover": {
                  borderColor: "var(--brown)",
                  color: "var(--black)",
                },
                marginBottom: 3,
              }}
            >
              Become a volunteer
            </Button>
          </CustomLink>
        </Box>
        <span className="img-con">
          <img
            className="join-us-img"
            loading="lazy"
            src="remain-final.jpeg"
            width={"450vh"}
          />
        </span>
      </Stack>
    </>
  );
}

export default JoinUs;
