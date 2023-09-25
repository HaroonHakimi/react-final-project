import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieInfo() {
  const { imdbID } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  async function getMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=5c0a8d0`
    );
    setMovieInfo(data);
    setLoading(false);
  }

  useEffect(() => {
    getMovieInfo();
  }, [imdbID]);

  return (
    <>
      <div className="footer__container">
        <div className="row row__info">
          <div className="movie__info-button--box" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            <button className="movie__description--button">
              Go <span className="red">Back</span>
            </button>
          </div>
          <div className="movie__description--wrapper">
            {loading ? (
              new Array(1).fill(0).map((_, index) => (
                <div className="skeleton__info--wrapper">
                  <div className="movie__poster--skeleton"></div>
                  <div className="movie__info-skeleton--wrapper">
                    <div className="movie__info-title--skeleton"></div>
                    <div className="movie__info-title--skeleton"></div>
                    <div className="movie__info-title--skeleton"></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="movie__info">
                <figure className="movie__info-img--wrapper">
                  <img
                    src={movieInfo.Poster}
                    alt=""
                    className="movie__info--img"
                  />
                </figure>
                <div className="movie__info--description">
                  <h1>{movieInfo.Title}</h1>
                  <h2 className="movie__description--point">
                    <span className="red">Genre: </span>
                    <h4>{movieInfo.Genre}</h4>
                  </h2>
                  <h2 className="movie__description--point">
                    <span className="red">Starring:</span>
                    <h4>{movieInfo.Actors}</h4>
                  </h2>
                  <h2 className="movie__description--point">
                    <span className="red">Description:</span>
                    <h4>{movieInfo.Plot}</h4>
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
