import React from "react";

interface Props {
  name: string;
}
const GendersCheck = ({ name }: Props) => {
  return (
    <label className="checkboxes--item">
      <input type="checkbox" className="filled-in" />
      <span>{name}</span>
    </label>
  );
};

export default GendersCheck;
