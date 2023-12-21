import FormControl from "@mui/material/FormControl";
import "./QuickDonate.css";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import {
  Modal,
  Stack,
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
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAmount(event.target.value as string);
  };

  const buttonClick = () => {
    if (amount === "") {
      return;
    }

    if (amount === "custom") {
      console.log("We got custom");
    } else {
      const a = Number.parseInt(amount);
      if (!a) {
        return;
      }
      // we have a good number and can carry on now
      setOpen(true);
    }
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
        <Button variant="contained" onClick={handleClose} sx={greenButton}>
          To Checkout
        </Button>
        <Button
          variant="text"
          onClick={handleClose}
          sx={{ color: "black", marginX: 2 }}
        >
          Close
        </Button>
      </Box>
    </>
  );

  return (
    <>
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
              <MenuItem value={"5"}>£5</MenuItem>
              <MenuItem value={"10"}>£10</MenuItem>
              <MenuItem value={"20"}>£20</MenuItem>
              <MenuItem value={"50"}>£50</MenuItem>
              <MenuItem value={"100"}>£100</MenuItem>
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
