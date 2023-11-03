import {
  Grid,
  Typography,
} from "@mui/material";

import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HandshakeIcon from "@mui/icons-material/Handshake";

interface QuotesProp {
  text?: string;
  logo?: string;
}

function Quotes(p: QuotesProp) {
  const logo = () => {
    if (p.logo === "pound") {
      return (
        <CurrencyPoundIcon
          style={{
            width: 40,
            height: 40,
          }}
        />
      );
    } else if (p.logo === "hand") {
      return (
        <HandshakeIcon
          style={{
            width: 40,
            height: 40,
          }}
        />
      );
    } else {
      return (
        <FavoriteIcon
          style={{
            width: 40,
            height: 40,
          }}
        />
      );
    }
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          style={{
            backgroundColor: "var(--gray)",
            borderLeft: "5px solid var(--blue)",
            padding: 11,
          }}
          xs
        >
          <Typography
            fontFamily={"var(--font-fam)"}
            fontWeight={"bold"}
            fontSize={'1rem'}
            sx={{
              padding: 2,
            }}
          >
            {p.text}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Quotes;
