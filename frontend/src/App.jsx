import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Parfum from "./Pages/Parfum";
import Nouveaute from "./Pages/Nouveaute";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="px-2 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/parfums" element={<Parfum />} />
          <Route path="/nouveaute" element={<Nouveaute />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
