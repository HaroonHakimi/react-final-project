import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Nav(event) {
  const [movies, setMovies] = useState([]);

  let navigate = useNavigate();

  async function fetchPosts(event) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=5c0a8d0&s=${event}`
    );
    setMovies(data);
  }

  useEffect(() => {
    fetchPosts();
    console.log("this ran");
  }, []);

  return (
    <>
      <nav id="nav">
        <div className="nav__container container">
          <div className="nav__row row">
            <div className="logo">
              <FontAwesomeIcon icon="clapperboard" />
              <h2 className="logo__name">Movies</h2>
            </div>
            <ul className="nav__lists">
              <li className="nav__list">
                <a href="#search" className="nav__link link__hover--effect">
                  Search
                </a>
              </li>
              <li className="nav__list">
                <a href="#" className="nav__link link__hover--effect">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__main row">
            <h1 className="nav__main--title" id="search">
              Browse Our <span className="red">Movies.</span>
            </h1>
            <form
              className="search"
              onSubmit={(event) => {
                if (event.target.value === 'Enter') 
                {
                  fetchPosts(event.target.value)
                  navigate("/movies");
                }
              }}
            >
              <input
                type="text"
                placeholder="Search"
                className="search__input"
                maxLength="18"
              />
              <button className="search__button">
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                  onClick={(event) => {
                    fetchPosts(event.target.value);
                    navigate("/movies");
                  }}
                />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
