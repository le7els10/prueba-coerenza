import axios from "axios";
import { useEffect, useState } from "react";
import { Movies, Result } from "../Interfaces/Movies";

const useMovies = () => {
  const [currentMovies, setCurrentmovies] = useState<Result[]>([]);

  const getMovies = async () => {
    try {
      let res = await axios.get<Movies>("http://localhost:3300/");
      setCurrentmovies(res.data.results);
    } catch (error) {
      console.log("ha ocurrido un error con el servidor node");
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return { getMovies, currentMovies };
};

export default useMovies;
