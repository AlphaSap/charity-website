import FormControl from "@mui/material/FormControl";
import "./QuickDonate.css";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

function QuickDonate() {
  const [amount, setAmount] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAmount(event.target.value as string);
  };

  return (
    <div className="qd-container">
      <p className="qd-p"> Quick Donate </p>

      <Box sx={{ minWidth: 100, fontSize:"2em" , marginRight: 2}}>
        <FormControl fullWidth size="small">
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
          </Select>
        </FormControl>
      </Box>
      <form className="qd-form">
        <input
          className="qd-input"
          placeholder="Custom amount"
          type="text"
          name="cdonate"
        />
      </form>

      <Button size="small" variant="contained" sx={{ fontFamily: 'Outfit'}}>
        {" "}
        Donate{" "}
      </Button>
    </div>
  );
}

export default QuickDonate;
