import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About.jsx";
import Biography from "./components/Biography/Biography.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Biography" element={<Biography />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={[<Contact />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
