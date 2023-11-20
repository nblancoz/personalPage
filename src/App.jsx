import "./App.css";
import About from "./components/About/About.jsx";
import Biography from "./components/Biography/Biography.jsx";
import Header from "./components/Header/Header.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Biography />
      <Portfolio />
    </div>
  );
}

export default App;
