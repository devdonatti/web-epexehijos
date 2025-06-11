import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalizadores from "./pages/Catalizadores";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Raees from "./pages/Raees";

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalizadores" element={<Catalizadores />} />
          <Route path="/raees" element={<Raees />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre-nosotros" element={<Nosotros />} />
          <Route path="/servicio" element={<Servicios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
