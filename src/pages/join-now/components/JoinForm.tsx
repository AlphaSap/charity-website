import { Box, Grid, TextField, Typography } from "@mui/material";

function JoinForm() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h2" fontFamily={'var(--font-fam)'} sx={{ color: 'var(--black)'}}>
          Join Dholar Community
        </Typography>
      </Box>

      <Grid container gap={5} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',

        flexDirection: {
          xs: 'column',
          md: 'row'
        }

      }}>

        <Grid item>
          <TextField required id="first-name" label="First Name" />
        </Grid>
        <Grid item>
          <TextField required id="last-name" label="Last Name" />
        </Grid>
        <Grid item>
          <TextField required id="email" label="Email Address" />
        </Grid>
        <Grid item>
          <TextField required id="phone-number" label="Phone Number" />
        </Grid>
      </Grid>
    </>
  );
}

export default JoinForm;
