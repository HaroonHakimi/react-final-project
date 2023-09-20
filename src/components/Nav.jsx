import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function Nav() {

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
                <Link to='/' className="nav__link link__hover--effect">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Nav;
