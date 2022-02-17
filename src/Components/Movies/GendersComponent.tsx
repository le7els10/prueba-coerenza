import React, { useEffect, useState } from "react";
import useMovies from "../../Hooks/useMovies";
import GendersCheck from "./GendersCheck";
import { Genre } from "../../Interfaces/Movies";
const filterIcon = require("../../Assets/Icons/FilterIcon.png");

interface Props {
  getMovies: (genders?: number[]) => void;
  Genders: Genre[];
}

const GendersComponent = ({ getMovies, Genders }: Props) => {
  const [genderSelected, setgenderSelected] = useState<number[]>([]);
  const [ShowMenu, setShowMenu] = useState(false);

  useEffect(() => {
    getMovies(genderSelected);
  }, [genderSelected]);

  const selectGender = (gen: number) => {
    let found = genderSelected.find((id, index) => {
      return id === gen && id;
    });

    if (!found) {
      let newArr: number[] = [...genderSelected, gen];

      setgenderSelected(newArr);
    } else {
      setgenderSelected(
        genderSelected.filter((genders) => {
          return genders !== found;
        })
      );
    }
  };

  const isChecked = (gen: number) => {
    let found = genderSelected.find((id) => {
      return gen === id;
    });

    return found ? true : false;
  };

  return (
    <div className="filter-container">
      <button
        className="filter-container--button"
        onClick={() => {
          setShowMenu(!ShowMenu);
        }}
      >
        <img src={filterIcon} alt="filter" />
      </button>
      <div className={`filter-container--checkboxes ${!ShowMenu && "hidden"} `}>
        <h5>Genero</h5>
        <div className="checkboxes">
          {Genders.map((genre, index) => (
            <GendersCheck
              key={index}
              genre={genre}
              selectGender={selectGender}
              isChecked={isChecked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GendersComponent;
