import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Campaign from "./components/campaign/Campaigns";
import MyNav from "./components/navbar/Navbar";
import { Box, Toolbar } from "@mui/material";

function App() {
  return (
    <>
      <MyNav />
      <Box>
        <Toolbar />
        <Banner />
        <Campaign />
      </Box>
      <Footer />
    </>
  );
}

export default App;
