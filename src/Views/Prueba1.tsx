import React from "react";
import { NavLink } from "react-router-dom";
import Error from "../Components/Error";
import Form from "../Components/Form";
import usePruebas from "../Hooks/usePruebas";

const Prueba1 = () => {
  const { value, setvalue, tryDraw, error, Fibonacci } = usePruebas();

  return (
    <div className="prueba1-container">
      <div>
        <NavLink to="/" className="btn ">
          Atras
        </NavLink>

        <h4>Ejercicio 1</h4>
      </div>

      <Form value={value} action={tryDraw} setvalue={setvalue} />

      <div className="row">
        <Error error={error} />
        <div className="col m6 p-3">{Fibonacci}</div>
      </div>
    </div>
  );
};

export default Prueba1;
