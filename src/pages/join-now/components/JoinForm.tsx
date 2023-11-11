import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactPhoneInput from "react-phone-input-material-ui";
import getTheme from "../../../theme";

const countries = ["india", "US", "jp"];
const theme = getTheme();

function JoinForm() {
  const [value, _setValue] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimer();
  };
  const handleClose = () => {
    setOpen(false);
  };

  const setTimer = () => {
    setTimeout(function () {
      handleClose();
      //TODO: add a alert and link back to home page
      console.log("ksdh");
    }, 1000);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontFamily={"var(--font-fam)"}
            sx={{
              color: "var(--black)",
              alignItems: "center",
              justifySelf: "center",
            }}
          >
            Join Dholar Community
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          paddingY={5}
          paddingX={{
            xs: 5,
            md: 30,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h6" fontFamily={"var(--font-fam)"}>
              Personal Information
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              size="medium"
              id="first-name"
              label="First Name"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="last-name"
              size="medium"
              label="Last Name"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              id="email"
              size="medium"
              label="Email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ReactPhoneInput
              value={value}
              onChange={() => console.log(value)} // passed function receives the phone value
              component={TextField}
              country={"gb"}
              placeholder=""
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontFamily={"var(--font-fam)"}>
              Address Information
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="address-one"
              size="medium"
              label="Address Line One"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="address-two"
              size="medium"
              label="Address Line two"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth id="city" size="medium" label="City" />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="state"
              size="medium"
              label="State/Province/Region"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              id="postal-code"
              size="medium"
              label="Postcode/Zipcode"
            />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countries}
              renderInput={(params) => (
                <TextField {...params} label="Countries" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontFamily={"var(--font-fam)"}>
              Please tell us your reason to join.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              label=""
              placeholder="Your Message"
              multiline
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            gap={2}
          >
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                backgroundColor: "var(--green)",
                color: "var(--black)",
                "&:hover": {
                  backgroundColor: "var(--hover-green)",
                  color: "var(--black)",
                },
              }}
            >
              {" "}
              Submit{" "}
            </Button>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Button variant="text" > Go Back </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default JoinForm;
