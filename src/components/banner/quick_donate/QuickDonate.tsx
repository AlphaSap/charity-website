import FormControl from "@mui/material/FormControl";
import "./QuickDonate.css";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import {
  Backdrop,
  CircularProgress,
  Grid,
  Modal,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: "var(--font-fam)",
      fontSize: "1.5rem",
      "@media (max-width: 420px)": {
        fontSize: "1rem",
      },
    },
  },
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--off-white)",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function QuickDonate() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [openCustom, setOpenCustom] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCheckOut = () => {
    fetch("https://charity-web-server.vercel.app/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        setLoading(false);
        window.location = url;
      })
      .catch((e) => {
        console.log(e);
      });

    setLoading(true);
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAmount(event.target.value as string);
  };

  const buttonClick = () => {
    if (amount === "") {
      return;
    }

    if (amount === "custom") {
      console.log("We got custom");
      setAmount("");
      setOpenCustom(true);
    } else {
      const a = Number.parseInt(amount);
      if (!a) {
        return;
      }
      // we have a good number and can carry on now
      setOpen(true);
    }
  };

  function isNumeric(str: any) {
    if (typeof str != "string") return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    );
  }

  const handleCustomCheckOut = () => {
    console.log("lcajkh " + customAmount);
    if (customAmount === 0) {
      setOpenCustom(false);
      return;
    }

    fetch("https://charity-web-server.vercel.app/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: customAmount,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        setLoading(false);
        window.location = url;
      })
      .catch((e) => {
        console.log(e);
      });

    setLoading(true);
    setOpenCustom(false);
  };

  const greenButton = {
    fontFamily: "var(--font-fam)",
    color: "var(--black)",
    backgroundColor: "var(--green)",
    "&:hover": {
      backgroundColor: "var(--hover-green)",
      color: "var(--black)",
    },
  };

  const standardAmountModal = (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        £{amount} One time Donation
      </Typography>
      <Typography id="modal-modal-title" variant="body1" component="h2">
        Let's go to checkout and complete the Donation!!
      </Typography>

      <Box
        marginTop={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="contained"
          onClick={handleCustomCheckOut}
          sx={greenButton}
        >
          To Checkout
        </Button>
        <Button
          variant="text"
          onClick={() => setOpen(false)}
          sx={{ color: "black", marginX: 2 }}
        >
          Close
        </Button>
      </Box>
    </>
  );

  const custom = (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Enter the amount you wish to donate!
      </Typography>
      <Typography id="modal-modal-title" variant="body1" component="h2">
        Let's go to checkout and complete the Donation!!
      </Typography>

      <Grid container gap={1} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Enter Amount"
            variant="outlined"
            value={customAmount}
            onChange={(e) => {
              const am = Number.parseInt(e.target.value);
              if (!am) {
                return;
              }
              setCustomAmount(am);
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            onClick={handleCustomCheckOut}
            sx={greenButton}
          >
            To Checkout
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="text"
            onClick={() => setOpenCustom(false)}
            sx={{ color: "black", marginX: 2 }}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </>
  );

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={style}>{standardAmountModal}</Box>
      </Modal>

      <Modal
        open={openCustom}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={style}>{custom}</Box>
      </Modal>
      <Stack
        spacing={3}
        direction={"row"}
        sx={{
          justifyContent: "center",
          boxShadow: 2,
          padding: 3,
          minWidth: 100,
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography
            sx={{
              justifySelf: "center",
              display: "flex",
              alignSelf: "center",
            }}
            variant="h2"
          >
            Quick Donate
          </Typography>
        </ThemeProvider>

        <Box sx={{ minWidth: 100 }}>
          <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={amount}
              label="Amount"
              onChange={handleChange}
            >
              {/* Should change this to ids that match the backend later on, TODO  */}
              <MenuItem value={"5"} id="1">
                £5
              </MenuItem>
              <MenuItem value={"10"} id="2">
                £10
              </MenuItem>
              <MenuItem value={"20"} id="3">
                £20
              </MenuItem>
              <MenuItem value={"50"} id="4">
                £50
              </MenuItem>
              <MenuItem value={"100"} id="5">
                £100
              </MenuItem>
              <MenuItem value={"custom"} id="6">
                Custom
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          onClick={buttonClick}
          size="medium"
          variant="contained"
          sx={greenButton}
        >
          Donate
        </Button>
      </Stack>
    </>
  );
}

export default QuickDonate;
