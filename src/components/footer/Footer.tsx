import { Box, Container, Grid, Link, Typography } from "@mui/material";
import "./Footer.css";
import { Facebook, GitHub, Instagram} from "@mui/icons-material";

function Footer() {
  // return (
  //   <>
  //     <Box
  //       sx={{
  //         backgroundColor: "var(--gray)",
  //         display: "flex",
  //         paddingLeft: "1rem",
  //         paddingTop: "1rem",
  //       }}
  //     >
  //       <Stack>
  //         <Box>
  //           <Typography variant="h6" fontWeight={'bold'}>Contact us</Typography>
  //           <Typography>
  //             <span className="footer-bold">Address</span>: 17 ONRA ROAD <br />
  //             LONDON E17 8JD
  //           </Typography>
  //         </Box>
  //         <Box>
  //           <Typography> <span className="footer-bold">Email</span>: example@mail.com </Typography>
  //           <Typography> <span className="footer-bold">Phone</span>: +44 07428820281</Typography>
  //         </Box>
  //       </Stack>
  //     </Box>
  //     <Box
  //       sx={{
  //         backgroundColor: "var(--gray)",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Typography marginY={2}>
  //         Copyright ©️ <Link>Dholar Community</Link> 2023
  //       </Typography>
  //     </Box>
  //   </>
  // );

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              17 Onra Road, London E17 8JD
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Socials
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://github.com/AlphaSap/charity-website"
              color="inherit"
            >
              <GitHub />
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Repository
            </Typography>

            <Link
              href="https://github.com/AlphaSap/charity-website"
              color="inherit"
            >
              <GitHub />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Dholar Community
            </Link>{" "}
            {new Date().getFullYear()}
            <br />
            Charity number: 1203557
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
