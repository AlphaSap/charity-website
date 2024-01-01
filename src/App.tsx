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
          <SwipeableTextMobileStepper />
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
