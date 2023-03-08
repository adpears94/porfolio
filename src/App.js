import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./Homepage";
import { Navbar } from "./Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
