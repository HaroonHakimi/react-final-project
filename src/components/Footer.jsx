import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer>
        <div class="footer__container">
          <div class="footer__row row">
            <div class="logo">
              <FontAwesomeIcon icon="fa-solid fa-clapperboard" className="white"/>
              <h2 class="logo__name white">Movies</h2>
            </div>
            <h4 class="copyright__text white">
              Copyright &copy; Haroon Hakimi
            </h4>
            <ul class="nav__lists">
              <li class="nav__list">
                <a href="#search" class="nav__link link__hover--effect white">
                  search
                </a>
              </li>
              <li class="nav__list">
                <a href="#nav" class="nav__link link__hover--effect white">
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
