import React from "react";
import usePrueba1 from "../Hooks/usePrueba1";
import { NavLink } from "react-router-dom";

const Prueba1 = () => {
  const { value, setvalue, validateValue, error, Fibonacci } = usePrueba1();

  return (
    <div>
      <div className="d-flex align-items-center">
        <NavLink to="/" className="btn btn-dark me-2 ">
          Atras
        </NavLink>

        <h2>Ejercicio 1</h2>
      </div>
      <div className="form-container row">
        <div className="col-md-6">
          <label htmlFor="num" className="form-label">
            Número entero
          </label>
          <input
            type="email"
            className="form-control"
            id="num"
            placeholder="Ingresa número entero"
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6 d-flex align-items-end">
          <button className="btn btn-success" onClick={validateValue}>
            Mostrar
          </button>
        </div>
        {error && (
          <div className="col-md-6 mt-2">
            <div className="alert alert-danger" role="alert">
              El valor escrito debe ser mayor a 1.
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-md-6 p-3">{Fibonacci}</div>
      </div>
    </div>
  );
};

export default Prueba1;
