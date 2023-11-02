import { Box, Icon, IconButton, Paper, Stack, Typography } from "@mui/material";

// import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import HandshakeIcon from "@mui/icons-material/Handshake";
import CurrencyPound from "@mui/icons-material/CurrencyPound";

// interface QuotesProp {
//   text?: string;
//   logo?: string;
// }

function Quotes() {
  return (
    <>
      <Stack direction={"row"} spacing={"1rem"}>
        <Paper
          style={{
            width: 80, // Set the desired width and height for the circle
            height: 80,
            borderRadius: "50%", // Make it circular by setting the border-radius to 50%
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'var(--gray)'
          }}
        >
          <CurrencyPound style={{
            width: 40,
            height: 40,
          }}/>
        </Paper>
        <Box
          style={{
            backgroundColor: 'var(--gray)',
            borderLeft: '5px solid var(--blue)',
            padding: 10
          }}
        >
          <Typography 
            fontFamily={"var(--font-fam)"}
          >
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

export default Quotes;
