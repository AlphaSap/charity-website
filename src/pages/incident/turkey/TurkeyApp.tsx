import { Box, Toolbar } from "@mui/material";
import Navbar from "../../../components/navbar/Navbar";
import Hero from "./components/Hero";
import Footer from "../../../components/footer/Footer";

export const TurkeyApp = () => {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Toolbar />

      <Hero />
      <Box>
        <Footer />
      </Box>
    </>
  );
};
