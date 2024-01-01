import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Campaign from "./components/campaign/Campaigns";
import MyNav from "./components/navbar/Navbar";
import { Box, Divider, Toolbar } from "@mui/material";
import JoinUs from "./components/joinus/JoinUs";
import NewsLetter from "./components/newsletter/NewsLetter";
// import { Qualities } from "./components/qualitiesAgain/Qualities";
import SwipeableTextMobileStepper from "./components/campaign/imager/CarouselImages";
// import CarAgain from "./components/campaign/imager/CarAgain";

function App() {
  const steps = [
    `/caro/4.jpg`,
    `/caro/3.jpg`,
    `/caro/2.jpg`,
    `/caro/1.jpg`,
    `/caro/5.jpg`,
  ];

  const indi = [
    `/caro/india/5.jpg`,
    `/caro/india/4.jpg`,
    `/caro/india/3.jpg`,
    `/caro/india/2.jpg`,
    `/caro/india/1.jpg`,
  ];

  return (
    <>
      <MyNav />
      <Box>
        <main>
          <Toolbar />
          <Toolbar />
          <Banner />
          <Campaign />
          <Divider />
          <SwipeableTextMobileStepper
            imgs={steps}
            name="Our Efforts in Morocco"
          />
          <Divider />
          <SwipeableTextMobileStepper
            imgs={indi}
            name="Food Program in India"
          />
          <Divider />
          <JoinUs />
          <NewsLetter />
        </main>
      </Box>
      <Footer />
    </>
  );
}

export default App;
