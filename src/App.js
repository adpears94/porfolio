import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Homepage";
import { Navbar } from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
