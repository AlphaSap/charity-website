import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Campaign from "./components/campaign/Campaigns";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Campaign />
      <Footer />
    </>
  );
}

export default App;
