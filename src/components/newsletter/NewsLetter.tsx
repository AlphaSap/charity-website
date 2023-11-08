import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import "./NewsLetter.css";

function NewsLetter() {
  const [value, setValue] = useState("");
  const [al, setAl] = useState(false);

  const sendValue = () => {
    //TODO:
    console.log(value);
    setValue("");
    setAl(true);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--black)",
          width: "100%",
          marginTop: "1rem",
          padding: "3rem",
        }}
      >
        <Typography
          variant="h4"
          color={"var(--off-white)"}
          fontFamily={"var(--font-fam)"}
        >
          SIGN UP TO OUR NEWSLETTER
        </Typography>

        <input
          placeholder="ENTER YOUR EMAIL"
          type="text"
          className="news-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button
          variant="outlined"
          onClick={sendValue}
          sx={{
            color: "var(--off-white)",
            backgroundColor: "var(--black)",
            borderColor: "var(--off-white)",
            "&:hover": {
              borderColor: "var(--green)",
              color: "var(--green)",
            },
          }}
        >
          SIGN UP
        </Button>
        <Snackbar autoHideDuration={1500} open={al} onClose={() => {
          setAl(false)
        }}>
          <Alert
            sx={{
              marginTop: "5px",
              padding: 1,
            }}
            severity="success"
          >
            Subscribed!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}

export default NewsLetter;
