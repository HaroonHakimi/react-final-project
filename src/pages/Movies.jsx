import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import SearchBar from "../components/ui/SearchBar";

function Movies({}) {
  const navigate = useNavigate();
  const { search } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getMovies() {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=5c0a8d0&s=${search}`
    );
    if (Array.isArray(data.Search)) {
      setMovies(data.Search);
      setIsLoading(false);
    }
  }

  function filterMovies(filter) {
    if (filter === `NEW_TO_OLD`) {
      setMovies(movies.slice().sort((a, b) => b.Year - a.Year));
    }
    if (filter === `OLD_TO_NEW`) {
      setMovies(movies.slice().sort((a, b) => a.Year - b.Year));
    }
  }

  useEffect(() => {
    getMovies();
  }, [search]);

  return (
    <>
      <SearchBar />
      <div className="container">
        <div className="row">
          <div class="section__title">
            <h2 class="movie__title search__bar--title">
              Search Results For: <span className="red">{`${search}`}</span>
            </h2>
            <select
              id="filter"
              class="filter__movies"
              onChange={(event) => filterMovies(event.target.value)}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Sort
              </option>
              <option value="NEW_TO_OLD">Newest to Oldest</option>
              <option value="OLD_TO_NEW">Oldest to Newest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="movies">
          {isLoading
            ? new Array(8).fill(0).map((_, index) => (
                <div className="skeleton__wrapper">
                  <div className="movie__poster--skeleton"></div>
                  <div className="movie__title--skeleton"></div>
                </div>
              ))
            : movies.slice(0, 9).map((movie) => (
                <div className=" movie ">
                  <div className="movie__img--wrapper--color">
                  <figure
                    className="movie__img--wrapper "
                    onClick={() => navigate(`/search/${movie.imdbID}`)}
                  >
                    <img src={movie.Poster} className="movie__img" alt="" />
                  </figure>
                  </div>
                  <h2 className="movie__title">{movie.Title}</h2>
                  
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
