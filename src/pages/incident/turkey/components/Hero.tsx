import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

type Incident = {
  image: string;
  name: string;
  text: string;
  date: string;
  peopleHelped: number;
  moneyRaised: number;
  learnMoreRe: string;
};

function Hero() {
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

  const [imgList, setImgList] = useState<string[]>([""]);

  const cards = () => {
    fetch("/incident.json")
      .then((res) => res.json())
      .then((res) => setCard(res));

    fetch("http://172.232.171.21:8080/images")
      .then((res) => {
        return res.json();
      })
      .then((res) => setImgList(res));
  };

  const [open, setOpen] = useState(false);
  const [choice, setCh] = useState("");

  const handleOpen = (img: string) => {
    setCh(img);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const modal = () => {
    return (
      <>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          sx={{
            padding: 5,
          }}
        >
          <img onClick={handleClose} src={choice} width={"100%"} />
        </Box>
      </>
    );
  };

  useEffect(() => cards(), []);

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: { xs: 5, md: 10 },
        }}
        gap={4}
      >
        <Typography
          fontSize={{
            sm: "3rem",
            xs: "1.6rem",
            md: "4rem",
          }}
          sx={{ fontWeight: "bold" }}
        >
          Turkey Earthquake Aid
        </Typography>
        <Typography variant="body1">{cc[0].text} </Typography>
        {
          <ImageList
            sx={{ width: { md: 500, xs: "auto" }, height: 450 }}
            cols={3}
            rowHeight={164}
          >
            {imgList.map((item) => (
              <ImageListItem key={item}>
                <img
                  onClick={() => {
                    handleOpen(item);
                  }}
                  srcSet={`${item}`}
                  src={`${item}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        }
        <Modal open={open} onClose={handleClose}>
          {modal()}
        </Modal>
      </Stack>
    </>
  );
}

export default Hero;
