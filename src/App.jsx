import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Pricing from "./pages/pricing";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>
    </div>
  );
}

export default App;
