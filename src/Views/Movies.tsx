import React, { useEffect, useState } from "react";
import Card from "../Components/Movies/Card";
import GendersComponent from "../Components/Movies/GendersComponent";
import Loading from "../Components/Movies/Loading";
import useMovies from "../Hooks/useMovies";
const searchIcon = require("../Assets/Icons/Vector.png");
const arrowIcon = require("../Assets/Icons/ArrowIcon.png");

const Movies = () => {
  const { currentMovies, error, getMovies, Genders, IsLoading } = useMovies();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies-view">
      <h1>Peliculas</h1>

      <div className="menu-container">
        <div className="form-container">
          <input type="text" className="form-container--input" />
          <button type="button" className="form-container--button">
            <img src={searchIcon} alt="search" />
          </button>
        </div>
        <GendersComponent getMovies={getMovies} Genders={Genders} />
        <div className="order-container">
          <button className="order-container--button">
            Ordenar
            <div className="order-container--button--img">
              <img src={arrowIcon} alt="order" />
            </div>
          </button>

          <div className="order-container--options">
            <h5>Fecha</h5>

            <div className="option">
              <input type="radio" id="news" value="1" name="new-old" />
              <label htmlFor="news" className="option--label">
                Nuevos - Antiguos
              </label>
            </div>
            <div className="option">
              <input type="radio" id="olds" value="2" name="new-old" />
              <label htmlFor="olds" className="option--label">
                Antiguos - Nuevos
              </label>
            </div>

            <h5 className="mt">Calificación</h5>
            <div className="option active">
              <input type="radio" id="low-points" value="1" name="points" />
              <label htmlFor="olds" className="option--label">
                0 - 10 puntos
              </label>
            </div>
            <div className="option">
              <input type="radio" id="low-points" value="2" name="points" />
              <label htmlFor="olds" className="option--label">
                10 - 0 puntos
              </label>
            </div>
          </div>
        </div>
      </div>
      {IsLoading ? (
        <Loading />
      ) : (
        <div className="cards-container">
          {error && (
            <p>
              ha ocurrido un error con el servidor node, es posible que el
              servidor aun no se ha inicializado.
            </p>
          )}
          {currentMovies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
