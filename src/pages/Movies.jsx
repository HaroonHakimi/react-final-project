import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MovieBar from "../components/ui/MovieBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import SearchBar from "../components/ui/SearchBar";

function Movies({  }) {
  const navigate = useNavigate()
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
      setMovies(movies.sort((a, b) => b.Year - a.Year));
    }
    if (filter === `OLD_TO_NEW`) {
      setMovies(movies.sort((a, b) => a.Year - b.Year));
    }
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
          {isLoading
            ? new Array(8).fill(0).map((_, index) => (
                <div className="skeleton__wrapper">
                  <div className="movie__poster--skeleton"></div>
                  <div className="movie__title--skeleton"></div>
                </div>
              ))
            : movies.slice(0, 6).map((movie) => (
                <div className=" movie ">
                  <figure className="movie__img--wrapper" onClick={() => navigate(`/:search/:${movie.id}`)}>
                    <img src={movie.Poster} className="movie__img" alt="" />
                  </figure>
                  <h2 className="movie__title">{movie.Title}</h2>
                  {/* <div className="movie__wrapper--bg"></div>
                  <div className="movie__wrapper--description">
                    <div className="movie__wrapper--title">More Info</div>
                    <div className="movie__wrapper--btn"></div>
                  </div> */}
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Movies;


