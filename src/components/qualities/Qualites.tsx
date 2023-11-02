import { Stack } from "@mui/material";
import Quotes from "./Quotes";

function Qualites() {
  return (
    <>
      <Stack
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Quotes />
        <Quotes />
        <Quotes />
      </Stack>
    </>
  );
}

export default Qualites;
