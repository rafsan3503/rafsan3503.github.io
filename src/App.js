import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Treasury from "./components/Treasury";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Overview from "./components/Overview";
import Tokenomics from "./components/Tokenomics";
import Utility from "./components/Utility";
import Team from "./components/Team";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import NFTs from "./components/NFTs";
// ..
AOS.init();

function App() {
  return (
    <div className="container mx-auto font-poppins App">
      <Navbar />
      <Banner />
      <Treasury />
      <Overview />
      <Tokenomics />
      <NFTs />
      <Roadmap />
      <Utility />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
