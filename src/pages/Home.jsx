import React from "react";
import Spongebob from '../assets/Spongebob.gif' 
import SearchBar from "../components/ui/SearchBar";

function Home() {

   return (
    <>
      <section id="home">
        <div className="container ">
            <div className="row popular__row">
            <h1 className="nav__main--title" id="search">
              Browse Our <span className="red">Movies.</span>
            </h1>
            <SearchBar/>
            <figure className="nav__gif--wrapper">
                <img className="nav__gif" src={Spongebob} alt=""/>
            </figure>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home;