import React, { useState } from "react";
import { useEffect } from "react";
const arrowIcon = require("../../Assets/Icons/ArrowIcon.png");

interface Props {
  getMovies: (genders?: number[], order?: any) => void;
}

const OrderComponent = ({ getMovies }: Props) => {
  const [ShowMenu, setShowMenu] = useState(false);

  const [Options, setOptions] = useState({
    date: 0,
    grade: 0,
  });

  useEffect(() => {
    getMovies(undefined, Options);
  }, [Options]);

  const handleOptions = (value: number, type: string) => {
    setOptions({ ...Options, [type]: value });
  };

  return (
    <div className="order-container">
      <button
        className="order-container--button"
        onClick={() => {
          setShowMenu(!ShowMenu);
        }}
      >
        Ordenar
        <div className={`order-container--button--img ${ShowMenu && "active"}`}>
          <img src={arrowIcon} alt="order" />
        </div>
      </button>

      <div className={`order-container--options ${!ShowMenu && "hidden"} `}>
        <h5>Fecha</h5>

        <div className={`option ${Options.date === 1 && "active"}`}>
          <input
            type="radio"
            id="news"
            value="1"
            name="new-old"
            onChange={() => {
              handleOptions(1, "date");
            }}
          />
          <label htmlFor="news" className="option--label ">
            Nuevos - Antiguos
          </label>
        </div>
        <div className={`option ${Options.date === 2 && "active"}`}>
          <input
            type="radio"
            id="olds"
            value="2"
            name="new-old"
            onChange={() => {
              handleOptions(2, "date");
            }}
          />
          <label htmlFor="olds" className="option--label">
            Antiguos - Nuevos
          </label>
        </div>

        <h5 className="mt">Calificación</h5>
        <div className={`option ${Options.grade === 1 && "active"}`}>
          <input
            type="radio"
            id="low-points"
            value="1"
            name="points"
            onChange={() => {
              handleOptions(1, "grade");
            }}
          />
          <label htmlFor="low-points" className="option--label">
            0 - 10 puntos
          </label>
        </div>
        <div className={`option ${Options.grade === 2 && "active"}`}>
          <input
            type="radio"
            id="up-points"
            value="2"
            name="points"
            onChange={() => {
              handleOptions(2, "grade");
            }}
          />
          <label htmlFor="up-points" className="option--label">
            10 - 0 puntos
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
