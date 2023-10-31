import { Box, Grid, Stack } from "@mui/material";
import CustomCard from "./card/CustomCard";
import { useEffect, useState } from "react";
import './Campaigns.css'

type Incident = {
  image: string;
  name: string;
  text: string;
  date: string;
  peopleHelped: number;
  moneyRaised: number;
};

function Campaign() {
  const [cc, setCard] = useState("");

  const cards = () => {
    fetch("incident.json")
      .then((res) => res.json())
      .then((res) => setCard(res));
  };
  useEffect(() => cards(), []);

  // <Grid container xs="auto" direction="row" spacing={2} sx={{ flexGrow: 1, width: '100%'}} >
  // </Grid>
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        marginBottom={5}
      >
        <div className="grid-container">
          <CustomCard name={cc.name} text={cc.text} date={cc.date} />
          <CustomCard name={cc.name} text={cc.text} date={cc.date} />
          <CustomCard name={cc.name} text={cc.text} date={cc.date} />
        </div>
      </Box>
    </>
  );
}

export default Campaign;
