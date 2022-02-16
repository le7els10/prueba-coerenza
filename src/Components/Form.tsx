import React from "react";

interface Props {
  value: string;
  action: () => void;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
}

const Form = ({ value, action, setvalue }: Props) => {
  return (
    <div className="row">
      <div className="col m6">
        <label htmlFor="num">Número entero</label>
        <input
          type="email"
          id="num"
          placeholder="Ingresa número entero"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
        />
        <button className="btn show-btn" onClick={action}>
          Mostrar
        </button>
      </div>
    </div>
  );
};

export default Form;
