import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import {Routes, Route } from "react-router-dom";
import Features from "./Components/Features";
import Works from "./Components/Works";
import Team from "./Components/Team";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
