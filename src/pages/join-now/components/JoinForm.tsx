import {
    Alert,
  Autocomplete,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactPhoneInput from "react-phone-input-material-ui";
import getTheme from "../../../theme";
import { useNavigate } from "react-router-dom";

const countries = [
  "India",
  "United States of America",
  "Japan",
  "United Kingdom",
];
const theme = getTheme();

type PersonalInformation = {
  firstname: InformationField<string>;
  lastname: InformationField<string>;
  email: InformationField<string>;
  phone?: InformationField<string>;
};

type InformationField<T> = {
  value?: T;
  error: boolean;
};

type AddressInformation = {
  address_one: InformationField<string>;
  address_two?: InformationField<string>;
  city: InformationField<string>;
  state?: InformationField<string>;
  postal_code: InformationField<string>;
  country: InformationField<string>;
};

function JoinForm() {
  const [open, setOpen] = useState(false);
  const history = useNavigate();

  const [personal_info, setPI] = useState<PersonalInformation>({
    firstname: { error: false, value: "" },
    lastname: { error: false, value: "" },
    email: { error: false, value: "" },
    phone: { error: false, value: undefined },
  });
  const [address_info, setAI] = useState<AddressInformation>({
    address_one: { error: false, value: "" },
    address_two: { error: false, value: undefined },
    city: { error: false, value: "" },
    state: { error: false, value: undefined },
    postal_code: { error: false, value: "" },
    country: { error: false, value: countries[3] },
  });
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    let go_back = true;

    for (const add in address_info) {
      if (add === "address_two" || add === "state") {
        continue;
      }
      //@ts-ignore
      const oldInfo: InformationField<string> = address_info[add];
      if (oldInfo.value === "" || oldInfo.value === undefined) {
        oldInfo.error = true;
        go_back = false;
      }
    }
    for (const add in personal_info) {
      if (add === "phone") {
        continue;
      }
      //@ts-ignore
      const oldInfo: InformationField<string> = personal_info[add];
      if (oldInfo.value === "" || oldInfo.value === undefined) {
        oldInfo.error = true;
        go_back = false;
      }
    }

    setTimeout(function () {
      handleClose();
      if (go_back) {
        history("/");
      } else {
        setAlert(true)
      }
    }, 1000);

    console.log("Before");
  };
  const handleClose = () => {
    setOpen(false);
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
              error={personal_info.firstname.error}
              required
              fullWidth
              size="medium"
              id="first-name"
              label="First Name"
              value={personal_info.firstname.value}
              onChange={(e) => {
                setPI((prev) => ({
                  ...prev,
                  firstname: { error: false, value: e.target.value },
                }));
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              error={personal_info.lastname.error}
              required
              id="last-name"
              size="medium"
              label="Last Name"
              onChange={(e) => {
                setPI((prev) => ({
                  ...prev,
                  lastname: { error: false, value: e.target.value },
                }));
              }}
              value={personal_info.lastname.value}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              error={personal_info.email.error}
              required
              id="email"
              size="medium"
              label="Email"
              value={personal_info.email.value}
              onChange={(e) => {
                setPI((prev) => ({
                  ...prev,
                  email: { error: false, value: e.target.value },
                }));
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ReactPhoneInput
              value={personal_info.phone?.value}
              component={TextField}
              country={"gb"}
              placeholder=""
              onChange={(e) => {
                setPI((prev) => ({
                  ...prev,
                  //@ts-ignore
                  phone: { error: false, value: e.value },
                }));
              }}
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
              error={address_info.address_one.error}
              required
              id="address-one"
              size="medium"
              label="Address Line One"
              value={address_info.address_one.value}
              onChange={(e) => {
                setAI((prev) => ({
                  ...prev,
                  address_one: { error: false, value: e.target.value },
                }));
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="address-two"
              size="medium"
              label="Address Line two"
              value={address_info.address_two?.value}
              onChange={(e) => {
                setAI((prev) => ({
                  ...prev,
                  address_two: { error: false, value: e.target.value },
                }));
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              value={address_info.city.value}
              error={address_info.city.error}
              required
              fullWidth
              id="city"
              size="medium"
              label="City"
              onChange={(e) => {
                setAI((prev) => ({
                  ...prev,
                  city: { error: false, value: e.target.value },
                }));
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              value={address_info.state?.value}
              fullWidth
              id="state"
              size="medium"
              label="State/Province/Region"
              onChange={(e) => {
                setAI((prev) => ({
                  ...prev,
                  state: { error: false, value: e.target.value },
                }));
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              id="postal-code"
              error={address_info.postal_code.error}
              size="medium"
              required
              label="Postcode"
              value={address_info.state?.value}
              onChange={(e) => {
                setAI((prev) => ({
                  ...prev,
                  postal_code: { error: false, value: e.target.value },
                }));
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countries}
              defaultValue={"United Kingdom"}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  onChange={(e) => {
                    setAI((prev) => ({
                      ...prev,
                      country: { error: false, value: e.target.value },
                    }));
                  }}
                />
              )}
              value={address_info.country.value}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

            <Snackbar
              autoHideDuration={1500}
              open={alert}
              onClose={() => {
                setAlert(false);
              }}
            >
              <Alert
                sx={{
                  marginTop: "5px",
                  padding: 1,
                }}
                severity="error"
              >
                Enter all the required fields
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default JoinForm;
