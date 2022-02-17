import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./Assets/Css/Global.css";

import Home from "./Views/Home";
import Movies from "./Views/Movies";
import Prueba1 from "./Views/Prueba1";
import Prueba2 from "./Views/Prueba2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prueba1" element={<Prueba1 />} />
        <Route path="/prueba2" element={<Prueba2 />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
