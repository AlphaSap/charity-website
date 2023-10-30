import { Stack } from "@mui/material";
import CustomCard from "./card/CustomCard";
import { useEffect, useState } from "react";

type Incident = {
  image: string;
  name: string;
  text: string;
  date: string;
  peopleHelped: number;
  moneyRaised: number;
};

function CurrentCampaign() {
  const [cc, setCard] = useState("");

  const cards = () => {
    fetch("incident.json")
      .then((res) => res.json())
      .then((res) => setCard(res));
  };
  useEffect(() => cards(), []);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <CustomCard name={cc.name} text={cc.text} date={cc.date} />
        <CustomCard name={cc.name} text={cc.text} date={cc.date} />
        <CustomCard name={cc.name} text={cc.text} date={cc.date} />
      </Stack>
    </>
  );
}

export default CurrentCampaign;
