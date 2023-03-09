import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./Homepage";
import { Navbar } from "./Navbar";
import { Footer } from "./components/Footer";
import { About } from "./components/About2";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Home } from "./components/Homepage";


function App() {
  return (
    <Router>
      <Navbar />
        {/* <Route path="/" element={<Navbar />} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
