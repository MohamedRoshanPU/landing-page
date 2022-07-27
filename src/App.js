import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./Components/Features";
import Works from "./Components/Works";
import Team from "./Components/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route  path="/landing-page" element={<Home />} />
          <Route path="/langing-page/features" element={<Features />} />
          <Route path="/landing-page/projects" element={<Works />} />
          <Route path="/landing-page/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
