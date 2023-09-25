import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer__container">
          <div className="footer__row row">
            <div className="logo ">
              <FontAwesomeIcon className="invert" icon="fa-solid fa-clapperboard"/>
              <h2 className="logo__name white">Movies</h2>
            </div>
            <h4 className="copyright__text white">
              Copyright &copy; Haroon Hakimi
            </h4>
            <ul className="nav__lists">
              <li className="nav__list">
                <a href="#search" className="nav__link link__hover--effect white">
                  search
                </a>
              </li>
              <li className="nav__list">
                <a href="#nav" className="nav__link link__hover--effect white">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
