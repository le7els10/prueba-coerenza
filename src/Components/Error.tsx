import React from "react";

interface Props {
  error: boolean;
}

const Error = ({ error }: Props) => {
  return error ? (
    <div className="col m6">
      <div className="card-panel red lighten-2">
        El valor escrito debe ser mayor a 1.
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Error;
