import { Button, Grid, Typography } from "@mui/material";
import "./JoinUs.css";

function JoinUs() {
  return (
    <>
      <Grid container sx={{ padding: "9rem", paddingTop: "3rem" }}>
        <Grid item xs>
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
            fontSize={"1.5rem"}
          >
            Discover the profound joy of giving back as a volunteer, you’ll
            touch lives, create bonds, and be a force for positive change.
            <span className="red-text"> Join us today! </span>
          </Typography>
          <Button
            variant="outlined"
            sx={{
              margin: 1,
              borderColor: "var(--brown)",
              color: "var(--brown)",
              "&:hover": {
                borderColor: "var(--brown)",
                color: "var(--black)",
              },
            }}
          >
            Join us
          </Button>
        </Grid>
        <Grid
          xs
          item
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="joinus.png" width={"450vh"} />
        </Grid>
      </Grid>
    </>
  );
}

export default JoinUs;
