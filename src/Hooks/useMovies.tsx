import axios from "axios";
import { useState } from "react";
import { Genre, Movies, Result } from "../Interfaces/Movies";

const useMovies = () => {
  const [currentMovies, setCurrentmovies] = useState<Result[]>([]);
  const [Genders, setGenders] = useState<Genre[]>([]);
  const [error, seterror] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const getMovies = (genders?: number[]) => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        let data: any = {};

        if (genders && genders.length > 0) {
          data.genders = genders;
        }

        let res = await axios.post<Movies>("http://localhost:3300/", data);

        setCurrentmovies(res.data.results);
        setGenders(res.data.genres);
        seterror(false);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        seterror(true);
        console.log("ha ocurrido un error con el servidor node");
      }
    }, 500);
  };

  return {
    getMovies,
    currentMovies,
    error,
    Genders,
    IsLoading,
  };
};

export default useMovies;
