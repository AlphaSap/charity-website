import {
  Grid,
  Typography,
} from "@mui/material";

interface QuotesProp {
  text?: string;
  logo?: string;
}

function Quotes(p: QuotesProp) {
  return (
    <>
      <Grid container>
        <Grid
          item
          style={{
            backgroundColor: "var(--gray)",
            borderLeft: "5px solid var(--blue)",
            padding: 10,
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
