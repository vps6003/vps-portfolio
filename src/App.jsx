import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import {Home} from "./containers/HomePage";
import {Contact} from "./containers/ContactPage";
import {About} from "./containers/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
