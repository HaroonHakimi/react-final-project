import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MovieBar from "../components/ui/MovieBar";
import { useParams } from "react-router-dom";
import SearchBar from "../components/ui/SearchBar";

function Movies({ event }) {
  const { search } = useParams();
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function getMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=5c0a8d0&s=${search}`
    );
    if (Array.isArray(data.search)) {
      setMovies(data.search);
      setLoaded(true);
    }
  }

  function filterMovies(filter) {
    if (filter === `NEW_TO_OLD`) {
      setMovies(movies.sort((a, b) => b.Year - a.Year));
    }
    if (filter === `OLD_TO_NEW`) {
      setMovies(movies.sort((a, b) => a.Year - b.Year));
    }
  }

  function renderMovies() {
    loaded ? (
      new Array(8).fill(0).map((_,index) => (
        <div className="skeleton__wrapper">
            <div className="movie__poster--skeleton"></div>
            <div className="movie__title--skeleton"></div>
            </div>
      ))
    )
    : ( 
      movies.map((movie) => (
        <div className="popular__movie movie no__cursor">
          <figure className="movie__img--wrapper">
            <img src={movie.poster} className="movie__img" alt="" />
          </figure>
          <h2 className="popular__movie--title movie__title">{movie.Title}</h2>
        </div>
      ))
    )
  }

  useEffect(() => {
    getMovies();
  }, [search]);

  return (
    <>
      <SearchBar />
      <MovieBar
        title={`Search Results for:`}
        subTitle={`${search}`}
        onChange={(event) => filterMovies(event.target.value)}
      />
        <div className="row">
          <div className="movies"> 
            {renderMovies}
          </div>
        </div>
    </>
  );
}

export default Movies;
