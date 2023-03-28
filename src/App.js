import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import { AnimatedRoutes } from "./AnimatedRoutes";
import "./styles.css";
import { Navbar } from "./Navbar";
import { Footer } from "./components/Footer";
// import { About } from "./components/About2";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Home } from "./components/Homepage";

function App() {
  
  
  return (
    <Router >
      <Navbar style={{margin: 0, position: "sticky"}} />
      <AnimatedRoutes/>
           <Footer />
    </Router>
    // <Router>
    //   <Navbar />
    //   {/* <Route path="/" element={<Navbar />} /> */}
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/About" element={<About />} />
    //     <Route path="/Projects" element={<Projects />} />
    //     <Route path="/Contact" element={<Contact />} />
    //   </Routes>
    //  
    // </Router>
  );
}

export default App;
