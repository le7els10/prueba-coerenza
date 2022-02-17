import React, { useEffect, useState } from "react";
import Card from "../Components/Movies/Card";
import GendersComponent from "../Components/Movies/GendersComponent";
import Loading from "../Components/Movies/Loading";
import OrderComponent from "../Components/Movies/OrderComponent";
import useMovies from "../Hooks/useMovies";
const searchIcon = require("../Assets/Icons/Vector.png");

const Movies = () => {
  const { currentMovies, error, getMovies, Genders, IsLoading } = useMovies();
  const [MovieName, setMovieName] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies-view">
      <h1>Peliculas</h1>

      <div className="menu-container">
        <div className="form-container">
          <input
            type="text"
            className="form-container--input"
            value={MovieName}
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
          <button
            type="button"
            className="form-container--button"
            onClick={() => {
              getMovies(undefined, undefined, MovieName);
            }}
          >
            <img src={searchIcon} alt="search" />
          </button>
        </div>
        <GendersComponent getMovies={getMovies} Genders={Genders} />
        <OrderComponent getMovies={getMovies} />
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
