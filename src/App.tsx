import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Campaign from "./components/campaign/Campaigns";
import MyNav from "./components/navbar/Navbar";
import { Box, Divider, Toolbar } from "@mui/material";
import Qualites from "./components/qualities/Qualites";
import JoinUs from "./components/joinus/JoinUs";
import NewsLetter from "./components/newsletter/NewsLetter";

function App() {
  return (
    <>
      <MyNav />
      <Box>
        <Toolbar />
        <Toolbar />
        <Banner />
        <Campaign />
        <Qualites />
        <Divider />
        <JoinUs />
        <NewsLetter />
      </Box>
      <Footer />
    </>
  );
}

export default App;
