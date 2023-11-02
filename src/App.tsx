import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Campaign from "./components/campaign/Campaigns";
import MyNav from "./components/navbar/Navbar";
import { Box, Toolbar } from "@mui/material";
import Qualites from "./components/qualities/Qualites";

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
      </Box>
      <Footer />
    </>
  );
}

export default App;
