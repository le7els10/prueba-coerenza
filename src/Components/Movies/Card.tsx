import React from "react";
import { Result } from "../../Interfaces/Movies";
import Stars from "./Stars";

interface Props {
  movie: Result;
}

const Card = ({ movie }: Props) => {
  return (
    <div className="card">
      <h2 className="card--title">{movie.title}</h2>
      <div className="card--image">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className="card--sinopsis">
        <p className="card--text">{`${movie.overview.slice(0, 250)}...`}</p>
        <div className="card--vars-container">
          <p className="card--vars">
            <span>Titulo: </span>
            {movie.title}
          </p>
          <p className="card--vars">
            <span>Calificación: </span>
            <Stars puntuation={movie.vote_average} />
          </p>
          <p className="card--vars">
            <span>Genero: </span>
            {movie.genre_ids}
          </p>
          <p className="card--vars">
            <span>Fecha de realización: </span>
            {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
