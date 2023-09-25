import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar()
{
    const [search, setSearch] = useState("")
    let navigate = useNavigate()

    return (
        <div className="nav__main row">
            
            <form
              className="search"
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={(event) => {
                (event.key === 'Enter') && navigate(`/${search}`)
              }}
            >
              <input
                type="text"
                placeholder="Search"
                className="search__input"
                maxLength="18"
              />
              <Link to={`/${search}`}>
              <button className="search__button">
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                />
              </button>
              </Link>
            </form>
          </div>
    )
}

export default SearchBar
