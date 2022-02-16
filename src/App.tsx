import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./Assets/Css/Global.css";

import Home from "./Views/Home";
import Prueba1 from "./Views/Prueba1";
import Prueba2 from "./Views/Prueba2";

function App() {
  return (
    <div className="container mt-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prueba1" element={<Prueba1 />} />
          <Route path="/prueba2" element={<Prueba2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
