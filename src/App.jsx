import "./App.css";
import { Navbar } from "./App/UI/Navbar";
import { Home } from "./App/Home/index";
import { Projects } from "./App/Projects/index";
import { Footer } from "./App/UI/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
