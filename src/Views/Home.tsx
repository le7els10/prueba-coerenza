import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <ul>
        <li>
          <NavLink to="/prueba1">Ir a prueba 1 (serie Fibonacci)</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
