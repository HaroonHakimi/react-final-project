import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieInfo() {
  const { id } = useParams;
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  async function getMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=5c0a8d0`
    );
    if (Array.isArray(data.Search))
    {
      setMovieInfo(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovieInfo();
  }, [id]);

  return (
    <>
      <div className="footer__container">
        <div className="row row__info">
          <div className="movie__info-button--box" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            <button>
              Go <span className="red">Back</span>
            </button>
          </div>
            <div className="movie__description--wrapper">
              <figure className="movie__img--wrapper">
                <img src={movieInfo.Poster} alt="" className="movie__img" />
              </figure>
              <div className="movie__info--description">
                <h1>{}</h1>
                <h2>Genre: {movieInfo.Genre}</h2>
                <h2>Starring: {movieInfo.Actors}</h2>
                <div className="movie__plot">
                  <h2>Description</h2>
                  <h3>{movieInfo.Plot}</h3>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
