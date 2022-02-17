import React from "react";
import { Genre } from "../../Interfaces/Movies";

interface Props {
  genre: Genre;
  isChecked: (id: number) => boolean;
  selectGender: (id: number) => void;
}
const GendersCheck = ({ genre, isChecked, selectGender }: Props) => {
  return (
    <label className="checkboxes--item">
      <input
        type="checkbox"
        className="filled-in"
        value={genre.id}
        checked={isChecked(genre.id)}
        onChange={() => {
          selectGender(genre.id);
        }}
      />
      <span>{genre.name}</span>
    </label>
  );
};

export default GendersCheck;
