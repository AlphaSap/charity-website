import { Box, Typography } from "@mui/material";
import CustomCard from "./card/CustomCard";
import { useEffect, useState } from "react";
import "./Campaigns.css";

type Incident = {
  image: string;
  name: string;
  text: string;
  date: string;
  peopleHelped: number;
  moneyRaised: number;
  learnMoreRe: string;
};

function Campaign() {
  const [cc, setCard] = useState<Incident[]>([
    {
      image: "",
      name: "",
      text: "",
      date: "",
      learnMoreRe: "",
      peopleHelped: 0,
      moneyRaised: 0,
    },
  ]);

  const cards = () => {
    fetch("incident.json")
      .then((res) => res.json())
      .then((res) => setCard(res));
  };
  useEffect(() => cards(), []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: 2,
        }}
      >
        <Typography variant="h4" fontFamily={"var(--font-fam)"}>
          Our Campaigns
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={5}
      >
        <div className="grid-container">
          {cc.map((value, index) => (
            <CustomCard
              name={value.name}
              text={value.text}
              date={value.date}
              key={index}
              image={value.image}
              learnMoreRe={value.learnMoreRe}
            />
          ))}
        </div>
      </Box>
    </>
  );
}

export default Campaign;
