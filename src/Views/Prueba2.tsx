import React from "react";
import { NavLink } from "react-router-dom";
import Error from "../Components/Error";
import Form from "../Components/Form";
import usePruebas from "../Hooks/usePruebas";

const Prueba2 = () => {
  const { value, setvalue, tryDrawMultiplos, error, Multiplos } = usePruebas();

  return (
    <div className="prueba2-container">
      <div>
        <NavLink to="/" className="btn  ">
          Atras
        </NavLink>

        <h4>Ejercicio 2</h4>
      </div>

      <Form value={value} action={tryDrawMultiplos} setvalue={setvalue} />

      <div className="row">
        <Error error={error} />
        <div className="col m6 p-3">{Multiplos}</div>
      </div>
    </div>
  );
};

export default Prueba2;
