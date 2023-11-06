import FormControl from "@mui/material/FormControl";
import "./QuickDonate.css";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import { Stack, ThemeProvider, Typography, createTheme } from "@mui/material";

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

function QuickDonate() {
  const [amount, setAmount] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAmount(event.target.value as string);
  };
  return (
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
        <Typography variant="h2">Quick Donate</Typography>
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
            <MenuItem value={5}>£5</MenuItem>
            <MenuItem value={10}>£10</MenuItem>
            <MenuItem value={20}>£20</MenuItem>
            <MenuItem value={50}>£50</MenuItem>
            <MenuItem value={100}>£100</MenuItem>
            <MenuItem value={-1}>Custom</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        size="medium"
        variant="contained"
        sx={{
          fontFamily: "var(--font-fam)",
          color: "var(--black)",
          backgroundColor: "var(--green)",
          "&:hover": {
            backgroundColor: "var(--hover-green)",
            color: "var(--black)",
          },
        }}
      >
        Donate
      </Button>
    </Stack>
  );
}

export default QuickDonate;
