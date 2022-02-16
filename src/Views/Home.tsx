import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Menu</h3>
      <ul className="collection">
        <li className="collection-item">
          <NavLink to="/prueba1">Ir a prueba 1 (serie Fibonacci)</NavLink>
        </li>
        <li className="collection-item">
          <NavLink to="/prueba2">
            Ir a prueba 2 (multiplos de 3 por la palabra AKE)
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
